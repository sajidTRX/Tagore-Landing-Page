import { Monitor, Keyboard, BatteryCharging } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="px-4 sm:px-6 md:px-8 py-12 bg-black text-white">
      <div className="mx-auto max-w-[42rem] md:max-w-[56rem]">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] font-bold text-white tracking-tight balance no-hyphens">
            Everything You Need to Stay Focused
          </h2>
          <p className="mt-4 max-w-[65ch] text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed text-gray-300 no-hyphens">
            A powerful writing environment designed for clarity, flow, and focus.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <li className="rounded-2xl bg-white/5 p-4 flex flex-col items-center text-center sm:text-left sm:items-start transition transform hover:-translate-y-1">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/90 text-white">
                <Monitor className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 sm:ml-4 sm:mt-0">
              <h3 className="font-semibold text-[clamp(1.05rem,3.8vw,1.2rem)] text-white balance no-hyphens">E-Ink Display</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300 no-hyphens">
                A beautiful, paper-like display that&rsquo;s easy on the eyes, with no backlight or glare.
              </p>
            </div>
          </li>

          <li className="rounded-2xl bg-white/5 p-4 flex flex-col items-center text-center sm:text-left sm:items-start transition transform hover:-translate-y-1">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/90 text-white">
                <Keyboard className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 sm:ml-4 sm:mt-0">
              <h3 className="font-semibold text-[clamp(1.05rem,3.8vw,1.2rem)] text-white balance no-hyphens">Alice Layout Mechanical Keyboard</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300 no-hyphens">
                A tactile, creamy and satisfying typing experience that feels just right.
              </p>
            </div>
          </li>

          <li className="rounded-2xl bg-white/5 p-4 flex flex-col items-center text-center sm:text-left sm:items-start transition transform hover:-translate-y-1">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/90 text-white">
                <BatteryCharging className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 sm:ml-4 sm:mt-0">
              <h3 className="font-semibold text-[clamp(1.05rem,3.8vw,1.2rem)] text-white balance no-hyphens">Long Battery Life</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300 no-hyphens">
                Write for weeks on a single charge, so you can focus on your work, not on finding an outlet.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;