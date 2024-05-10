# branch_utils.sh

get_current_branch() {
  local branch_name
  branch_name=$(git symbolic-ref --short HEAD)
  echo "$branch_name"
}

branch_exists_in_remote() {
  local branch_name="$1"
  local branch_exists_in_remote
  branch_exists_in_remote = $(git show-ref --quiet --verify "refs/remotes/origin/$branch_name")
  return $branch_exists_in_remote
}
