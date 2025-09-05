const AIWritingAssistant: React.FC = () => {
  return (
    <section id="ai" className="px-4 sm:px-6 md:px-8 py-12 bg-black text-white min-h-screen">
      <div className="mx-auto max-w-[42rem] md:max-w-[56rem]">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-extrabold tracking-tight text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.1] mb-4 balance no-hyphens">
            A Mind Beside Yours.
          </h2>
          <p className="mt-4 text-[clamp(0.875rem,2vw,1.125rem)] leading-relaxed text-gray-300 mx-auto no-hyphens max-w-prose">
            AI-powered writing that helps refine, inspire, and elevate your words — without stealing your voice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Interactive Demo */}
          <div className="relative rounded-xl overflow-hidden bg-gray-900 p-4 sm:p-6 order-2 lg:order-1 max-h-[70vh] overflow-y-auto">
            <div className="h-full flex flex-col">
              <div className="flex-1 space-y-4">
                {/* Animated text refinement demo */}
                <div className="bg-gray-800 rounded p-3 sm:p-4">
                  <p className="text-gray-400 text-sm sm:text-base">Original text:</p>
                  <p className="text-white mt-2 text-sm sm:text-base">The cat went to the store.</p>
                </div>
                <div className="bg-gray-800/50 rounded p-3 sm:p-4">
                  <p className="text-gray-400 text-sm sm:text-base">Enhanced version:</p>
                  <p className="text-white mt-2 text-sm sm:text-base">The curious tabby prowled through the corner store&#39;s aisles.</p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-[clamp(1.05rem,3.8vw,1.2rem)] mb-3 sm:mb-4 balance no-hyphens">
                Grammar + Clarity Enhancements
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed no-hyphens">
                Intelligent suggestions that polish your writing while preserving your unique style.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-[clamp(1.05rem,3.8vw,1.2rem)] mb-3 sm:mb-4 balance no-hyphens">Storyline Continuation</h3>
              <p className="text-gray-300 text-sm leading-relaxed no-hyphens">
                Get unstuck with contextually aware suggestions that help move your narrative forward.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-[clamp(1.05rem,3.8vw,1.2rem)] mb-3 sm:mb-4 balance no-hyphens">Smart Summaries</h3>
              <p className="text-gray-300 text-sm leading-relaxed no-hyphens">
                Instantly generate concise summaries of your longer texts and structured note outlines.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-[clamp(1.05rem,3.8vw,1.2rem)] mb-3 sm:mb-4 balance no-hyphens">Caption Generation</h3>
              <p className="text-gray-300 text-sm leading-relaxed no-hyphens">
                Create engaging titles and captions for your notes, journals, and chapters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWritingAssistant;
