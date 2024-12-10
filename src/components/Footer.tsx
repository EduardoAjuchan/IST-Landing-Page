export default function Footer() {
    return (
      <footer className="bg-primary text-white min-h-[300px] flex flex-col justify-center items-center relative">
        {/* Forma ondulada */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,288L60,256C120,224,240,160,360,149.3C480,139,600,181,720,202.7C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
  
        <div className="container mx-auto relative z-10 text-center pt-12">
          <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
          <p className="mb-2">contacto@innovaseedtech.com</p>
          <p className="mb-2">Teléfono: +502 1234-5678</p>
          <p className="mb-2">Guatemala, Guatemala</p>
          <div className="flex space-x-4 mt-4 justify-center">
            <a href="#" className="hover:text-green-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-green-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-green-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  