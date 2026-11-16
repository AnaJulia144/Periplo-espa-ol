@echo off
rem Doble clic aqui para abrir tu sitio en http://localhost:8080
rem Deja la ventana negra abierta mientras trabajas. Cierrala para apagar el sitio.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0herramientas\servidor.ps1" %*
if errorlevel 1 pause
