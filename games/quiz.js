
// ===================================
// GENERAL KNOWLEDGE QUIZ
// ===================================

// QUESTION BANK
// More questions will be added in the next batches.

const questionBank = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Who invented the telephone?",
        options: [
            "Thomas Edison",
            "Alexander Graham Bell",
            "Isaac Newton",
            "Albert Einstein"
        ],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which language is used to structure web pages?",
        options: ["CSS", "JavaScript", "Python", "HTML"],
        answer: 3,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["Five", "Six", "Seven", "Eight"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "Which is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Ag", "Au", "Fe", "Go"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "How many bits are there in one byte?",
        options: ["4", "8", "16", "32"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Hydrogen"
        ],
        answer: 2,
        category: "Science",
        difficulty: "Easy"
    },
    // ===================================
    // QUESTIONS 11–30: SCIENCE
    // ===================================

    {
        question: "What is the chemical formula of water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which organ pumps blood throughout the human body?",
        options: ["Lungs", "Brain", "Heart", "Kidneys"],
        answer: 2,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "What is the approximate speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "30,000 km/s", "500,000 km/s"],
        answer: 0,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "Which vitamin is produced in the skin through sunlight exposure?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: 3,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "What is the hardest naturally occurring mineral?",
        options: ["Quartz", "Diamond", "Iron", "Granite"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which planet has the most prominent ring system?",
        options: ["Mars", "Venus", "Saturn", "Mercury"],
        answer: 2,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Watt", "Pascal", "Newton"],
        answer: 3,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which gas makes up most of Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
        answer: 0,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "What is the basic structural and functional unit of life?",
        options: ["Atom", "Cell", "Tissue", "Organ"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which part of a plant absorbs most water from the soil?",
        options: ["Leaves", "Flowers", "Root hairs", "Stem"],
        answer: 2,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "What is the pH value of pure water at 25°C?",
        options: ["5", "6", "8", "7"],
        answer: 3,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "Which blood cells help the body fight infections?",
        options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
        answer: 0,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which scientist proposed the three laws of motion?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Charles Darwin"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "What is the closest star to Earth?",
        options: ["Sirius", "Polaris", "The Sun", "Proxima Centauri"],
        answer: 2,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which instrument measures atmospheric pressure?",
        options: ["Thermometer", "Hygrometer", "Anemometer", "Barometer"],
        answer: 3,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "Which element has the chemical symbol Fe?",
        options: ["Iron", "Fluorine", "Francium", "Copper"],
        answer: 0,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "What is the largest organ of the human body?",
        options: ["Liver", "Skin", "Heart", "Lungs"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which process converts liquid water into water vapour?",
        options: ["Condensation", "Freezing", "Evaporation", "Melting"],
        answer: 2,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "What is the approximate value of Earth's gravitational acceleration?",
        options: ["4.9 m/s²", "12.8 m/s²", "15 m/s²", "9.8 m/s²"],
        answer: 3,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "Which particle has a negative electric charge?",
        options: ["Electron", "Proton", "Neutron", "Nucleus"],
        answer: 0,
        category: "Science",
        difficulty: "Medium"
    },

    // ===================================
    // QUESTIONS 31–42: TECHNOLOGY
    // ===================================

    {
        question: "Who is widely known as the father of the computer?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What does CPU stand for?",
        options: ["Computer Personal Unit", "Central Program Utility", "Central Processing Unit", "Control Processing User"],
        answer: 2,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which language is primarily used to style web pages?",
        options: ["HTML", "Python", "Java", "CSS"],
        answer: 3,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which number system uses only 0 and 1?",
        options: ["Binary", "Decimal", "Octal", "Hexadecimal"],
        answer: 0,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What does URL stand for?",
        options: ["Universal Record Link", "Uniform Resource Locator", "Unified Reference Language", "User Resource Location"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        answer: 2,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Tree", "Graph", "Stack"],
        answer: 3,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Main Link", "Home Tool Markup Language"],
        answer: 0,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which protocol is commonly used to transfer web pages securely?",
        options: ["FTP", "HTTPS", "SMTP", "POP3"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "What does RAM stand for?",
        options: ["Read Access Memory", "Run Application Module", "Random Access Memory", "Rapid Action Machine"],
        answer: 2,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which company created the Java programming language?",
        options: ["Microsoft", "IBM", "Apple", "Sun Microsystems"],
        answer: 3,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "What does SQL primarily help users do?",
        options: ["Manage and query relational databases", "Edit images", "Create animations", "Design hardware"],
        answer: 0,
        category: "Technology",
        difficulty: "Medium"
    },

    // ===================================
    // QUESTIONS 43–54: GEOGRAPHY
    // ===================================

    {
        question: "Which is the largest continent by area?",
        options: ["Africa", "Asia", "Europe", "Australia"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which river is traditionally regarded as the longest in Africa?",
        options: ["Amazon", "Yangtze", "Danube", "Nile"],
        answer: 3,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "Thailand", "South Korea"],
        answer: 0,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which is the smallest continent by land area?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Mount Everest is part of which mountain range?",
        options: ["Andes", "Alps", "Himalayas", "Rockies"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which country has the largest land area?",
        options: ["Canada", "China", "United States", "Russia"],
        answer: 3,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which ocean lies between Africa and Australia?",
        options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Southern Ocean"],
        answer: 0,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which desert is the largest hot desert in the world?",
        options: ["Gobi", "Kalahari", "Sahara", "Arabian"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which imaginary line divides Earth into Northern and Southern Hemispheres?",
        options: ["Prime Meridian", "Tropic of Cancer", "Tropic of Capricorn", "Equator"],
        answer: 3,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which country is home to the ancient city of Petra?",
        options: ["Jordan", "Egypt", "Greece", "Turkey"],
        answer: 0,
        category: "Geography",
        difficulty: "Medium"
    },

    // ===================================
    // QUESTIONS 55–66: HISTORY
    // ===================================

    {
        question: "In which year did India gain independence?",
        options: ["1945", "1947", "1950", "1942"],
        answer: 1,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        answer: 2,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Which ancient civilization built the pyramids at Giza?",
        options: ["Romans", "Greeks", "Mesopotamians", "Ancient Egyptians"],
        answer: 3,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Who was the leader of India's non-violent independence movement?",
        options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh", "Sardar Patel"],
        answer: 0,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "In which year did the Berlin Wall fall?",
        options: ["1985", "1989", "1991", "1979"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who was the first Mughal emperor in India?",
        options: ["Akbar", "Humayun", "Babur", "Shah Jahan"],
        answer: 2,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Which ship sank on its maiden voyage in 1912?",
        options: ["Britannic", "Lusitania", "Queen Mary", "Titanic"],
        answer: 3,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Who discovered the sea route to India around the Cape of Good Hope?",
        options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
        answer: 0,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Which ancient Indian emperor embraced Buddhism after the Kalinga War?",
        options: ["Chandragupta Maurya", "Ashoka", "Harsha", "Samudragupta"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "The French Revolution began in which year?",
        options: ["1776", "1804", "1789", "1815"],
        answer: 2,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Valentina Tereshkova", "Bessie Coleman", "Sally Ride", "Amelia Earhart"],
        answer: 3,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Which document was signed in 1215 to limit the English king's power?",
        options: ["Magna Carta", "Bill of Rights", "Declaration of Independence", "Treaty of Versailles"],
        answer: 0,
        category: "History",
        difficulty: "Medium"
    },

    // ===================================
    // QUESTIONS 67–78: SPORTS
    // ===================================

    {
        question: "How many players from one team are on the field in a football match?",
        options: ["10", "11", "12", "9"],
        answer: 1,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which sport uses the terms love, deuce and ace?",
        options: ["Badminton", "Cricket", "Tennis", "Hockey"],
        answer: 2,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "How many rings are there in the Olympic symbol?",
        options: ["Four", "Six", "Seven", "Five"],
        answer: 3,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which country hosted the first modern Olympic Games in 1896?",
        options: ["Greece", "France", "Italy", "United Kingdom"],
        answer: 0,
        category: "Sports",
        difficulty: "Medium"
    },
    {
        question: "How many legal deliveries are there in a standard cricket over?",
        options: ["5", "6", "8", "10"],
        answer: 1,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which sport is associated with Wimbledon?",
        options: ["Golf", "Cricket", "Tennis", "Football"],
        answer: 2,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "What is the standard maximum score with one dart in a game of darts?",
        options: ["20", "40", "50", "60"],
        answer: 3,
        category: "Sports",
        difficulty: "Medium"
    },
    {
        question: "Which country won the first FIFA World Cup in 1930?",
        options: ["Uruguay", "Brazil", "Argentina", "Italy"],
        answer: 0,
        category: "Sports",
        difficulty: "Medium"
    },
    {
        question: "In basketball, how many points is a successful free throw worth?",
        options: ["2", "1", "3", "4"],
        answer: 1,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which sport uses a shuttlecock?",
        options: ["Squash", "Table tennis", "Badminton", "Volleyball"],
        answer: 2,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "What is the term for three consecutive strikes in bowling?",
        options: ["Spare", "Turkey", "Split", "Double"],
        answer: 1,
        category: "Sports",
        difficulty: "Medium"
    },
    {
        question: "How long is a standard outdoor marathon?",
        options: ["21.1 km", "30 km", "40 km", "42.195 km"],
        answer: 3,
        category: "Sports",
        difficulty: "Medium"
    },

    // ===================================
    // QUESTIONS 79–88: MATHEMATICS
    // ===================================

    {
        question: "What is the value of 12 × 12?",
        options: ["144", "124", "132", "154"],
        answer: 0,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the sum of the interior angles of a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the square root of 169?",
        options: ["11", "12", "13", "14"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "0", "3", "2"],
        answer: 3,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is 15% of 200?",
        options: ["30", "25", "35", "40"],
        answer: 0,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the value of pi approximately?",
        options: ["2.14", "3.14", "4.13", "3.41"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the next number in the sequence 2, 4, 8, 16, ...?",
        options: ["24", "30", "32", "36"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "How many degrees are there in a right angle?",
        options: ["45°", "60°", "180°", "90°"],
        answer: 3,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the perimeter of a square with side length 5 cm?",
        options: ["20 cm", "25 cm", "10 cm", "15 cm"],
        answer: 0,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the median of 3, 7, 9, 11, 15?",
        options: ["7", "9", "11", "15"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Medium"
    },

    // ===================================
    // QUESTIONS 89–98: LITERATURE AND ARTS
    // ===================================

    {
        question: "Who wrote the play Romeo and Juliet?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: 2,
        category: "Literature and Arts",
        difficulty: "Easy"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
        answer: 3,
        category: "Literature and Arts",
        difficulty: "Easy"
    },
    {
        question: "Who wrote the Harry Potter book series?",
        options: ["J. K. Rowling", "Suzanne Collins", "Roald Dahl", "C. S. Lewis"],
        answer: 0,
        category: "Literature and Arts",
        difficulty: "Easy"
    },
    {
        question: "Which musical instrument typically has 88 keys?",
        options: ["Violin", "Piano", "Flute", "Guitar"],
        answer: 1,
        category: "Literature and Arts",
        difficulty: "Easy"
    },
    {
        question: "Who wrote the novel The Jungle Book?",
        options: ["R. K. Narayan", "George Orwell", "Rudyard Kipling", "H. G. Wells"],
        answer: 2,
        category: "Literature and Arts",
        difficulty: "Medium"
    },
    {
        question: "Which art movement is associated with Salvador Dalí?",
        options: ["Cubism", "Impressionism", "Realism", "Surrealism"],
        answer: 3,
        category: "Literature and Arts",
        difficulty: "Medium"
    },
    {
        question: "Who wrote the novel Pride and Prejudice?",
        options: ["Jane Austen", "Emily Brontë", "Virginia Woolf", "Mary Shelley"],
        answer: 0,
        category: "Literature and Arts",
        difficulty: "Easy"
    },
    {
        question: "Which Indian classical dance form originated in Tamil Nadu?",
        options: ["Kathak", "Bharatanatyam", "Odissi", "Manipuri"],
        answer: 1,
        category: "Literature and Arts",
        difficulty: "Medium"
    },
    {
        question: "Who composed the famous Four Seasons violin concertos?",
        options: ["Mozart", "Beethoven", "Antonio Vivaldi", "Chopin"],
        answer: 2,
        category: "Literature and Arts",
        difficulty: "Medium"
    },
    {
        question: "Which literary award is presented annually in Sweden?",
        options: ["Booker Prize", "Pulitzer Prize", "Hugo Award", "Nobel Prize in Literature"],
        answer: 3,
        category: "Literature and Arts",
        difficulty: "Medium"
    },
    
// ===================================
// QUESTIONS 109–122: INDIAN HISTORY AND CULTURE
// ===================================

{
    question: "Who was the first Prime Minister of independent India?",
    options: ["Sardar Patel", "Jawaharlal Nehru", "Rajendra Prasad", "Lal Bahadur Shastri"],
    answer: 1,
    category: "Indian History and Culture",
    difficulty: "Easy"
},
{
    question: "Which Indian monument is located in Agra?",
    options: ["India Gate", "Charminar", "Taj Mahal", "Gateway of India"],
    answer: 2,
    category: "Indian History and Culture",
    difficulty: "Easy"
},
{
    question: "Who composed India's national anthem?",
    options: ["Bankim Chandra Chatterjee", "Sarojini Naidu", "Subramania Bharati", "Rabindranath Tagore"],
    answer: 3,
    category: "Indian History and Culture",
    difficulty: "Easy"
},
{
    question: "Which Indian festival is popularly known as the Festival of Lights?",
    options: ["Diwali", "Holi", "Eid", "Pongal"],
    answer: 0,
    category: "Indian History and Culture",
    difficulty: "Easy"
},
{
    question: "Who founded the Maurya Empire?",
    options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
    answer: 1,
    category: "Indian History and Culture",
    difficulty: "Medium"
},
{
    question: "In which Indian state is the Konark Sun Temple located?",
    options: ["Gujarat", "Rajasthan", "Odisha", "Kerala"],
    answer: 2,
    category: "Indian History and Culture",
    difficulty: "Medium"
},
{
    question: "Who was the first woman Prime Minister of India?",
    options: ["Pratibha Patil", "Sarojini Naidu", "Sushma Swaraj", "Indira Gandhi"],
    answer: 3,
    category: "Indian History and Culture",
    difficulty: "Easy"
},
{
    question: "Which classical dance form originated in Kerala?",
    options: ["Kathakali", "Bharatanatyam", "Kathak", "Kuchipudi"],
    answer: 0,
    category: "Indian History and Culture",
    difficulty: "Medium"
},
{
    question: "Who wrote the Indian national song Vande Mataram?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Sarojini Naidu"],
    answer: 1,
    category: "Indian History and Culture",
    difficulty: "Medium"
},
{
    question: "Which city is known as the Pink City of India?",
    options: ["Udaipur", "Jodhpur", "Jaipur", "Bhopal"],
    answer: 2,
    category: "Indian History and Culture",
    difficulty: "Easy"
},
{
    question: "Who was the founder of the Sikh Empire?",
    options: ["Guru Gobind Singh", "Banda Singh Bahadur", "Maharaja Ranjit Singh", "Sher Shah Suri"],
    answer: 2,
    category: "Indian History and Culture",
    difficulty: "Medium"
},
{
    question: "Which movement was launched by Mahatma Gandhi in 1942?",
    options: ["Swadeshi Movement", "Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement"],
    answer: 3,
    category: "Indian History and Culture",
    difficulty: "Medium"
},
{
    question: "Where is the Golden Temple located?",
    options: ["Amritsar", "Delhi", "Chandigarh", "Ludhiana"],
    answer: 0,
    category: "Indian History and Culture",
    difficulty: "Easy"
},
{
    question: "Which ancient university was located in present-day Bihar?",
    options: ["Taxila", "Nalanda", "Vikramashila", "Takshashila"],
    answer: 1,
    category: "Indian History and Culture",
    difficulty: "Medium"
},

// ===================================
// QUESTIONS 123–134: SPACE AND ASTRONOMY
// ===================================

{
    question: "Which planet is the largest in our solar system?",
    options: ["Saturn", "Earth", "Jupiter", "Neptune"],
    answer: 2,
    category: "Astronomy",
    difficulty: "Easy"
},
{
    question: "What is the name of Earth's natural satellite?",
    options: ["Phobos", "Europa", "Titan", "Moon"],
    answer: 3,
    category: "Astronomy",
    difficulty: "Easy"
},
{
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: 0,
    category: "Astronomy",
    difficulty: "Easy"
},
{
    question: "What is the name of the galaxy containing our solar system?",
    options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
    answer: 1,
    category: "Astronomy",
    difficulty: "Easy"
},
{
    question: "Which planet is famous for its Great Red Spot?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: 2,
    category: "Astronomy",
    difficulty: "Medium"
},
{
    question: "What is the name of the first artificial satellite launched into space?",
    options: ["Apollo 11", "Explorer 1", "Voyager 1", "Sputnik 1"],
    answer: 3,
    category: "Astronomy",
    difficulty: "Medium"
},
{
    question: "Which planet rotates on its side with an extreme axial tilt?",
    options: ["Uranus", "Mercury", "Earth", "Mars"],
    answer: 0,
    category: "Astronomy",
    difficulty: "Medium"
},
{
    question: "What is the name of the force that keeps planets in orbit around the Sun?",
    options: ["Magnetism", "Gravity", "Friction", "Electricity"],
    answer: 1,
    category: "Astronomy",
    difficulty: "Easy"
},
{
    question: "Which Indian organization launched the Chandrayaan missions?",
    options: ["NASA", "ESA", "ISRO", "JAXA"],
    answer: 2,
    category: "Astronomy",
    difficulty: "Easy"
},
{
    question: "What is the name of the first human-made object to reach interstellar space?",
    options: ["Sputnik 1", "Apollo 13", "New Horizons", "Voyager 1"],
    answer: 3,
    category: "Astronomy",
    difficulty: "Hard"
},
{
    question: "What is the closest major galaxy to the Milky Way?",
    options: ["Andromeda Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy", "Triangulum Galaxy"],
    answer: 0,
    category: "Astronomy",
    difficulty: "Medium"
},
{
    question: "Which planet has the shortest year in our solar system?",
    options: ["Venus", "Mercury", "Mars", "Earth"],
    answer: 1,
    category: "Astronomy",
    difficulty: "Medium"
},

// ===================================
// QUESTIONS 135–148: PHYSICS AND CHEMISTRY
// ===================================

{
    question: "What is the SI unit of energy?",
    options: ["Newton", "Watt", "Joule", "Pascal"],
    answer: 2,
    category: "Physics and Chemistry",
    difficulty: "Easy"
},
{
    question: "Which gas is commonly used in electric bulbs?",
    options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Argon"],
    answer: 3,
    category: "Physics and Chemistry",
    difficulty: "Medium"
},
{
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "S", "N"],
    answer: 0,
    category: "Physics and Chemistry",
    difficulty: "Easy"
},
{
    question: "Which type of lens is used to correct short-sightedness?",
    options: ["Convex lens", "Concave lens", "Cylindrical lens only", "Bifocal lens"],
    answer: 1,
    category: "Physics and Chemistry",
    difficulty: "Medium"
},
{
    question: "What is the boiling point of water at standard atmospheric pressure?",
    options: ["50°C", "90°C", "100°C", "120°C"],
    answer: 2,
    category: "Physics and Chemistry",
    difficulty: "Easy"
},
{
    question: "Which subatomic particle is found in the nucleus and has no electric charge?",
    options: ["Electron", "Proton", "Positron", "Neutron"],
    answer: 3,
    category: "Physics and Chemistry",
    difficulty: "Medium"
},
{
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Si", "Au", "Al"],
    answer: 0,
    category: "Physics and Chemistry",
    difficulty: "Easy"
},
{
    question: "Which law states that pressure and volume of a gas are inversely proportional at constant temperature?",
    options: ["Newton's Law", "Boyle's Law", "Ohm's Law", "Faraday's Law"],
    answer: 1,
    category: "Physics and Chemistry",
    difficulty: "Hard"
},
{
    question: "Which instrument is used to measure electric current?",
    options: ["Voltmeter", "Barometer", "Ammeter", "Thermometer"],
    answer: 2,
    category: "Physics and Chemistry",
    difficulty: "Medium"
},
{
    question: "What is the chemical formula of common table salt?",
    options: ["H2O", "CO2", "HCl", "NaCl"],
    answer: 3,
    category: "Physics and Chemistry",
    difficulty: "Easy"
},
{
    question: "Which colour of visible light has the shortest wavelength?",
    options: ["Violet", "Red", "Yellow", "Green"],
    answer: 0,
    category: "Physics and Chemistry",
    difficulty: "Medium"
},
{
    question: "What is the SI unit of electrical resistance?",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    answer: 1,
    category: "Physics and Chemistry",
    difficulty: "Easy"
},
{
    question: "Which element is a liquid at ordinary room temperature?",
    options: ["Iron", "Copper", "Mercury", "Aluminium"],
    answer: 2,
    category: "Physics and Chemistry",
    difficulty: "Easy"
},
{
    question: "What is the approximate value of the speed of sound in air at room temperature?",
    options: ["100 m/s", "150 m/s", "500 m/s", "343 m/s"],
    answer: 3,
    category: "Physics and Chemistry",
    difficulty: "Medium"
},

// ===================================
// QUESTIONS 149–160: BIOLOGY
// ===================================

{
    question: "Which part of the human brain controls balance and coordination?",
    options: ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
    answer: 0,
    category: "Biology",
    difficulty: "Medium"
},
{
    question: "What is the largest bone in the human body?",
    options: ["Tibia", "Femur", "Humerus", "Radius"],
    answer: 1,
    category: "Biology",
    difficulty: "Easy"
},
{
    question: "Which molecule carries genetic information in most living organisms?",
    options: ["ATP", "Glucose", "DNA", "Hemoglobin"],
    answer: 2,
    category: "Biology",
    difficulty: "Easy"
},
{
    question: "Which organ produces insulin?",
    options: ["Liver", "Kidney", "Stomach", "Pancreas"],
    answer: 3,
    category: "Biology",
    difficulty: "Medium"
},
{
    question: "What is the process by which green plants make their food?",
    options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
    answer: 0,
    category: "Biology",
    difficulty: "Easy"
},
{
    question: "Which part of the cell contains most of its genetic material?",
    options: ["Cell membrane", "Nucleus", "Cytoplasm", "Ribosome"],
    answer: 1,
    category: "Biology",
    difficulty: "Easy"
},
{
    question: "Which blood group is commonly called the universal red-cell donor?",
    options: ["AB positive", "A negative", "O negative", "B positive"],
    answer: 2,
    category: "Biology",
    difficulty: "Medium"
},
{
    question: "Which organs filter waste products from the blood to produce urine?",
    options: ["Lungs", "Heart", "Liver", "Kidneys"],
    answer: 3,
    category: "Biology",
    difficulty: "Easy"
},
{
    question: "Which vitamin is essential for normal blood clotting?",
    options: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B1"],
    answer: 0,
    category: "Biology",
    difficulty: "Medium"
},
{
    question: "What is the study of fungi called?",
    options: ["Ecology", "Mycology", "Botany", "Zoology"],
    answer: 1,
    category: "Biology",
    difficulty: "Hard"
},
{
    question: "Which structure in the lungs is responsible for gas exchange?",
    options: ["Bronchi", "Trachea", "Alveoli", "Larynx"],
    answer: 2,
    category: "Biology",
    difficulty: "Medium"
},
{
    question: "Which scientist is known for proposing the theory of evolution by natural selection?",
    options: ["Gregor Mendel", "Louis Pasteur", "Alexander Fleming", "Charles Darwin"],
    answer: 3,
    category: "Biology",
    difficulty: "Easy"
},

// ===================================
// QUESTIONS 161–174: COMPUTER SCIENCE
// ===================================

{
    question: "Who developed the Python programming language?",
    options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"],
    answer: 0,
    category: "Computer Science",
    difficulty: "Medium"
},
{
    question: "What does HTTP stand for?",
    options: ["High Transfer Text Protocol", "Hypertext Transfer Protocol", "Hyperlink Text Transfer Program", "Home Tool Transfer Protocol"],
    answer: 1,
    category: "Computer Science",
    difficulty: "Easy"
},
{
    question: "Which of these is an example of an operating system?",
    options: ["Oracle", "Google Chrome", "Linux", "MySQL"],
    answer: 2,
    category: "Computer Science",
    difficulty: "Easy"
},
{
    question: "What is the main function of an IP address?",
    options: ["Store files", "Encrypt passwords", "Display websites", "Identify a device or network interface on an IP network"],
    answer: 3,
    category: "Computer Science",
    difficulty: "Medium"
},
{
    question: "Which sorting algorithm repeatedly divides a list into smaller parts and merges them?",
    options: ["Merge Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
    answer: 0,
    category: "Computer Science",
    difficulty: "Medium"
},
{
    question: "What does GUI stand for?",
    options: ["General Utility Interface", "Graphical User Interface", "Global User Internet", "Graphic Universal Input"],
    answer: 1,
    category: "Computer Science",
    difficulty: "Easy"
},
{
    question: "Which data structure is commonly used in Breadth-First Search?",
    options: ["Stack", "Heap", "Queue", "Hash table"],
    answer: 2,
    category: "Computer Science",
    difficulty: "Medium"
},
{
    question: "What does DNS translate domain names into?",
    options: ["Email messages", "Passwords", "HTML files", "IP addresses"],
    answer: 3,
    category: "Computer Science",
    difficulty: "Medium"
},
{
    question: "Which company developed the Android operating system initially?",
    options: ["Android Inc.", "Microsoft", "Nokia", "IBM"],
    answer: 0,
    category: "Computer Science",
    difficulty: "Medium"
},
{
    question: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answer: 1,
    category: "Computer Science",
    difficulty: "Medium"
},
{
    question: "Which language is commonly used to query relational databases?",
    options: ["CSS", "XML", "SQL", "Bash"],
    answer: 2,
    category: "Computer Science",
    difficulty: "Easy"
},
{
    question: "What does API stand for?",
    options: ["Application Program Internet", "Advanced Programming Input", "Applied Process Integration", "Application Programming Interface"],
    answer: 3,
    category: "Computer Science",
    difficulty: "Easy"
},
{
    question: "Which of these is a version control system?",
    options: ["Git", "Docker", "Apache", "Linux"],
    answer: 0,
    category: "Computer Science",
    difficulty: "Easy"
},
{
    question: "What is the main purpose of a compiler?",
    options: ["Browse the internet", "Translate source code into another form, often machine code", "Manage computer memory physically", "Create database tables"],
    answer: 1,
    category: "Computer Science",
    difficulty: "Medium"
},

// ===================================
// QUESTIONS 175–186: BUSINESS AND ECONOMICS
// ===================================

{
    question: "What does GDP stand for?",
    options: ["General Domestic Product", "Global Development Plan", "Gross Domestic Product", "Gross Development Process"],
    answer: 2,
    category: "Business and Economics",
    difficulty: "Easy"
},
{
    question: "What is inflation?",
    options: ["A fall in population", "An increase in exports only", "A decrease in employment", "A general rise in prices over time"],
    answer: 3,
    category: "Business and Economics",
    difficulty: "Easy"
},
{
    question: "Which institution is responsible for monetary policy in India?",
    options: ["Reserve Bank of India", "State Bank of India", "NITI Aayog", "SEBI"],
    answer: 0,
    category: "Business and Economics",
    difficulty: "Medium"
},
{
    question: "What is the term for the total value of goods and services produced within a country in a given period?",
    options: ["National debt", "GDP", "Trade deficit", "Fiscal policy"],
    answer: 1,
    category: "Business and Economics",
    difficulty: "Medium"
},
{
    question: "What does a consumer generally pay when purchasing goods in addition to the listed price, where applicable?",
    options: ["Dividend", "Interest", "Tax", "Salary"],
    answer: 2,
    category: "Business and Economics",
    difficulty: "Easy"
},
{
    question: "What is a monopoly?",
    options: ["A market with many sellers", "A market with two buyers", "A market with no products", "A market dominated by a single seller"],
    answer: 3,
    category: "Business and Economics",
    difficulty: "Medium"
},
{
    question: "What is the term for money earned from investments or business activities?",
    options: ["Income", "Expense", "Debt", "Liability"],
    answer: 0,
    category: "Business and Economics",
    difficulty: "Easy"
},
{
    question: "Which financial statement shows a company's assets, liabilities and equity at a particular date?",
    options: ["Cash receipt", "Balance sheet", "Sales invoice", "Purchase order"],
    answer: 1,
    category: "Business and Economics",
    difficulty: "Medium"
},
{
    question: "What does a budget deficit mean?",
    options: ["Income is greater than spending", "Income equals spending", "Spending exceeds income", "There is no government spending"],
    answer: 2,
    category: "Business and Economics",
    difficulty: "Medium"
},
{
    question: "What is the term for the price at which buyers and sellers agree to trade?",
    options: ["Production cost", "Book value", "Tax rate", "Market price"],
    answer: 3,
    category: "Business and Economics",
    difficulty: "Easy"
},
{
    question: "Which organization regulates the securities market in India?",
    options: ["SEBI", "RBI", "ISRO", "IRDAI"],
    answer: 0,
    category: "Business and Economics",
    difficulty: "Medium"
},
{
    question: "What is the opportunity cost of a decision?",
    options: ["The total money spent", "The value of the next best alternative given up", "The profit earned", "The tax paid"],
    answer: 1,
    category: "Business and Economics",
    difficulty: "Hard"
},

// ===================================
// QUESTIONS 187–196: WORLD GEOGRAPHY
// ===================================

{
    question: "Which country is famous for the city of Istanbul?",
    options: ["Greece", "Italy", "Turkey", "Spain"],
    answer: 2,
    category: "Geography",
    difficulty: "Easy"
},
{
    question: "Which is the world's largest island, excluding continents?",
    options: ["Madagascar", "Borneo", "New Guinea", "Greenland"],
    answer: 3,
    category: "Geography",
    difficulty: "Medium"
},
{
    question: "Which river flows through London?",
    options: ["River Thames", "River Seine", "River Danube", "River Rhine"],
    answer: 0,
    category: "Geography",
    difficulty: "Easy"
},
{
    question: "Which country has the city of Marrakech?",
    options: ["Algeria", "Morocco", "Tunisia", "Egypt"],
    answer: 1,
    category: "Geography",
    difficulty: "Medium"
},
{
    question: "Which strait separates Europe and Africa at their closest point?",
    options: ["Strait of Malacca", "Bering Strait", "Strait of Gibraltar", "Bosporus"],
    answer: 2,
    category: "Geography",
    difficulty: "Medium"
},
{
    question: "Which country is home to the ancient city of Machu Picchu?",
    options: ["Chile", "Bolivia", "Ecuador", "Peru"],
    answer: 3,
    category: "Geography",
    difficulty: "Easy"
},
{
    question: "Which is the capital of New Zealand?",
    options: ["Wellington", "Auckland", "Christchurch", "Hamilton"],
    answer: 0,
    category: "Geography",
    difficulty: "Easy"
},
{
    question: "Which sea lies between Europe and Africa?",
    options: ["Caribbean Sea", "Mediterranean Sea", "Baltic Sea", "Arabian Sea"],
    answer: 1,
    category: "Geography",
    difficulty: "Easy"
},
{
    question: "Which country has the most natural lakes?",
    options: ["Brazil", "Russia", "Canada", "Australia"],
    answer: 2,
    category: "Geography",
    difficulty: "Hard"
},
{
    question: "Which mountain range separates much of Europe from Asia?",
    options: ["Andes", "Alps", "Himalayas", "Ural Mountains"],
    answer: 3,
    category: "Geography",
    difficulty: "Medium"
},

// ===================================
// QUESTIONS 197–206: SPORTS
// ===================================

{
    question: "How many players are on court for one volleyball team during play?",
    options: ["6", "5", "7", "8"],
    answer: 0,
    category: "Sports",
    difficulty: "Easy"
},
{
    question: "In which sport is the Davis Cup awarded?",
    options: ["Badminton", "Tennis", "Golf", "Hockey"],
    answer: 1,
    category: "Sports",
    difficulty: "Medium"
},
{
    question: "Which country hosted the 2016 Summer Olympic Games?",
    options: ["China", "United Kingdom", "Brazil", "Japan"],
    answer: 2,
    category: "Sports",
    difficulty: "Easy"
},
{
    question: "What is the maximum score possible with a single throw in ten-pin bowling?",
    options: ["5", "8", "9", "10"],
    answer: 3,
    category: "Sports",
    difficulty: "Easy"
},
{
    question: "Which sport uses the terms birdie and eagle?",
    options: ["Golf", "Tennis", "Cricket", "Rugby"],
    answer: 0,
    category: "Sports",
    difficulty: "Easy"
},
{
    question: "How many players from one team are on the court in a standard basketball game?",
    options: ["6", "5", "7", "11"],
    answer: 1,
    category: "Sports",
    difficulty: "Easy"
},
{
    question: "Which country is traditionally associated with the origin of judo?",
    options: ["China", "South Korea", "Japan", "Thailand"],
    answer: 2,
    category: "Sports",
    difficulty: "Medium"
},
{
    question: "In chess, which piece can move in an L-shaped pattern?",
    options: ["Bishop", "Rook", "Queen", "Knight"],
    answer: 3,
    category: "Sports",
    difficulty: "Easy"
},
{
    question: "What is the name of the international governing body of football?",
    options: ["FIFA", "ICC", "IOC", "FIBA"],
    answer: 0,
    category: "Sports",
    difficulty: "Easy"
},
{
    question: "Which country hosts the famous Tour de France cycling race?",
    options: ["Spain", "France", "Italy", "Belgium"],
    answer: 1,
    category: "Sports",
    difficulty: "Easy"
},

    // Batch 3: Questions 207–304

    // World History (207–220)
    {
        question: "In which year did World War I begin?",
        options: ["1912", "1914", "1916", "1918"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "John Adams", "George Washington", "Thomas Jefferson"],
        answer: 2,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "The French Revolution began in which year?",
        options: ["1776", "1789", "1804", "1815"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who was known as the Maid of Orléans?",
        options: ["Cleopatra", "Joan of Arc", "Queen Victoria", "Marie Curie"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Which ancient civilization built the pyramids of Giza?",
        options: ["Romans", "Greeks", "Egyptians", "Persians"],
        answer: 2,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Who was the first emperor of Rome?",
        options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "The Berlin Wall fell in which year?",
        options: ["1985", "1987", "1989", "1991"],
        answer: 2,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who was the British Prime Minister during most of World War II?",
        options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Margaret Thatcher"],
        answer: 1,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Which empire was ruled by Suleiman the Magnificent?",
        options: ["Mughal Empire", "Ottoman Empire", "Roman Empire", "Mongol Empire"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Mother Teresa", "Marie Curie", "Jane Addams", "Pearl Buck"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Which ship sank on its maiden voyage in 1912?",
        options: ["Lusitania", "Titanic", "Britannic", "Queen Mary"],
        answer: 1,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Who led the Soviet Union during the Cuban Missile Crisis?",
        options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Mikhail Gorbachev"],
        answer: 2,
        category: "History",
        difficulty: "Hard"
    },
    {
        question: "Which ancient city was buried by the eruption of Mount Vesuvius in AD 79?",
        options: ["Athens", "Pompeii", "Sparta", "Carthage"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who was the first person to walk on the Moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
        answer: 2,
        category: "History",
        difficulty: "Easy"
    },

    // Indian Geography (221–232)
    {
        question: "Which is the longest river in India?",
        options: ["Yamuna", "Godavari", "Ganga", "Narmada"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which Indian state has the longest coastline?",
        options: ["Tamil Nadu", "Gujarat", "Kerala", "Maharashtra"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which is the highest mountain peak located entirely within India?",
        options: ["Nanda Devi", "Kanchenjunga", "Anamudi", "Kamet"],
        answer: 0,
        category: "Geography",
        difficulty: "Hard"
    },
    {
        question: "Which Indian state is famous for the Kaziranga National Park?",
        options: ["Assam", "Gujarat", "Rajasthan", "Odisha"],
        answer: 0,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "The Thar Desert is mainly located in which Indian state?",
        options: ["Punjab", "Gujarat", "Rajasthan", "Haryana"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which river is known as the Dakshin Ganga?",
        options: ["Krishna", "Godavari", "Kaveri", "Tungabhadra"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which is the largest freshwater lake in India?",
        options: ["Dal Lake", "Wular Lake", "Chilika Lake", "Sambhar Lake"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which Indian state has the largest area?",
        options: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which mountain range separates the Deccan Plateau from the coastal plains in western India?",
        options: ["Eastern Ghats", "Western Ghats", "Aravalli Range", "Vindhya Range"],
        answer: 1,
        category: "Geography",
        difficulty: "Hard"
    },
    {
        question: "Which Indian city is located on the banks of the Sabarmati River?",
        options: ["Jaipur", "Ahmedabad", "Lucknow", "Bhopal"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which state is home to the Sundarbans in India?",
        options: ["West Bengal", "Odisha", "Assam", "Andhra Pradesh"],
        answer: 0,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which is the southernmost point of mainland India?",
        options: ["Indira Point", "Kanyakumari", "Rameswaram", "Kochi"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },

    // Environment and Nature (233–246)
    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: 2,
        category: "Environment",
        difficulty: "Easy"
    },
    {
        question: "What is the main cause of tides on Earth?",
        options: ["Wind", "Moon's gravitational pull", "Earthquakes", "Ocean currents"],
        answer: 1,
        category: "Environment",
        difficulty: "Medium"
    },
    {
        question: "Which layer of the atmosphere contains the ozone layer?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        answer: 1,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "What is the process by which water changes into water vapour?",
        options: ["Condensation", "Freezing", "Evaporation", "Precipitation"],
        answer: 2,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which of these is a renewable energy source?",
        options: ["Coal", "Petroleum", "Solar energy", "Natural gas"],
        answer: 2,
        category: "Environment",
        difficulty: "Easy"
    },
    {
        question: "Which animal is commonly called the ship of the desert?",
        options: ["Horse", "Camel", "Donkey", "Elephant"],
        answer: 1,
        category: "Nature",
        difficulty: "Easy"
    },
    {
        question: "What is the largest living species of turtle?",
        options: ["Green sea turtle", "Leatherback sea turtle", "Loggerhead turtle", "Hawksbill turtle"],
        answer: 1,
        category: "Nature",
        difficulty: "Hard"
    },
    {
        question: "Which biome is characterized by permanently frozen subsoil?",
        options: ["Savanna", "Tundra", "Desert", "Rainforest"],
        answer: 1,
        category: "Environment",
        difficulty: "Hard"
    },
    {
        question: "What is the term for the variety of life in an ecosystem?",
        options: ["Population", "Biodiversity", "Climate", "Evolution"],
        answer: 1,
        category: "Environment",
        difficulty: "Medium"
    },
    {
        question: "Which animal is the largest mammal on Earth?",
        options: ["African elephant", "Blue whale", "Giraffe", "Hippopotamus"],
        answer: 1,
        category: "Nature",
        difficulty: "Easy"
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        answer: 2,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "What is the main source of energy for Earth's climate system?",
        options: ["The Moon", "The Sun", "Volcanoes", "Ocean tides"],
        answer: 1,
        category: "Environment",
        difficulty: "Easy"
    },
    {
        question: "Which of these animals is a marsupial?",
        options: ["Tiger", "Kangaroo", "Panda", "Wolf"],
        answer: 1,
        category: "Nature",
        difficulty: "Medium"
    },
    {
        question: "What is the name of the scientific study of fungi?",
        options: ["Botany", "Mycology", "Ecology", "Zoology"],
        answer: 1,
        category: "Science",
        difficulty: "Hard"
    },

    // Mathematics and Statistics (247–258)
    {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the value of pi approximately?",
        options: ["2.14", "3.14", "4.13", "3.41"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "How many degrees are there in a right angle?",
        options: ["45", "60", "90", "180"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the sum of the interior angles of a triangle?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is 15 percent of 200?",
        options: ["20", "25", "30", "35"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the next prime number after 7?",
        options: ["9", "10", "11", "13"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the median of 3, 7, 9, 11, and 15?",
        options: ["7", "9", "11", "15"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Medium"
    },
    {
        question: "What is the perimeter of a square with side length 8 cm?",
        options: ["16 cm", "24 cm", "32 cm", "64 cm"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the probability of getting heads when tossing a fair coin?",
        options: ["1/4", "1/3", "1/2", "1"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the value of 2 to the power of 5?",
        options: ["16", "25", "32", "64"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Medium"
    },
    {
        question: "How many sides does a regular hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the formula for the area of a circle?",
        options: ["2πr", "πr²", "πd", "4πr²"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Medium"
    },

    // Computer Science and Programming (259–272)
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Power Utility", "Central Program User", "Control Processing Unit"],
        answer: 0,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which data structure follows the FIFO principle?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which programming language is commonly used for styling web pages?",
        options: ["HTML", "CSS", "SQL", "C"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What does RAM stand for?",
        options: ["Read Access Memory", "Random Access Memory", "Run Active Memory", "Rapid Application Module"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which number system uses only 0 and 1?",
        options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
        answer: 2,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What does SQL primarily help users do?",
        options: ["Edit images", "Manage and query databases", "Create animations", "Design hardware"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Which of these is an example of an operating system?",
        options: ["Python", "Linux", "HTML", "MySQL"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What is the time complexity of binary search on a sorted array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Which protocol is commonly used to transfer web pages securely?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "What does URL stand for?",
        options: ["Uniform Resource Locator", "Universal Record Link", "Unified Routing Language", "User Reference Location"],
        answer: 0,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Which of these is a version control system?",
        options: ["Git", "Chrome", "Linux", "Apache"],
        answer: 0,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "In object-oriented programming, what is inheritance?",
        options: ["Hiding all data", "Creating a class from another class", "Repeating a loop", "Deleting an object"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Which HTML element is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What is the main purpose of an algorithm?",
        options: ["To store pictures", "To provide step-by-step instructions for solving a problem", "To increase screen brightness", "To connect a printer"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },

    // Literature and Language (273–284)
    {
        question: "Who wrote the play Romeo and Juliet?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "George Orwell"],
        answer: 1,
        category: "Literature",
        difficulty: "Easy"
    },
    {
        question: "Who wrote the novel Pride and Prejudice?",
        options: ["Emily Brontë", "Jane Austen", "Virginia Woolf", "Mary Shelley"],
        answer: 1,
        category: "Literature",
        difficulty: "Medium"
    },
    {
        question: "Who is the author of The Jungle Book?",
        options: ["Rudyard Kipling", "Mark Twain", "Jules Verne", "H. G. Wells"],
        answer: 0,
        category: "Literature",
        difficulty: "Easy"
    },
    {
        question: "Which novel features the character Sherlock Holmes?",
        options: ["Dracula", "The Hound of the Baskervilles", "Frankenstein", "Treasure Island"],
        answer: 1,
        category: "Literature",
        difficulty: "Medium"
    },
    {
        question: "Who wrote the epic poem The Odyssey?",
        options: ["Virgil", "Homer", "Sophocles", "Plato"],
        answer: 1,
        category: "Literature",
        difficulty: "Medium"
    },
    {
        question: "Who wrote the novel 1984?",
        options: ["Aldous Huxley", "George Orwell", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: 1,
        category: "Literature",
        difficulty: "Easy"
    },
    {
        question: "What is a word with the opposite meaning of another word called?",
        options: ["Synonym", "Antonym", "Homonym", "Acronym"],
        answer: 1,
        category: "Language",
        difficulty: "Easy"
    },
    {
        question: "Which literary device compares two things using 'like' or 'as'?",
        options: ["Metaphor", "Simile", "Irony", "Alliteration"],
        answer: 1,
        category: "Literature",
        difficulty: "Medium"
    },
    {
        question: "Who wrote the play Hamlet?",
        options: ["William Shakespeare", "Oscar Wilde", "Christopher Marlowe", "Ben Jonson"],
        answer: 0,
        category: "Literature",
        difficulty: "Easy"
    },
    {
        question: "What is the plural of the word 'analysis'?",
        options: ["Analysises", "Analysiseses", "Analyses", "Analysis"],
        answer: 2,
        category: "Language",
        difficulty: "Medium"
    },
    {
        question: "Who wrote the novel The God of Small Things?",
        options: ["Arundhati Roy", "Jhumpa Lahiri", "Anita Desai", "Kiran Desai"],
        answer: 0,
        category: "Literature",
        difficulty: "Medium"
    },
    {
        question: "Which Indian poet wrote Gitanjali?",
        options: ["Sarojini Naidu", "Rabindranath Tagore", "Subramania Bharati", "Harivansh Rai Bachchan"],
        answer: 1,
        category: "Literature",
        difficulty: "Easy"
    },

    // Business and Economics (285–296)
    {
        question: "What does GDP stand for?",
        options: ["General Domestic Product", "Gross Domestic Product", "Global Development Plan", "Gross Development Price"],
        answer: 1,
        category: "Economics",
        difficulty: "Easy"
    },
    {
        question: "What is inflation?",
        options: ["A general rise in prices", "A fall in population", "An increase in rainfall", "A decrease in production only"],
        answer: 0,
        category: "Economics",
        difficulty: "Easy"
    },
    {
        question: "Which institution is India's central bank?",
        options: ["State Bank of India", "Reserve Bank of India", "Punjab National Bank", "NABARD"],
        answer: 1,
        category: "Economics",
        difficulty: "Easy"
    },
    {
        question: "What is the main purpose of a business budget?",
        options: ["To plan income and expenses", "To select a company logo", "To hire only managers", "To avoid keeping records"],
        answer: 0,
        category: "Business",
        difficulty: "Easy"
    },
    {
        question: "What is a market with only one seller called?",
        options: ["Oligopoly", "Monopoly", "Perfect competition", "Duopoly"],
        answer: 1,
        category: "Economics",
        difficulty: "Medium"
    },
    {
        question: "What does a company's revenue represent?",
        options: ["Money earned from sales before expenses", "Only its unpaid bills", "Its total number of employees", "Its building value only"],
        answer: 0,
        category: "Business",
        difficulty: "Medium"
    },
    {
        question: "Which of these is generally considered a fixed cost?",
        options: ["Raw materials per unit", "Sales commission", "Monthly office rent", "Packaging per product"],
        answer: 2,
        category: "Economics",
        difficulty: "Medium"
    },
    {
        question: "What is entrepreneurship?",
        options: ["Starting and managing a business venture", "Only working for the government", "Studying weather patterns", "Managing a sports team"],
        answer: 0,
        category: "Business",
        difficulty: "Easy"
    },
    {
        question: "What does a consumer usually do in an economy?",
        options: ["Only manufactures goods", "Purchases goods and services", "Sets all tax rates", "Prints currency"],
        answer: 1,
        category: "Economics",
        difficulty: "Easy"
    },
    {
        question: "What is the break-even point in business?",
        options: ["When total revenue equals total cost", "When revenue is always zero", "When expenses double", "When a business closes"],
        answer: 0,
        category: "Business",
        difficulty: "Medium"
    },
    {
        question: "Which document records a company's financial position at a particular date?",
        options: ["Balance sheet", "Sales advertisement", "Meeting invitation", "Delivery note"],
        answer: 0,
        category: "Business",
        difficulty: "Hard"
    },
    {
        question: "What is the term for goods brought into a country from abroad?",
        options: ["Exports", "Imports", "Investments", "Subsidies"],
        answer: 1,
        category: "Economics",
        difficulty: "Easy"
    },

    // General Science (297–304)
    {
        question: "What is the chemical symbol for sodium?",
        options: ["So", "S", "Na", "N"],
        answer: 2,
        category: "Chemistry",
        difficulty: "Easy"
    },
    {
        question: "Which part of the human body contains the smallest bones?",
        options: ["Hand", "Middle ear", "Foot", "Nose"],
        answer: 1,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "What is the hardest naturally occurring mineral?",
        options: ["Quartz", "Diamond", "Topaz", "Corundum"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which vitamin is produced in the skin when exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: 3,
        category: "Biology",
        difficulty: "Easy"
    },
    {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Watt", "Ampere", "Ohm"],
        answer: 2,
        category: "Physics",
        difficulty: "Medium"
    },
    {
        question: "Which blood cells help the body fight infections?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells only"],
        answer: 1,
        category: "Biology",
        difficulty: "Easy"
    },
    {
        question: "What is the chemical formula of water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: 1,
        category: "Chemistry",
        difficulty: "Easy"
    },
    {
        question: "Which planet is famous for its prominent ring system?",
        options: ["Mars", "Venus", "Saturn", "Mercury"],
        answer: 2,
        category: "Astronomy",
        difficulty: "Easy"
    },
    
    // Batch 4: Questions 305–402

    // World Geography (305–318)
    {
        question: "Which is the smallest continent by land area?",
        options: ["Europe", "Australia", "South America", "Antarctica"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which river flows through London?",
        options: ["Seine", "Danube", "Thames", "Rhine"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which country is home to the ancient city of Petra?",
        options: ["Egypt", "Jordan", "Greece", "Turkey"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which desert is the largest hot desert in the world?",
        options: ["Gobi", "Kalahari", "Sahara", "Arabian"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which country has the city of Marrakech?",
        options: ["Morocco", "Algeria", "Tunisia", "Libya"],
        answer: 0,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which ocean lies between Africa and Australia?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Mount Kilimanjaro is located in which country?",
        options: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which country is famous for its fjords?",
        options: ["Norway", "Spain", "Mexico", "Thailand"],
        answer: 0,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Busan", "Seoul", "Incheon", "Daegu"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which European country is shaped like a boot?",
        options: ["Portugal", "Italy", "Croatia", "Greece"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which is the world's largest island, excluding continents?",
        options: ["Madagascar", "Borneo", "Greenland", "New Guinea"],
        answer: 2,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "The Great Barrier Reef is located off the coast of which country?",
        options: ["South Africa", "Australia", "Brazil", "India"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },

    // Indian History and Culture (319–332)
    {
        question: "Who founded the Maurya Empire?",
        options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Which Indian emperor embraced Buddhism after the Kalinga War?",
        options: ["Akbar", "Ashoka", "Chandragupta II", "Samudragupta"],
        answer: 1,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Who wrote the Indian national song Vande Mataram?",
        options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Muhammad Iqbal"],
        answer: 1,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Which movement was launched by Mahatma Gandhi in 1930?",
        options: ["Quit India Movement", "Non-Cooperation Movement", "Civil Disobedience Movement", "Swadeshi Movement"],
        answer: 2,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who was the first Indian woman to become President of the Indian National Congress?",
        options: ["Sarojini Naidu", "Annie Besant", "Vijaya Lakshmi Pandit", "Sucheta Kripalani"],
        answer: 1,
        category: "History",
        difficulty: "Hard"
    },
    {
        question: "Which Mughal emperor commissioned the Taj Mahal?",
        options: ["Akbar", "Babur", "Shah Jahan", "Jahangir"],
        answer: 2,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Who was the founder of the Indian National Army?",
        options: ["Subhas Chandra Bose", "Mohan Singh", "Bhagat Singh", "Lala Lajpat Rai"],
        answer: 1,
        category: "History",
        difficulty: "Hard"
    },
    {
        question: "In which year did India become a republic?",
        options: ["1947", "1949", "1950", "1952"],
        answer: 2,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Which ancient Indian text is traditionally attributed to Chanakya?",
        options: ["Arthashastra", "Ramayana", "Meghaduta", "Natya Shastra"],
        answer: 0,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who was the first Indian to travel into space?",
        options: ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Ravish Malhotra"],
        answer: 1,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Which dynasty built many famous temples at Khajuraho?",
        options: ["Chola", "Chandela", "Pallava", "Gupta"],
        answer: 1,
        category: "History",
        difficulty: "Hard"
    },
    {
        question: "Who was popularly known as the Iron Man of India?",
        options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "B. R. Ambedkar", "Bal Gangadhar Tilak"],
        answer: 1,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Which Indian classical dance form originated in Kerala?",
        options: ["Bharatanatyam", "Kathak", "Kathakali", "Odissi"],
        answer: 2,
        category: "Culture",
        difficulty: "Medium"
    },
    {
        question: "Who designed the Indian national flag in its commonly recognized form?",
        options: ["Pingali Venkayya", "Mahatma Gandhi", "B. R. Ambedkar", "Rabindranath Tagore"],
        answer: 0,
        category: "History",
        difficulty: "Medium"
    },

    // Biology and Human Body (333–346)
    {
        question: "Which organ produces insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Stomach"],
        answer: 1,
        category: "Biology",
        difficulty: "Easy"
    },
    {
        question: "What is the largest organ of the human body?",
        options: ["Liver", "Brain", "Skin", "Lungs"],
        answer: 2,
        category: "Biology",
        difficulty: "Easy"
    },
    {
        question: "Which part of a plant absorbs most of its water?",
        options: ["Leaves", "Flowers", "Root hairs", "Stem"],
        answer: 2,
        category: "Biology",
        difficulty: "Medium"
    },
    {
        question: "What is the basic structural and functional unit of life?",
        options: ["Tissue", "Organ", "Cell", "Atom"],
        answer: 2,
        category: "Biology",
        difficulty: "Easy"
    },
    {
        question: "Which blood group is commonly called the universal plasma donor?",
        options: ["AB", "A", "B", "O"],
        answer: 0,
        category: "Biology",
        difficulty: "Hard"
    },
    {
        question: "Which part of the brain is mainly responsible for balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        answer: 1,
        category: "Biology",
        difficulty: "Medium"
    },
    {
        question: "What is the scientific name of modern humans?",
        options: ["Homo erectus", "Homo habilis", "Homo sapiens", "Australopithecus"],
        answer: 2,
        category: "Biology",
        difficulty: "Medium"
    },
    {
        question: "Which vitamin is important for normal blood clotting?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        answer: 3,
        category: "Biology",
        difficulty: "Medium"
    },
    {
        question: "Which organ filters blood to produce urine?",
        options: ["Heart", "Kidney", "Lungs", "Pancreas"],
        answer: 1,
        category: "Biology",
        difficulty: "Easy"
    },
    {
        question: "What is the green pigment in plants called?",
        options: ["Melanin", "Chlorophyll", "Hemoglobin", "Keratin"],
        answer: 1,
        category: "Biology",
        difficulty: "Easy"
    },
    {
        question: "Which part of the eye controls the amount of light entering it?",
        options: ["Retina", "Iris", "Cornea", "Optic nerve"],
        answer: 1,
        category: "Biology",
        difficulty: "Medium"
    },
    {
        question: "Which type of cell division produces two genetically similar daughter cells?",
        options: ["Meiosis", "Mitosis", "Fertilization", "Mutation"],
        answer: 1,
        category: "Biology",
        difficulty: "Medium"
    },
    {
        question: "Which organelle is often called the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"],
        answer: 2,
        category: "Biology",
        difficulty: "Easy"
    },
    {
        question: "Which part of the human skeleton protects the brain?",
        options: ["Rib cage", "Pelvis", "Skull", "Spine"],
        answer: 2,
        category: "Biology",
        difficulty: "Easy"
    },

    // Physics and Chemistry (347–360)
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        answer: 1,
        category: "Physics",
        difficulty: "Easy"
    },
    {
        question: "Which instrument measures atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Ammeter"],
        answer: 1,
        category: "Physics",
        difficulty: "Medium"
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["P", "Pt", "K", "Po"],
        answer: 2,
        category: "Chemistry",
        difficulty: "Easy"
    },
    {
        question: "Which particle has a negative electric charge?",
        options: ["Proton", "Neutron", "Electron", "Photon"],
        answer: 2,
        category: "Physics",
        difficulty: "Easy"
    },
    {
        question: "What is the pH of a neutral solution at 25°C?",
        options: ["0", "5", "7", "14"],
        answer: 2,
        category: "Chemistry",
        difficulty: "Medium"
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Iron", "Copper", "Mercury", "Aluminium"],
        answer: 2,
        category: "Chemistry",
        difficulty: "Easy"
    },
    {
        question: "What type of energy does a moving object possess?",
        options: ["Potential energy", "Kinetic energy", "Chemical energy", "Nuclear energy"],
        answer: 1,
        category: "Physics",
        difficulty: "Easy"
    },
    {
        question: "Which law states that every action has an equal and opposite reaction?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
        answer: 2,
        category: "Physics",
        difficulty: "Medium"
    },
    {
        question: "What is the chemical formula of common table salt?",
        options: ["KCl", "NaCl", "CaCO3", "HCl"],
        answer: 1,
        category: "Chemistry",
        difficulty: "Easy"
    },
    {
        question: "Which phenomenon splits white light into its component colours?",
        options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
        answer: 2,
        category: "Physics",
        difficulty: "Medium"
    },
    {
        question: "What is the approximate speed of light in a vacuum?",
        options: ["3 × 10^6 m/s", "3 × 10^8 m/s", "3 × 10^10 m/s", "3 × 10^4 m/s"],
        answer: 1,
        category: "Physics",
        difficulty: "Medium"
    },
    {
        question: "Which gas is commonly used to fill electric bulbs?",
        options: ["Oxygen", "Argon", "Carbon dioxide", "Chlorine"],
        answer: 1,
        category: "Chemistry",
        difficulty: "Medium"
    },
    {
        question: "Which bond involves the sharing of electron pairs between atoms?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
        answer: 1,
        category: "Chemistry",
        difficulty: "Medium"
    },
    {
        question: "What is the SI unit of electrical resistance?",
        options: ["Ampere", "Volt", "Ohm", "Watt"],
        answer: 2,
        category: "Physics",
        difficulty: "Easy"
    },

    // Technology and Internet (361–374)
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Management Language", "Home Tool Markup Language"],
        answer: 0,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Microsoft", "IBM", "Google"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What does IP stand for in networking?",
        options: ["Internet Protocol", "Internal Program", "Information Process", "Integrated Platform"],
        answer: 0,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Which device forwards data packets between different networks?",
        options: ["Keyboard", "Router", "Monitor", "Scanner"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "What does GUI stand for?",
        options: ["General User Internet", "Graphical User Interface", "Global Utility Integration", "Guided User Instruction"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Which language is primarily used to structure web page content?",
        options: ["CSS", "HTML", "Python", "SQL"],
        answer: 1,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What is phishing?",
        options: ["A method of compressing files", "A fraudulent attempt to obtain sensitive information", "A type of computer monitor", "A programming language"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Which storage device generally has no moving mechanical parts?",
        options: ["Hard disk drive", "SSD", "DVD drive", "Floppy disk"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Program Internet", "Automated Processing Input", "Application Protocol Integration"],
        answer: 0,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Which protocol is commonly used to send email?",
        options: ["SMTP", "FTP", "DHCP", "SSH"],
        answer: 0,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "What is cloud computing?",
        options: ["Storing and accessing computing resources over the internet", "Predicting the weather", "Using only offline software", "Repairing computer screens"],
        answer: 0,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which of these is an open-source operating system?",
        options: ["Windows", "macOS", "Linux", "iOS"],
        answer: 2,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "What does URL identify on the internet?",
        options: ["A web resource's address", "A computer's battery level", "A user's password", "A processor's speed"],
        answer: 0,
        category: "Technology",
        difficulty: "Easy"
    },
    {
        question: "Which technology is commonly used for short-range wireless connections between devices?",
        options: ["Bluetooth", "Ethernet", "HDMI", "VGA"],
        answer: 0,
        category: "Technology",
        difficulty: "Easy"
    },

    // Sports and Games (375–388)
    {
        question: "How many players from one team are on the field in a standard football match?",
        options: ["9", "10", "11", "12"],
        answer: 2,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "In which sport is the term 'love' used for a score of zero?",
        options: ["Cricket", "Tennis", "Hockey", "Basketball"],
        answer: 1,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "How many rings are there in the Olympic symbol?",
        options: ["4", "5", "6", "7"],
        answer: 1,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "United Kingdom", "Japan"],
        answer: 1,
        category: "Sports",
        difficulty: "Medium"
    },
    {
        question: "In cricket, how many runs are awarded for hitting the ball over the boundary without bouncing?",
        options: ["2", "4", "5", "6"],
        answer: 3,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which sport uses a shuttlecock?",
        options: ["Squash", "Badminton", "Table tennis", "Lawn tennis"],
        answer: 1,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "How many squares are there on a standard chessboard?",
        options: ["32", "48", "64", "100"],
        answer: 2,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which country won the first FIFA World Cup in 1930?",
        options: ["Brazil", "Argentina", "Uruguay", "Italy"],
        answer: 2,
        category: "Sports",
        difficulty: "Medium"
    },
    {
        question: "In basketball, how many points is a successful free throw worth?",
        options: ["1", "2", "3", "4"],
        answer: 0,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which Indian athlete won an Olympic gold medal in javelin throw at the Tokyo 2020 Olympics?",
        options: ["Milkha Singh", "Neeraj Chopra", "P. T. Usha", "Abhinav Bindra"],
        answer: 1,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which sport is associated with the tournament Wimbledon?",
        options: ["Golf", "Tennis", "Cricket", "Rugby"],
        answer: 1,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "How many players are on court for one volleyball team during normal play?",
        options: ["5", "6", "7", "8"],
        answer: 1,
        category: "Sports",
        difficulty: "Easy"
    },
    {
        question: "Which country is traditionally associated with the origin of judo?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: 1,
        category: "Sports",
        difficulty: "Medium"
    },
    {
        question: "What is the maximum score possible with three darts in a standard darts turn?",
        options: ["120", "150", "180", "200"],
        answer: 2,
        category: "Sports",
        difficulty: "Medium"
    },

    // Arts, Music and Literature (389–402)
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: 2,
        category: "Arts",
        difficulty: "Easy"
    },
    {
        question: "Which musical instrument has 88 keys on a standard modern version?",
        options: ["Violin", "Piano", "Flute", "Guitar"],
        answer: 1,
        category: "Music",
        difficulty: "Easy"
    },
    {
        question: "Who composed the famous Four Seasons concertos?",
        options: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Antonio Vivaldi", "Ludwig van Beethoven"],
        answer: 2,
        category: "Music",
        difficulty: "Medium"
    },
    {
        question: "Which artist is famous for painting The Starry Night?",
        options: ["Claude Monet", "Vincent van Gogh", "Salvador Dalí", "Edvard Munch"],
        answer: 1,
        category: "Arts",
        difficulty: "Easy"
    },
    {
        question: "Which Indian musical instrument is commonly associated with Ravi Shankar?",
        options: ["Sarod", "Sitar", "Tabla", "Shehnai"],
        answer: 1,
        category: "Music",
        difficulty: "Medium"
    },
    {
        question: "What is the Japanese art of paper folding called?",
        options: ["Ikebana", "Origami", "Calligraphy", "Bonsai"],
        answer: 1,
        category: "Arts",
        difficulty: "Easy"
    },
    {
        question: "Who wrote the fantasy novel The Hobbit?",
        options: ["C. S. Lewis", "J. R. R. Tolkien", "J. K. Rowling", "George R. R. Martin"],
        answer: 1,
        category: "Literature",
        difficulty: "Easy"
    },
    {
        question: "Which instrument is traditionally associated with the Indian shehnai maestro Bismillah Khan?",
        options: ["Sitar", "Sarangi", "Shehnai", "Flute"],
        answer: 2,
        category: "Music",
        difficulty: "Medium"
    },
    {
        question: "What is the term for a story that teaches a moral lesson, often using animals as characters?",
        options: ["Epic", "Fable", "Tragedy", "Biography"],
        answer: 1,
        category: "Literature",
        difficulty: "Medium"
    },
    {
        question: "Which art movement is associated with Pablo Picasso and Georges Braque?",
        options: ["Impressionism", "Cubism", "Surrealism", "Baroque"],
        answer: 1,
        category: "Arts",
        difficulty: "Hard"
    },
    {
        question: "Who wrote the novel Frankenstein?",
        options: ["Mary Shelley", "Bram Stoker", "Charlotte Brontë", "Agatha Christie"],
        answer: 0,
        category: "Literature",
        difficulty: "Medium"
    },
    {
        question: "Which Indian festival is widely known as the festival of colours?",
        options: ["Diwali", "Holi", "Onam", "Pongal"],
        answer: 1,
        category: "Culture",
        difficulty: "Easy"
    },
    {
        question: "Which instrument belongs to the woodwind family?",
        options: ["Trumpet", "Flute", "Viola", "Trombone"],
        answer: 1,
        category: "Music",
        difficulty: "Medium"
    },
    {
        question: "What is the name of the famous Indian monument located in Agra?",
        options: ["Qutub Minar", "Gateway of India", "Taj Mahal", "Charminar"],
        answer: 2,
        category: "Culture",
        difficulty: "Easy"
    },
    
    // Batch 5: Questions 403–500

    // World Landmarks and Geography (403–416)
    {
        question: "Which city is famous for the Eiffel Tower?",
        options: ["Rome", "Paris", "Berlin", "Madrid"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "In which country is the ancient city of Machu Picchu?",
        options: ["Chile", "Peru", "Mexico", "Brazil"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which country is home to the ancient Colosseum?",
        options: ["Greece", "Italy", "Spain", "France"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which famous waterfall lies on the border of Zambia and Zimbabwe?",
        options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
        answer: 2,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "What is the capital of Switzerland?",
        options: ["Zurich", "Geneva", "Bern", "Basel"],
        answer: 2,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which country has the city of Istanbul?",
        options: ["Greece", "Turkey", "Bulgaria", "Egypt"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which is the longest mountain range on land?",
        options: ["Himalayas", "Andes", "Rocky Mountains", "Alps"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Santiago", "Lima", "Buenos Aires", "Bogotá"],
        answer: 2,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which sea separates Europe and Africa?",
        options: ["Baltic Sea", "Mediterranean Sea", "Arabian Sea", "Black Sea"],
        answer: 1,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "What is the capital of Iceland?",
        options: ["Oslo", "Helsinki", "Reykjavik", "Stockholm"],
        answer: 2,
        category: "Geography",
        difficulty: "Medium"
    },
    {
        question: "Which river flows through the city of Paris?",
        options: ["Thames", "Seine", "Rhine", "Tiber"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },
    {
        question: "Which country contains the region of Transylvania?",
        options: ["Hungary", "Romania", "Poland", "Serbia"],
        answer: 1,
        category: "Geography",
        difficulty: "Hard"
    },
    {
        question: "Which is the largest country in South America by area?",
        options: ["Argentina", "Brazil", "Peru", "Colombia"],
        answer: 1,
        category: "Geography",
        difficulty: "Easy"
    },

    // Inventions and Discoveries (417–430)
    {
        question: "Who is commonly credited with inventing the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "James Watt"],
        answer: 1,
        category: "Inventions",
        difficulty: "Easy"
    },
    {
        question: "Who developed the first successful practical incandescent light bulb?",
        options: ["Thomas Edison", "Isaac Newton", "Galileo Galilei", "Charles Darwin"],
        answer: 0,
        category: "Inventions",
        difficulty: "Medium"
    },
    {
        question: "Who invented the printing press in Europe?",
        options: ["Johannes Gutenberg", "Leonardo da Vinci", "Benjamin Franklin", "James Watt"],
        answer: 0,
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Who is credited with discovering penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Who is commonly credited with inventing the World Wide Web?",
        options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Vint Cerf"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Who developed the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Who invented the first widely recognized mechanical computer design known as the Analytical Engine?",
        options: ["Alan Turing", "Charles Babbage", "Blaise Pascal", "Ada Lovelace"],
        answer: 1,
        category: "Technology",
        difficulty: "Hard"
    },
    {
        question: "Who is often called the father of modern computing?",
        options: ["Alan Turing", "Charles Darwin", "Michael Faraday", "Gregor Mendel"],
        answer: 0,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "Who discovered the circulation of blood through the body?",
        options: ["William Harvey", "Edward Jenner", "Louis Pasteur", "Hippocrates"],
        answer: 0,
        category: "Science",
        difficulty: "Hard"
    },
    {
        question: "Which scientist discovered radioactivity in uranium salts?",
        options: ["Ernest Rutherford", "Henri Becquerel", "James Chadwick", "Max Planck"],
        answer: 1,
        category: "Science",
        difficulty: "Hard"
    },
    {
        question: "Who invented the first successful practical airplane with powered, controlled flight?",
        options: ["Wright brothers", "Montgolfier brothers", "Bell brothers", "Lumière brothers"],
        answer: 0,
        category: "Inventions",
        difficulty: "Easy"
    },
    {
        question: "Which scientist is associated with the laws of planetary motion?",
        options: ["Johannes Kepler", "Isaac Newton", "Galileo Galilei", "Edwin Hubble"],
        answer: 0,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "Who developed the first successful smallpox vaccine?",
        options: ["Edward Jenner", "Alexander Fleming", "Robert Hooke", "Joseph Lister"],
        answer: 0,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "Who invented the dynamo and made major contributions to electromagnetic induction?",
        options: ["Michael Faraday", "Thomas Edison", "James Clerk Maxwell", "Nikolaus Otto"],
        answer: 0,
        category: "Science",
        difficulty: "Hard"
    },

    // Astronomy and Space (431–444)
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: 2,
        category: "Astronomy",
        difficulty: "Easy"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Saturn", "Neptune"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Easy"
    },
    {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Easy"
    },
    {
        question: "Which planet has the Great Red Spot?",
        options: ["Mars", "Jupiter", "Saturn", "Uranus"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Medium"
    },
    {
        question: "What is the name of the first artificial satellite launched into space?",
        options: ["Apollo 11", "Sputnik 1", "Explorer 1", "Vostok 1"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Medium"
    },
    {
        question: "Which space telescope was launched in 1990?",
        options: ["James Webb Space Telescope", "Hubble Space Telescope", "Chandra X-ray Observatory", "Kepler Telescope"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Medium"
    },
    {
        question: "What is the name of the natural satellite of Earth?",
        options: ["Phobos", "Titan", "The Moon", "Europa"],
        answer: 2,
        category: "Astronomy",
        difficulty: "Easy"
    },
    {
        question: "Which planet takes the longest time to complete one orbit around the Sun?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: 3,
        category: "Astronomy",
        difficulty: "Medium"
    },
    {
        question: "What is a light-year a measure of?",
        options: ["Time", "Distance", "Brightness", "Temperature"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Easy"
    },
    {
        question: "Which Indian space mission successfully entered Mars orbit in 2014?",
        options: ["Chandrayaan-1", "Mangalyaan", "Aditya-L1", "Chandrayaan-3"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Medium"
    },
    {
        question: "What is the name of the closest star to Earth after the Sun?",
        options: ["Sirius", "Proxima Centauri", "Betelgeuse", "Vega"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Hard"
    },
    {
        question: "Which planet rotates on its side to an extreme degree?",
        options: ["Venus", "Uranus", "Mars", "Mercury"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Hard"
    },
    {
        question: "What is the visible surface of the Sun called?",
        options: ["Corona", "Photosphere", "Chromosphere", "Core"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Hard"
    },
    {
        question: "Which was the first successful soft landing mission near the Moon's south polar region?",
        options: ["Apollo 11", "Chandrayaan-3", "Luna 2", "Chandrayaan-1"],
        answer: 1,
        category: "Astronomy",
        difficulty: "Medium"
    },

    // Indian Constitution and Government (445–458)
    {
        question: "Who is known as the chief architect of the Indian Constitution?",
        options: ["Mahatma Gandhi", "B. R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad"],
        answer: 1,
        category: "Civics",
        difficulty: "Easy"
    },
    {
        question: "How many fundamental duties are listed in the Indian Constitution?",
        options: ["8", "10", "11", "12"],
        answer: 2,
        category: "Civics",
        difficulty: "Medium"
    },
    {
        question: "What is the minimum voting age for Indian citizens in general elections?",
        options: ["16 years", "18 years", "21 years", "25 years"],
        answer: 1,
        category: "Civics",
        difficulty: "Easy"
    },
    {
        question: "Which part of the Indian Constitution deals with Fundamental Rights?",
        options: ["Part I", "Part II", "Part III", "Part IV"],
        answer: 2,
        category: "Civics",
        difficulty: "Medium"
    },
    {
        question: "Who appoints the Prime Minister of India?",
        options: ["Chief Justice of India", "President of India", "Lok Sabha Speaker", "Chief Election Commissioner"],
        answer: 1,
        category: "Civics",
        difficulty: "Easy"
    },
    {
        question: "What is the upper house of the Indian Parliament called?",
        options: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Gram Sabha"],
        answer: 1,
        category: "Civics",
        difficulty: "Easy"
    },
    {
        question: "What is the normal term of the Lok Sabha?",
        options: ["4 years", "5 years", "6 years", "7 years"],
        answer: 1,
        category: "Civics",
        difficulty: "Easy"
    },
    {
        question: "Which body conducts elections to Parliament and state legislatures in India?",
        options: ["Union Public Service Commission", "Election Commission of India", "Finance Commission", "NITI Aayog"],
        answer: 1,
        category: "Civics",
        difficulty: "Medium"
    },
    {
        question: "Who is the constitutional head of an Indian state?",
        options: ["Chief Minister", "Governor", "Chief Secretary", "Speaker"],
        answer: 1,
        category: "Civics",
        difficulty: "Medium"
    },
    {
        question: "Which article of the Indian Constitution deals with the abolition of untouchability?",
        options: ["Article 14", "Article 17", "Article 19", "Article 21"],
        answer: 1,
        category: "Civics",
        difficulty: "Hard"
    },
    {
        question: "Who presides over the Lok Sabha?",
        options: ["President", "Vice President", "Speaker", "Prime Minister"],
        answer: 2,
        category: "Civics",
        difficulty: "Easy"
    },
    {
        question: "Which amendment lowered the voting age in India from 21 to 18?",
        options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        answer: 2,
        category: "Civics",
        difficulty: "Hard"
    },
    {
        question: "What is the highest court in India?",
        options: ["High Court", "District Court", "Supreme Court", "Sessions Court"],
        answer: 2,
        category: "Civics",
        difficulty: "Easy"
    },
    {
        question: "Which schedule of the Indian Constitution lists the recognized languages?",
        options: ["Fifth Schedule", "Seventh Schedule", "Eighth Schedule", "Tenth Schedule"],
        answer: 2,
        category: "Civics",
        difficulty: "Hard"
    },

    // Food, Culture and Traditions (459–472)
    {
        question: "Which country is traditionally associated with sushi?",
        options: ["China", "Japan", "Thailand", "Vietnam"],
        answer: 1,
        category: "Culture",
        difficulty: "Easy"
    },
    {
        question: "Which Indian state is famous for the traditional dish dhokla?",
        options: ["Punjab", "Gujarat", "Kerala", "Bihar"],
        answer: 1,
        category: "Culture",
        difficulty: "Easy"
    },
    {
        question: "Which spice is known as the most expensive spice by weight?",
        options: ["Cardamom", "Saffron", "Cinnamon", "Clove"],
        answer: 1,
        category: "Food",
        difficulty: "Medium"
    },
    {
        question: "Which country is the origin of the dish paella?",
        options: ["Italy", "Spain", "France", "Portugal"],
        answer: 1,
        category: "Food",
        difficulty: "Medium"
    },
    {
        question: "What is the traditional Japanese garment called?",
        options: ["Sari", "Kimono", "Hanbok", "Kilt"],
        answer: 1,
        category: "Culture",
        difficulty: "Easy"
    },
    {
        question: "Which Indian festival is associated with the harvest in Tamil Nadu?",
        options: ["Baisakhi", "Pongal", "Bihu", "Onam"],
        answer: 1,
        category: "Culture",
        difficulty: "Easy"
    },
    {
        question: "Which country is famous for the traditional dance flamenco?",
        options: ["Spain", "Brazil", "Argentina", "Portugal"],
        answer: 0,
        category: "Culture",
        difficulty: "Medium"
    },
    {
        question: "Which ingredient is the main base of traditional hummus?",
        options: ["Lentils", "Chickpeas", "Potatoes", "Rice"],
        answer: 1,
        category: "Food",
        difficulty: "Medium"
    },
    {
        question: "Which Indian state is particularly associated with the festival Onam?",
        options: ["Karnataka", "Kerala", "Tamil Nadu", "Goa"],
        answer: 1,
        category: "Culture",
        difficulty: "Easy"
    },
    {
        question: "Which country is famous for the traditional tea ceremony called chanoyu?",
        options: ["China", "Japan", "India", "Turkey"],
        answer: 1,
        category: "Culture",
        difficulty: "Hard"
    },
    {
        question: "What is the main ingredient used to make traditional guacamole?",
        options: ["Tomato", "Avocado", "Cucumber", "Pumpkin"],
        answer: 1,
        category: "Food",
        difficulty: "Easy"
    },
    {
        question: "Which Indian state is known for the classical dance form Kuchipudi?",
        options: ["Andhra Pradesh", "Assam", "Rajasthan", "Punjab"],
        answer: 0,
        category: "Culture",
        difficulty: "Medium"
    },
    {
        question: "Which country is associated with the traditional garment called the hanbok?",
        options: ["Japan", "South Korea", "China", "Mongolia"],
        answer: 1,
        category: "Culture",
        difficulty: "Medium"
    },
    {
        question: "Which grain is traditionally used to make Italian risotto?",
        options: ["Wheat", "Arborio rice", "Barley", "Oats"],
        answer: 1,
        category: "Food",
        difficulty: "Medium"
    },

    // Mathematics and Logical Thinking (473–486)
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the value of 9 squared?",
        options: ["18", "72", "81", "99"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "How many degrees are there in a straight angle?",
        options: ["90", "120", "180", "360"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the Roman numeral for 50?",
        options: ["L", "C", "D", "X"],
        answer: 0,
        category: "Mathematics",
        difficulty: "Medium"
    },
    {
        question: "What is the next number in the sequence 2, 4, 8, 16, ...?",
        options: ["20", "24", "30", "32"],
        answer: 3,
        category: "Logic",
        difficulty: "Easy"
    },
    {
        question: "How many faces does a cube have?",
        options: ["4", "6", "8", "12"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "What is the sum of the first five positive integers?",
        options: ["10", "15", "20", "25"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "If a dozen eggs contains 12 eggs, how many eggs are in three dozen?",
        options: ["24", "30", "36", "48"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Easy"
    },
    {
        question: "Which number is neither prime nor composite?",
        options: ["0", "1", "2", "3"],
        answer: 1,
        category: "Mathematics",
        difficulty: "Medium"
    },
    {
        question: "What is the value of 5 factorial?",
        options: ["25", "60", "100", "120"],
        answer: 3,
        category: "Mathematics",
        difficulty: "Medium"
    },
    {
        question: "How many edges does a cube have?",
        options: ["8", "10", "12", "16"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Medium"
    },
    {
        question: "What is the binary representation of decimal number 10?",
        options: ["1001", "1010", "1100", "1110"],
        answer: 1,
        category: "Technology",
        difficulty: "Medium"
    },
    {
        question: "If the radius of a circle is doubled, how does its area change?",
        options: ["It doubles", "It triples", "It becomes four times as large", "It remains unchanged"],
        answer: 2,
        category: "Mathematics",
        difficulty: "Hard"
    },
    {
        question: "What is the next number in the sequence 1, 1, 2, 3, 5, 8, ...?",
        options: ["11", "12", "13", "15"],
        answer: 2,
        category: "Logic",
        difficulty: "Medium"
    },

    // Mixed General Knowledge (487–500)
    {
        question: "Which organization publishes the World Economic Outlook report?",
        options: ["World Health Organization", "International Monetary Fund", "UNESCO", "World Trade Organization"],
        answer: 1,
        category: "General Knowledge",
        difficulty: "Hard"
    },
    {
        question: "What does UNESCO stand for?",
        options: ["United Nations Educational, Scientific and Cultural Organization", "United Nations Economic and Social Council Organization", "Universal Network for Education and Science", "United Nations Environmental Safety Council"],
        answer: 0,
        category: "General Knowledge",
        difficulty: "Medium"
    },
    {
        question: "Which organization is responsible for coordinating international public health work?",
        options: ["UNICEF", "WHO", "WTO", "ILO"],
        answer: 1,
        category: "General Knowledge",
        difficulty: "Easy"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Won", "Yuan", "Yen", "Ringgit"],
        answer: 2,
        category: "General Knowledge",
        difficulty: "Easy"
    },
    {
        question: "Which language has the most native speakers worldwide?",
        options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        answer: 2,
        category: "Language",
        difficulty: "Medium"
    },
    {
        question: "Which instrument is used to measure temperature?",
        options: ["Barometer", "Thermometer", "Altimeter", "Speedometer"],
        answer: 1,
        category: "Science",
        difficulty: "Easy"
    },
    {
        question: "Which is the largest internal organ in the human body?",
        options: ["Heart", "Liver", "Kidney", "Lung"],
        answer: 1,
        category: "Biology",
        difficulty: "Medium"
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: ["United Kingdom", "France", "Germany", "Italy"],
        answer: 1,
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "What is the name of the process by which a caterpillar becomes a butterfly?",
        options: ["Pollination", "Metamorphosis", "Photosynthesis", "Fermentation"],
        answer: 1,
        category: "Nature",
        difficulty: "Easy"
    },
    {
        question: "Which metal is the best conductor of electricity among these options?",
        options: ["Iron", "Silver", "Lead", "Tin"],
        answer: 1,
        category: "Science",
        difficulty: "Medium"
    },
    {
        question: "Which international organization uses the acronym UNICEF?",
        options: ["United Nations Children's Fund", "United Nations Climate Initiative", "Universal Network for Children's Education", "United Nations Cultural Forum"],
        answer: 0,
        category: "General Knowledge",
        difficulty: "Medium"
    },
    {
        question: "Which is the official currency of the United Kingdom?",
        options: ["Euro", "Pound sterling", "Dollar", "Franc"],
        answer: 1,
        category: "General Knowledge",
        difficulty: "Easy"
    },
    {
        question: "Which day is celebrated as World Environment Day?",
        options: ["April 22", "June 5", "July 11", "December 10"],
        answer: 1,
        category: "Environment",
        difficulty: "Easy"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3,
        category: "Geography",
        difficulty: "Easy"
    }
];

function populateCategoryFilter() {

    const categories = [...new Set(
        questionBank.map(question => question.category)
    )].sort();

    categories.forEach(function(category) {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);

    });

}
function getFilteredQuestions() {

    const selectedCategory = categoryFilter.value;
    const selectedDifficulty = difficultyFilter.value;

    return questionBank.filter(function(question) {

        const categoryMatches =
            selectedCategory === "all" ||
            question.category === selectedCategory;

        const difficultyMatches =
            selectedDifficulty === "all" ||
            question.difficulty === selectedDifficulty;

        return categoryMatches && difficultyMatches;

    });

}


// ===================================
// GAME SETTINGS
// ===================================

const QUESTIONS_PER_GAME = 10;
const QUESTION_TIME = 15;

let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = QUESTION_TIME;
let timerInterval = null;
let answered = false;


// ===================================
// HTML ELEMENTS
// ===================================

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const categoryFilter = document.getElementById("category-filter");
const difficultyFilter = document.getElementById("difficulty-filter");
const filterCount = document.getElementById("filter-count");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

const questionNumber = document.getElementById("question-number");
const timerDisplay = document.getElementById("timer");
const questionText = document.getElementById("question-text");

const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progress-bar");

const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");


// ===================================
// RANDOM QUESTION SELECTION
// ===================================

function getRandomQuestions() {

    const filteredQuestions = getFilteredQuestions();

    const shuffled = [...filteredQuestions];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
        [shuffled[j], shuffled[i]];

    }

    return shuffled.slice(0, QUESTIONS_PER_GAME);

}


// ===================================
// SHUFFLE ANSWER OPTIONS
// ===================================

function shuffleOptions(question) {

    const options = question.options.map(function(option, index) {
        return {
            text: option,
            isCorrect: index === question.answer
        };
    });

    for (let i = options.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [options[i], options[j]] = [options[j], options[i]];
    }

    return {
        options: options.map(option => option.text),
        answer: options.findIndex(option => option.isCorrect)
    };
}


// ===================================
// START QUIZ
// ===================================

function startQuiz() {

    const availableQuestions = getFilteredQuestions();

    if (availableQuestions.length < QUESTIONS_PER_GAME) {

        alert(
            'Only ${availableQuestions.length} questions match your filters. Please choose different filters.'
        );

        return;
    }

    currentQuestion = 0;
    score = 0;

    questions = getRandomQuestions();

    welcomeScreen.hidden = true;
    resultScreen.hidden = true;
    quizScreen.hidden = false;

    showQuestion();

}


// ===================================
// DISPLAY QUESTION
// ===================================

function showQuestion() {

    clearInterval(timerInterval);

    answered = false;
    timeLeft = QUESTION_TIME;

    const question = questions[currentQuestion];

    // Shuffle options for this question
    const shuffled = shuffleOptions(question);

    questionNumber.textContent =
        `Question ${currentQuestion + 1}/${QUESTIONS_PER_GAME}`;

    questionText.textContent = question.question;

    timerDisplay.textContent = `Time: ${timeLeft}s`;

    progressBar.style.width =
        `${((currentQuestion + 1) / QUESTIONS_PER_GAME) * 100}%`;

    optionsContainer.innerHTML = "";

    feedback.textContent = "";
    nextButton.hidden = true;

    shuffled.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option-btn");

        button.dataset.correct = index === shuffled.answer;

        button.addEventListener("click", function() {
            selectAnswer(index, shuffled.answer);
        });

        optionsContainer.appendChild(button);

    });

    startTimer();
}


// ===================================
// TIMER
// ===================================

function startTimer() {

    timerInterval = setInterval(function() {

        timeLeft--;

        timerDisplay.textContent = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            feedback.textContent = "Time's up!";

            showCorrectAnswer();

            answered = true;
            nextButton.hidden = false;
        }

    }, 1000);
}


// ===================================
// SELECT ANSWER
// ===================================

function selectAnswer(selectedIndex, correctIndex) {

    if (answered) {
        return;
    }

    answered = true;

    clearInterval(timerInterval);

    const optionButtons =
        optionsContainer.querySelectorAll(".option-btn");

    optionButtons.forEach(function(button, index) {

        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

    });

    if (selectedIndex === correctIndex) {

        score++;

        feedback.textContent = "Correct Answer!";

    } else {

        optionButtons[selectedIndex].classList.add("incorrect");

        feedback.textContent = "Incorrect! Try the next one.";

    }

    nextButton.hidden = false;
}


// ===================================
// SHOW CORRECT ANSWER
// ===================================

function showCorrectAnswer() {

    const optionButtons =
        optionsContainer.querySelectorAll(".option-btn");

    optionButtons.forEach(function(button) {

        button.disabled = true;

        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

    });


    // The correct answer is marked during rendering.
   // See the updated showQuestion function below.
}


// ===================================
// NEXT QUESTION
// ===================================

function nextQuestion() {

    if (!answered) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();

    }
}


// ===================================
// FINAL RESULTS
// ===================================

function showResults() {

    clearInterval(timerInterval);

    quizScreen.hidden = true;
    resultScreen.hidden = false;

    finalScore.textContent =
        `Your Score: ${score} / ${QUESTIONS_PER_GAME}`;

    if (score === QUESTIONS_PER_GAME) {

        resultMessage.textContent =
            "Excellent! Perfect Score!";

    } else if (score >= 7) {

        resultMessage.textContent =
            "Great Job! You have good knowledge.";

    } else if (score >= 4) {

        resultMessage.textContent =
            "Good effort! Keep learning.";

    } else {

        resultMessage.textContent =
            "Keep practising! You can improve.";

    }
}

function updateFilterCount() {

    const available = getFilteredQuestions().length;

    filterCount.textContent =
        `${available} questions available. You need at least 10 to start.`;

    startButton.disabled = available < QUESTIONS_PER_GAME;

}


// ===================================
// RESTART QUIZ
// ===================================

function restartQuiz() {

    startQuiz();

}


// ===================================
// BUTTON EVENTS
// ===================================
populateCategoryFilter();

categoryFilter.addEventListener("change", updateFilterCount);

difficultyFilter.addEventListener("change", updateFilterCount);

updateFilterCount();

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQuestion);

restartButton.addEventListener("click", restartQuiz);
