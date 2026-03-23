import glob

files = glob.glob('*.html') + ['header.js', 'footer.js']
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False
    
    # Text sizing fixes
    if 'text-3xl md:text-5xl' in content:
        content = content.replace('text-3xl md:text-5xl', 'text-2xl md:text-5xl')
        modified = True
    if 'text-4xl md:text-6xl' in content:
        content = content.replace('text-4xl md:text-6xl', 'text-3xl md:text-6xl')
        modified = True
    if 'text-5xl font-black' in content and 'md:text' not in content:
        content = content.replace('text-5xl font-black', 'text-3xl md:text-5xl font-black')
        modified = True

    if file == 'header.js':
        if 'text-2xl md:text-3xl' in content:
            content = content.replace('text-2xl md:text-3xl', 'text-xl md:text-2xl')
            modified = True

    lines = content.split('
')
    new_lines = []
    for line in lines:
        original_line = line
        if ('<input' in line or '<select' in line or '<textarea' in line) and 'class=' in line:
            if 'text-sm' in line:
                line = line.replace('text-sm', 'text-base')
            elif 'text-base' not in line and 'text-lg' not in line and 'text-xl' not in line and 'text-2xl' not in line and 'text-xs' not in line:
                line = line.replace('class="', 'class="text-base ')
                line = line.replace("class='", "class='text-base ")
        
        if line != original_line:
            modified = True
        new_lines.append(line)
        
    content = '\n'.join(new_lines)

    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated typography and forms in {file}')
