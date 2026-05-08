alert("JavaScript läuft!");
Abkürzung	Bedeutung (Deutsch)
EVA	Eingabe – Verarbeitung – Ausgabe
RJ	Registered Jack (Steckverbinder)
VGA	Video Graphics Array
S/PDIF	Sony/Philips Digital Interface (digitales Audiointerface)
DP	DisplayPort
HDMI	High Definition Multimedia Interface
DVI	Digital Visual Interface
ECC	Error Correcting Code (Fehlerkorrekturcode)
SATA	Serial ATA (Schnittstelle für Festplatten)
SCSI	Small Computer System Interface
SAS	Serial Attached SCSI
PCIe	Peripheral Component Interconnect Express
CML	Current Mode Logic
ACK	Acknowledge (Bestätigung)
BRQ	Bus Request (Busanforderung)
BGRT	Boot Graphics Resource Table
IRQ	Interrupt Request (Unterbrechungsanforderung)
CLK	Clock (Takt)
BUS	Bus (Datenbus/Systembus)
CPU	Central Processing Unit (Zentrale Verarbeitungseinheit)
GPU	Graphics Processing Unit (Grafikprozessor)
MCH	Memory Controller Hub (Speichercontroller-Hub)
ICH	I/O Controller Hub (E/A-Controller-Hub)
DMA	Direct Memory Access (Direkter Speicherzugriff)
APIC	Advanced Programmable Interrupt Controller
LAPIC	Local Advanced Programmable Interrupt Controller
USB	Universal Serial Bus
ALU	Arithmetic Logic Unit (Rechenwerk)
FPU	Floating Point Unit (Gleitkommaeinheit)
IC	Integrated Circuit (Integrierter Schaltkreis)
ASIC	Application-Specific Integrated Circuit (anwendungsspezifischer IC)
FPGA	Field Programmable Gate Array (programmierbare Logik)
SoC	System on a Chip
CAN	Controller Area Network
I²C	Inter-Integrated Circuit (serielles Busprotokoll)
FETCH	Fetch (Befehlsabruf)
DECODE	Decode (Befehlsdekodierung)
FETCH OPERANDS	Operanden abrufen
EXECUTE	Execute (Ausführen)
WRITE BACK	Rückschreiben (Ergebnis in Register/Speicher schreiben)
CISC	Complex Instruction Set Computer
RISC	Reduced Instruction Set Computer
SISD	Single Instruction Single Data
SIMD	Single Instruction Multiple Data
MIMD	Multiple Instruction Multiple Data
DRAM	Dynamic Random Access Memory
SRAM	Static Random Access Memory
SIMM	Single Inline Memory Module
DIMM	Dual Inline Memory Module
DDR-SDRAM	Double Data Rate Synchronous DRAM
RDIMMs	Registered DIMMs (registrierte Arbeitsspeichermodule)
RAM	Random Access Memory (Arbeitsspeicher)
ROM	Read-Only Memory (Nur-Lese-Speicher)
PROM	Programmable Read-Only Memory
EPROM	Erasable Programmable Read-Only Memory
EEPROM	Electrically Erasable Programmable Read-Only Memory
HDD	Hard Disk Drive (Festplattenlaufwerk)
SSD	Solid State Drive
CD	Compact Disc
DVD	Digital Versatile Disc / Digital Video Disc
SMR	Shingled Magnetic Recording
RLL	Run Length Limited (Kodierung)
GMR	Giant MagnetoResistance
Flasch-EEPROM	Flash-EEPROM (Flash-Speicher)
B	Byte
KB	Kilobyte (10³ Byte)
KiB	Kibibyte (2¹⁰ Byte)
MB	Megabyte (10⁶ Byte)
MiB	Mebibyte (2²⁰ Byte)
GB	Gigabyte (10⁹ Byte)
GiB	Gibibyte (2³⁰ Byte)
TB	Terabyte (10¹² Byte)
TiB	Tebibyte (2⁴⁰ Byte)
PT	Petabyte (10¹⁵ Byte)
PiT	Pebibyte (2⁵⁰ Byte)
GPT	GUID Partition Table
MBR	Master Boot Record
NTFS	New Technology File System
FAT	File Allocation Table
RAID	Redundant Array of Independent Disks
Diff	Differenziell (z. B. Backup)
Inkr	Inkrementell (z. B. Backup)
Voll	Vollständig (z. B. Backup)
DPI	Dots Per Inch (Punkte pro Zoll)
VRAM	Video Random Access Memory
GDDR	Graphics Double Data Rate (Grafikspeicher)
CAD	Computer Aided Design
CUDA	Compute Unified Device Architecture (NVIDIA)
RAMDAC	Random Access Memory Digital-to-Analog Converter
UPS	Uninterruptible Power Supply (USV)
RSI	Repetitive Strain Injury (Überlastungsverletzung)
BIOS	Basic Input/Output System
UEFI	Unified Extensible Firmware Interface
POST	Power-On Self Test
OS	Operating System (Betriebssystem)
BSD	Berkeley Software Distribution
iOS	iPhone Operating System
AIX	Advanced Interactive eXecutive (IBM Unix)
MMU	Memory Management Unit
GNU	GNU's Not Unix (Projekt/Software)
TDD	Test Driven Development
EULA	End User License Agreement (Endbenutzer-Lizenzvertrag)
GPL	General Public License
Fortran	Formula Translation (Programmiersprache)
Cobol	Common Business-Oriented Language (Programmiersprache)
LISP	LISt Processing (Programmiersprache)
BASIC	Beginner's All-purpose Symbolic Instruction Code
Pascal	Programmiersprache Pascal
C	Programmiersprache C
SQL	Structured Query Language
XML	eXtensible Markup Language
HTML	HyperText Markup Language
CSS	Cascading Style Sheets
RegEx	Regular Expression (Regulärer Ausdruck)
WYSIWYP	What You See Is What You Print
REPL	Read–Eval–Print Loop
 

<script>
/* Dark Mode */
const toggle = document.getElementById("darkToggle");
const body = document.body;

// gespeicherte Einstellung laden
if (localStorage.getItem("dark") === "true") {
  body.classList.add("dark");
  toggle.textContent = "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const aktiv = body.classList.contains("dark");
  localStorage.setItem("dark", aktiv);
  toggle.textContent = aktiv ? "☀️ Light Mode" : "🌙 Dark Mode";
});
</script>

<script>
/* === QUIZ === */
const entries = Array.from(document.querySelectorAll("dt")).map(dt => ({
  abk: dt.textContent,
  bedeutung: dt.nextElementSibling.textContent
}));

let current;

const quizAbk = document.getElementById("quizAbk");
const quizAntwort = document.getElementById("quizAntwort");
const feedback = document.getElementById("feedback");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");

function neueFrage() {
  current = entries[Math.floor(Math.random() * entries.length)];
  quizAbk.textContent = current.abk;
  quizAntwort.value = "";
  feedback.textContent = "";
}

checkBtn.addEventListener("click", () => {
  const user = quizAntwort.value.trim().toLowerCase();
  const richtig = current.bedeutung.toLowerCase();

  if (!user) return;

  if (richtig.includes(user)) {
    feedback.textContent = "✅ Richtig!";
  } else {
    feedback.textContent = "❌ Falsch – richtig ist: " + current.bedeutung;
  }
});

nextBtn.addEventListener("click", neueFrage);

// erste Frage starten
neueFrage();
</script>
