// src/components/SpecializationsSection.tsx
export default function SpecializationsSection() {
    const specializations = [
      { title: 'Frontend', description: 'Aprende a desarrollar interfaces de usuario modernas.' },
      { title: 'Backend', description: 'Domina el desarrollo de servidores y APIs.' },
      { title: 'Móvil', description: 'Crea aplicaciones móviles para Android y iOS.' },
      { title: 'Ciencia de Datos', description: 'Analiza datos y crea modelos de Machine Learning.' },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Áreas de Especialización</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                <p className="text-gray-700">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  