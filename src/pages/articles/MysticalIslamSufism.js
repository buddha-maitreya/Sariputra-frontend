import React from 'react';
import sunset1 from '../../assets/images/sunset1.jpg';

const MysticalIslamSufism = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={sunset1} 
          alt="Mystical Islam" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            The Inner Dimension of Islam: Sufism and the Path of the Heart
          </h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 italic">
            "Knock, and He'll open the door. Vanish, and He'll make you shine like the sun. 
            Fall, and He'll raise you to the heavens. Become nothing, and He'll turn you into 
            everything." Rumi's words capture the essence of Sufism—Islam's mystical heart 
            that seeks direct experience of divine love.
          </p>

          <p>
            Sufism represents Islam's esoteric dimension, emphasizing the inner journey toward 
            direct spiritual experience of Allah rather than merely following external religious 
            law. While orthodox Islam focuses on the Five Pillars and Sharia compliance, 
            Sufism seeks the dissolution of the ego-self in divine love, transforming religious 
            practice from obligation into ecstatic communion with the Beloved.
          </p>

          <p>
            The Sufi path begins with the recognition that Islamic practices—prayer, fasting, 
            pilgrimage, and charity—are not ends in themselves but means for purifying the 
            heart and preparing it for divine encounter. The external ritual becomes a doorway 
            to internal transformation, where the believer moves from worship of Allah to 
            recognition that there is no reality but Allah (la illaha illa'llah).
          </p>

          <p>
            Central to Sufi practice is the concept of fana—the extinction of the ego in 
            divine consciousness. This is not physical death but the death of the illusory 
            separate self that imagines itself apart from God. Through disciplines of 
            dhikr (remembrance), sama (sacred music and dance), and muraqaba (meditation), 
            the Sufi gradually dissolves the barriers between lover and Beloved until only 
            divine reality remains.
          </p>

          <p>
            The teacher-disciple relationship (pir-murid) forms the heart of Sufi transmission. 
            Unlike academic religious education, Sufi knowledge (marifa) cannot be learned 
            from books but must be transmitted from heart to heart through the blessing 
            (baraka) of an accomplished master. The pir serves as both mirror and guide, 
            reflecting the disciple's spiritual state while providing practices tailored 
            to their particular temperament and stage of development.
          </p>

          <p>
            Sufi poetry and music emerged as vehicles for expressing the inexpressible—
            the overwhelming experience of divine love that rational discourse cannot 
            contain. From Ibn Arabi's philosophical mysticism to Hafez's wine-soaked 
            verses to Rumi's ecstatic poetry, Sufis developed a rich artistic tradition 
            that speaks directly to the heart, bypassing the analytical mind to awaken 
            direct spiritual experience.
          </p>

          <p>
            The doctrine of wahdat al-wujud (unity of being), developed by masters like 
            Ibn Arabi, represents Sufism's most profound metaphysical insight: that all 
            existence is nothing but Allah manifesting in countless forms. This doesn't 
            lead to pantheism but to the recognition that while creation appears distinct 
            from Creator, ultimately there is only One Reality expressing itself through 
            infinite diversity. The mystic's journey is thus a return to this primordial 
            unity that was never actually lost.
          </p>

          <p>
            Contemporary Sufism continues to offer profound resources for spiritual seekers 
            across all traditions. Its emphasis on love over fear, direct experience over 
            dogma, and inner transformation over external conformity speaks to modern 
            humanity's spiritual hunger. The Sufi understanding that "there are as many 
            paths to God as there are human souls" provides a model for religious tolerance 
            and interfaith dialogue desperately needed in our polarized world.
          </p>
        </div>
      </article>
    </div>
  );
};

export default MysticalIslamSufism;