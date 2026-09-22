from PIL import Image

src = Image.open("assets/img/logo.png").convert("RGBA")
w, h = src.size
print("source size", w, h)

# Find the bounding box of non-transparent pixels to identify the cog icon
# (left portion of the logo, before the text starts).
alpha = src.split()[-1]
bbox = alpha.getbbox()
print("content bbox", bbox)

# Crop just the cog: scan columns for a gap between the icon and the text
px = alpha.load()
col_has_content = []
for x in range(w):
    has = any(px[x, y] > 10 for y in range(h))
    col_has_content.append(has)

run = 0
icon_right = None
for x in range(w):
    if not col_has_content[x]:
        run += 1
        if run > 6 and icon_right is None and x - run > 10:
            icon_right = x - run
    else:
        run = 0
print("detected icon right edge", icon_right)

if icon_right is None:
    icon_right = w // 2

top, bottom = bbox[1], bbox[3]
left = bbox[0]
cog = src.crop((left, top, icon_right, bottom))
print("cog crop size", cog.size)

# Make it square with a solid black background and a little breathing room,
# centered, so the yellow stays legible on light browser-tab backgrounds.
content_size = max(cog.size)
margin = int(content_size * 0.16)
size = content_size + margin * 2
square = Image.new("RGBA", (size, size), (0, 0, 0, 255))
offset_x = (size - cog.size[0]) // 2
offset_y = (size - cog.size[1]) // 2
square.paste(cog, (offset_x, offset_y), cog)

square.save("assets/img/cog-square.png")

# Generate favicon sizes
sizes = [16, 32, 48, 180, 192, 512]
imgs = []
for s in sizes:
    resized = square.resize((s, s), Image.LANCZOS)
    imgs.append(resized)
    if s in (180, 192, 512):
        resized.save(f"assets/img/favicon-{s}.png")

# apple-touch-icon (square already has the black background baked in)
apple = square.resize((180, 180), Image.LANCZOS).convert("RGB")
apple.save("assets/img/apple-touch-icon.png")

# multi-size .ico (16/32/48)
ico_imgs = [im for im in imgs if im.size[0] in (16, 32, 48)]
ico_imgs[0].save(
    "favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=ico_imgs[1:],
)

print("done")
