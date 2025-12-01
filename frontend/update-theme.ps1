# PowerShell script to convert dark theme to light theme across all React components

$files = @(
    "src/components/Expertise.jsx",
    "src/components/Portfolio.jsx",
    "src/components/Contact.jsx",
    "src/components/Footer.jsx",
    "src/pages/WebServices.jsx",
    "src/pages/AppServices.jsx",
    "src/pages/IoTServices.jsx",
    "src/pages/SmartDecor.jsx",
    "src/components/SmartDecorPreview.jsx"
)

# Define color mappings
$colorMappings = @{
    # Backgrounds
    'bg-slate-900' = 'bg-white'
    'bg-slate-800' = 'bg-gray-50'
    'bg-slate-700' = 'bg-gray-100'
    'bg-slate-600' = 'bg-gray-200'
    'bg-zinc-900' = 'bg-white'
    'bg-zinc-800' = 'bg-gray-50'
    'bg-zinc-700' = 'bg-gray-100'
    'bg-zinc-600' = 'bg-gray-200'
    'bg-slate-800/30' = 'bg-gray-50'
    'bg-slate-800/50' = 'bg-gray-50'
    'bg-slate-900/80' = 'bg-white/90'
    'bg-slate-900/95' = 'bg-white/95'
    
    # Text colors
    'text-white' = 'text-gray-900'
    'text-slate-300' = 'text-gray-700'
    'text-slate-400' = 'text-gray-600'
    'text-slate-500' = 'text-gray-500'
    'text-zinc-300' = 'text-gray-700'
    'text-zinc-400' = 'text-gray-600'
    'text-amber-400' = 'text-amber-600'
    'text-blue-200' = 'text-gray-700'
    'text-blue-100' = 'text-gray-700'
    'text-blue-300' = 'text-gray-600'
    
    # Borders
    'border-slate-800' = 'border-gray-200'
    'border-slate-700' = 'border-gray-300'
    'border-slate-600' = 'border-gray-300'
    'border-zinc-800' = 'border-gray-200'
    'border-zinc-700' = 'border-gray-300'
    
    # Hover states
    'hover:bg-slate-600' = 'hover:bg-gray-100'
    'hover:bg-slate-700' = 'hover:bg-gray-200'
    'hover:bg-zinc-600' = 'hover:bg-gray-100'
    'hover:text-white' = 'hover:text-gray-900'
    
    # Gradients - keep amber/orange but update text
    'text-slate-900' = 'text-white'
    
    # Shadows
    'shadow-blue-500/20' = 'shadow-amber-500/20'
    'shadow-blue-500/30' = 'shadow-amber-500/30'
    'shadow-purple-500/20' = 'shadow-amber-500/20'
    'shadow-purple-500/30' = 'shadow-amber-500/30'
}

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Updating $file..."
        $content = Get-Content $file -Raw
        
        foreach ($oldColor in $colorMappings.Keys) {
            $newColor = $colorMappings[$oldColor]
            $content = $content -replace [regex]::Escape($oldColor), $newColor
        }
        
        Set-Content $file $content -NoNewline
        Write-Host "✓ Updated $file"
    } else {
        Write-Host "⚠ File not found: $file"
    }
}

Write-Host ""
Write-Host "Theme conversion complete!"
Write-Host "Updated files: $($files.Count)"
