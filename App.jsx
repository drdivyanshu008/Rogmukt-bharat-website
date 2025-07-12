import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Menu, 
  X, 
  Globe, 
  Heart, 
  BookOpen, 
  Users, 
  Download, 
  Phone, 
  MessageCircle, 
  Star,
  Leaf,
  Stethoscope,
  Target,
  Award,
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
  ChevronDown,
  Play
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Import images
import healthyIndiaImg from './assets/healthy_india.png'
import yogaHealingImg from './assets/yoga_healing_herbs.png'
import villageCareImg from './assets/village_care.png'
import meditationBooksImg from './assets/meditation_books.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [activeSection, setActiveSection] = useState('home')

  // Language content
  const content = {
    en: {
      nav: {
        home: 'Home',
        about: 'About Dr. Patel',
        knowledge: 'Free Health Knowledge',
        mission: 'Rogmukt Bharat 2035',
        services: 'Services',
        ebooks: 'Ebook Library',
        contact: 'Contact'
      },
      hero: {
        title: 'Rogmukt Bharat Mission 2035',
        subtitle: 'We reach where others don\'t.',
        description: 'Promoting free health education and integrative medicine for a disease-free India by 2035',
        cta: 'Join the Mission',
        watchVideo: 'Watch Mission Video'
      },
      about: {
        title: 'About Dr. Divyanshu Patel',
        subtitle: 'Kshara Sutra Surgeon & Integrative Medicine Consultant',
        description: 'Dr. Divyanshu Patel is a renowned Kshara Sutra Surgeon, Integrative Medicine Consultant, and Founder of Late Sushma Devi Foundation and MohMaya Health & Wellness. With extensive experience in combining Ayurveda, Allopathy, Homeopathy, Nutrition, Yoga, and Acupuncture, he is dedicated to creating a healthier India.',
        qualifications: 'Qualifications & Achievements',
        downloadCV: 'Download CV'
      },
      knowledge: {
        title: 'Free Health Knowledge',
        subtitle: 'Empowering communities with accessible health education',
        topics: [
          { title: 'Diabetes Management', desc: 'Natural approaches to diabetes reversal' },
          { title: 'Kidney Health', desc: 'Preventive care and natural healing' },
          { title: 'Stress Management', desc: 'Yoga and meditation techniques' },
          { title: 'Nutrition Guide', desc: 'Balanced diet for optimal health' }
        ]
      },
      mission: {
        title: 'Rogmukt Bharat 2035',
        subtitle: 'Vision for a Disease-Free India',
        description: 'Our mission is to create a disease-free India by 2035 through integrative medicine, community awareness, and accessible healthcare.',
        goals: [
          'Promote meditation and mindfulness',
          'Spread health awareness in rural areas',
          'Plant healing trees in communities',
          'Educate underprivileged children',
          'Integrate traditional and modern medicine'
        ],
        appeal: 'We need participation, not money.'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive healthcare solutions',
        list: [
          { title: 'Free OPD Clinics', desc: 'By Late Sushma Devi Foundation' },
          { title: 'Health Awareness Workshops', desc: 'Community education programs' },
          { title: 'Online Integrative Treatment', desc: 'Remote consultation support' },
          { title: 'Kshara Sutra Surgery', desc: 'Specialized surgical procedures' }
        ]
      },
      ebooks: {
        title: 'Free Ebook Library',
        subtitle: 'Download our comprehensive health guides',
        books: [
          { title: 'CT Scan Guide', desc: 'Understanding medical imaging' },
          { title: 'Diabetes Reversal', desc: 'Natural healing approaches' },
          { title: '5D Integrative Model', desc: 'Holistic health framework' },
          { title: 'Ayurvedic Healing', desc: 'Traditional medicine wisdom' }
        ]
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch for consultations and support',
        whatsapp: 'WhatsApp: +91 9695570344',
        appointment: 'Appointment Bot: +91 7019620344',
        email: 'info@rogmuktbharat.org',
        address: 'MohMaya Health & Wellness Center, India'
      },
      footer: {
        text: 'Dr. Divyanshu Patel – For a Healthy India | Rogmukt Bharat before 2035',
        powered: 'Powered by MohMaya Health & Wellness + Late Sushma Devi Foundation'
      }
    },
    hi: {
      nav: {
        home: 'होम',
        about: 'डॉ. पटेल के बारे में',
        knowledge: 'निःशुल्क स्वास्थ्य ज्ञान',
        mission: 'रोगमुक्त भारत 2035',
        services: 'सेवाएं',
        ebooks: 'ई-बुक लाइब्रेरी',
        contact: 'संपर्क'
      },
      hero: {
        title: 'रोगमुक्त भारत मिशन 2035',
        subtitle: 'हम वही जाएंगे जहाँ ज़रूरत है',
        description: '2035 तक रोगमुक्त भारत के लिए निःशुल्क स्वास्थ्य शिक्षा और एकीकृत चिकित्सा को बढ़ावा देना',
        cta: 'मिशन में शामिल हों',
        watchVideo: 'मिशन वीडियो देखें'
      },
      about: {
        title: 'डॉ. दिव्यांशु पटेल के बारे में',
        subtitle: 'क्षारसूत्र सर्जन और एकीकृत चिकित्सा सलाहकार',
        description: 'डॉ. दिव्यांशु पटेल एक प्रसिद्ध क्षारसूत्र सर्जन, एकीकृत चिकित्सा सलाहकार, और स्वर्गीय सुषमा देवी फाउंडेशन और मोहमाया हेल्थ एंड वेलनेस के संस्थापक हैं। आयुर्वेद, एलोपैथी, होम्योपैथी, पोषण, योग और एक्यूपंक्चर को मिलाने में व्यापक अनुभव के साथ, वे एक स्वस्थ भारत बनाने के लिए समर्पित हैं।',
        qualifications: 'योग्यताएं और उपलब्धियां',
        downloadCV: 'सीवी डाउनलोड करें'
      },
      knowledge: {
        title: 'निःशुल्क स्वास्थ्य ज्ञान',
        subtitle: 'सुलभ स्वास्थ्य शिक्षा के साथ समुदायों को सशक्त बनाना',
        topics: [
          { title: 'मधुमेह प्रबंधन', desc: 'मधुमेह उलटने के प्राकृतिक तरीके' },
          { title: 'किडनी स्वास्थ्य', desc: 'निवारक देखभाल और प्राकृतिक उपचार' },
          { title: 'तनाव प्रबंधन', desc: 'योग और ध्यान तकनीकें' },
          { title: 'पोषण गाइड', desc: 'इष्टतम स्वास्थ्य के लिए संतुलित आहार' }
        ]
      },
      mission: {
        title: 'रोगमुक्त भारत 2035',
        subtitle: 'रोगमुक्त भारत का दृष्टिकोण',
        description: 'हमारा मिशन एकीकृत चिकित्सा, सामुदायिक जागरूकता और सुलभ स्वास्थ्य सेवा के माध्यम से 2035 तक रोगमुक्त भारत बनाना है।',
        goals: [
          'ध्यान और माइंडफुलनेस को बढ़ावा देना',
          'ग्रामीण क्षेत्रों में स्वास्थ्य जागरूकता फैलाना',
          'समुदायों में उपचारात्मक पेड़ लगाना',
          'वंचित बच्चों को शिक्षित करना',
          'पारंपरिक और आधुनिक चिकित्सा का एकीकरण'
        ],
        appeal: 'पैसा नहीं, भागीदारी चाहिए।'
      },
      services: {
        title: 'हमारी सेवाएं',
        subtitle: 'व्यापक स्वास्थ्य सेवा समाधान',
        list: [
          { title: 'निःशुल्क ओपीडी क्लिनिक', desc: 'स्वर्गीय सुषमा देवी फाउंडेशन द्वारा' },
          { title: 'स्वास्थ्य जागरूकता कार्यशालाएं', desc: 'सामुदायिक शिक्षा कार्यक्रम' },
          { title: 'ऑनलाइन एकीकृत उपचार', desc: 'दूरस्थ परामर्श सहायता' },
          { title: 'क्षारसूत्र सर्जरी', desc: 'विशेषज्ञ सर्जिकल प्रक्रियाएं' }
        ]
      },
      ebooks: {
        title: 'निःशुल्क ई-बुक लाइब्रेरी',
        subtitle: 'हमारी व्यापक स्वास्थ्य गाइड डाउनलोड करें',
        books: [
          { title: 'सीटी स्कैन गाइड', desc: 'मेडिकल इमेजिंग को समझना' },
          { title: 'मधुमेह उलटना', desc: 'प्राकृतिक उपचार दृष्टिकोण' },
          { title: '5डी एकीकृत मॉडल', desc: 'समग्र स्वास्थ्य ढांचा' },
          { title: 'आयुर्वेदिक उपचार', desc: 'पारंपरिक चिकित्सा ज्ञान' }
        ]
      },
      contact: {
        title: 'संपर्क करें',
        subtitle: 'परामर्श और सहायता के लिए संपर्क करें',
        whatsapp: 'व्हाट्सऐप: +91 9695570344',
        appointment: 'अपॉइंटमेंट बॉट: +91 7019620344',
        email: 'info@rogmuktbharat.org',
        address: 'मोहमाया हेल्थ एंड वेलनेस सेंटर, भारत'
      },
      footer: {
        text: 'डॉ. दिव्यांशु पटेल – एक स्वस्थ भारत के लिए | 2035 से पहले रोगमुक्त भारत',
        powered: 'मोहमाया हेल्थ एंड वेलनेस + स्वर्गीय सुषमा देवी फाउंडेशन द्वारा संचालित'
      }
    }
  }

  const currentContent = content[language]

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl">
                {language === 'hi' ? 'रोगमुक्त भारत' : 'Rogmukt Bharat'}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(currentContent.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-sm font-medium transition-colors hover:text-green-400 ${
                    activeSection === key ? 'text-green-400' : 'text-gray-300'
                  }`}
                >
                  {value}
                </button>
              ))}
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language === 'en' ? 'हिं' : 'EN'}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900"
              >
                <Globe className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant="ghost"
                size="sm"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-800 border-t border-slate-700"
            >
              <div className="px-4 py-2 space-y-1">
                {Object.entries(currentContent.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-green-400 hover:bg-slate-700 rounded-md"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-green-400/20 text-green-400 border-green-400">
                {language === 'hi' ? 'मिशन 2035' : 'Mission 2035'}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {currentContent.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-green-400 mb-4 font-semibold">
                {currentContent.hero.subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {currentContent.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => scrollToSection('mission')}
                >
                  <Target className="h-5 w-5 mr-2" />
                  {currentContent.hero.cta}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                >
                  <Play className="h-5 w-5 mr-2" />
                  {currentContent.hero.watchVideo}
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={healthyIndiaImg}
                alt="Healthy India Vision"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {currentContent.about.title}
            </h2>
            <p className="text-xl text-green-400 mb-4">
              {currentContent.about.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Stethoscope className="h-12 w-12 text-green-400 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">Dr. Divyanshu Patel</h3>
                      <p className="text-green-400">Integrative Medicine Expert</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {currentContent.about.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <Award className="h-5 w-5 text-green-400 mr-2" />
                      {currentContent.about.qualifications}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                       {["B.A.M.S", "MD(AM)", "MD(AT)", "PG.C.KS", "Integrative Medicine Cert."].map((qual, index) => (
                        <Badge key={index} variant="secondary" className="bg-green-400/20 text-green-400">
                          {qual}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="mt-6 bg-blue-500 hover:bg-blue-600">
                    <Download className="h-4 w-4 mr-2" />
                    {currentContent.about.downloadCV}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={villageCareImg}
                alt="Village Healthcare"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Health Knowledge Section */}
      <section id="knowledge" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {currentContent.knowledge.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {currentContent.knowledge.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentContent.knowledge.topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-700/50 border-slate-600 hover:border-green-400 transition-colors h-full">
                  <CardHeader>
                    <BookOpen className="h-8 w-8 text-green-400 mb-2" />
                    <CardTitle className="text-white">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{topic.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={yogaHealingImg}
              alt="Yoga and Healing"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent rounded-2xl flex items-end">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === 'hi' ? 'योग और प्राकृतिक उपचार' : 'Yoga & Natural Healing'}
                </h3>
                <p className="text-gray-200">
                  {language === 'hi' 
                    ? 'पारंपरिक ज्ञान और आधुनिक विज्ञान का संयोजन'
                    : 'Combining traditional wisdom with modern science'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rogmukt Bharat 2035 Mission Section */}
      <section id="mission" className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {currentContent.mission.title}
            </h2>
            <p className="text-xl text-green-400 mb-4">
              {currentContent.mission.subtitle}
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              {currentContent.mission.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="h-6 w-6 text-green-400 mr-2" />
                    {language === 'hi' ? 'हमारे लक्ष्य' : 'Our Goals'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {currentContent.mission.goals.map((goal, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-300"
                      >
                        <Leaf className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {goal}
                      </motion.li>
                    ))}
                  </ul>
                  <Separator className="my-6 bg-slate-600" />
                  <div className="text-center">
                    <p className="text-xl font-bold text-green-400 mb-4">
                      {currentContent.mission.appeal}
                    </p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                    >
                      <Users className="h-5 w-5 mr-2" />
                      {language === 'hi' ? 'अभी शामिल हों' : 'Join Now'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={meditationBooksImg}
                  alt="Meditation and Knowledge"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {language === 'hi' ? 'ज्ञान और ध्यान' : 'Knowledge & Meditation'}
                  </h3>
                  <p className="text-gray-200">
                    {language === 'hi' 
                      ? 'आंतरिक शांति और बाहरी स्वास्थ्य का संयोजन'
                      : 'Combining inner peace with outer health'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-300">
              {currentContent.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.services.list.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-700/50 border-slate-600 hover:border-blue-400 transition-colors h-full">
                  <CardHeader>
                    <Heart className="h-8 w-8 text-blue-400 mb-2" />
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ebook Library Section */}
      <section id="ebooks" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {currentContent.ebooks.title}
            </h2>
            <p className="text-xl text-gray-300">
              {currentContent.ebooks.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.ebooks.books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-700/50 border-slate-600 hover:border-green-400 transition-colors h-full">
                  <CardHeader>
                    <BookOpen className="h-8 w-8 text-green-400 mb-2" />
                    <CardTitle className="text-white">{book.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{book.desc}</p>
                    <Button
                      size="sm"
                      className="w-full bg-green-500 hover:bg-green-600"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {language === 'hi' ? 'डाउनलोड' : 'Download'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-gray-300">
              {currentContent.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white">
                    {language === 'hi' ? 'संपर्क जानकारी' : 'Contact Information'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center">
                    <MessageCircle className="h-6 w-6 text-green-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">{currentContent.contact.whatsapp}</p>
                      <p className="text-gray-400 text-sm">
                        {language === 'hi' ? 'तत्काल सहायता के लिए' : 'For immediate assistance'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">{currentContent.contact.appointment}</p>
                      <p className="text-gray-400 text-sm">
                        {language === 'hi' ? 'अपॉइंटमेंट बुकिंग' : 'Appointment booking'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">{currentContent.contact.email}</p>
                      <p className="text-gray-400 text-sm">
                        {language === 'hi' ? 'सामान्य पूछताछ' : 'General inquiries'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-red-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">{currentContent.contact.address}</p>
                      <p className="text-gray-400 text-sm">
                        {language === 'hi' ? 'मुख्य केंद्र' : 'Main center'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white">
                    {language === 'hi' ? 'त्वरित संपर्क' : 'Quick Contact'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    {language === 'hi' ? 'व्हाट्सऐप पर संदेश भेजें' : 'Message on WhatsApp'}
                  </Button>
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    size="lg"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}
                  </Button>
                  <Button
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                    size="lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    {language === 'hi' ? 'ईमेल भेजें' : 'Send Email'}
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">
                    {language === 'hi' 
                      ? '1000+ संतुष्ट रोगियों द्वारा 5-स्टार रेटिंग'
                      : '5-star rating by 1000+ satisfied patients'
                    }
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {language === 'hi' ? 'समीक्षाएं देखें' : 'View Reviews'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <Heart className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-2xl font-bold text-white">
                {language === 'hi' ? 'रोगमुक्त भारत' : 'Rogmukt Bharat'}
              </span>
            </div>
            <p className="text-lg text-gray-300 mb-4">
              {currentContent.footer.text}
            </p>
            <p className="text-sm text-gray-400 mb-6">
              {currentContent.footer.powered}
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-400">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
            <Separator className="my-6 bg-slate-700" />
            <p className="text-xs text-gray-500">
              © 2024 Rogmukt Bharat Mission. {language === 'hi' ? 'सभी अधिकार सुरक्षित।' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

