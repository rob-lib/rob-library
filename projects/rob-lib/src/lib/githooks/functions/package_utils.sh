# Función para actualizar la versión en package.json
update_package_version() {
  local package_file="$1"
  local new_version="$2"
  
  if [ -f "$package_file" ]; then
    # Extrae la versión actual del archivo package.json
    local current_version=$(grep -o '"version": ".*"' "$package_file" | cut -d'"' -f4)
    
    # Actualiza la versión en package.json
    sed -i "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" "$package_file"
    
    echo "Se ha actualizado la versión en $package_file a \"$new_version\""
  else
    echo "El archivo $package_file no se encuentra en la ruta especificada."
    exit 1
  fi
}