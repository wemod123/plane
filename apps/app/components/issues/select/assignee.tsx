import { useRouter } from "next/router";

// hooks
import useProjectMembers from "hooks/use-project-members";
// ui
import { AssigneesList, Avatar, CustomSearchSelect, DropdownProps, Icon } from "components/ui";

export type Props = DropdownProps & {
  projectId: string;
  value: string[];
  onChange: (value: string[]) => void;
  multiple?: boolean;
};

export const IssueAssigneeSelect: React.FC<Props> = ({
  projectId,
  value = [],
  onChange,
  ...rest
}) => {
  const router = useRouter();
  const { workspaceSlug } = router.query;

  const { members } = useProjectMembers(workspaceSlug as string, projectId as string);

  const options = members?.map((member) => ({
    value: member.member.id,
    query:
      (member.member.first_name && member.member.first_name !== ""
        ? member.member.first_name
        : member.member.email) +
        " " +
        member.member.last_name ?? "",
    content: (
      <div className="flex items-center gap-2">
        <Avatar user={member.member} />
        {`${
          member.member.first_name && member.member.first_name !== ""
            ? member.member.first_name
            : member.member.email
        } ${member.member.last_name ?? ""}`}
      </div>
    ),
  }));

  return (
    <CustomSearchSelect
      value={value}
      onChange={onChange}
      options={options}
      label={
        <div className="flex items-center gap-2 text-custom-text-200">
          {value && Array.isArray(value) && value.length > 0 ? (
            <AssigneesList userIds={value} length={3} showLength={true} />
          ) : (
            <div className="flex items-center justify-center gap-2 -my-0.5">
              <Icon iconName="group" className="!text-base" />
              <span className="text-custom-text-200">Assignee</span>
            </div>
          )}
        </div>
      }
      {...rest}
    />
  );
};
