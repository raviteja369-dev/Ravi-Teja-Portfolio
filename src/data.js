export const portfolio = {
  name: 'Ravi Teja Akula', shortName: 'Ravi Teja', initials: 'RT',
  headline: 'AI/ML Engineer · Backend Developer', location: 'Vijayawada, India',
  intro: 'I’m an AI/ML and backend engineering enthusiast focused on building intelligent applications, machine learning solutions, and reliable backend systems. My work spans predictive modeling, NLP, generative AI integration, data pipelines, and full-stack development.',
  education: { school: 'Bennett University', place: 'Greater Noida, India', degree: 'B.Tech in Computer Science Engineering', focus: 'Artificial Intelligence specialization', dates: '2023–2027' },
  experience: [{ company: 'Amenity Forge', role: 'ML & Backend Engineer Intern', place: 'Hyderabad, India', dates: 'September 2025 – January 2026', bullets: ['Developed machine-learning and backend modules using Python, TensorFlow, Scikit-learn, Node.js, and MongoDB for AI-driven products.', 'Built REST APIs and data preprocessing pipelines connecting ML models and backend services.', 'Performed feature engineering, model evaluation, and hyperparameter tuning, improving model accuracy by 8–12% over baseline.', 'Contributed to model integration, API testing, debugging, deployment, and workflow automation.'] }],
  projects: [
    { id:'healthcare', name:'AI Healthcare Platform', date:'January 2026', category:'AI / Full stack', icon:'heart', color:'rose', summary:'An AI-assisted healthcare platform combining predictive risk models, NLP, and personalized guidance.', problem:'Healthcare workflows can benefit from bringing structured risk prediction together with accessible symptom exploration.', solution:'A full-stack platform with TensorFlow/Keras predictive models, NLP pipelines, and Google Gemini integration.', stack:['TensorFlow','Keras','Random Forest','XGBoost','Node.js','Express.js','React.js','MongoDB'], features:['Risk prediction using Random Forest and XGBoost','AI-assisted symptom analysis and personalized recommendations','JWT authentication and REST APIs','Resume-reported 92% and 94% accuracy for respective prediction tasks'], architecture:'React client and Node/Express API backed by MongoDB, integrating predictive models and NLP services.', repo:'https://github.com/raviteja369-dev/Uphealth', demo:null },
    { id:'migraine', name:'Menstrual Migraine Predictor', date:'February 2025', category:'AI / Healthcare', icon:'activity', color:'violet', summary:'A symptom-based machine-learning application for menstrual migraine prediction.', problem:'Analyzing clinical symptom data requires careful feature selection and model tuning.', solution:'A Scikit-learn model paired with a React interface and REST API.', stack:['Python','Scikit-learn','React.js','Tailwind CSS','REST APIs'], features:['Clinical symptom data processing','Feature selection and hyperparameter tuning','Accuracy reported improved from 89% to 94%','Resume-reported F1-score of 0.93'], architecture:'Machine-learning service exposed through REST APIs to a React and Tailwind CSS interface.', repo:'https://github.com/raviteja369-dev/Menustral-Migraine-Predictor', demo:null },
    { id:'whatsapp', name:'WhatsApp Chat Analyzer', date:'May 2026', category:'Data / Visualization', icon:'messages', color:'green', summary:'Interactive exploration of exported chat activity, language, and engagement patterns.', problem:'Chat exports contain noisy, multilingual text that makes activity patterns difficult to inspect.', solution:'A Streamlit analytics interface that preprocesses chat exports and visualizes user and timestamp activity.', stack:['Python','Streamlit','Pandas','Matplotlib','WordCloud'], features:['Timestamp and user activity analysis','Multilingual text cleaning','Emoji usage and engagement patterns','Interactive analytics and word clouds'], architecture:'Python preprocessing and analytics pipeline rendered through a Streamlit interface.', repo:'https://github.com/raviteja369-dev/Whatsapp-Chat-Analyzer', demo:null }
  ],
  skills: {
    'Programming':['Python','Java','C++','SQL','JavaScript','HTML','CSS'],
    'AI / Machine Learning':['Machine Learning','Deep Learning','Artificial Intelligence','NLP','Generative AI','Data Science','TensorFlow','Keras','Scikit-learn'],
    'Backend / Frontend':['Node.js','Express.js','React.js','REST APIs'],
    'Data / Visualization':['NumPy','Pandas','Matplotlib','MongoDB'],
    'Tools':['Git','GitHub','VS Code','PyCharm','Jupyter Notebook','Google Colab']
  },
  research:{ title:'Optimized MM-CoLLM: A Multimodal Framework for Product Recommendation', venue:'Presented at the 4th International Conference on Networks and Cryptology, Jawaharlal Nehru University, New Delhi', status:'Under review (as listed in the resume)' },
  leadership:[
    {role:'Internship Division Head',company:'Amenity Forge',dates:'September 2025 – January 2026',description:'Coordinated interns, assigned responsibilities, tracked progress, facilitated communication, organized technical tasks, and supported timely delivery.'},
    {role:'Company Event Volunteer',company:'Amenity Forge',dates:'September 2025 – January 2026',description:'Supported event planning, logistics, participant coordination, and event execution.'}
  ],
  achievements:['Ranked 26th among approximately 700 teams in Bennett University’s Smart India Hackathon internal selection, September 2025.','Represented Bennett University at the national level in the Smart India Hackathon, October 2025.'],
  certificates:[
    {name:'AWS Certified Machine Learning Associate',issuer:'AWS',date:'October 2026',url:'https://cp.certmetrics.com/amazon/en/public/verify/credential/489ebe5db94b4a5d8ed4d82fc1b44a52'},
    {name:'Algorithmic Toolbox',issuer:'UC San Diego',date:'March 2025',url:'https://www.coursera.org/account/accomplishments/certificate/DIVPW7ZZU9OK'},
    {name:'Introduction to Machine Learning',issuer:'Duke University',date:'October 2024',url:'https://www.coursera.org/account/accomplishments/certificate/KOF12GEEOGRM'},
    {name:'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',issuer:'DeepLearning.AI',date:'March 2025',url:'https://www.coursera.org/account/accomplishments/certificate/4FJLWP68APV2'},
    {name:'Databases and SQL for Data Science with Python',issuer:'IBM',date:'October 2024',url:'https://www.coursera.org/account/accomplishments/certificate/MXI5KWFX69N3'},
    {name:'Build Basic Generative Adversarial Networks',issuer:'DeepLearning.AI',date:'March 2026',url:'https://www.coursera.org/account/accomplishments/certificate/MSA24P4M9V8B'}
  ],
  contact:{ email:'akularaviteja2004@gmail.com', github:'https://github.com/raviteja369-dev', linkedin:'https://www.linkedin.com/in/akula-ravi-teja-66ab00288' },
  resume:{ filename:'Ravi Teja resume.pdf', available:true, path:'/resume.pdf' }
};

export const apps = [
  {id:'finder',label:'Finder',icon:'finder',tone:'blue'}, {id:'about',label:'About Me',icon:'user',tone:'indigo'},
  {id:'projects',label:'Projects',icon:'layers',tone:'orange'}, {id:'skills',label:'Skills',icon:'sparkles',tone:'violet'},
  {id:'terminal',label:'Terminal',icon:'terminal',tone:'slate'}, {id:'resume',label:'Resume',icon:'file',tone:'red'},
  {id:'education',label:'Education',icon:'school',tone:'blue'}, {id:'certificates',label:'Certificates',icon:'award',tone:'amber'},
  {id:'contact',label:'Contact',icon:'mail',tone:'green'}, {id:'settings',label:'Settings',icon:'settings',tone:'slate'}
];
