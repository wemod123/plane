import React from "react";

import { useRouter } from "next/router";

import useSWR from "swr";

// services
import stateService from "services/state.service";
// ui
import { CustomSearchSelect, DropdownProps } from "components/ui";
// icons
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { getStateGroupIcon } from "components/icons";
// helpers
import { getStatesList } from "helpers/state.helper";
// fetch keys
import { STATES_LIST } from "constants/fetch-keys";

type Props = DropdownProps & {
  value: string;
  onChange: (value: string) => void;
  projectId: string;
  footerOption?: JSX.Element;
};

export const IssueStateSelect: React.FC<Props> = ({
  value,
  onChange,
  projectId,
  footerOption,
  ...rest
}) => {
  const router = useRouter();
  const { workspaceSlug } = router.query;

  const { data: stateGroups } = useSWR(
    workspaceSlug && projectId ? STATES_LIST(projectId) : null,
    workspaceSlug && projectId
      ? () => stateService.getStates(workspaceSlug as string, projectId)
      : null
  );
  const states = getStatesList(stateGroups ?? {});

  const options = states?.map((state) => ({
    value: state.id,
    query: state.name,
    content: (
      <div className="flex items-center gap-2">
        {getStateGroupIcon(state.group, "16", "16", state.color)}
        {state.name}
      </div>
    ),
  }));

  const selectedOption = states?.find((s) => s.id === value);
  const currentDefaultState = states.find((s) => s.default);

  return (
    <CustomSearchSelect
      value={value}
      onChange={onChange}
      options={options}
      label={
        <div className="flex items-center gap-2">
          {selectedOption ? (
            getStateGroupIcon(selectedOption.group, "16", "16", selectedOption.color)
          ) : currentDefaultState ? (
            getStateGroupIcon(currentDefaultState.group, "16", "16", currentDefaultState.color)
          ) : (
            <Squares2X2Icon className="h-3.5 w-3.5 text-custom-text-200" />
          )}
          {selectedOption?.name
            ? selectedOption.name
            : currentDefaultState?.name ?? <span className="text-custom-text-200">State</span>}
        </div>
      }
      {...rest}
    />
  );
};
