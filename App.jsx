import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Download, 
  CheckCircle2, 
  Phone, 
  Globe, 
  GraduationCap,
  ArrowRight,
  BookOpen,
  Users,
  Video,
  Target,
  Award
} from 'lucide-react';

const BRAND = {
  blue: '#3169AF',
  yellow: '#FFCB05',
};

const quizData = [
  {
    q: "1. I am making a project about the history of my neighborhood. I would:",
    options: [
      { id: 'a', text: "a. Look at old and new photos to see how things changed", type: "K" },
      { id: 'b', text: "b. Record people talking about how things used to be", type: "A" },
      { id: 'c', text: "c. Read old newspaper articles and documents", type: "R" },
      { id: 'd', text: "d. Look at old maps", type: "V" }
    ]
  },
  {
    q: "2. A video online shows how to make a special graph. The video has someone talking, written instructions, and diagrams. I learn best from:",
    options: [
      { id: 'a', text: "a. Looking at the diagrams", type: "V" },
      { id: 'b', text: "b. Listening to the person speak", type: "A" },
      { id: 'c', text: "c. Reading the written instructions", type: "R" },
      { id: 'd', text: "d. Watching what the person does", type: "K" }
    ]
  },
  {
    q: "3. I want to learn more about a field trip I'm going on. I would:",
    options: [
      { id: 'a', text: "a. Look at pictures and descriptions of what we'll do", type: "K" },
      { id: 'b', text: "b. Use a map to see where we're going", type: "V" },
      { id: 'c', text: "c. Read the trip schedule", type: "R" },
      { id: 'd', text: "d. Talk to the teacher or friends going on the trip", type: "A" }
    ]
  },
  {
    q: "4. When choosing what to study or what career I want, these are important to me:",
    options: [
      { id: 'a', text: "a. Using what I learn in real life", type: "K" },
      { id: 'b', text: "b. Talking and discussing things with others", type: "A" },
      { id: 'c', text: "c. Working with designs, maps, or charts", type: "V" },
      { id: 'd', text: "d. Writing well", type: "R" }
    ]
  },
  {
    q: "5. When I am learning, I:",
    options: [
      { id: 'a', text: "a. Like to talk things through", type: "A" },
      { id: 'b', text: "b. Look for patterns", type: "V" },
      { id: 'c', text: "c. Use examples and try things out", type: "K" },
      { id: 'd', text: "d. Read books, articles, and handouts", type: "R" }
    ]
  },
  {
    q: "6. I want to save money and need to choose between different saving plans. I would:",
    options: [
      { id: 'a', text: "a. Try out each plan with my own money to see what works", type: "K" },
      { id: 'b', text: "b. Read a brochure that explains each plan", type: "R" },
      { id: 'c', text: "c. Look at graphs showing how each plan works over time", type: "V" },
      { id: 'd', text: "d. Talk to someone who knows about saving money", type: "A" }
    ]
  },
  {
    q: "7. I want to learn a new board game or card game. I would:",
    options: [
      { id: 'a', text: "a. Watch other people play first", type: "K" },
      { id: 'b', text: "b. Listen to someone explain it and ask questions", type: "A" },
      { id: 'c', text: "c. Look at diagrams showing the moves and rules", type: "V" },
      { id: 'd', text: "d. Read the instruction booklet", type: "R" }
    ]
  },
  {
    q: "8. I want to make sure I'm doing my exercises correctly. I would:",
    options: [
      { id: 'a', text: "a. Check a list of important things to do right", type: "R" },
      { id: 'b', text: "b. Compare what I'm doing to a video", type: "K" },
      { id: 'c', text: "c. Listen to someone explain how to do it", type: "A" },
      { id: 'd', text: "d. Study diagrams showing the right way", type: "V" }
    ]
  },
  {
    q: "9. I want to learn something new on a computer. I would:",
    options: [
      { id: 'a', text: "a. Read the written instructions", type: "R" },
      { id: 'b', text: "b. Talk to people who already know how to use it", type: "A" },
      { id: 'c', text: "c. Just start using it and figure it out as I go", type: "K" },
      { id: 'd', text: "d. Follow diagrams in a guide", type: "V" }
    ]
  },
  {
    q: "10. When learning from the internet, I like:",
    options: [
      { id: 'a', text: "a. Videos showing how to do things", type: "K" },
      { id: 'b', text: "b. Cool design and visual features", type: "V" },
      { id: 'c', text: "c. Detailed articles to read", type: "R" },
      { id: 'd', text: "d. Podcasts and videos where I can listen to experts", type: "A" }
    ]
  },
  {
    q: "11. I want to learn about a new school project. I would ask for:",
    options: [
      { id: 'a', text: "a. Diagrams showing the project steps with charts", type: "V" },
      { id: 'b', text: "b. A written report explaining the project", type: "R" },
      { id: 'c', text: "c. A chance to discuss the project", type: "A" },
      { id: 'd', text: "d. Examples of similar successful projects", type: "K" }
    ]
  },
  {
    q: "12. I want to learn how to take better photos. I would:",
    options: [
      { id: 'a', text: "a. Ask questions about the camera and its features", type: "A" },
      { id: 'b', text: "b. Read the instruction manual", type: "R" },
      { id: 'c', text: "c. Look at diagrams showing what each camera button does", type: "V" },
      { id: 'd', text: "d. Look at examples of good and bad photos", type: "K" }
    ]
  },
  {
    q: "13. I prefer a teacher who uses:",
    options: [
      { id: 'a', text: "a. Hands-on activities and demonstrations", type: "K" },
      { id: 'b', text: "b. Class discussions and question-answer sessions", type: "A" },
      { id: 'c', text: "c. Handouts, books, and reading materials", type: "R" },
      { id: 'd', text: "d. Diagrams, charts, maps, and graphs", type: "V" }
    ]
  },
  {
    q: "14. I finished a test and want feedback. I would like:",
    options: [
      { id: 'a', text: "a. Examples from my own work", type: "K" },
      { id: 'b', text: "b. Written comments about my results", type: "R" },
      { id: 'c', text: "c. Someone to talk through it with me", type: "A" },
      { id: 'd', text: "d. Graphs showing how I've improved", type: "V" }
    ]
  },
  {
    q: "15. I want to find out about a place to stay before visiting. I would want:",
    options: [
      { id: 'a', text: "a. A video tour of the place", type: "K" },
      { id: 'b', text: "b. To talk with the owner or manager", type: "A" },
      { id: 'c', text: "c. A written description of the rooms", type: "R" },
      { id: 'd', text: "d. A floor plan and map of the area", type: "V" }
    ]
  },
  {
    q: "16. I'm having trouble putting together furniture that came in pieces. I would:",
    options: [
      { id: 'a', text: "a. Look at the diagrams again carefully", type: "V" },
      { id: 'b', text: "b. Ask someone for help", type: "A" },
      { id: 'c', text: "c. Read the written instructions again", type: "R" },
      { id: 'd', text: "d. Try different ways to fit the pieces together", type: "K" }
    ]
  }
];

