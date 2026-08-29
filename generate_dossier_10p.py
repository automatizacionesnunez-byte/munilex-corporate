import fitz, pathlib
ROOT = pathlib.Path(__file__).parent
OUT = ROOT / "outputs" / "Munilex_Dossier_Corporativo_10p.pdf"
ENG = ROOT / "outputs" / "munilex-english-home.png"
FP = ROOT / "outputs" / "munilex-fp-home-v2.png"
OPOS = ROOT / "outputs" / "munilex-oposiciones-chat.png"
JM = ROOT / "src" / "assets" / "jose_maria.jpg"
FM = ROOT / "src" / "assets" / "francisco_marin.jpg"

W, H = 595, 842
M = 36
BLUE = (0.11,0.30,0.84)
SLATE900 = (0.058,0.09,0.16)
SLATE600 = (0.30,0.34,0.42)
SLATE500 = (0.39,0.45,0.55)
SLATE100 = (0.94,0.96,0.98)
SLATE200 = (0.89,0.92,0.96)

def rect(page,x,y,w,h,col, radius=6):
    shape = page.new_shape()
    shape.draw_rect(fitz.Rect(x,y,x+w,y+h))
    shape.finish(color=col, fill=col, closePath=True)
    shape.commit()

def rounded_bg(page,x,y,w,h, fill, stroke=None):
    shape = page.new_shape()
    rr = 10
    r = fitz.Rect(x,y,x+w,y+h)
    shape.draw_rect(r)
    shape.finish(color=stroke or fill, fill=fill, width=0.6 if stroke else 0)
    shape.commit()

def text(page,x,y,txt,size=9,color=SLATE900, font="helv", bold=False, max_w=None, line_h=None):
    f = "helv"
    if bold:
        f = "hebo"
    try:
        page.insert_text(fitz.Point(x,y), txt, fontsize=size, fontname=f, color=color)
    except:
        page.insert_text(fitz.Point(x,y), txt, fontsize=size, color=color)
    return y + (line_h or size*1.2)

