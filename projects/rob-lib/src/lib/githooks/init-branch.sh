#!/bin/bash

source fuctions/branch_utils.sh
source fuctions/package_utils.sh

# Obtén el nombre de la rama actual
local current_branch=$(get_current_branch)

# Verifica si la rama local existe en el repositorio remoto
if ! branch_exists_in_remote "$current_branch"; then
  is_branch_creation=true
else
  is_branch_creation=false
fi

if [ "$is_branch_creation" = true ]; then
  # Nombre de la nueva rama
  local new_branch_name="$current_branch"

  # Verifica si la nueva rama comienza con "feature/" o "release/"
  if [[ $new_branch_name == feature/* || $new_branch_name == release/* ]]; then
    # Extrae el nombre del directorio de la rama (feature o release)
    local branch_directory="${new_branch_name%%/*}"

    # Actualiza la versión en package.json en la raíz del proyecto
    local package_json_root="./package.json"
    update_package_version "$package_json_root" "${current_version}-$branch_directory-${new_branch_name#*/}"

    # Actualiza la versión en package.json en el directorio projects/rob-lib
    local package_json_project="projects/rob-lib/package.json"
    update_package_version "$package_json_project" "${current_version}-$branch_directory-${new_branch_name#*/}"

    # Realiza un único commit que incluye ambos cambios con el formato de mensaje solicitado
    git add "$package_json_root" "$package_json_project"
    # git commit --no-verify -m "Init $branch_directory ${new_branch_name#*/}"

    echo "Se ha actualizado la versión en $package_json_root y en $package_json_project a \"$new_version\""
    # Realiza el push después de crear el commit
    # git push origin "$current_branch"
    # git fetch
  else
    echo "No se realizaron cambios en package.json."
  fi
else
  echo "La rama ya existe."
fi

# Sal de manera normal después del checkout
exit 0