const styleDescriptions = {
  V: {
    title: "Visual Learner",
    tagline: "Your child learns best by seeing.",
    desc: "Visual learners prefer charts, graphs, and diagrams. They absorb information through their eyes and remember things by their shape or color.",
    tips: [
      "Use highlighters and color-coding for different subjects.",
      "Draw mind maps and flowcharts to connect complex ideas.",
      "Watch educational videos with clear diagrams.",
      "Convert your notes into visual posters to hang in your room."
    ],
    pitch: "Standard classrooms rely heavily on lectures, leaving Visual learners behind. Oniion's 1-to-1 tutors use interactive whiteboards and visual mapping to make concepts visible."
  },
  A: {
    title: "Aural Learner",
    tagline: "Your child learns best by listening.",
    desc: "Aural learners thrive on discussion and verbal instruction. They benefit from hearing things explained and often need to talk through a problem to solve it.",
    tips: [
      "Record lessons and listen back to them while traveling.",
      "Read your notes out loud to yourself.",
      "Join group discussions and explain concepts to others.",
      "Use mnemonics or songs to memorize facts and dates."
    ],
    pitch: "In a crowded class, there's no time to talk. Oniion gives your child a dedicated voice. Our live sessions are built on dialogue, ensuring every doubt is discussed thoroughly."
  },
  R: {
    title: "Read/Write Learner",
    tagline: "Your child learns best through words.",
    desc: "These learners excel when information is presented as text. They love taking notes, reading detailed explanations, and writing out their findings.",
    tips: [
      "Rewrite your class notes in your own words.",
      "Make detailed lists and bullet points.",
      "Read textbook summaries before and after each chapter.",
      "Keep a diary or journal to reflect on what you've learned."
    ],
    pitch: "We provide customized, curriculum-aligned study materials and structured note-taking strategies. Oniion helps Read/Write learners organize complex information into clear text."
  },
  K: {
    title: "Kinesthetic Learner",
    tagline: "Your child learns best by doing.",
    desc: "Kinesthetic learners need hands-on experience. They learn through trial and error, physical examples, and real-world applications.",
    tips: [
      "Use physical objects (like blocks or coins) to solve math problems.",
      "Take frequent study breaks to move around.",
      "Role-play historical events or scientific processes.",
      "Study while standing up or using a fidget tool to stay focused."
    ],
    pitch: "Sitting still for hours is the enemy of Kinesthetic learning. Oniion's tutors bring subjects to life with real-life examples and active participation."
  }
};