def multiline(page,x,y,w,txt,size=8,color=SLATE600, bold=False, line_h=11, align=0):
    f = "helv"
    if bold: f="hebo"
    try:
        r = page.insert_textbox(fitz.Rect(x,y,x+w,y+200), txt, fontsize=size, fontname=f, color=color, align=align)
    except:
        r = page.insert_textbox(fitz.Rect(x,y,x+w,y+200), txt, fontsize=size, color=color, align=align)
    # estimate height
    lines = max(1, len(txt)//45 + txt.count("\n")+1)
    return y + lines*line_h

def badge(page,x,y,txt):
    tw = len(txt)*4.2+12
    rounded_bg(page,x,y,tw,14, (0.92,0.95,1), BLUE)
    text(page,x+6,y+10,txt,6.5,BLUE, bold=True)
    return tw

doc = fitz.open()

# P1 PORTADA
page = doc.new_page(width=W, height=H)
page.draw_rect(page.rect, color=(1,1,1), fill=(1,1,1))
# top bar
rect(page,0,0,W,4,BLUE)
badge(page,M,28,"PARA PROPIETARIOS Y DIRECCION")
text(page,M,68,"MENOS",32,SLATE900,bold=True)
text(page,M,100,"CARGA.",32,SLATE900,bold=True)
text(page,M,132,"MAS CONTROL",32,BLUE,bold=True)
text(page,M,164,"Y MATRICULAS",32,BLUE,bold=True)
multiline(page,M,188,W-M*2,"Plataforma propia bajo tu marca para captar, enseñar y retener. Una sola base para oposiciones, FP, ingles y otros centros.",9,SLATE600)
# mockup
try:
    pix = fitz.Pixmap(str(ENG))
    # insert image
    img_rect = fitz.Rect(M, 230, W-M, 520)
    page.insert_image(img_rect, filename=str(ENG), keep_proportion=True, overlay=True)
except Exception as e:
    rect(page,M,230,W-M*2,290,SLATE100)
    text(page,M+20,380,"munilex-english-home.png",8,SLATE500)
text(page,M,545,"Oposiciones  |  FP  |  Ingles  |  Autoescuela  Ciencias  Refuerzo",6.5,SLATE500)
# footer
text(page,M,H-32,"Munilex Academy, S.L.  CIF B88655980  |  administracion@munilex.es  |  munilex.es",6.5,SLATE500)
text(page,M,H-20,"Dossier 10 paginas  —  cada pagina responde: es para mi / ya funciona / quiero demo",6,SLATE500)

# P2 RESUMEN + PROBLEMA
page = doc.new_page(width=W, height=H)
page.draw_rect(page.rect, color=(1,1,1), fill=(1,1,1))
rect(page,0,0,W,4,BLUE)
text(page,M,36,"01  RESUMEN EN 30 SEGUNDOS + PROBLEMA REAL",6.5,BLUE,bold=True)
text(page,M,62,"QUE ES Y PARA QUIEN ES",16,SLATE900,bold=True)
multiline(page,M,80,W-M*2,"Munilex es una base de software para academias que quieren convertir interes en matricula, resolver dudas sin cargar al equipo, ordenar contenidos y seguir al alumno con mas claridad. No es una web generica: es plataforma de negocio.",8,SLATE600)
# pills
y=M+0
# row pills visual
py=125
for lab,x in [("OPOSICIONES",M),("FP",M+110),("INGLES",M+190),("OTROS",M+280)]:
    rounded_bg(page,x,py,88,18,SLATE100,SLATE200)
    text(page,x+14,py+11,lab,6,SLATE600,bold=True)
text(page,M,170,"3 DOLORES QUE VES CADA DIA  →  QUE APORTA MUNILEX  →  RESULTADO",6.5,BLUE,bold=True)
# table 3 rows
rows=[
 ("Leads por WhatsApp, llamadas\n y formularios sin seguimiento","CRM ligero, formularios, secuencias\n y pipeline de matriculas","Mas respuesta, menos\n lead perdido"),
 ("Correccion manual lenta\n y costosa","Tests, simulacros y feedback\n asistido con rubrica","Menos horas, mas\n velocidad de entrega"),
 ("Seguimiento del alumno\n poco visible","Paneles de avance, alertas de\n inactividad y reporting","Mas retencion y\n deteccion temprana"),
]
ry=188
for a,b,c in rows:
    rounded_bg(page,M,ry,W-M*2,62,(1,1,1),SLATE200)
    # vertical blue line
    rect(page,M,ry,3,62,BLUE)
    text(page,M+10,ry+14,a,7,SLATE900)
    text(page,M+190,ry+14,b,7,SLATE600)
    text(page,M+390,ry+14,c,7,BLUE,bold=True)
    ry+=72
multiline(page,M,ry+10,W-M*2,"Idea fuerza: no vendemos 4 productos distintos. Una misma base, adaptada por modulos a tu tipo de centro.",7,SLATE500)

# P3 6 PIEZAS
page = doc.new_page(width=W, height=H)
page.draw_rect(page.rect, color=(1,1,1), fill=(1,1,1))
rect(page,0,0,W,4,BLUE)
text(page,M,36,"02  QUE HACE LA PLATAFORMA",6.5,BLUE,bold=True)
text(page,M,62,"6 PIEZAS QUE RECONOCE",16,SLATE900,bold=True)
text(page,M,82,"CUALQUIER ACADEMIA",16,BLUE,bold=True)
# grid 2x3
cards=[
 ("Captacion y matriculas","Registro de leads, pipeline y\n recordatorios. Convierte interes\n en matricula sin perder contactos.","Mas conversion"),
 ("Automatizacion operativa","Secuencias email, avisos y\n flujos internos. Reduce trabajo\n manual del equipo.","Menos carga"),
 ("Tutor IA y soporte","Respuestas base y FAQs inteligentes\n 24/7. Deriva por tema sin saturar\n al profesorado.","Siempre disponible"),
 ("Evaluacion y correccion","Tests, simulacros, rubricas y\n feedback asistido y trazable.","Revisa, no empieza de cero"),
 ("Repositorio de contenidos","Temarios, preguntas, versionado\n y acceso por nivel/curso.","Orden y reutilizacion"),
 ("Panel de direccion","Matriculas, actividad, uso y\n alertas para decidir con datos.","Alertas antes del abandono"),
]
cx,cy=M,110
for i, (t,d,ben) in enumerate(cards):
    x = M + (i%2)* ( (W-M*2-12)/2 +12)
    y = 110 + (i//2)*132
    rounded_bg(page,x,y,(W-M*2-12)/2,122,(1,1,1),SLATE200)
    text(page,x+12,y+16,t,7.5,SLATE900,bold=True)
    text(page,x+12,y+34,d,6.5,SLATE600)
    rounded_bg(page,x+12,y+92,(W-M*2-12)/2-24,16,(0.92,0.95,1))
    text(page,x+18,y+102,ben,6,BLUE,bold=True)
text(page,M,H-36,"Stack a pie: React + TS / Tailwind / Vercel — UI mantenible, despliegue simple. Detalle tecnico en apendice solo para confianza.",6,SLATE500)

# helper for vertical pages
def vertical_page(doc, num, title, phrase, bullets, img_path, benefit, badge_txt):
    page = doc.new_page(width=W, height=H)
    page.draw_rect(page.rect, color=(1,1,1), fill=(1,1,1))
    rect(page,0,0,W,4,BLUE)
    text(page,M,36,f"{num:02d}  VERTICAL  —  {badge_txt.upper()}",6.5,BLUE,bold=True)
    text(page,M,62,title,15,SLATE900,bold=True)
    rounded_bg(page,M,74,W-M*2,18,(0.92,0.95,1))
    text(page,M+8,86,phrase,7,BLUE,bold=True)
    y=108
    for b in bullets:
        text(page,M+6,y,"•",7,BLUE,bold=True)
        text(page,M+14,y,b,7,SLATE600)
        y+=14
    # image
    try:
        img_rect = fitz.Rect(M, y+6, W-M, y+180)
        page.insert_image(img_rect, filename=str(img_path), keep_proportion=True, overlay=True)
        y+=186
    except:
        rounded_bg(page,M,y+6,W-M*2,170,SLATE100,SLATE200)
        text(page,M+12,y+90,"imagen "+str(img_path),7,SLATE500)
        y+=186
    rounded_bg(page,M,y+8,W-M*2,28,(0.92,0.95,1),BLUE)
    text(page,M+10,y+20,"Beneficio para direccion:",7,BLUE,bold=True)
    text(page,M+110,y+20,benefit,7,SLATE900,bold=True)
    text(page,M,y+48,"Muestra real del producto — no mockup. Ampliacion y configuracion se definen en diagnostico.",6,SLATE500)
    return page

# P4 OPOS
vertical_page(doc,3,"OPOSICIONES","Test, rubrica y tutoria con trazabilidad juridica",[
 "Banco de preguntas con justificacion por articulo y nivel",
 "Simulacros ilimitados cronometrados con rubrica y feedback",
 "Tutor RAG sobre temarios y FAQs, con derivacion por tema",
 "Repaso espaciado (flashcards) y panel de errores por alumno",
], OPOS, "menos horas de correccion y mas velocidad de entrega", "oposiciones")

# P5 FP
vertical_page(doc,4,"FORMACION PROFESIONAL","Del aula al puesto con roleplay evaluado",[
 "Roleplay voz y texto: entrevistas, atencion paciente, soporte",
 "Tests y flashcards alineados a modulos y competencias",
 "Dashboard docente: progreso, evidencias y deteccion de descolgados",
 "Calendario y agenda sincronizada para claustro y jefatura",
], FP, "competencias profesionales + control del claustro", "FP")

# P6 INGLES
vertical_page(doc,5,"INGLES  A1 — C2","Progreso visible por niveles, no solo clases",[
 "Test de nivel de entrada y diagnostico automatico por itinerario",
 "Tutor grammar / vocab / listening / speaking con respuestas base",
 "Panel por skill y alertas de bloqueos para retencion",
 "Repositorio por nivel, modulo y objetivo reutilizable",
], ENG, "mas retencion y renovaciones por nivel", "ingles")

# P7 OTROS
page = doc.new_page(width=W, height=H)
page.draw_rect(page.rect, color=(1,1,1), fill=(1,1,1))
rect(page,0,0,W,4,BLUE)
text(page,M,36,"06  VERTICAL  —  OTROS CENTROS",6.5,BLUE,bold=True)
text(page,M,62,"TU METODO, DIGITALIZADO",15,SLATE900,bold=True)
rounded_bg(page,M,74,W-M*2,18,(0.92,0.95,1))
text(page,M+8,86,"Autoescuela · Ciencias · Refuerzo · Formacion especializada",7,BLUE,bold=True)
y=108
others=[
 ("Autoescuela","Teoria, test DGT, simulacros y seguimiento de practicas","Menos gestion manual de convocatorias"),
 ("Ciencias / Refuerzo","Ejercicios por tema, correccion asistida y deberes trazables","Mas orden por curso y nivel"),
 ("Formacion especializada","Procesos propios → tests y tutoria configurada","Escala sin rehacer contenidos"),
]
for t,d,b in others:
    rounded_bg(page,M,y,W-M*2,46,(1,1,1),SLATE200)
    rect(page,M,y,3,46,BLUE)
    text(page,M+10,y+14,t,7.5,SLATE900,bold=True)
    text(page,M+10,y+26,d,6.5,SLATE600)
    text(page,M+10,y+38,b,6,BLUE,bold=True)
    y+=56
rounded_bg(page,M,y+6,W-M*2,70,SLATE100,SLATE200)
text(page,M+12,y+20,"Marca blanca: campus.tucentro.es  +  logo/colores  +  email corporativo",7,SLATE900,bold=True)
text(page,M+12,y+34,"El centro vende su plataforma, no un producto ajeno. Contenidos protegidos por contrato.",7,SLATE600)
text(page,M+12,y+50,"Beneficio: automatiza sin perder control editorial ni soporte humano.",7,BLUE,bold=True)

# P8 PRUEBAS + PLANES
page = doc.new_page(width=W, height=H)
page.draw_rect(page.rect, color=(1,1,1), fill=(1,1,1))
rect(page,0,0,W,4,BLUE)
text(page,M,36,"07  PRUEBAS REALES + MODELO COMERCIAL",6.5,BLUE,bold=True)
text(page,M,62,"YA EXISTE. Y SE VE CLARO",15,SLATE900,bold=True)
# pruebas grid 2x2 textual
text(page,M,86,"Pruebas que puedes verificar en demo en vivo:",7,SLATE600)
pruebas=[
 ("Hero corporativo","Selector 4 verticales + sim interactivo"),
 ("Comparativa 6 factores","Tradicional vs Munilex (tiempo, inversion, soporte)"),
 ("Calculadora ROI","Coste tecnologia vs cuota alumno (ver abajo)"),
 ("Flujo contacto","Formulario + WhatsApp directo + max 3 centros/mes"),
]
py=98
for i,(a,b) in enumerate(pruebas):
    x = M + (i%2)*((W-M*2-10)/2+10)
    y = 98 + (i//2)*32
    rounded_bg(page,x,y,(W-M*2-10)/2,26,(1,1,1),SLATE200)
    text(page,x+8,y+11,a,6.5,SLATE900,bold=True)
    text(page,x+8,y+20,b,6,SLATE600)
# planes table
text(page,M,175,"PLANES  —  por alumno activo / mes, sin permanencia forzosa",7,BLUE,bold=True)
# header
rounded_bg(page,M,188,W-M*2,18,BLUE)
text(page,M+8,199,"Plan / Alcance",6,(1,1,1),bold=True)
text(page,M+170,199,"Entrega",6,(1,1,1),bold=True)
text(page,M+250,199,"0-150 / 150-500 / +500",6,(1,1,1),bold=True)
text(page,M+400,199,"Soporte",6,(1,1,1),bold=True)
planes=[
 ("Iniciacion","2 itinerarios","1-2 sem","3 / 2,5 / 1,5 €","Estandar email"),
 ("Profesional *","Catalogo completo","3-4 sem","4 / 3 / 2 €","Prioritario 24/7 + gestor"),
 ("A medida","Contenidos propios","6-8 sem","Bajo presupuesto + tarifa Enterprise","Dedicado + SLA"),
]
ry=210
for n,alc,ent,price,sup in planes:
    bg = (0.92,0.95,1) if "*" in n else (1,1,1)
    rounded_bg(page,M,ry,W-M*2,22,bg,SLATE200)
    text(page,M+8,ry+14,n,6.5,SLATE900,bold=True)
    text(page,M+170,ry+14,ent,6,SLATE600)
    text(page,M+250,ry+14,price,6,BLUE,bold=True)
    text(page,M+400,ry+14,sup,6,SLATE600)
    ry+=26
text(page,M,ry+4,"* Mas popular: marca blanca completa + 1 funcionalidad a medida + dominio propio.",6,SLATE500)
# mini ROI
rounded_bg(page,M,ry+18,W-M*2,66,(0.92,0.95,1),BLUE)
text(page,M+10,ry+32,"EJEMPLO 120 alumnos x 70 € cuota — coste tecnologia ~360-480 €/mes → margen bruto antes de otros costes.",7,SLATE900,bold=True)
text(page,M+10,ry+46,"Referencia para propuesta, no promesa. El margen real depende de tu estructura.",6,SLATE600)
text(page,M+10,ry+58,"Nota honesta: margen tecnologia no es beneficio neto. Suma profesorado, local y captacion.",6,BLUE,bold=True)

# P9 IMPLANTACION + CONFIANZA
page = doc.new_page(width=W, height=H)
page.draw_rect(page.rect, color=(1,1,1), fill=(1,1,1))
rect(page,0,0,W,4,BLUE)
text(page,M,36,"08  IMPLANTACION + CONFIANZA",6.5,BLUE,bold=True)
text(page,M,62,"COMO SE PONE EN MARCHA",15,SLATE900,bold=True)
steps=["Demo 30'","Diagnostico","Config marca\n+ contenidos","Puesta en marcha\n1-4 sem","Seguimiento\n+ revisiones"]
sx=M
for i,s in enumerate(steps):
    rounded_bg(page,sx,88,88,22,(1,1,1),BLUE)
    text(page,sx+28,98,str(i+1),8,BLUE,bold=True)
    text(page,sx+6,118,s,6,SLATE900)
    if i<4:
        text(page,sx+90,98,"→",10,BLUE,bold=True)
    sx+=98
rounded_bg(page,M,148,W-M*2,18,(1,0.96,0.84))
text(page,M+8,159,"Capacidad limitada: max 3 centros/mes para cuidar puesta en marcha y soporte.",6.5,SLATE900,bold=True)
text(page,M,180,"LIDERAZGO JURIDICO Y TECNICO  —  sin casos inventados",7,BLUE,bold=True)
# team cards
for idx, (img, name, role, cred) in enumerate([(JM,"Jose Maria Nunez Mejias","Fundador & Director Tecnico (CTO)","Jurista · RAG juridico · Docente TECH"),(FM,"Francisco de Paula Marin","Fundador & Director Academico/Comercial","Abogado · +10 anos formacion · Director TFM UNIR")]):
    y=194+ idx*74
    rounded_bg(page,M,y,W-M*2,66,(1,1,1),SLATE200)
    try:
        page.insert_image(fitz.Rect(M+8,y+8,M+52,y+52), filename=str(img), keep_proportion=True, overlay=True)
    except:
        rect(page,M+8,y+8,44,44,SLATE100)
    text(page,M+66,y+16,name,7,SLATE900,bold=True)
    text(page,M+66,y+26,role,6,BLUE,bold=True)
    text(page,M+66,y+36,cred,6,SLATE600)
    text(page,M+66,y+48,"WhatsApp directo + LinkedIn verificable — contacto real, no comercial generico.",6,SLATE500)
text(page,M,352,"CONFIANZA TECNICA Y LEGAL",7,BLUE,bold=True)
sec=[
 "EU AI Act: transparencia y supervision humana en IA educativa",
 "RGPD + soberania datos 100% UE (servidores UE)",
 "Temarios protegidos contractual: no cesion ni entrenamiento externo",
 "TLS 1.3 + AES-256 + backups diarios + monitorizacion 24/7",
]
sy=366
for s in sec:
    text(page,M+6,sy,"•",7,BLUE,bold=True)
    text(page,M+14,sy,s,6.5,SLATE600)
    sy+=12
rounded_bg(page,M,sy+6,W-M*2,22,SLATE100,SLATE200)
text(page,M+8,sy+16,"Que veras en demo en vivo:  pipeline leads  |  correccion con rubrica  |  panel retencion con alertas. Pilotos documentados tras implantacion, sin nombres sin permiso.",6,SLATE600)
text(page,M,H-18,"Munilex Academy, S.L. CIF B88655980 · Sociedad registrada en Espana",6,SLATE500)

# P10 CTA
page = doc.new_page(width=W, height=H)
page.draw_rect(page.rect, color=(1,1,1), fill=(1,1,1))
rect(page,0,0,W,4,BLUE)
# big blue block
rounded_bg(page,M,28,W-M*2,210,BLUE)
text(page,M+18,62,"PIDE TU DIAGNOSTICO",16,(1,1,1),bold=True)
text(page,M+18,82,"GRATUITO (15')",16,(1,1,1),bold=True)
text(page,M+18,108,"Una sola accion. Te mostramos tu vertical en vivo y te damos propuesta clara.",8,(1,1,1))
# white card inside
rounded_bg(page,M+18,128,W-M*2-36,78,(1,1,1))
text(page,M+28,148,"Nombre  ·  Centro  ·  Alumnos estimados  →  WhatsApp / Email",7,SLATE900,bold=True)
text(page,M+28,162,"Elige tu vertical:  [ Oposiciones ]  [ FP ]  [ Ingles ]  [ Otros ]",7,SLATE600)
text(page,M+28,176,"Respuesta en <24h laborables por fundador (no bot comercial).",7,SLATE500)
text(page,M+28,190,"QR demo  →  escanea y escribe por WhatsApp",6,BLUE,bold=True)
text(page,M,268,"CONTACTO DIRECTO",7,BLUE,bold=True)
contacts=[
 ("Direccion comercial & centros","Francisco de Paula Marin  ·  +34 649 49 05 80","wa.me/34649490580"),
 ("Direccion tecnica & IA","Jose Maria Nunez Mejias  ·  +34 605 39 29 12","wa.me/34605392912"),
 ("Email corporativo oficial","administracion@munilex.es","munilex.es"),
]
cy=284
for a,b,c in contacts:
    rounded_bg(page,M,cy,W-M*2,30,(1,1,1),SLATE200)
    text(page,M+10,cy+12,a,6,SLATE500,bold=True)
    text(page,M+10,cy+22,b,7,SLATE900,bold=True)
    cy+=38
text(page,M,408,"Sin permanencias forzosas. Soporte y actualizaciones incluidas. Si una pagina no te hizo pensar 'quiero demo', sobra — esta si.",7,BLUE,bold=True)
text(page,M,H-28,"© Munilex Academy, S.L.  ·  Hecho para dueños de academias que quieren captar mas, responder antes y trabajar con menos carga.",6,SLATE500)

doc.save(str(OUT))
print(f"saved {OUT} pages={len(doc)}")
for i,p in enumerate(doc):
    txt = p.get_text()[:80].replace('\n',' ')
    print(i+1, txt)
