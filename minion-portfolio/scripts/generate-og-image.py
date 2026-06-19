from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
VOID = (11, 12, 16)
INK = (20, 23, 31)
YELLOW = (255, 210, 63)
YELLOW_DEEP = (230, 180, 0)
YELLOW_SOFT = (255, 225, 122)
DENIM = (46, 67, 116)
DENIM_DEEP = (27, 42, 77)
GOGGLE = (201, 207, 216)
CREAM = (255, 244, 214)
MIST = (139, 147, 167)

img = Image.new("RGB", (W, H), VOID)

# --- soft glow blobs (drawn on separate layers then blurred) ---
glow = Image.new("RGB", (W, H), VOID)
gd = ImageDraw.Draw(glow)
gd.ellipse([-200, -250, 600, 350], fill=DENIM)
gd.ellipse([850, 350, 1450, 950], fill=(60, 50, 10))
glow = glow.filter(ImageFilter.GaussianBlur(110))
img = Image.blend(img, glow, 0.55)
draw = ImageDraw.Draw(img)

# faint grid lines
for y in (160, 470):
    draw.line([(0, y), (W, y)], fill=(255, 210, 63, 0), width=1)
draw = ImageDraw.Draw(img, "RGBA")
draw.line([(0, 160), (W, 160)], fill=(255, 210, 63, 18), width=1)
draw.line([(0, 470), (W, 470)], fill=(255, 210, 63, 18), width=1)

def font(path, size):
    return ImageFont.truetype(path, size)

mono = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"
mono_reg = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"
sans_bold = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

# eyebrow pill
pill_box = [78, 118, 372, 160]
draw.rounded_rectangle(pill_box, radius=21, outline=(255, 210, 63, 110), width=2)
draw.text((100, 128), "OPEN TO INTERNSHIPS", font=font(mono, 16), fill=YELLOW)

# headline
draw.text((76, 200), "Anshu Rajput", font=font(sans_bold, 64), fill=CREAM)
draw.text((78, 290), "Frontend Developer", font=font(sans_bold, 42), fill=GOGGLE)
draw.text((80, 350), "React.js  ·  JavaScript  ·  Tailwind CSS", font=font(mono_reg, 21), fill=MIST)

draw.text((80, 460), "AR.dev", font=font(mono, 18), fill=YELLOW)
draw.text((80, 495), "Scan or visit to see the full portfolio", font=font(mono_reg, 15), fill=MIST)

# --- mascot, simplified, mirrors the in-app SVG ---
ox, oy = 900, 210

def rr(box, radius, fill):
    draw.rounded_rectangle(box, radius=radius, fill=fill)

# ground glow
draw.ellipse([ox - 30, oy + 255, ox + 150, oy + 285], fill=(255, 210, 63, 30))

# body
rr([ox, oy + 40, ox + 190, oy + 260], 80, YELLOW)
# arms
rr([ox + 20, oy + 80, ox + 42, oy + 160], 11, YELLOW_DEEP)
rr([ox + 148, oy + 80, ox + 170, oy + 160], 11, YELLOW_DEEP)
# legs
rr([ox + 35, oy + 200, ox + 69, oy + 244], 14, DENIM_DEEP)
rr([ox + 121, oy + 200, ox + 155, oy + 244], 14, DENIM_DEEP)
# goggle strap
rr([ox + 15, oy + 58, ox + 175, oy + 76], 9, DENIM_DEEP)
# goggle
draw.ellipse([ox + 45, oy + 34, ox + 145, oy + 134], fill=DENIM_DEEP)
draw.ellipse([ox + 55, oy + 44, ox + 135, oy + 124], fill=(234, 242, 255))
draw.ellipse([ox + 79, oy + 68, ox + 111, oy + 100], fill=INK)
draw.ellipse([ox + 95, oy + 72, ox + 104, oy + 81], fill=(255, 255, 255))
# mouth
draw.arc([ox + 60, oy + 95, ox + 130, oy + 140], start=15, end=165, fill=DENIM_DEEP, width=5)

img.save("public/og-image.png", "PNG")
print("saved", img.size)
