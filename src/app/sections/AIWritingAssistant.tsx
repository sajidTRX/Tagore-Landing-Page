const AIWritingAssistant: React.FC = () => {
  return (
    <section id="ai" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] font-bold mb-4">
            A Mind Beside Yours.
          </h2>
          <p className="mt-4 max-w-[65ch] text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed text-white mx-auto px-2">
            AI-powered writing that helps refine, inspire, and elevate your words — without stealing your voice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Interactive Demo */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 p-6 sm:p-8 order-2 lg:order-1">
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
                <div className="bg-gray-800 rounded p-3 sm:p-4">
                  <p className="text-gray-400 text-sm sm:text-base">Original text:</p>
                  <p className="text-white mt-2 text-sm sm:text-base">He opened the old diary and read the first line..</p>
                </div>
                <div className="bg-gray-800/50 rounded p-3 sm:p-4">
                  <p className="text-gray-400 text-sm sm:text-base">Enhanced version:</p>
                  <p className="text-white mt-2 text-sm sm:text-base">The words unlocked memories he thought were buried forever.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h3 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold mb-3 sm:mb-4">Grammar + Clarity Enhancements</h3>
              <p className="text-gray-300 text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed">
                Intelligent suggestions that polish your writing while preserving your unique style.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Storyline Continuation</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Get unstuck with contextually aware suggestions that help move your narrative forward.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Smart Summaries</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Instantly generate concise summaries of your longer texts and structured note outlines.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Caption Generation</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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
