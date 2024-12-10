export default function HeroSection() {
    return (
      <section className="h-[80vh] bg-blue-600 text-white flex items-center justify-center pt-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6">Bienvenido a InnovaSeed Tech</h2>
          <p className="text-2xl mb-8">
            Prepárate para el futuro del desarrollo de software con nuestra academia.
          </p>
          <button className="bg-green-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-600">
            Inscríbete Ahora
          </button>
        </div>
      </section>
    );
  }
  