import React from 'react';
import shoshfunny from '../../assets/images/shoshfunny.jpg';

const MindfulnessModernLife = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={shoshfunny} 
          alt="Mindful Modern Life" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            The Sacred Art of Mindfulness in Modern Life
          </h1>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-500 py-2 italic">
          Image created by Fukina - AI Image Generation
        </p>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 italic">
            "Wherever you are, be there totally." Eckhart Tolle's simple instruction 
            points to the profound transformation possible when we fully inhabit each 
            moment—turning ordinary experience into sacred awareness and daily life 
            into spiritual practice.
          </p>

          <p>
            Mindfulness, the practice of present-moment awareness without judgment, has 
            emerged as perhaps the most accessible bridge between ancient spiritual wisdom 
            and contemporary life. What Buddhist masters cultivated through years of 
            retreat practice can now be integrated into commuting, parenting, working, 
            and even waiting in line—transforming every activity into an opportunity 
            for awakening.
          </p>

          <p>
            The essence of mindfulness lies in shifting from automatic pilot to conscious 
            presence. Most of us spend our days lost in mental commentary about the past 
            or future, rarely fully present to what's actually happening. Mindfulness 
            practice involves gently returning attention to the immediacy of experience—
            the breath, bodily sensations, sounds, emotions—without trying to change 
            or fix anything.
          </p>

          <p>
            In modern life, mindfulness becomes particularly powerful because it addresses 
            our culture's core pathology: the addiction to doing rather than being. We've 
            learned to measure our worth by productivity, achievements, and acquisitions, 
            losing touch with the simple joy of existence itself. Mindfulness practice 
            reveals that awareness itself is inherently fulfilling—we don't need to add 
            anything to this moment for it to be complete.
          </p>

          <p>
            The practice begins with mindful breathing—not as relaxation technique but 
            as return to our most fundamental life process. Each conscious breath becomes 
            an anchor to the present, a refuge from mental proliferation, and a reminder 
            that we are alive right here, right now. This simple practice can transform 
            stress into spaciousness, reactivity into responsiveness, and anxiety into 
            presence.
          </p>

          <p>
            Mindful eating offers another entry point into sacred awareness. Instead of 
            unconsciously consuming while distracted by screens or thoughts, we can 
            approach each meal as meditation practice—fully tasting, chewing slowly, 
            appreciating the journey from earth to plate to body. This simple shift 
            can heal our relationship with food while cultivating gratitude and presence.
          </p>

          <p>
            Perhaps most importantly, mindfulness transforms our relationship with difficult 
            emotions and experiences. Rather than avoiding discomfort or getting lost 
            in drama, we learn to meet whatever arises with kind attention. Pain becomes 
            a teacher rather than an enemy, challenging emotions become opportunities for 
            deeper understanding, and even mundane annoyances become doorways to patience 
            and compassion.
          </p>

          <p>
            The ultimate fruit of mindfulness practice is not calm or happiness—though 
            these often arise naturally—but freedom. Freedom from the compulsive mental 
            patterns that create suffering, freedom from the need for experience to be 
            different than it is, and freedom to respond to life from wisdom rather than 
            reactivity. This freedom is available in each moment, requiring nothing more 
            than the willingness to wake up to what's already here.
          </p>
        </div>
      </article>
    </div>
  );
};

export default MindfulnessModernLife;