const Logo = ({ light = false, size = "md" }) => {
  const sizeClasses = size === 'lg' ? 'h-16' : 'h-12';
  return (
    <img 
      src="dp.jpg.jpeg" 
      alt="Oniion Learning" 
      className={`${sizeClasses} w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
    />
  );
};

const IntroSection = ({ studentInfo, handleInputChange, handleFormSubmit }) => (
  <div className="max-w-5xl mx-auto mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
    <div className="md:flex">
      <div className="md:w-1/2 brand-bg-blue p-12 text-white flex flex-col justify-between">
        <div>
          <div className="flex justify-start"><Logo light size="lg" /></div>
          <h1 className="text-4xl font-extrabold mt-12 mb-6 leading-tight">
            GCC's First <span className="brand-yellow">Learning Style</span> Based 1-to-1 Tuition.
          </h1>
          <p className="text-blue-50 text-xl opacity-90 leading-relaxed">
            Standard tuition is one-size-fits-all. Oniion is different. 
            Discover exactly how your child learns with our VARK assessment.
          </p>
        </div>
        
        <div className="space-y-4 mt-12">
          {[
            "Personalized 1-to-1 Live Sessions",
            "Matched with Learning-Style Tutors",
            "IIM Alumni Founded & Pedagogy",
            "Curriculum focused: CBSE, IB, IGCSE"
          ].map((text, i) => (
            <div key={i} className="flex items-center text-blue-50 text-lg">
              <CheckCircle2 className="w-6 h-6 mr-3 brand-yellow" /> {text}
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 p-12 bg-slate-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Start the Free Assessment</h2>
        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <input required name="studentName" value={studentInfo.studentName} onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3169AF] outline-none" placeholder="Student Name *" />
            <input required name="age" type="number" value={studentInfo.age} onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3169AF] outline-none" placeholder="Age *" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input required name="grade" value={studentInfo.grade} onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3169AF] outline-none" placeholder="Grade/Class *" />
            <select required name="syllabus" value={studentInfo.syllabus} onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#3169AF] outline-none">
              <option value="">Syllabus *</option>
              <option value="CBSE">CBSE</option>
              <option value="IGCSE">IGCSE</option>
              <option value="IB">IB</option>
              <option value="American">American</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <input required name="schoolName" value={studentInfo.schoolName} onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3169AF] outline-none" placeholder="Name of the School *" />
          <div className="grid grid-cols-2 gap-4">
            <input required name="parentName" value={studentInfo.parentName} onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3169AF] outline-none" placeholder="Parent Name *" />
            <input required name="parentContact" value={studentInfo.parentContact} onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3169AF] outline-none" placeholder="Parent Contact *" />
          </div>
          <input required name="toughSubjects" value={studentInfo.toughSubjects} onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3169AF] outline-none" placeholder="Tough subjects for the child? *" />
          
          <select name="guessedStyle" value={studentInfo.guessedStyle} onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 bg-white italic text-gray-500 focus:ring-2 focus:ring-[#3169AF] outline-none">
            <option value="">Current perceived learning style? (Optional)</option>
            <option value="Visual">Visual</option>
            <option value="Aural">Aural</option>
            <option value="Read/Write">Read/Write</option>
            <option value="Kinesthetic">Kinesthetic</option>
          </select>

          <button type="submit" className="w-full brand-bg-yellow hover:opacity-90 text-[#1a365d] font-black py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex justify-center items-center text-lg mt-4">
            Begin Assessment <ChevronRight className="ml-2 w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  </div>
);

const QuizSection = ({ answers, toggleAnswer, setStep }) => {
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / 16) * 100;
  
  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="sticky top-[73px] z-40 bg-slate-50/95 backdrop-blur-sm pt-2 pb-6 px-4 -mx-4 no-print border-b border-gray-100 mb-8">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Assessment Progress</span>
            <span className="text-xs font-bold brand-blue">{answeredCount} of 16 Answered</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div className="h-full brand-bg-blue transition-all duration-500 relative" style={{ width: `${progress}%` }}>
              <div className="absolute top-0 right-0 h-full w-4 bg-white/20 skew-x-12 translate-x-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 text-center flex flex-col items-center">
        <Logo size="lg" />
        <h2 className="text-3xl font-bold text-gray-800 mt-6">Learning Style Quiz</h2>
      </div>

      <div className="space-y-8">
        {quizData.map((q, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-xl font-bold text-[#3169AF] mb-6">{q.q}</h3>
            <div className="space-y-3">
              {q.options.map(opt => {
                const active = (answers[i] || []).includes(opt.id);
                return (
                  <div 
                    key={opt.id}
                    onClick={() => toggleAnswer(i, opt.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center ${active ? 'brand-bg-blue border-[#3169AF] text-white shadow-md' : 'bg-white border-gray-100 hover:border-blue-200'}`}
                  >
                    <div className={`w-6 h-6 rounded-md border flex items-center justify-center mr-4 ${active ? 'bg-white' : 'bg-gray-50'}`}>
                      {active && <CheckCircle2 className="w-5 h-5 text-[#3169AF]" />}
                    </div>
                    <span className="font-medium">{opt.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center">
        <button 
          disabled={answeredCount < 5}
          onClick={() => { window.scrollTo(0,0); setStep('report'); }} 
          className={`group px-12 py-5 rounded-2xl shadow-xl font-black text-xl transition-all flex items-center gap-3 ${answeredCount < 5 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'brand-bg-yellow text-[#1a365d] hover:scale-105 hover:shadow-2xl'}`}
        >
          View Resulting Profile 
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [step, setStep] = useState('intro');
  const [studentInfo, setStudentInfo] = useState({
    studentName: '', age: '', grade: '', syllabus: '', parentName: '', parentContact: '', schoolName: '', toughSubjects: '', guessedStyle: ''
  });
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body { background-color: white !important; }
        .no-print { display: none !important; }
        #printable-report { display: block !important; position: absolute; left: 0; top: 0; width: 100%; margin: 0; padding: 0; box-shadow: none !important; border: none !important; }
        .report-card { break-inside: avoid; }
      }
      .brand-blue { color: ${BRAND.blue}; }
      .brand-bg-blue { background-color: ${BRAND.blue}; }
      .brand-yellow { color: ${BRAND.yellow}; }
      .brand-bg-yellow { background-color: ${BRAND.yellow}; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep('quiz');
    window.scrollTo(0, 0);
  };

  const toggleAnswer = (qIndex, optionId) => {
    setAnswers(prev => {
      const current = prev[qIndex] || [];
      if (current.includes(optionId)) return { ...prev, [qIndex]: current.filter(id => id !== optionId) };
      return { ...prev, [qIndex]: [...current, optionId] };
    });
  };

  const calculateScores = () => {
    const scores = { V: 0, A: 0, R: 0, K: 0 };
    Object.keys(answers).forEach(qIndex => {
      answers[qIndex].forEach(optId => {
        const type = quizData[qIndex].options.find(o => o.id === optId).type;
        scores[type]++;
      });
    });
    return scores;
  };

  const ReportSection = () => {
    const scores = calculateScores();
    const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const dominant = sorted[0][0];
    const data = styleDescriptions[dominant];

    return (
      <div className="max-w-4xl mx-auto py-12">
        <div className="no-print flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Assessment Complete!</h2>
            <p className="text-sm text-gray-500">Your profile is ready.</p>
          </div>
          <button onClick={() => window.print()} className="brand-bg-blue text-white px-6 py-3 rounded-xl font-bold flex items-center hover:opacity-90">
            <Download className="w-5 h-5 mr-2" /> Download Report
          </button>
        </div>

        <div id="printable-report" className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
          <div className="brand-bg-blue p-12 text-white flex justify-between items-center">
            <div>
              <Logo light size="lg" />
              <div className="mt-8">
                <h1 className="text-4xl font-black mt-4">Learning Roadmap</h1>
                <p className="text-blue-100 text-lg">Prepared for {studentInfo.studentName}</p>
              </div>
            </div>
            <div className="hidden md:block opacity-20"><GraduationCap size={140} /></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100 text-center">
             <div className="p-6 border-r border-gray-100"><p className="text-xs font-bold text-gray-400 uppercase">Grade</p><p className="font-bold text-gray-800">{studentInfo.grade}</p></div>
             <div className="p-6 border-r border-gray-100"><p className="text-xs font-bold text-gray-400 uppercase">Curriculum</p><p className="font-bold text-gray-800">{studentInfo.syllabus}</p></div>
             <div className="p-6 border-r border-gray-100"><p className="text-xs font-bold text-gray-400 uppercase">Primary Style</p><p className="font-bold brand-blue">{data.title}</p></div>
             <div className="p-6"><p className="text-xs font-bold text-gray-400 uppercase">Parent</p><p className="font-bold text-gray-800">{studentInfo.parentName}</p></div>
          </div>

          <div className="p-12">
            <div className="md:flex gap-16 items-start">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-black text-gray-800 mb-2">{data.title}</h2>
                <p className="brand-blue font-bold text-xl mb-6">{data.tagline}</p>
                <div className="mb-8">
                  <h4 className="font-black text-gray-800 uppercase text-sm mb-4">Personalized Study Tips:</h4>
                  <ul className="space-y-4">
                    {data.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <div className="brand-bg-blue w-2 h-2 rounded-full mt-2 mr-3 shrink-0"></div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2 p-8 brand-bg-blue rounded-3xl text-white relative shadow-xl report-card">
                <h3 className="text-2xl font-bold mb-6">Oniion Peculiarities:</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-lg h-fit"><Award className="w-5 h-5 brand-yellow" /></div>
                    <div>
                      <h5 className="font-bold text-yellow-300">IIM Alumni Founded</h5>
                      <p className="text-sm text-blue-50">Built on academic excellence and structured pedagogy by founders from India's premier management institutes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-lg h-fit"><Video className="w-5 h-5 brand-yellow" /></div>
                    <div>
                      <h5 className="font-bold text-yellow-300">1-to-1 Live Sessions</h5>
                      <p className="text-sm text-blue-50">Direct attention from tutors. No crowds, just focused learning tailored to your child's pace.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-lg h-fit"><Target className="w-5 h-5 brand-yellow" /></div>
                    <div>
                      <h5 className="font-bold text-yellow-300">Student Dashboard</h5>
                      <p className="text-sm text-blue-50">Track progress in {studentInfo.toughSubjects} with real-time feedback and session recordings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 text-center bg-slate-50 border-t border-gray-100 report-card">
            <h2 className="text-3xl font-black text-[#1a365d] mb-4">Rs. 5,000 Voucher</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">Use code <strong>VARK5000</strong> to claim your scholarship.</p>
            <div className="flex justify-center gap-4 no-print">
               <a href="tel:+917022314965" className="brand-bg-blue text-white px-8 py-4 rounded-2xl font-bold">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b border-gray-100 p-4 no-print sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center"><Logo /></div>
      </nav>
      <div className="px-4">
        {step === 'intro' && <IntroSection studentInfo={studentInfo} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />}
        {step === 'quiz' && <QuizSection answers={answers} toggleAnswer={toggleAnswer} setStep={setStep} />}
        {step === 'report' && <ReportSection />}
      </div>
    </div>
  );
}
