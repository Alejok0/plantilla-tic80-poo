# Define el archivo de salida
OUTPUT=main_build.js

# Define los archivos fuente
SOURCES=header.js classes/*.js main.js footer.js

# Comando para combinar y ejecutar el archivo de salida
all:
	cat $(SOURCES) > $(OUTPUT)
	echo "Archivos combinados en $(OUTPUT)"
	tic80 $(OUTPUT) --skip
	echo "Ejecutando $(OUTPUT) con --skip"

# Limpia el archivo generado
clean:
	rm -f $(OUTPUT)
	echo "Archivo $(OUTPUT) eliminado"
