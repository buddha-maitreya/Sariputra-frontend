import React from 'react';
import { Link } from 'react-router-dom';
import pastlives from '../../assets/images/pastlives.jpg';

const RumiPathLove = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={pastlives} 
          alt="Rumi and the Path of Love" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Rumi: The Path of Ecstatic Love and Divine Union
          </h1>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-500 py-2 italic">
          Image created by Fukina - AI Image Generation
        </p>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl mb-12 text-gray-600 italic leading-relaxed font-light">
            "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray."
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Revolutionary Path of Love</h2>
          <p className="mb-10 leading-relaxed">
            In the landscape of mystical traditions, few figures have captured the human heart quite like Jalal ad-Din Muhammad Rumi. The 13th-century Persian poet and Sufi master discovered something revolutionary: that ecstatic love could serve as the most direct path to divine union, transforming the seeker through the very intensity of longing itself.
          </p>

          <p className="mb-10 leading-relaxed">
            Where other traditions might emphasize detachment or mental discipline, Rumi taught that divine love could burn away all obstacles to realization. His approach was not passive but wildly active—a whirling dance of surrender that spun the separate self into dissolution. This transformative power of love resonates deeply with <Link to="/articles/mystical-islam-sufism" className="text-blue-600 hover:text-blue-800 underline">the broader mystical tradition of Islam</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Alchemy of Longing</h2>
          <p className="mb-10 leading-relaxed">
            "The Beloved is all in all," Rumi declared, "the lover merely veils Him; the Beloved is all that lives, the lover a dead thing." This was not philosophical speculation but lived experience. Through his relationship with the wandering dervish Shams of Tabriz, Rumi discovered that human love could become a mirror for divine love.
          </p>

          <p className="mb-10 leading-relaxed">
            The loss of Shams plunged Rumi into grief so profound it became transformation. His pain became poetry, his longing became teaching, his separation became the very ground of union. This is the paradox Rumi embodied: that the deepest human experiences—love, loss, yearning—are not obstacles to the spiritual path but its very substance. Such profound acceptance of life's difficulties echoes the wisdom found in <Link to="/articles/mindfulness-modern-life" className="text-blue-600 hover:text-blue-800 underline">mindful approaches to modern living</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Whirling Path to Unity</h2>
          <p className="mb-10 leading-relaxed">
            The famous whirling dance of the dervishes emerged from Rumi's own ecstatic experiences. As he walked through the marketplace, hearing the rhythm of the goldsmiths' hammers, he began to turn, and in that turning found a physical prayer that aligned body, heart, and spirit in perfect surrender.
          </p>

          <p className="mb-10 leading-relaxed">
            This wasn't mere ritual but technology of transformation. The spinning motion dissolves the ego's grip on fixed identity, while the upward palm receives divine grace and the downward palm transmits it to the earth. The whirling dervish becomes a channel, a living bridge between heaven and earth. This embodied approach to spirituality shares common ground with <Link to="/articles/sacred-feminine-wisdom" className="text-blue-600 hover:text-blue-800 underline">sacred feminine practices</Link> that honor the body as a vessel of wisdom.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Love as Universal Solvent</h2>
          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Ocean in the Drop</h2>
          <p className="mb-10 leading-relaxed">
            For Rumi, love was not sentiment but cosmic force—the very energy that moves the stars and draws the heart toward its source. "Love is the bridge between two hearts," he wrote, "between you and everything." This love dissolves all sense of separation, revealing that lover, Beloved, and love itself are one.
          </p>

          <p className="mb-10 leading-relaxed">
            His poetry speaks directly to this recognition: "You are not just the drop in the ocean, but the entire ocean in each drop." Through love, the individual consciousness recognizes its true nature as universal consciousness playing at separation and return. This understanding resonates deeply with <Link to="/articles/consciousness-exploration" className="text-blue-600 hover:text-blue-800 underline">modern explorations of consciousness</Link>.
          </p>

          <div className="bg-gradient-to-r from-red-100 to-pink-100 p-8 rounded-lg mb-10 border-l-4 border-red-500">
            <p className="text-lg font-medium text-gray-800 leading-relaxed">
              "Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there. When the soul lies down in that grass, the world is too full to talk about."
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Living Transmission</h2>
          <p className="mb-10 leading-relaxed">
            What makes Rumi's approach so compelling to modern seekers is its immediacy. He offers not complicated philosophical systems but direct invitation: "Come, come, whoever you are. Wanderer, worshipper, lover of leaving—it doesn't matter. Ours is not a caravan of despair."
          </p>

          <p className="mb-10 leading-relaxed">
            His path is inclusive, recognizing that every experience of love—whether romantic, parental, friendship, or artistic inspiration—contains the seed of divine love. The practice is not to transcend these loves but to follow them to their source, discovering that all love leads to the One Love. This inclusive approach shares wisdom with <Link to="/articles/universal-love" className="text-blue-600 hover:text-blue-800 underline">teachings on universal love</Link>.
          </p>

          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-8 rounded-lg mb-10 border-l-4 border-yellow-500">
            <p className="text-lg font-medium text-gray-800 leading-relaxed">
              Through Rumi, we learn that the spiritual path need not be grim or austere. It can be a celebration, a dance, a love affair with existence itself. In opening our hearts completely to love—with all its joy and pain—we discover that we are already what we seek.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default RumiPathLove;