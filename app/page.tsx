export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bg-casino.jpg')" }}
    >
      <div className="bg-black/70 w-full max-w-md mx-4 rounded-xl p-6 text-center text-white">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Aes del Norte"
          className="mx-auto mb-4 max-w-[220px]"
        />

        {/* TEXTO VERIFICADO */}
        <p className="text-sm text-green-400 mb-6">
          PÁGINA OFICIAL VERIFICADA ✅
        </p>

        {/* CTA */}
        <p className="text-lg mb-4">
          👇 Contáctanos tocando el botón 👇
        </p>

        {/* BOTÓN WHATSAPP */}
        <a
          href="https://wa.me/5493562512934?text=Hola%20quiero%20crear%20mi%20usuario%20en%20Ases%20del%20Norte"
          target="_blank"
          className="block bg-green-500 hover:bg-green-600 transition text-white font-bold py-4 rounded-lg text-xl mb-4"
        >
          Solicitar acceso por WhatsApp
        </a>

        {/* BONO */}
        <p className="text-orange-400 font-bold text-lg mb-6">
          🔥 RECLAMÁ TU BONO DE 30% EN TU CARGA 🔥
        </p>

        {/* FOOTER */}
        <div className="text-xs text-gray-300 space-y-1">
          <p>🎧 Atención 24/7</p>
          <p>⚡ Pagos al instante</p>
          <p>♟ Jugá responsable (+18)</p>
        </div>

      </div>
    </main>
  );
}
