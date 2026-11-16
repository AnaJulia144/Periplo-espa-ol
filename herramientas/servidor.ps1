# Servidor local sencillo: sirve esta carpeta en http://localhost:8080
# No hace falta instalar nada. Para detenerlo, cierra esta ventana.
param([int]$Puerto = 8080, [switch]$SinNavegador)

$raiz = Split-Path -Parent $PSScriptRoot
$tipos = @{
  ".html"="text/html; charset=utf-8"; ".js"="text/javascript; charset=utf-8"; ".jsx"="text/javascript; charset=utf-8";
  ".css"="text/css; charset=utf-8"; ".json"="application/json; charset=utf-8"; ".csv"="text/csv; charset=utf-8";
  ".png"="image/png"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".svg"="image/svg+xml"; ".gif"="image/gif";
  ".webp"="image/webp"; ".mp3"="audio/mpeg"; ".ico"="image/x-icon"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Puerto/")
try { $listener.Start() } catch {
  Write-Host "No pude abrir el puerto $Puerto. Quiza el servidor ya esta abierto en otra ventana." -ForegroundColor Red
  Read-Host "Presiona Enter para cerrar"; exit 1
}

Write-Host ""
Write-Host "  Tu sitio esta corriendo en:  http://localhost:$Puerto" -ForegroundColor Green
Write-Host "  Panel de maestra:            http://localhost:$Puerto/panel/"
Write-Host ""
Write-Host "  Deja esta ventana abierta mientras trabajas. Cierrala para apagar el sitio."
if (-not $SinNavegador) { Start-Process "http://localhost:$Puerto/panel/" }

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $res = $ctx.Response
  try {
    $ruta = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    $archivo = Join-Path $raiz $ruta
    if (Test-Path -LiteralPath $archivo -PathType Container) { $archivo = Join-Path $archivo "index.html" }
    $completo = [IO.Path]::GetFullPath($archivo)
    if ($completo.StartsWith($raiz) -and (Test-Path -LiteralPath $completo -PathType Leaf)) {
      $bytes = [IO.File]::ReadAllBytes($completo)
      $ext = [IO.Path]::GetExtension($completo).ToLower()
      $res.ContentType = if ($tipos[$ext]) { $tipos[$ext] } else { "application/octet-stream" }
      $res.Headers.Add("Cache-Control", "no-store")
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $b = [Text.Encoding]::UTF8.GetBytes("No encontrado: /$ruta")
      $res.OutputStream.Write($b, 0, $b.Length)
    }
  } catch { $res.StatusCode = 500 }
  finally { $res.Close() }
}
