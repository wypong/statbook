var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This book grew out of my course notes for an elementary statistics course that I teach at California State University, Dominguez Hills. It is written for students who are seeing statistics for the first time and want a text that explains ideas plainly, works through examples carefully, and does not lose sight of what the numbers mean.  The main goal of the book is to help students build statistical judgment, not just memorize formulas. We begin with the basic language of data, then move through tables, graphs, measures of center and spread, probability, random variables, and the main ideas of statistical inference. The progression is meant to feel natural: first describe data clearly, then model randomness, and finally use sample information to make decisions about a larger population.  Some features of this book are worth pointing out:   The writing style is direct and conversational, with an emphasis on explaining why a method is used and what its result tells us.  New ideas are introduced with concrete examples drawn from familiar settings such as campus life, health, business, sports, and everyday decision-making.  Each chapter includes exercises so students can practice both basic skills and interpretation.  The book moves from descriptive statistics to probability and then to inference, so later topics rest on ideas students have already seen and used.  Because the text is developed in PreTeXt , it is designed to grow over time and remain easy to revise, improve, and share.   This is still a developing book, and it will continue to change as the course evolves. My hope is that it stays useful to students at Cal State Dominguez Hills while also being clear and practical for anyone learning elementary statistics in a first course.  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "ch-overview",
  "level": "1",
  "url": "ch-overview.html",
  "type": "Chapter",
  "number": "0",
  "title": "What Statistics Is About",
  "body": " What Statistics Is About   Statistics is the study of how we learn from data. It gives us a way to collect information, organize it, summarize it, analyze it, and then use it to make decisions. In everyday life, raw data by itself is often just a pile of numbers, labels, or measurements. Statistics helps turn that pile into a story we can understand.  That story matters because modern life runs on data. Doctors compare treatments, businesses track sales, schools study student success, sports teams evaluate performance, and governments use surveys to understand communities. In each of these settings, the goal is not just to gather data, but to ask sensible questions and to draw conclusions without being fooled by randomness, bias, or incomplete information.  Two big ideas appear early in almost every statistics course. Descriptive statistics statistics descriptive is about summarizing what the data says right now, often with tables, graphs, averages, or percentages. Inferential statistics statistics inferential is about going a step further and using data to say something about a larger group or about a process that is not fully observed. Much of statistics is about moving carefully from what we have seen to what we think is probably true.  Another basic distinction is between a population sampling population and a sample sampling sample . The population is the full group we care about. The sample is the part we actually observe. A number that describes a population is called a parameter summaries parameter , while a number computed from a sample is called a statistic summaries statistic . In practice we usually do not have access to an entire population, so we use sample statistics to estimate population parameters.   A Campus Survey  Suppose a college wants to know how students feel about parking on campus. Asking every student may be too expensive or too slow, so the college surveys 400 students chosen from the student body. The percentage of those 400 students who say parking is a serious problem is a statistic. The true percentage for all students is a parameter. The sample gives useful information, but the sample result will usually not match the population value exactly.    Describing Data Versus Making a Prediction  A basketball player takes 50 free throws in practice and makes 41 of them. Saying that the player made 82% of the practice shots is descriptive statistics. Using that practice result to predict how the player will perform in future games is inferential statistics. The same data can support both description and prediction, but those are not the same task.     Exercises   A city wants to estimate the average commute time of all workers in the city. It studies 600 randomly selected workers. Identify the population, the sample, and the kind of quantity that would be a parameter.    A streaming service reports that 63% of the users in a test group watched at least one documentary last month. Give one statement about this situation that is descriptive and one that is inferential.    Write down a real-life question from your own experience that could be answered with data. Then say what kind of data you would collect and what decision you hope the data would help you make.    "
},
{
  "id": "ch-overview-2-3",
  "level": "2",
  "url": "ch-overview.html#ch-overview-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Descriptive statistics statistics descriptive Inferential statistics statistics inferential "
},
{
  "id": "ch-overview-2-4",
  "level": "2",
  "url": "ch-overview.html#ch-overview-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "population sampling population sample sampling sample parameter summaries parameter statistic summaries statistic "
},
{
  "id": "ex-campus-survey",
  "level": "2",
  "url": "ch-overview.html#ex-campus-survey",
  "type": "Example",
  "number": "0.0.1",
  "title": "A Campus Survey.",
  "body": " A Campus Survey  Suppose a college wants to know how students feel about parking on campus. Asking every student may be too expensive or too slow, so the college surveys 400 students chosen from the student body. The percentage of those 400 students who say parking is a serious problem is a statistic. The true percentage for all students is a parameter. The sample gives useful information, but the sample result will usually not match the population value exactly.  "
},
{
  "id": "ex-basketball-free-throws",
  "level": "2",
  "url": "ch-overview.html#ex-basketball-free-throws",
  "type": "Example",
  "number": "0.0.2",
  "title": "Describing Data Versus Making a Prediction.",
  "body": " Describing Data Versus Making a Prediction  A basketball player takes 50 free throws in practice and makes 41 of them. Saying that the player made 82% of the practice shots is descriptive statistics. Using that practice result to predict how the player will perform in future games is inferential statistics. The same data can support both description and prediction, but those are not the same task.  "
},
{
  "id": "ch0-ex-1",
  "level": "2",
  "url": "ch0-exercises.html#ch0-ex-1",
  "type": "Exercise",
  "number": "0.1",
  "title": "",
  "body": " A city wants to estimate the average commute time of all workers in the city. It studies 600 randomly selected workers. Identify the population, the sample, and the kind of quantity that would be a parameter.  "
},
{
  "id": "ch0-ex-2",
  "level": "2",
  "url": "ch0-exercises.html#ch0-ex-2",
  "type": "Exercise",
  "number": "0.2",
  "title": "",
  "body": " A streaming service reports that 63% of the users in a test group watched at least one documentary last month. Give one statement about this situation that is descriptive and one that is inferential.  "
},
{
  "id": "ch0-ex-3",
  "level": "2",
  "url": "ch0-exercises.html#ch0-ex-3",
  "type": "Exercise",
  "number": "0.3",
  "title": "",
  "body": " Write down a real-life question from your own experience that could be answered with data. Then say what kind of data you would collect and what decision you hope the data would help you make.  "
},
{
  "id": "sec-classifying-data",
  "level": "1",
  "url": "sec-classifying-data.html",
  "type": "Section",
  "number": "1.1",
  "title": "Classifying Data",
  "body": " Classifying Data  A useful way to organize the main data types is to think of them as a classification tree. We first decide whether the data is qualitative or quantitative. Then we refine the classification one more step.    Qualitative data data qualitative , also called categorical data data categorical , records labels, names, or categories.   Nominal data data nominal : categories with no natural order.  Ordinal data data ordinal : categories with a meaningful order, but without equal numerical gaps.     Quantitative data data quantitative , also called numerical data data numerical , records counts or measurements.   Discrete data data discrete : values obtained by counting.  Continuous data data continuous : values obtained by measuring.     This tree is simple, but it is powerful. Once we know where a variable belongs, we already know a lot about how to describe it. Category labels are usually summarized by counts or percentages, while numerical data can often be summarized by averages, spreads, and graphs built around number lines.  A good classroom data set can show all of these ideas at once. If you are collecting information from students, useful choices include first name, last name initial, eye color, whether the student wears glasses, year in school, birth year, number of siblings, height, distance from school, commute time, shoe size, handedness, favorite subject, and number of pets. Some of these are categories and some are measurements, and some of them look numerical even though they are really labels.   Collecting Class Data   Work with the class to build one data set that includes several different variables. Try to include both categories and measurements so that the class data will cover all of the main data types later on.     Choose a small set of variables to record for each student. A good starting list is first name, eye color, whether the student wears glasses, year in school, birth year, number of siblings, height, and distance from school.      If you want a wider data set, add a few more variables such as handedness, favorite subject, commute time, shoe size, number of pets, or favorite music genre.      Put the information into a neat table. As you do, note which variables are really labels, which ones have an order, and which ones are true measurements.      Classifying the Data Types   Use the data set from the previous activity. The goal is to decide whether each variable is qualitative or quantitative, and then to refine the classification one step further.     Classify each variable as qualitative or quantitative.      For the qualitative variables, decide whether each one is nominal or ordinal.      For the quantitative variables, decide whether each one is discrete or continuous.      Check that your list includes at least one nominal variable, one ordinal variable, one discrete variable, and one continuous variable. If one of those types is missing, add another variable and try again.      Gym Check-In Data  A gym records each member's membership plan, locker preference, number of visits this month, and time spent on the treadmill today. The membership plan is qualitative because it is a category label. Locker preference such as upper, middle, or lower is qualitative and ordinal because the choices have an order. The number of visits is quantitative and discrete because it is counted. Time spent on the treadmill is quantitative and continuous because it is measured.    Online Store Data  An online store keeps track of payment method, customer satisfaction rating, number of items in an order, and delivery time in hours. Payment method is nominal. Customer satisfaction on a five-star scale is ordinal. Number of items is discrete. Delivery time is continuous.    Checkpoint  Classify each variable as nominal, ordinal, discrete, or continuous: type of housing, finish level in a video game (beginner, intermediate, advanced), number of classes missed, and amount of sleep last night.   Qualitative data answers questions like “Which group?” or “What kind?” Quantitative data answers questions like “How many?” or “How much?” Within qualitative data, nominal and ordinal variables differ by whether order matters. Within quantitative data, discrete and continuous variables differ by whether the values arise from counting or measuring.   Nominal examples: browser type, favorite fruit, blood type, and airline carrier.  Ordinal examples: hotel ratings, course grades, pain level, and military rank.  Discrete examples: number of logins, goals scored, books checked out, and children in a family.  Continuous examples: rainfall, waiting time, blood pressure, and distance run.    Hospital Triage  In an emergency room, a patient's triage level might be coded as immediate, urgent, less urgent, or nonurgent. That variable is ordinal because the levels have a clear order. The patient's pulse rate is quantitative. If it is recorded as beats per minute, it is usually treated as discrete because it is based on a count. The patient's body mass is continuous because it is measured.    Checkpoint  A music app records subscription type, playlist mood label, number of songs skipped in a session, and total listening time. Classify each variable as nominal, ordinal, discrete, or continuous.   "
},
{
  "id": "sec-classifying-data-3-1-1",
  "level": "2",
  "url": "sec-classifying-data.html#sec-classifying-data-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Qualitative data data qualitative categorical data data categorical "
},
{
  "id": "sec-classifying-data-3-1-2-1-1",
  "level": "2",
  "url": "sec-classifying-data.html#sec-classifying-data-3-1-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Nominal data data nominal "
},
{
  "id": "sec-classifying-data-3-1-2-2-1",
  "level": "2",
  "url": "sec-classifying-data.html#sec-classifying-data-3-1-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ordinal data data ordinal "
},
{
  "id": "sec-classifying-data-3-2-1",
  "level": "2",
  "url": "sec-classifying-data.html#sec-classifying-data-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quantitative data data quantitative numerical data data numerical "
},
{
  "id": "sec-classifying-data-3-2-2-1-1",
  "level": "2",
  "url": "sec-classifying-data.html#sec-classifying-data-3-2-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Discrete data data discrete "
},
{
  "id": "sec-classifying-data-3-2-2-2-1",
  "level": "2",
  "url": "sec-classifying-data.html#sec-classifying-data-3-2-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Continuous data data continuous "
},
{
  "id": "act-collect-class-data",
  "level": "2",
  "url": "sec-classifying-data.html#act-collect-class-data",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Collecting Class Data.",
  "body": " Collecting Class Data   Work with the class to build one data set that includes several different variables. Try to include both categories and measurements so that the class data will cover all of the main data types later on.     Choose a small set of variables to record for each student. A good starting list is first name, eye color, whether the student wears glasses, year in school, birth year, number of siblings, height, and distance from school.      If you want a wider data set, add a few more variables such as handedness, favorite subject, commute time, shoe size, number of pets, or favorite music genre.      Put the information into a neat table. As you do, note which variables are really labels, which ones have an order, and which ones are true measurements.    "
},
{
  "id": "act-classify-data-types",
  "level": "2",
  "url": "sec-classifying-data.html#act-classify-data-types",
  "type": "Activity",
  "number": "1.1.2",
  "title": "Classifying the Data Types.",
  "body": " Classifying the Data Types   Use the data set from the previous activity. The goal is to decide whether each variable is qualitative or quantitative, and then to refine the classification one step further.     Classify each variable as qualitative or quantitative.      For the qualitative variables, decide whether each one is nominal or ordinal.      For the quantitative variables, decide whether each one is discrete or continuous.      Check that your list includes at least one nominal variable, one ordinal variable, one discrete variable, and one continuous variable. If one of those types is missing, add another variable and try again.    "
},
{
  "id": "ex-gym-checkin",
  "level": "2",
  "url": "sec-classifying-data.html#ex-gym-checkin",
  "type": "Example",
  "number": "1.1.1",
  "title": "Gym Check-In Data.",
  "body": " Gym Check-In Data  A gym records each member's membership plan, locker preference, number of visits this month, and time spent on the treadmill today. The membership plan is qualitative because it is a category label. Locker preference such as upper, middle, or lower is qualitative and ordinal because the choices have an order. The number of visits is quantitative and discrete because it is counted. Time spent on the treadmill is quantitative and continuous because it is measured.  "
},
{
  "id": "ex-online-store",
  "level": "2",
  "url": "sec-classifying-data.html#ex-online-store",
  "type": "Example",
  "number": "1.1.2",
  "title": "Online Store Data.",
  "body": " Online Store Data  An online store keeps track of payment method, customer satisfaction rating, number of items in an order, and delivery time in hours. Payment method is nominal. Customer satisfaction on a five-star scale is ordinal. Number of items is discrete. Delivery time is continuous.  "
},
{
  "id": "cp-classification-tree",
  "level": "2",
  "url": "sec-classifying-data.html#cp-classification-tree",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "Checkpoint.",
  "body": " Checkpoint  Classify each variable as nominal, ordinal, discrete, or continuous: type of housing, finish level in a video game (beginner, intermediate, advanced), number of classes missed, and amount of sleep last night.  "
},
{
  "id": "ex-hospital-triage",
  "level": "2",
  "url": "sec-classifying-data.html#ex-hospital-triage",
  "type": "Example",
  "number": "1.1.4",
  "title": "Hospital Triage.",
  "body": " Hospital Triage  In an emergency room, a patient's triage level might be coded as immediate, urgent, less urgent, or nonurgent. That variable is ordinal because the levels have a clear order. The patient's pulse rate is quantitative. If it is recorded as beats per minute, it is usually treated as discrete because it is based on a count. The patient's body mass is continuous because it is measured.  "
},
{
  "id": "cp-mixed-classification",
  "level": "2",
  "url": "sec-classifying-data.html#cp-mixed-classification",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "Checkpoint.",
  "body": " Checkpoint  A music app records subscription type, playlist mood label, number of songs skipped in a session, and total listening time. Classify each variable as nominal, ordinal, discrete, or continuous.  "
},
{
  "id": "sec-levels-of-measurement",
  "level": "1",
  "url": "sec-levels-of-measurement.html",
  "type": "Section",
  "number": "1.2",
  "title": "Levels of Measurement",
  "body": " Levels of Measurement  The four traditional levels of measurement measurement levels are nominal, ordinal, interval, and ratio. These levels tell us not only whether the data is categorical or numerical, but also how much information the values carry.  The nominal scale measurement nominal scale groups observations into categories with no order. The ordinal scale measurement ordinal scale places observations in order, but the differences between categories are not measured evenly. The interval scale measurement interval scale has equal intervals, but no true zero, so differences are meaningful while ratios are not. The ratio scale measurement ratio scale has equal intervals and a true zero, so both differences and ratios are meaningful.  It helps to think about what the number is really doing. If it is just a label, the level is nominal. If it gives an order, but not a reliable size of the gap between values, the level is ordinal. If equal differences matter but zero is only a point on the scale, the level is interval. If zero means none of the quantity, the level is ratio.   Nominal examples: eye color, major, whether a student wears glasses, and student ID numbers.  Ordinal examples: year in school, class rank, pain level, and finishing place in a race.  Interval examples: birth year, temperature in Celsius, temperature in Fahrenheit, and calendar year.  Ratio examples: height, distance from school, number of siblings, commute time, and amount of money spent on lunch.   Some variables are easy to misread at first. Jersey numbers and ZIP codes look numerical, but they are usually nominal because they are labels rather than measurements. By contrast, height and distance are ratio variables because zero means none of the quantity and ratios make sense.   Comparing Temperature and Length  Temperature measured in Celsius is interval data. The difference between 10 degrees and 20 degrees is the same size as the difference between 20 degrees and 30 degrees, but 20 degrees Celsius is not twice as hot as 10 degrees Celsius because zero does not mean the complete absence of temperature. By contrast, length is ratio data: 10 feet really is twice as long as 5 feet, and 0 feet means no length at all.    Levels in the Class Data  In the class data set from the previous section, first name, eye color, and whether a student wears glasses are nominal. Year in school is ordinal. Birth year is interval. Height, distance from school, number of siblings, and commute time are ratio. That mix is useful because it shows why the level of measurement matters before we choose a summary or graph.    Classifying Levels of Measurement   Return to the class data set you collected earlier. Now classify each variable by its level of measurement.     Label each variable as nominal, ordinal, interval, or ratio.      For each one, explain briefly why that level fits. Ask whether the variable is only a label, whether order matters, whether differences matter, or whether zero means none of the quantity.      Check that your data set includes examples of all four levels of measurement. If one level is missing, add another variable that fills the gap.      Checkpoint  Identify the level of measurement for each variable: jersey number, finishing place in a race, temperature in Fahrenheit, and monthly rent in dollars.   "
},
{
  "id": "sec-levels-of-measurement-2",
  "level": "2",
  "url": "sec-levels-of-measurement.html#sec-levels-of-measurement-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "levels of measurement measurement levels "
},
{
  "id": "sec-levels-of-measurement-3",
  "level": "2",
  "url": "sec-levels-of-measurement.html#sec-levels-of-measurement-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nominal scale measurement nominal scale ordinal scale measurement ordinal scale interval scale measurement interval scale ratio scale measurement ratio scale "
},
{
  "id": "ex-levels-of-measurement",
  "level": "2",
  "url": "sec-levels-of-measurement.html#ex-levels-of-measurement",
  "type": "Example",
  "number": "1.2.1",
  "title": "Comparing Temperature and Length.",
  "body": " Comparing Temperature and Length  Temperature measured in Celsius is interval data. The difference between 10 degrees and 20 degrees is the same size as the difference between 20 degrees and 30 degrees, but 20 degrees Celsius is not twice as hot as 10 degrees Celsius because zero does not mean the complete absence of temperature. By contrast, length is ratio data: 10 feet really is twice as long as 5 feet, and 0 feet means no length at all.  "
},
{
  "id": "ex-levels-class-data",
  "level": "2",
  "url": "sec-levels-of-measurement.html#ex-levels-class-data",
  "type": "Example",
  "number": "1.2.2",
  "title": "Levels in the Class Data.",
  "body": " Levels in the Class Data  In the class data set from the previous section, first name, eye color, and whether a student wears glasses are nominal. Year in school is ordinal. Birth year is interval. Height, distance from school, number of siblings, and commute time are ratio. That mix is useful because it shows why the level of measurement matters before we choose a summary or graph.  "
},
{
  "id": "act-levels-class-data",
  "level": "2",
  "url": "sec-levels-of-measurement.html#act-levels-class-data",
  "type": "Activity",
  "number": "1.2.1",
  "title": "Classifying Levels of Measurement.",
  "body": " Classifying Levels of Measurement   Return to the class data set you collected earlier. Now classify each variable by its level of measurement.     Label each variable as nominal, ordinal, interval, or ratio.      For each one, explain briefly why that level fits. Ask whether the variable is only a label, whether order matters, whether differences matter, or whether zero means none of the quantity.      Check that your data set includes examples of all four levels of measurement. If one level is missing, add another variable that fills the gap.    "
},
{
  "id": "cp-levels-of-measurement",
  "level": "2",
  "url": "sec-levels-of-measurement.html#cp-levels-of-measurement",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "Checkpoint.",
  "body": " Checkpoint  Identify the level of measurement for each variable: jersey number, finishing place in a race, temperature in Fahrenheit, and monthly rent in dollars.  "
},
{
  "id": "ch1-exercises",
  "level": "1",
  "url": "ch1-exercises.html",
  "type": "Exercises",
  "number": "1.3",
  "title": "Exercises",
  "body": " Exercises   Classify each variable as qualitative or quantitative: favorite season, age of a used car, student ID number, and number of courses completed.    Classify each variable as nominal or ordinal: medal type in a competition, brand of cereal, customer satisfaction level, and blood type.    Classify each variable as discrete or continuous: number of customers in line, amount of gasoline in a tank, number of goals scored by a team, and height of a sunflower plant.    Identify the level of measurement for each variable: postal ZIP code, class rank, temperature in Celsius, and annual salary.    A university records the following information about students: housing type, GPA, number of clubs joined, and academic standing. Classify each variable as nominal, ordinal, discrete, or continuous whenever possible.    A weather station reports sky condition, wind speed, number of rainy days this month, and temperature in Fahrenheit. Classify each variable as nominal, ordinal, discrete, or continuous whenever possible.    Give one example of your own for each of the following: nominal data, ordinal data, discrete data, and continuous data.    Explain why a movie rating system such as one star through five stars is usually treated as ordinal rather than interval data.    Explain why temperature measured in Kelvin is ratio data, while temperature measured in Celsius is interval data.    A hospital records patient blood type, pain score from 1 to 10, number of previous surgeries, and body temperature. Classify each variable as carefully as you can and justify any choice that might be debatable.   "
},
{
  "id": "ch1-ex-1",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": " Classify each variable as qualitative or quantitative: favorite season, age of a used car, student ID number, and number of courses completed.  "
},
{
  "id": "ch1-ex-2",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": " Classify each variable as nominal or ordinal: medal type in a competition, brand of cereal, customer satisfaction level, and blood type.  "
},
{
  "id": "ch1-ex-3",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-3",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": " Classify each variable as discrete or continuous: number of customers in line, amount of gasoline in a tank, number of goals scored by a team, and height of a sunflower plant.  "
},
{
  "id": "ch1-ex-4",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-4",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": " Identify the level of measurement for each variable: postal ZIP code, class rank, temperature in Celsius, and annual salary.  "
},
{
  "id": "ch1-ex-5",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-5",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": " A university records the following information about students: housing type, GPA, number of clubs joined, and academic standing. Classify each variable as nominal, ordinal, discrete, or continuous whenever possible.  "
},
{
  "id": "ch1-ex-6",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-6",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": " A weather station reports sky condition, wind speed, number of rainy days this month, and temperature in Fahrenheit. Classify each variable as nominal, ordinal, discrete, or continuous whenever possible.  "
},
{
  "id": "ch1-ex-7",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-7",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": " Give one example of your own for each of the following: nominal data, ordinal data, discrete data, and continuous data.  "
},
{
  "id": "ch1-ex-8",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-8",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": " Explain why a movie rating system such as one star through five stars is usually treated as ordinal rather than interval data.  "
},
{
  "id": "ch1-ex-9",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-9",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": " Explain why temperature measured in Kelvin is ratio data, while temperature measured in Celsius is interval data.  "
},
{
  "id": "ch1-ex-10",
  "level": "2",
  "url": "ch1-exercises.html#ch1-ex-10",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": " A hospital records patient blood type, pain score from 1 to 10, number of previous surgeries, and body temperature. Classify each variable as carefully as you can and justify any choice that might be debatable.  "
},
{
  "id": "sec-frequency-tables",
  "level": "1",
  "url": "sec-frequency-tables.html",
  "type": "Section",
  "number": "2.1",
  "title": "Frequency Tables and Relative Frequency",
  "body": " Frequency Tables and Relative Frequency  A frequency table tables frequency table organizes data by listing each value or category together with its frequency tables frequency , which is the number of times that value occurs. If we divide each frequency by the total number of observations, we get the relative frequency tables relative frequency . Relative frequency tells us the share of the data in each category.   Relative frequency is often written as a decimal, but a percentage is usually easier to read. The relative frequencies in a complete table should add up to , or equivalently to .  A quick way to practice these ideas is with data from the class itself. The point is not to make the numbers fancy. The point is to get comfortable turning a raw list into a table, then reading that table a little more carefully.   Last-Name Initials   Use the first letter of each student's last name to build a frequency table. This is a nice warm-up because the data are categorical, but the table still has enough structure to let us talk about relative and cumulative frequency.     Collect the first initial of each student's last name. Make a frequency table with the initials in alphabetical order.      Add a relative frequency column. Which initial has the largest relative frequency? What percentage of the class does it represent?      Add a cumulative frequency column, again using alphabetical order. Which initials account for about half of the class?      Length of Student Names   Now use the lengths of students' names. To keep the counting consistent, count letters only and ignore spaces and punctuation. This gives us numerical data, so the table can also lead naturally into cumulative frequency.     Count the number of letters in each student's full name. Make a frequency table for the name lengths, ordering the lengths from smallest to largest.      Add a relative frequency column. Which name length is most common? Which lengths are rare?      Add a cumulative frequency column. As you move from the shortest names to the longest, at what name length does the cumulative frequency first pass half of the class? What proportion of the class do the shorter names represent?      How Students Get to Campus  Suppose a class records how 12 students usually travel to campus: auto, auto, metro, bike, auto, walk, metro, auto, bike, walk, metro, auto. A frequency table for this data is shown in .    Frequency and relative frequency for commuting to campus    Mode of transportation  Frequency  Relative frequency    Auto  5  or    Metro  3  or    Bike  2  or    Walk  2  or     This table says more than the raw list did. We can immediately see that auto is the most common commuting method, and we can compare categories with either counts or percentages. If the class size changed next semester, the percentages would still make comparison easy.  Sometimes a variable has many possible values, or it is measured on a continuous scale. In that situation a row for every single value would not be very useful. Instead we group nearby values into class intervals tables class interval . A table built from intervals is called a grouped frequency table tables grouped frequency table .   Customer Wait Times  A coffee shop records the waiting time, in minutes, for 50 customers during a busy hour. Rather than listing every separate time, the manager groups the data into intervals. The grouped frequency table appears in .    Grouped frequency table for customer wait times    Wait time (minutes)  Frequency  Relative frequency     6  or     14  or     18  or     9  or     3  or     From this table we can see that the most common waiting times fall in the interval from 4 to 6 minutes. We can also say that of the customers waited between 4 and 6 minutes, and only waited between 8 and 10 minutes.  Frequency tables are simple, but they do a lot of work. They help us summarize the data, compare categories, and prepare for the graphs we will make next.  "
},
{
  "id": "sec-frequency-tables-2",
  "level": "2",
  "url": "sec-frequency-tables.html#sec-frequency-tables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "frequency table tables frequency table frequency tables frequency relative frequency tables relative frequency "
},
{
  "id": "act-last-name-initials",
  "level": "2",
  "url": "sec-frequency-tables.html#act-last-name-initials",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Last-Name Initials.",
  "body": " Last-Name Initials   Use the first letter of each student's last name to build a frequency table. This is a nice warm-up because the data are categorical, but the table still has enough structure to let us talk about relative and cumulative frequency.     Collect the first initial of each student's last name. Make a frequency table with the initials in alphabetical order.      Add a relative frequency column. Which initial has the largest relative frequency? What percentage of the class does it represent?      Add a cumulative frequency column, again using alphabetical order. Which initials account for about half of the class?    "
},
{
  "id": "act-name-lengths",
  "level": "2",
  "url": "sec-frequency-tables.html#act-name-lengths",
  "type": "Activity",
  "number": "2.1.2",
  "title": "Length of Student Names.",
  "body": " Length of Student Names   Now use the lengths of students' names. To keep the counting consistent, count letters only and ignore spaces and punctuation. This gives us numerical data, so the table can also lead naturally into cumulative frequency.     Count the number of letters in each student's full name. Make a frequency table for the name lengths, ordering the lengths from smallest to largest.      Add a relative frequency column. Which name length is most common? Which lengths are rare?      Add a cumulative frequency column. As you move from the shortest names to the longest, at what name length does the cumulative frequency first pass half of the class? What proportion of the class do the shorter names represent?    "
},
{
  "id": "ex-commute-frequency-table",
  "level": "2",
  "url": "sec-frequency-tables.html#ex-commute-frequency-table",
  "type": "Example",
  "number": "2.1.1",
  "title": "How Students Get to Campus.",
  "body": " How Students Get to Campus  Suppose a class records how 12 students usually travel to campus: auto, auto, metro, bike, auto, walk, metro, auto, bike, walk, metro, auto. A frequency table for this data is shown in .  "
},
{
  "id": "tbl-commute-frequency",
  "level": "2",
  "url": "sec-frequency-tables.html#tbl-commute-frequency",
  "type": "Table",
  "number": "2.1.2",
  "title": "Frequency and relative frequency for commuting to campus",
  "body": " Frequency and relative frequency for commuting to campus    Mode of transportation  Frequency  Relative frequency    Auto  5  or    Metro  3  or    Bike  2  or    Walk  2  or    "
},
{
  "id": "sec-frequency-tables-11",
  "level": "2",
  "url": "sec-frequency-tables.html#sec-frequency-tables-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "class intervals tables class interval grouped frequency table tables grouped frequency table "
},
{
  "id": "ex-wait-time-grouped",
  "level": "2",
  "url": "sec-frequency-tables.html#ex-wait-time-grouped",
  "type": "Example",
  "number": "2.1.3",
  "title": "Customer Wait Times.",
  "body": " Customer Wait Times  A coffee shop records the waiting time, in minutes, for 50 customers during a busy hour. Rather than listing every separate time, the manager groups the data into intervals. The grouped frequency table appears in .  "
},
{
  "id": "tbl-wait-time-frequency",
  "level": "2",
  "url": "sec-frequency-tables.html#tbl-wait-time-frequency",
  "type": "Table",
  "number": "2.1.4",
  "title": "Grouped frequency table for customer wait times",
  "body": " Grouped frequency table for customer wait times    Wait time (minutes)  Frequency  Relative frequency     6  or     14  or     18  or     9  or     3  or    "
},
{
  "id": "sec-graphs-for-data",
  "level": "1",
  "url": "sec-graphs-for-data.html",
  "type": "Section",
  "number": "2.2",
  "title": "Graphs for Displaying Data",
  "body": " Graphs for Displaying Data  Graphs are often faster to read than tables because they turn numerical information into shape and height. Different graphs are useful for different kinds of data. A dot plot graphs dot plot works well for small sets of discrete numerical data. A bar chart graphs bar chart is good for comparing categories. A stem-and-leaf plot graphs stem-and-leaf plot keeps the original data values visible. A histogram graphs histogram and a frequency polygon graphs frequency polygon are especially useful for grouped quantitative data.   A Dot Plot of Siblings  Suppose 12 students report the number of siblings they have: 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4. The dot plot in stacks one dot for each student above the corresponding number of siblings.    Dot plot for number of siblings   A dot plot with sibling counts from 0 through 4. There is one dot above 0, three above 1, three above 2, three above 3, and two above 4.  The horizontal axis is labeled Number of siblings and is marked at 0, 1, 2, 3, and 4. One dot is stacked above 0. Three dots are stacked above 1. Three dots are stacked above 2. Three dots are stacked above 3. Two dots are stacked above 4. The tallest stacks occur at 1, 2, and 3, each with frequency 3.     A dot plot is compact and honest. It shows every observation while still making the distribution easy to read. For small data sets, that is a nice combination.  For categorical data, a bar chart is usually the better choice. The categories are placed on one axis, and the height of each bar shows its frequency or relative frequency.   Bar chart for commuting to campus   A vertical bar chart with four categories: Auto at height 5, Metro at height 3, Bike at height 2, and Walk at height 2.  The horizontal axis lists Auto, Metro, Bike, and Walk. The vertical axis is labeled Frequency and runs from 0 to 6. The Auto bar reaches 5, the Metro bar reaches 3, and the Bike and Walk bars each reach 2. Auto is the tallest bar.     The bar chart in shows the same information as , but now the comparisons are visual. We can tell right away that auto is the most common category and that bike and walk are tied.   A Stem-and-Leaf Plot  Consider these quiz scores: 72, 74, 76, 78, 80, 81, 83, 83, 85, 88, 91, 94. A stem-and-leaf plot separates each score into a stem and a leaf. In this case the tens digits are stems and the ones digits are leaves, as shown in .    Stem-and-leaf plot for quiz scores    Stem  Leaves    7  2, 4, 6, 8    8  0, 1, 3, 3, 5, 8    9  1, 4     The key idea is that the plot still contains the original data values. For example, the leaf 3 on stem 8 represents a score of 83. A stem-and-leaf plot is handy when the data set is not too large and you want both a picture and the exact values.  When the data is grouped into intervals, a histogram is often the natural graph. The bars in a histogram touch because the intervals sit next to each other on a number line. The histogram in uses the grouped wait-time data from .   Histogram for customer wait times   A histogram with five touching bars for the intervals 0 to 2, 2 to 4, 4 to 6, 6 to 8, and 8 to 10 minutes. Their heights are 6, 14, 18, 9, and 3.  The horizontal axis is labeled Wait time in minutes and is marked at 0, 2, 4, 6, 8, and 10. The vertical axis is labeled Frequency and runs from 0 to 20. Five adjacent bars represent the intervals [0,2), [2,4), [4,6), [6,8), and [8,10). Their heights are 6, 14, 18, 9, and 3 respectively. The tallest bar is the interval from 4 to 6 minutes.     A frequency polygon graphs frequency polygon is built from the same grouped data, but instead of bars we plot the class midpoints graphs midpoint against the frequencies and join the points with line segments. This is especially helpful when we want to compare shapes or place more than one distribution on the same set of axes.   Frequency polygon for customer wait times   A line graph formed by connecting the points at midpoints 1, 3, 5, 7, and 9 with frequencies 6, 14, 18, 9, and 3, together with zero-frequency endpoints at -1 and 11.  The horizontal axis is labeled Wait time in minutes and the vertical axis is labeled Frequency. A polyline starts at the point (-1,0), rises to (1,6), then to (3,14), peaks at (5,18), drops to (7,9), then to (9,3), and returns to (11,0). The highest point occurs at the midpoint 5, corresponding to the interval from 4 to 6 minutes. The two endpoints lie one class width beyond the first and last class midpoints.     Each graph has its own job. The trick is not to memorize names blindly, but to match the graph to the kind of data you have and the question you want to answer.   Choosing the Right Graph   Before drawing anything, the first job is to choose a graph that matches the data. The same data set can often be shown in more than one way, but some displays fit the variable much better than others.     For each variable below, decide which graph would be most appropriate: bar chart, dot plot, stem-and-leaf plot, histogram, or frequency polygon.      Explain your choice in a sentence or two. Think about whether the data is categorical or numerical, and whether the values are individual observations or grouped into classes.      Use these examples: eye color, number of siblings, height, and grouped commute times.      Bar Charts from Class Data   Use the data set collected in . Categorical variables are often easiest to understand when they are shown in a bar chart.     Choose one nominal variable from the class data, such as eye color, whether a student wears glasses, handedness, or favorite subject. Make a frequency table and then draw a bar chart.      If the variable has a natural order, such as year in school, make sure the bars are arranged in that order.      Write two observations from the graph. Which category is most common? Which category is least common?      Dot Plots and Stem-and-Leaf Plots   Use the quantitative data from the class collection. Small data sets work especially well for displays that keep the individual values visible.     Choose a discrete variable from the class data, such as number of siblings or number of pets. Make a dot plot and describe the shape of the distribution.      Choose another quantitative variable, such as height or commute time. If the data values are not too many, make a stem-and-leaf plot. If there are too many repeated values, use a dot plot instead.      Compare the two graphs. Which one makes it easier to see the exact values? Which one makes it easier to see the overall pattern?      Grouped Graphs from Class Data   If the class data include a continuous measurement like height or commute time, you can group the values into classes and make a histogram or frequency polygon. That is the natural next step when the raw values are too spread out to show clearly one by one.     Choose one continuous variable from the class data, such as height, commute time, or distance from school. Group the values into a reasonable set of class intervals.      Use the grouped data to draw a histogram. Then sketch a frequency polygon using the class midpoints.      Compare the histogram and the frequency polygon. Which one is better for seeing the shape of the data? Which one makes the class intervals easier to read?     "
},
{
  "id": "sec-graphs-for-data-2",
  "level": "2",
  "url": "sec-graphs-for-data.html#sec-graphs-for-data-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot plot graphs dot plot bar chart graphs bar chart stem-and-leaf plot graphs stem-and-leaf plot histogram graphs histogram frequency polygon graphs frequency polygon "
},
{
  "id": "ex-dot-plot",
  "level": "2",
  "url": "sec-graphs-for-data.html#ex-dot-plot",
  "type": "Example",
  "number": "2.2.1",
  "title": "A Dot Plot of Siblings.",
  "body": " A Dot Plot of Siblings  Suppose 12 students report the number of siblings they have: 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4. The dot plot in stacks one dot for each student above the corresponding number of siblings.  "
},
{
  "id": "fig-dotplot-siblings",
  "level": "2",
  "url": "sec-graphs-for-data.html#fig-dotplot-siblings",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " Dot plot for number of siblings   A dot plot with sibling counts from 0 through 4. There is one dot above 0, three above 1, three above 2, three above 3, and two above 4.  The horizontal axis is labeled Number of siblings and is marked at 0, 1, 2, 3, and 4. One dot is stacked above 0. Three dots are stacked above 1. Three dots are stacked above 2. Three dots are stacked above 3. Two dots are stacked above 4. The tallest stacks occur at 1, 2, and 3, each with frequency 3.    "
},
{
  "id": "fig-bar-chart-commute",
  "level": "2",
  "url": "sec-graphs-for-data.html#fig-bar-chart-commute",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " Bar chart for commuting to campus   A vertical bar chart with four categories: Auto at height 5, Metro at height 3, Bike at height 2, and Walk at height 2.  The horizontal axis lists Auto, Metro, Bike, and Walk. The vertical axis is labeled Frequency and runs from 0 to 6. The Auto bar reaches 5, the Metro bar reaches 3, and the Bike and Walk bars each reach 2. Auto is the tallest bar.    "
},
{
  "id": "ex-stem-leaf",
  "level": "2",
  "url": "sec-graphs-for-data.html#ex-stem-leaf",
  "type": "Example",
  "number": "2.2.4",
  "title": "A Stem-and-Leaf Plot.",
  "body": " A Stem-and-Leaf Plot  Consider these quiz scores: 72, 74, 76, 78, 80, 81, 83, 83, 85, 88, 91, 94. A stem-and-leaf plot separates each score into a stem and a leaf. In this case the tens digits are stems and the ones digits are leaves, as shown in .  "
},
{
  "id": "tbl-stem-leaf-scores",
  "level": "2",
  "url": "sec-graphs-for-data.html#tbl-stem-leaf-scores",
  "type": "Table",
  "number": "2.2.5",
  "title": "Stem-and-leaf plot for quiz scores",
  "body": " Stem-and-leaf plot for quiz scores    Stem  Leaves    7  2, 4, 6, 8    8  0, 1, 3, 3, 5, 8    9  1, 4    "
},
{
  "id": "fig-histogram-wait-time",
  "level": "2",
  "url": "sec-graphs-for-data.html#fig-histogram-wait-time",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " Histogram for customer wait times   A histogram with five touching bars for the intervals 0 to 2, 2 to 4, 4 to 6, 6 to 8, and 8 to 10 minutes. Their heights are 6, 14, 18, 9, and 3.  The horizontal axis is labeled Wait time in minutes and is marked at 0, 2, 4, 6, 8, and 10. The vertical axis is labeled Frequency and runs from 0 to 20. Five adjacent bars represent the intervals [0,2), [2,4), [4,6), [6,8), and [8,10). Their heights are 6, 14, 18, 9, and 3 respectively. The tallest bar is the interval from 4 to 6 minutes.    "
},
{
  "id": "sec-graphs-for-data-14",
  "level": "2",
  "url": "sec-graphs-for-data.html#sec-graphs-for-data-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "frequency polygon graphs frequency polygon midpoints graphs midpoint "
},
{
  "id": "fig-frequency-polygon-wait-time",
  "level": "2",
  "url": "sec-graphs-for-data.html#fig-frequency-polygon-wait-time",
  "type": "Figure",
  "number": "2.2.7",
  "title": "",
  "body": " Frequency polygon for customer wait times   A line graph formed by connecting the points at midpoints 1, 3, 5, 7, and 9 with frequencies 6, 14, 18, 9, and 3, together with zero-frequency endpoints at -1 and 11.  The horizontal axis is labeled Wait time in minutes and the vertical axis is labeled Frequency. A polyline starts at the point (-1,0), rises to (1,6), then to (3,14), peaks at (5,18), drops to (7,9), then to (9,3), and returns to (11,0). The highest point occurs at the midpoint 5, corresponding to the interval from 4 to 6 minutes. The two endpoints lie one class width beyond the first and last class midpoints.    "
},
{
  "id": "act-choose-graph",
  "level": "2",
  "url": "sec-graphs-for-data.html#act-choose-graph",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Choosing the Right Graph.",
  "body": " Choosing the Right Graph   Before drawing anything, the first job is to choose a graph that matches the data. The same data set can often be shown in more than one way, but some displays fit the variable much better than others.     For each variable below, decide which graph would be most appropriate: bar chart, dot plot, stem-and-leaf plot, histogram, or frequency polygon.      Explain your choice in a sentence or two. Think about whether the data is categorical or numerical, and whether the values are individual observations or grouped into classes.      Use these examples: eye color, number of siblings, height, and grouped commute times.    "
},
{
  "id": "act-class-data-bar-chart",
  "level": "2",
  "url": "sec-graphs-for-data.html#act-class-data-bar-chart",
  "type": "Activity",
  "number": "2.2.2",
  "title": "Bar Charts from Class Data.",
  "body": " Bar Charts from Class Data   Use the data set collected in . Categorical variables are often easiest to understand when they are shown in a bar chart.     Choose one nominal variable from the class data, such as eye color, whether a student wears glasses, handedness, or favorite subject. Make a frequency table and then draw a bar chart.      If the variable has a natural order, such as year in school, make sure the bars are arranged in that order.      Write two observations from the graph. Which category is most common? Which category is least common?    "
},
{
  "id": "act-class-data-dotplot-stem",
  "level": "2",
  "url": "sec-graphs-for-data.html#act-class-data-dotplot-stem",
  "type": "Activity",
  "number": "2.2.3",
  "title": "Dot Plots and Stem-and-Leaf Plots.",
  "body": " Dot Plots and Stem-and-Leaf Plots   Use the quantitative data from the class collection. Small data sets work especially well for displays that keep the individual values visible.     Choose a discrete variable from the class data, such as number of siblings or number of pets. Make a dot plot and describe the shape of the distribution.      Choose another quantitative variable, such as height or commute time. If the data values are not too many, make a stem-and-leaf plot. If there are too many repeated values, use a dot plot instead.      Compare the two graphs. Which one makes it easier to see the exact values? Which one makes it easier to see the overall pattern?    "
},
{
  "id": "act-class-data-grouped-graphs",
  "level": "2",
  "url": "sec-graphs-for-data.html#act-class-data-grouped-graphs",
  "type": "Activity",
  "number": "2.2.4",
  "title": "Grouped Graphs from Class Data.",
  "body": " Grouped Graphs from Class Data   If the class data include a continuous measurement like height or commute time, you can group the values into classes and make a histogram or frequency polygon. That is the natural next step when the raw values are too spread out to show clearly one by one.     Choose one continuous variable from the class data, such as height, commute time, or distance from school. Group the values into a reasonable set of class intervals.      Use the grouped data to draw a histogram. Then sketch a frequency polygon using the class midpoints.      Compare the histogram and the frequency polygon. Which one is better for seeing the shape of the data? Which one makes the class intervals easier to read?    "
},
{
  "id": "ch2-exercises",
  "level": "1",
  "url": "ch2-exercises.html",
  "type": "Exercises",
  "number": "2.3",
  "title": "Exercises",
  "body": " Exercises   A survey asks 20 students which streaming platform they use most often. The results are: Netflix, Hulu, Netflix, Disney+, Netflix, Hulu, Max, Netflix, Disney+, Hulu, Netflix, Max, Hulu, Hulu, Disney+, Netflix, Max, Hulu, Netflix, Disney+.  Construct a frequency table and a relative frequency table for this data.    A bakery records the number of muffins sold in an hour on 15 different mornings: 8, 11, 10, 12, 9, 10, 8, 13, 11, 10, 12, 9, 10, 11, 8.  Make a frequency table for the data and identify the most common value.    A grouped frequency table shows the frequencies 4, 9, 15, 8, and 4 for five consecutive classes, and there are 40 observations in all.  Find the relative frequency of each class and check that the relative frequencies sum to .    A gym measures workout time in minutes for 60 members and reports the grouped frequencies below.  : 6, : 18, : 21, : 11, : 4.  Which interval has the greatest frequency? Which interval has the smallest relative frequency?    Which display would be most appropriate in each situation: dot plot, bar chart, stem-and-leaf plot, histogram, or frequency polygon?   The blood types of patients in a clinic.  The number of text messages sent yesterday by each student in a small class.  A large set of waiting times measured to the nearest tenth of a minute.  A short list of quiz scores where you want to keep the original scores visible.     Draw a dot plot for the data set 0, 1, 1, 2, 2, 2, 3, 4, 4, 5.    Use the commuting data from to draw a bar chart by hand or with software. Then write one sentence comparing the categories.    Construct a stem-and-leaf plot for the following exam scores: 61, 64, 66, 70, 72, 72, 75, 78, 81, 84, 88, 90.    Use the wait-time data in to sketch a histogram. Which class interval contains the modal class (the class with the greatest frequency)?    Using the same grouped wait-time data in , list the class midpoints and use them to sketch a frequency polygon.   "
},
{
  "id": "ch2-ex-1",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": " A survey asks 20 students which streaming platform they use most often. The results are: Netflix, Hulu, Netflix, Disney+, Netflix, Hulu, Max, Netflix, Disney+, Hulu, Netflix, Max, Hulu, Hulu, Disney+, Netflix, Max, Hulu, Netflix, Disney+.  Construct a frequency table and a relative frequency table for this data.  "
},
{
  "id": "ch2-ex-2",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": " A bakery records the number of muffins sold in an hour on 15 different mornings: 8, 11, 10, 12, 9, 10, 8, 13, 11, 10, 12, 9, 10, 11, 8.  Make a frequency table for the data and identify the most common value.  "
},
{
  "id": "ch2-ex-3",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": " A grouped frequency table shows the frequencies 4, 9, 15, 8, and 4 for five consecutive classes, and there are 40 observations in all.  Find the relative frequency of each class and check that the relative frequencies sum to .  "
},
{
  "id": "ch2-ex-4",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": " A gym measures workout time in minutes for 60 members and reports the grouped frequencies below.  : 6, : 18, : 21, : 11, : 4.  Which interval has the greatest frequency? Which interval has the smallest relative frequency?  "
},
{
  "id": "ch2-ex-5",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-5",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": " Which display would be most appropriate in each situation: dot plot, bar chart, stem-and-leaf plot, histogram, or frequency polygon?   The blood types of patients in a clinic.  The number of text messages sent yesterday by each student in a small class.  A large set of waiting times measured to the nearest tenth of a minute.  A short list of quiz scores where you want to keep the original scores visible.   "
},
{
  "id": "ch2-ex-6",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-6",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": " Draw a dot plot for the data set 0, 1, 1, 2, 2, 2, 3, 4, 4, 5.  "
},
{
  "id": "ch2-ex-7",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-7",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": " Use the commuting data from to draw a bar chart by hand or with software. Then write one sentence comparing the categories.  "
},
{
  "id": "ch2-ex-8",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-8",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": " Construct a stem-and-leaf plot for the following exam scores: 61, 64, 66, 70, 72, 72, 75, 78, 81, 84, 88, 90.  "
},
{
  "id": "ch2-ex-9",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-9",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": " Use the wait-time data in to sketch a histogram. Which class interval contains the modal class (the class with the greatest frequency)?  "
},
{
  "id": "ch2-ex-10",
  "level": "2",
  "url": "ch2-exercises.html#ch2-ex-10",
  "type": "Exercise",
  "number": "2.3.10",
  "title": "",
  "body": " Using the same grouped wait-time data in , list the class midpoints and use them to sketch a frequency polygon.  "
},
{
  "id": "sec-mean-median-mode",
  "level": "1",
  "url": "sec-mean-median-mode.html",
  "type": "Section",
  "number": "3.1",
  "title": "Mean, Median, and Mode",
  "body": " Mean, Median, and Mode  The mean summaries arithmetic mean of a data set is what most people call the average. We add the data values and divide by the number of observations.   Here is the size of the data set. The mean uses every value in the set, so it reacts to changes anywhere in the data. It also does not have to be one of the observed data values.   Computing a Mean  Suppose five students report commute times of 12, 15, 18, 20, and 25 minutes. The mean commute time is   So the average commute time is 18 minutes.   The median summaries median is the middle value when the data is listed in order from smallest to largest. If there is an odd number of observations, the median is the single middle value. If there is an even number of observations, the median is the average of the two middle values.   Odd and Even Cases for the Median  For the ordered data set 4, 7, 9, 12, 15, the median is 9 because it is the middle value. For the ordered data set 4, 7, 9, 12, 15, 20, the median is   That second median is not one of the original data values, and that is completely normal.   The mode summaries mode is the value that occurs most often. Unlike the mean and median, the mode must be an actual data value or category. A data set can have one mode, more than one mode, or no mode at all if every value occurs equally often.   One Mode, Two Modes, or No Mode  In the data set 2, 3, 3, 4, 6, the mode is 3 because it appears most often. In the data set red, blue, blue, green, green, there are two modes, blue and green, so the distribution is bimodal summaries bimodal distribution . In the data set 1, 2, 3, 4, each value appears once, so by convention the data set has no mode.   These three measures answer slightly different questions.   The mean balances the whole data set.  The median marks the middle position.  The mode identifies the most common value or category.   Because they capture different ideas of center, they can tell different stories about the same data.   When Mean and Median Pull Apart  Suppose six hourly wages are 16, 17, 18, 18, 19, and 40 dollars. The mean is   while the median is   The high wage of 40 pulls the mean upward, but it does not move the median very much. This is one reason the median is often preferred for income data.    Mean, Median, and Mode Practice   Work with short data sets so you can focus on the definitions of the mean, median, and mode.     For the data set 5, 7, 7, 8, 10, find the mean, median, and mode.      For the data set 3, 4, 6, 6, 9, 12, find the mean and median.      For the data set red, blue, blue, green, green, green, find the mode and state whether the data set is unimodal, bimodal, or has no mode.      Center from Class Data   Use the data set collected in . Choose a quantitative variable that was recorded for the class.     Choose a variable such as number of siblings, height, commute time, or distance from school. Compute the mean and median.      If the variable is discrete and repeats values often, identify the mode as well.      Write one sentence comparing the mean and median. If they are different, say which one seems more typical for the data and why.     "
},
{
  "id": "sec-mean-median-mode-2",
  "level": "2",
  "url": "sec-mean-median-mode.html#sec-mean-median-mode-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean summaries arithmetic mean "
},
{
  "id": "ex-mean-commute-time",
  "level": "2",
  "url": "sec-mean-median-mode.html#ex-mean-commute-time",
  "type": "Example",
  "number": "3.1.1",
  "title": "Computing a Mean.",
  "body": " Computing a Mean  Suppose five students report commute times of 12, 15, 18, 20, and 25 minutes. The mean commute time is   So the average commute time is 18 minutes.  "
},
{
  "id": "sec-mean-median-mode-6",
  "level": "2",
  "url": "sec-mean-median-mode.html#sec-mean-median-mode-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "median summaries median "
},
{
  "id": "ex-median-odd-even",
  "level": "2",
  "url": "sec-mean-median-mode.html#ex-median-odd-even",
  "type": "Example",
  "number": "3.1.2",
  "title": "Odd and Even Cases for the Median.",
  "body": " Odd and Even Cases for the Median  For the ordered data set 4, 7, 9, 12, 15, the median is 9 because it is the middle value. For the ordered data set 4, 7, 9, 12, 15, 20, the median is   That second median is not one of the original data values, and that is completely normal.  "
},
{
  "id": "sec-mean-median-mode-8",
  "level": "2",
  "url": "sec-mean-median-mode.html#sec-mean-median-mode-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mode summaries mode "
},
{
  "id": "ex-mode-bimodal",
  "level": "2",
  "url": "sec-mean-median-mode.html#ex-mode-bimodal",
  "type": "Example",
  "number": "3.1.3",
  "title": "One Mode, Two Modes, or No Mode.",
  "body": " One Mode, Two Modes, or No Mode  In the data set 2, 3, 3, 4, 6, the mode is 3 because it appears most often. In the data set red, blue, blue, green, green, there are two modes, blue and green, so the distribution is bimodal summaries bimodal distribution . In the data set 1, 2, 3, 4, each value appears once, so by convention the data set has no mode.  "
},
{
  "id": "ex-salary-mean-median",
  "level": "2",
  "url": "sec-mean-median-mode.html#ex-salary-mean-median",
  "type": "Example",
  "number": "3.1.4",
  "title": "When Mean and Median Pull Apart.",
  "body": " When Mean and Median Pull Apart  Suppose six hourly wages are 16, 17, 18, 18, 19, and 40 dollars. The mean is   while the median is   The high wage of 40 pulls the mean upward, but it does not move the median very much. This is one reason the median is often preferred for income data.  "
},
{
  "id": "act-ch3-central-measures-generated",
  "level": "2",
  "url": "sec-mean-median-mode.html#act-ch3-central-measures-generated",
  "type": "Activity",
  "number": "3.1.1",
  "title": "Mean, Median, and Mode Practice.",
  "body": " Mean, Median, and Mode Practice   Work with short data sets so you can focus on the definitions of the mean, median, and mode.     For the data set 5, 7, 7, 8, 10, find the mean, median, and mode.      For the data set 3, 4, 6, 6, 9, 12, find the mean and median.      For the data set red, blue, blue, green, green, green, find the mode and state whether the data set is unimodal, bimodal, or has no mode.    "
},
{
  "id": "act-ch3-central-measures-class-data",
  "level": "2",
  "url": "sec-mean-median-mode.html#act-ch3-central-measures-class-data",
  "type": "Activity",
  "number": "3.1.2",
  "title": "Center from Class Data.",
  "body": " Center from Class Data   Use the data set collected in . Choose a quantitative variable that was recorded for the class.     Choose a variable such as number of siblings, height, commute time, or distance from school. Compute the mean and median.      If the variable is discrete and repeats values often, identify the mode as well.      Write one sentence comparing the mean and median. If they are different, say which one seems more typical for the data and why.    "
},
{
  "id": "sec-center-from-tables-and-shape",
  "level": "1",
  "url": "sec-center-from-tables-and-shape.html",
  "type": "Section",
  "number": "3.2",
  "title": "Center from Frequency Tables and the Shape of a Distribution",
  "body": " Center from Frequency Tables and the Shape of a Distribution  We can also compute mean, median, and mode from a frequency table. This is helpful when the raw data has already been summarized.  For a frequency table, the mean is a weighted average:   Here is a data value and is its frequency. To find the mode, we look for the value with the highest frequency. To find the median, we locate the middle observation or middle two observations by using the cumulative frequency tables cumulative frequency .   Finding Center from a Frequency Table  A quiz is graded out of 10 points. The results are summarized in .    Quiz scores with frequencies and cumulative frequencies    Score  Frequency   Cumulative frequency    4  2  8  2    5  3  15  5    6  5  30  10    7  4  28  14    8  3  24  17    9  3  27  20     Since the total frequency is , the mean is   The mode is 6 because 6 has the highest frequency. To find the median, we note that the 10th observation is 6 and the 11th observation is 7, so the median is   Frequency tables are also useful because they connect naturally to the overall distribution graphs distribution of the data. When we look at a histogram or similar graph, we often describe the shape as symmetric, skewed right, or skewed left.  A symmetric distribution graphs symmetric distribution has roughly the same shape on the left and right of its center. In a perfectly symmetric distribution, the mean and median are equal.  A distribution is skewed right graphs right-skewed distribution , or positively skewed, if most of the data is on the left and a longer tail stretches to the right. In that case, a few large values tend to pull the mean above the median.  A distribution is skewed left graphs left-skewed distribution , or negatively skewed, if most of the data is on the right and a longer tail stretches to the left. In that case, a few small values tend to pull the mean below the median.  The sketches below show the basic shapes. They are not meant to be exact data sets. They are meant to make the idea of skewness easier to see at a glance.   An idealized symmetric distribution   A histogram-like sketch with bars rising toward the middle and then falling at the same rate on the other side.  An idealized distribution is centered in the middle of the axis. The bars on the left and right mirror each other, with heights 1, 3, 5, 5, 3, and 1. The shape is roughly balanced around the center.      An idealized right-skewed distribution   A histogram-like sketch with most of the mass on the left and a long tail stretching to the right.  An idealized distribution has most of its bars on the left side of the axis, with heights 6, 5, 4, 2, 1, and 1 from left to right. The bars taper off toward the right, creating a long right tail.      An idealized left-skewed distribution   A histogram-like sketch with most of the mass on the right and a long tail stretching to the left.  An idealized distribution has most of its bars on the right side of the axis, with heights 1, 1, 2, 4, 5, and 6 from left to right. The bars taper off toward the left, creating a long left tail.      Reading Shape from Mean and Median  A set of apartment rents has mean 1850 dollars and median 1725 dollars. Since the mean is larger than the median, this suggests the distribution is skewed right. That would make sense if most rents are moderate but a few luxury apartments are much more expensive.  This kind of comparison is useful, but it should not replace looking at a graph. In practice, the best way to judge skewness is to inspect a histogram or another graph of the distribution.    Mean and Median for Right-Skewed Data   Use a class-style data set for commute times, in minutes. The values are right-skewed, so a few larger times pull the mean upward.     For the commute times 8, 9, 10, 10, 11, 12, 12, 13, 14, 30 minutes, find the mean and median.      Decide whether the mean or the median is a better description of the typical commute time.      State whether the distribution is skewed right, skewed left, or roughly symmetric, and check whether that matches the relationship between the mean and median.      Center from a Frequency Table   Use a frequency table to practice the weighted-mean formula and the cumulative-frequency method for the median.     The frequency table in shows the number of pets owned by students in a small class. Find the mean number of pets.     Frequency table for pets owned by students    Pets  Frequency    0  4    1  6    2  5    3  1       Use the same table to identify the mode and median.      Find the cumulative frequencies and use them to show how you located the median.      Center and Shape from Class Data   Use a quantitative variable from the class data and compare its center with the shape of the distribution.     Choose one quantitative class variable and compute the mean and median.      Decide whether the distribution seems roughly symmetric, skewed right, or skewed left.      Check whether the mean is greater than, less than, or about equal to the median. Does that match the shape you saw?      Skewness Practice   These short data sets are designed to make the effect of outliers easy to see.     For the data set 2, 3, 4, 4, 5, 6, 20, find the mean and median. Then decide whether the distribution is skewed left, skewed right, or roughly symmetric.      For the data set 12, 13, 13, 14, 15, 15, 16, find the mean and median. Then decide whether the distribution is skewed left, skewed right, or roughly symmetric.      In one sentence, explain why the mean is pulled toward the tail in the first data set but not much in the second.     So which measure of center should we use? There is no universal winner. The mean is informative when we want every observation to count fully, while the median is often more resistant to extreme values. The mode is especially useful for categorical data or for identifying the most common case.  "
},
{
  "id": "sec-center-from-tables-and-shape-5",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#sec-center-from-tables-and-shape-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cumulative frequency tables cumulative frequency "
},
{
  "id": "ex-frequency-table-center",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#ex-frequency-table-center",
  "type": "Example",
  "number": "3.2.1",
  "title": "Finding Center from a Frequency Table.",
  "body": " Finding Center from a Frequency Table  A quiz is graded out of 10 points. The results are summarized in .  "
},
{
  "id": "tbl-quiz-frequency-center",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#tbl-quiz-frequency-center",
  "type": "Table",
  "number": "3.2.2",
  "title": "Quiz scores with frequencies and cumulative frequencies",
  "body": " Quiz scores with frequencies and cumulative frequencies    Score  Frequency   Cumulative frequency    4  2  8  2    5  3  15  5    6  5  30  10    7  4  28  14    8  3  24  17    9  3  27  20    "
},
{
  "id": "sec-center-from-tables-and-shape-12",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#sec-center-from-tables-and-shape-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distribution graphs distribution "
},
{
  "id": "sec-center-from-tables-and-shape-13",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#sec-center-from-tables-and-shape-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric distribution graphs symmetric distribution "
},
{
  "id": "sec-center-from-tables-and-shape-14",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#sec-center-from-tables-and-shape-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skewed right graphs right-skewed distribution "
},
{
  "id": "sec-center-from-tables-and-shape-15",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#sec-center-from-tables-and-shape-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skewed left graphs left-skewed distribution "
},
{
  "id": "fig-symmetric-distribution",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#fig-symmetric-distribution",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " An idealized symmetric distribution   A histogram-like sketch with bars rising toward the middle and then falling at the same rate on the other side.  An idealized distribution is centered in the middle of the axis. The bars on the left and right mirror each other, with heights 1, 3, 5, 5, 3, and 1. The shape is roughly balanced around the center.    "
},
{
  "id": "fig-right-skewed-distribution",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#fig-right-skewed-distribution",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": " An idealized right-skewed distribution   A histogram-like sketch with most of the mass on the left and a long tail stretching to the right.  An idealized distribution has most of its bars on the left side of the axis, with heights 6, 5, 4, 2, 1, and 1 from left to right. The bars taper off toward the right, creating a long right tail.    "
},
{
  "id": "fig-left-skewed-distribution",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#fig-left-skewed-distribution",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " An idealized left-skewed distribution   A histogram-like sketch with most of the mass on the right and a long tail stretching to the left.  An idealized distribution has most of its bars on the right side of the axis, with heights 1, 1, 2, 4, 5, and 6 from left to right. The bars taper off toward the left, creating a long left tail.    "
},
{
  "id": "ex-skewness-interpretation",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#ex-skewness-interpretation",
  "type": "Example",
  "number": "3.2.6",
  "title": "Reading Shape from Mean and Median.",
  "body": " Reading Shape from Mean and Median  A set of apartment rents has mean 1850 dollars and median 1725 dollars. Since the mean is larger than the median, this suggests the distribution is skewed right. That would make sense if most rents are moderate but a few luxury apartments are much more expensive.  This kind of comparison is useful, but it should not replace looking at a graph. In practice, the best way to judge skewness is to inspect a histogram or another graph of the distribution.  "
},
{
  "id": "act-ch3-right-skewed-mean-median",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#act-ch3-right-skewed-mean-median",
  "type": "Activity",
  "number": "3.2.1",
  "title": "Mean and Median for Right-Skewed Data.",
  "body": " Mean and Median for Right-Skewed Data   Use a class-style data set for commute times, in minutes. The values are right-skewed, so a few larger times pull the mean upward.     For the commute times 8, 9, 10, 10, 11, 12, 12, 13, 14, 30 minutes, find the mean and median.      Decide whether the mean or the median is a better description of the typical commute time.      State whether the distribution is skewed right, skewed left, or roughly symmetric, and check whether that matches the relationship between the mean and median.    "
},
{
  "id": "act-ch3-center-from-table",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#act-ch3-center-from-table",
  "type": "Activity",
  "number": "3.2.2",
  "title": "Center from a Frequency Table.",
  "body": " Center from a Frequency Table   Use a frequency table to practice the weighted-mean formula and the cumulative-frequency method for the median.     The frequency table in shows the number of pets owned by students in a small class. Find the mean number of pets.     Frequency table for pets owned by students    Pets  Frequency    0  4    1  6    2  5    3  1       Use the same table to identify the mode and median.      Find the cumulative frequencies and use them to show how you located the median.    "
},
{
  "id": "act-ch3-center-shape-class-data",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#act-ch3-center-shape-class-data",
  "type": "Activity",
  "number": "3.2.3",
  "title": "Center and Shape from Class Data.",
  "body": " Center and Shape from Class Data   Use a quantitative variable from the class data and compare its center with the shape of the distribution.     Choose one quantitative class variable and compute the mean and median.      Decide whether the distribution seems roughly symmetric, skewed right, or skewed left.      Check whether the mean is greater than, less than, or about equal to the median. Does that match the shape you saw?    "
},
{
  "id": "act-ch3-skewness-practice",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#act-ch3-skewness-practice",
  "type": "Activity",
  "number": "3.2.4",
  "title": "Skewness Practice.",
  "body": " Skewness Practice   These short data sets are designed to make the effect of outliers easy to see.     For the data set 2, 3, 4, 4, 5, 6, 20, find the mean and median. Then decide whether the distribution is skewed left, skewed right, or roughly symmetric.      For the data set 12, 13, 13, 14, 15, 15, 16, find the mean and median. Then decide whether the distribution is skewed left, skewed right, or roughly symmetric.      In one sentence, explain why the mean is pulled toward the tail in the first data set but not much in the second.    "
},
{
  "id": "ch3-exercises",
  "level": "1",
  "url": "ch3-exercises.html",
  "type": "Exercises",
  "number": "3.3",
  "title": "Exercises",
  "body": " Exercises   Find the mean, median, and mode of the data set 6, 8, 8, 9, 10, 12, 12, 12, 15.    Find the mean and median of the ordered data set 3, 5, 7, 9, 12, 18.    Decide whether each data set has one mode, more than one mode, or no mode.   2, 2, 3, 4, 5, 5  red, blue, green, yellow  7, 7, 7, 8, 9     The weekly hours worked by six students are 8, 10, 12, 14, 16, and 40.  Find the mean and median. Which measure seems to represent the typical student better, and why?    The following frequency table summarizes the number of books read over the summer.   Books read over the summer    Books  Frequency    0  3    1  5    2  6    3  4    4  2     Find the mean, median, and mode.    Create a cumulative frequency column for the table in Exercise and use it to confirm the median.    For each situation, choose the measure of center that seems most useful: mean, median, or mode.   Favorite ice cream flavor in a class  House prices in a city with a few extremely expensive homes  The average score on a final exam     A distribution is described as right-skewed. State whether the mean is usually less than, about equal to, or greater than the median.    A distribution is described as left-skewed. State whether the mean is usually less than, about equal to, or greater than the median.    Give an example of a small data set for which the mean is larger than the median. Then give an example of a small data set for which the mean is smaller than the median.   "
},
{
  "id": "ch3-ex-1",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": " Find the mean, median, and mode of the data set 6, 8, 8, 9, 10, 12, 12, 12, 15.  "
},
{
  "id": "ch3-ex-2",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-2",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": " Find the mean and median of the ordered data set 3, 5, 7, 9, 12, 18.  "
},
{
  "id": "ch3-ex-3",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-3",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": " Decide whether each data set has one mode, more than one mode, or no mode.   2, 2, 3, 4, 5, 5  red, blue, green, yellow  7, 7, 7, 8, 9   "
},
{
  "id": "ch3-ex-4",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-4",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": " The weekly hours worked by six students are 8, 10, 12, 14, 16, and 40.  Find the mean and median. Which measure seems to represent the typical student better, and why?  "
},
{
  "id": "ch3-ex-5",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-5",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": " The following frequency table summarizes the number of books read over the summer.   Books read over the summer    Books  Frequency    0  3    1  5    2  6    3  4    4  2     Find the mean, median, and mode.  "
},
{
  "id": "ch3-ex-6",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-6",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": " Create a cumulative frequency column for the table in Exercise and use it to confirm the median.  "
},
{
  "id": "ch3-ex-7",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-7",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": " For each situation, choose the measure of center that seems most useful: mean, median, or mode.   Favorite ice cream flavor in a class  House prices in a city with a few extremely expensive homes  The average score on a final exam   "
},
{
  "id": "ch3-ex-8",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-8",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "",
  "body": " A distribution is described as right-skewed. State whether the mean is usually less than, about equal to, or greater than the median.  "
},
{
  "id": "ch3-ex-9",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-9",
  "type": "Exercise",
  "number": "3.3.9",
  "title": "",
  "body": " A distribution is described as left-skewed. State whether the mean is usually less than, about equal to, or greater than the median.  "
},
{
  "id": "ch3-ex-10",
  "level": "2",
  "url": "ch3-exercises.html#ch3-ex-10",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "",
  "body": " Give an example of a small data set for which the mean is larger than the median. Then give an example of a small data set for which the mean is smaller than the median.  "
},
{
  "id": "sec-quartiles-iqr",
  "level": "1",
  "url": "sec-quartiles-iqr.html",
  "type": "Section",
  "number": "4.1",
  "title": "Quartiles and the Interquartile Range",
  "body": " Quartiles and the Interquartile Range  Quartiles summaries quartiles divide an ordered data set into four parts with about the same number of observations in each part. The first quartile summaries first quartile , written , is the median of the lower half of the data. The second quartile summaries second quartile is the overall median, so is just the median. The third quartile summaries third quartile , written , is the median of the upper half of the data.  In this book we will use the same convention as the lecture notes: if the number of observations is odd, remove the overall median before finding and . If the number of observations is even, split the ordered data set into two equal halves and find the median of each half.   Quartiles for an Odd-Sized Data Set  Consider the ordered data set 4, 6, 7, 9, 10, 12, 15, 18, 20. Since there are 9 values, the median is the fifth value, so . After removing the median, the lower half is 4, 6, 7, 9 and the upper half is 12, 15, 18, 20. Therefore     Quartiles for an Even-Sized Data Set  Now consider the ordered data set 3, 5, 6, 7, 9, 12, 14, 18. Since there are 8 values, the median is   The lower half is 3, 5, 6, 7 and the upper half is 9, 12, 14, 18, so    The interquartile range summaries interquartile range , or IQR summaries IQR , measures the spread of the middle half of the data.   The IQR is useful because it ignores the most extreme observations and focuses on the central 50% of the distribution. In the previous example with and , the IQR is   A small IQR means the middle half of the data is fairly concentrated. A large IQR means the middle half is more spread out.   Quartiles and IQR Practice   Use a short ordered data set so you can practice finding quartiles and the interquartile range by hand.     For the ordered data set 4, 6, 7, 8, 9, 11, 12, 15, 18, find , , and .      Compute the interquartile range.      Tell whether the middle 50% of the data is tightly clustered or fairly spread out.      Quartiles from Class Data   Use one quantitative variable from the class data set collected earlier in the book.     Choose a class variable such as height, distance from school, commute time, or number of siblings. Order the data and find the quartiles and IQR.      Write one sentence describing the spread of the middle half of the data.      If another student chose a different quantitative variable from the class data, compare the two IQRs and say which data set is more spread out in the middle.      Comparing Interquartile Ranges   Compare two generated data sets with different amounts of spread in the middle half.     Find the IQR for the data set 10, 11, 11, 12, 13, 14, 14, 15, 16.      Find the IQR for the data set 2, 5, 6, 8, 10, 13, 16, 20, 24.      Which data set has the larger IQR, and what does that tell you about the spread of the middle 50%?     "
},
{
  "id": "sec-quartiles-iqr-2",
  "level": "2",
  "url": "sec-quartiles-iqr.html#sec-quartiles-iqr-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quartiles summaries quartiles first quartile summaries first quartile second quartile summaries second quartile third quartile summaries third quartile "
},
{
  "id": "ex-quartiles-odd",
  "level": "2",
  "url": "sec-quartiles-iqr.html#ex-quartiles-odd",
  "type": "Example",
  "number": "4.1.1",
  "title": "Quartiles for an Odd-Sized Data Set.",
  "body": " Quartiles for an Odd-Sized Data Set  Consider the ordered data set 4, 6, 7, 9, 10, 12, 15, 18, 20. Since there are 9 values, the median is the fifth value, so . After removing the median, the lower half is 4, 6, 7, 9 and the upper half is 12, 15, 18, 20. Therefore   "
},
{
  "id": "ex-quartiles-even",
  "level": "2",
  "url": "sec-quartiles-iqr.html#ex-quartiles-even",
  "type": "Example",
  "number": "4.1.2",
  "title": "Quartiles for an Even-Sized Data Set.",
  "body": " Quartiles for an Even-Sized Data Set  Now consider the ordered data set 3, 5, 6, 7, 9, 12, 14, 18. Since there are 8 values, the median is   The lower half is 3, 5, 6, 7 and the upper half is 9, 12, 14, 18, so   "
},
{
  "id": "sec-quartiles-iqr-6",
  "level": "2",
  "url": "sec-quartiles-iqr.html#sec-quartiles-iqr-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interquartile range summaries interquartile range IQR summaries IQR "
},
{
  "id": "act-ch4-quartiles-generated",
  "level": "2",
  "url": "sec-quartiles-iqr.html#act-ch4-quartiles-generated",
  "type": "Activity",
  "number": "4.1.1",
  "title": "Quartiles and IQR Practice.",
  "body": " Quartiles and IQR Practice   Use a short ordered data set so you can practice finding quartiles and the interquartile range by hand.     For the ordered data set 4, 6, 7, 8, 9, 11, 12, 15, 18, find , , and .      Compute the interquartile range.      Tell whether the middle 50% of the data is tightly clustered or fairly spread out.    "
},
{
  "id": "act-ch4-quartiles-class-data",
  "level": "2",
  "url": "sec-quartiles-iqr.html#act-ch4-quartiles-class-data",
  "type": "Activity",
  "number": "4.1.2",
  "title": "Quartiles from Class Data.",
  "body": " Quartiles from Class Data   Use one quantitative variable from the class data set collected earlier in the book.     Choose a class variable such as height, distance from school, commute time, or number of siblings. Order the data and find the quartiles and IQR.      Write one sentence describing the spread of the middle half of the data.      If another student chose a different quantitative variable from the class data, compare the two IQRs and say which data set is more spread out in the middle.    "
},
{
  "id": "act-ch4-quartiles-compare",
  "level": "2",
  "url": "sec-quartiles-iqr.html#act-ch4-quartiles-compare",
  "type": "Activity",
  "number": "4.1.3",
  "title": "Comparing Interquartile Ranges.",
  "body": " Comparing Interquartile Ranges   Compare two generated data sets with different amounts of spread in the middle half.     Find the IQR for the data set 10, 11, 11, 12, 13, 14, 14, 15, 16.      Find the IQR for the data set 2, 5, 6, 8, 10, 13, 16, 20, 24.      Which data set has the larger IQR, and what does that tell you about the spread of the middle 50%?    "
},
{
  "id": "sec-boxplots-outliers",
  "level": "1",
  "url": "sec-boxplots-outliers.html",
  "type": "Section",
  "number": "4.2",
  "title": "Five-Number Summary, Boxplots, and Outliers",
  "body": " Five-Number Summary, Boxplots, and Outliers  The five-number summary summaries five-number summary of a data set consists of   These five values give a compact description of both center and spread. The minimum and maximum show the full range of the data, the quartiles show the middle structure, and the median marks the center.   A Five-Number Summary  For the ordered data set 3, 5, 6, 7, 9, 12, 14, 18, we found , , and . Since the minimum is 3 and the maximum is 18, the five-number summary is    A boxplot graphs boxplot , also called a box-and-whisker plot graphs box-and-whisker plot , turns the five-number summary into a picture. The box stretches from to , a line inside the box marks the median, and the whiskers extend toward the smallest and largest values.   Boxplot based on the five-number summary 3, 5.5, 8, 13, 18   A horizontal boxplot on a scale from 0 to 20. The left whisker reaches 3, the box runs from 5.5 to 13, the median is marked at 8, and the right whisker reaches 18.  The graphic is a horizontal boxplot with a number line labeled Data value. The left whisker extends from the box to 3. The left edge of the box is at 5.5. A vertical line inside the box marks the median at 8. The right edge of the box is at 13. The right whisker extends to 18. The right side of the box and whisker is longer than the left, suggesting some right-skew.     A boxplot does not show every data value, but it is very good at showing center, spread, and possible asymmetry. If the box and whiskers are roughly balanced on both sides of the median, the distribution may be fairly symmetric. If one side is stretched out more than the other, the distribution may be skewed. A histogram is still the best tool for judging shape in detail, but a boxplot gives a quick summary.  An outlier summaries outlier is a value that does not fit the general pattern of the data. One common rule for identifying possible outliers is the 1.5 times IQR rule summaries 1.5 times IQR rule . First compute the two fences summaries fence :   Any observation below the lower fence or above the upper fence is called a possible outlier according to this rule. The fences themselves are not data values. They are only cutoffs.   Using the 1.5 Times IQR Rule  Suppose a data set has and . Then the IQR is   So the fences are   Any data value less than 0 or greater than 32 would be flagged as a possible outlier.    Five-Number Summary and Boxplot   Use a short data set to practice the five-number summary and the shape of a boxplot.     For the ordered data set 3, 5, 6, 7, 9, 12, 14, 18, find the five-number summary.      Draw the boxplot for the data set.      State whether the distribution looks symmetric or skewed, and explain your answer from the boxplot.      Boxplot from Class Data   Use the class data set from earlier in the book.     Choose a quantitative variable such as height, commute time, distance from school, or number of siblings. Find the five-number summary and draw a boxplot.      Look for possible outliers using the 1.5 times IQR rule.      Say whether the data seem roughly symmetric or skewed, and use the boxplot to justify your answer.      Outlier Rule Practice   Use the 1.5 times IQR rule on a small data set with one possible outlier.     For the data set 4, 6, 7, 8, 8, 9, 10, 11, 24, find , , and the IQR.      Compute the lower and upper fences.      Identify any possible outliers.     "
},
{
  "id": "sec-boxplots-outliers-2",
  "level": "2",
  "url": "sec-boxplots-outliers.html#sec-boxplots-outliers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "five-number summary summaries five-number summary "
},
{
  "id": "ex-five-number-summary",
  "level": "2",
  "url": "sec-boxplots-outliers.html#ex-five-number-summary",
  "type": "Example",
  "number": "4.2.1",
  "title": "A Five-Number Summary.",
  "body": " A Five-Number Summary  For the ordered data set 3, 5, 6, 7, 9, 12, 14, 18, we found , , and . Since the minimum is 3 and the maximum is 18, the five-number summary is   "
},
{
  "id": "sec-boxplots-outliers-6",
  "level": "2",
  "url": "sec-boxplots-outliers.html#sec-boxplots-outliers-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boxplot graphs boxplot box-and-whisker plot graphs box-and-whisker plot "
},
{
  "id": "fig-boxplot-spread-example",
  "level": "2",
  "url": "sec-boxplots-outliers.html#fig-boxplot-spread-example",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " Boxplot based on the five-number summary 3, 5.5, 8, 13, 18   A horizontal boxplot on a scale from 0 to 20. The left whisker reaches 3, the box runs from 5.5 to 13, the median is marked at 8, and the right whisker reaches 18.  The graphic is a horizontal boxplot with a number line labeled Data value. The left whisker extends from the box to 3. The left edge of the box is at 5.5. A vertical line inside the box marks the median at 8. The right edge of the box is at 13. The right whisker extends to 18. The right side of the box and whisker is longer than the left, suggesting some right-skew.    "
},
{
  "id": "sec-boxplots-outliers-9",
  "level": "2",
  "url": "sec-boxplots-outliers.html#sec-boxplots-outliers-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outlier summaries outlier 1.5 times IQR rule summaries 1.5 times IQR rule fences summaries fence "
},
{
  "id": "ex-iqr-outlier-rule",
  "level": "2",
  "url": "sec-boxplots-outliers.html#ex-iqr-outlier-rule",
  "type": "Example",
  "number": "4.2.3",
  "title": "Using the 1.5 Times IQR Rule.",
  "body": " Using the 1.5 Times IQR Rule  Suppose a data set has and . Then the IQR is   So the fences are   Any data value less than 0 or greater than 32 would be flagged as a possible outlier.  "
},
{
  "id": "act-ch4-boxplot-generated",
  "level": "2",
  "url": "sec-boxplots-outliers.html#act-ch4-boxplot-generated",
  "type": "Activity",
  "number": "4.2.1",
  "title": "Five-Number Summary and Boxplot.",
  "body": " Five-Number Summary and Boxplot   Use a short data set to practice the five-number summary and the shape of a boxplot.     For the ordered data set 3, 5, 6, 7, 9, 12, 14, 18, find the five-number summary.      Draw the boxplot for the data set.      State whether the distribution looks symmetric or skewed, and explain your answer from the boxplot.    "
},
{
  "id": "act-ch4-boxplot-class-data",
  "level": "2",
  "url": "sec-boxplots-outliers.html#act-ch4-boxplot-class-data",
  "type": "Activity",
  "number": "4.2.2",
  "title": "Boxplot from Class Data.",
  "body": " Boxplot from Class Data   Use the class data set from earlier in the book.     Choose a quantitative variable such as height, commute time, distance from school, or number of siblings. Find the five-number summary and draw a boxplot.      Look for possible outliers using the 1.5 times IQR rule.      Say whether the data seem roughly symmetric or skewed, and use the boxplot to justify your answer.    "
},
{
  "id": "act-ch4-outlier-rule",
  "level": "2",
  "url": "sec-boxplots-outliers.html#act-ch4-outlier-rule",
  "type": "Activity",
  "number": "4.2.3",
  "title": "Outlier Rule Practice.",
  "body": " Outlier Rule Practice   Use the 1.5 times IQR rule on a small data set with one possible outlier.     For the data set 4, 6, 7, 8, 8, 9, 10, 11, 24, find , , and the IQR.      Compute the lower and upper fences.      Identify any possible outliers.    "
},
{
  "id": "sec-variance-sd-zscores",
  "level": "1",
  "url": "sec-variance-sd-zscores.html",
  "type": "Section",
  "number": "4.3",
  "title": "Variance, Standard Deviation, and z-Scores",
  "body": " Variance, Standard Deviation, and z-Scores  The IQR is useful, but it only looks at the middle half of the data. Another important family of measures uses every observation and asks how far the data tends to fall from the mean.  The variance summaries variance measures the average squared distance from the mean. For a population, the variance is   where is the population mean and is the population size. The standard deviation summaries standard deviation is the square root of the variance:   The standard deviation is easier to interpret than the variance because it is measured in the same units as the original data.   Comparing Two Small Data Sets  Consider the data sets 1, 2, 3, 4, 5 and 3, 3, 3, 3, 3. Both have mean 3, but they do not have the same spread. The second set has no variation at all, so its standard deviation is 0. The first set has values spread around the mean, so its standard deviation is greater than 0.  This example shows why center alone is not enough. Two distributions can share the same mean and still behave very differently.   When we work with a sample rather than a whole population, we use the sample variance summaries sample variance , written :   and the sample standard deviation summaries sample standard deviation , written :   The denominator is , not . That adjustment makes a better estimator of the population standard deviation.  The relative standard deviation summaries relative standard deviation , or RSD summaries RSD , compares the standard deviation to the mean:   RSD is useful when we want to compare variation across data sets measured on different scales or with very different means.   Why Relative Standard Deviation Can Help  Suppose one machine fills bottles with mean 500 mL and standard deviation 5 mL, while another fills large containers with mean 2000 mL and standard deviation 12 mL. The second standard deviation is larger in absolute terms, but the first machine has the larger spread relative to its mean because    A z-score summaries standard score , also called a standard score, tells how many standard deviations a value lies above or below the mean:   if we are working with sample data, or   for a population. Positive z-scores are above the mean, negative z-scores are below the mean, and a z-score of 0 means the value is exactly at the mean.   Interpreting a z-Score  A test score of 82 comes from a class with mean 74 and standard deviation 4. The z-score is   This means the score of 82 is 2 standard deviations above the mean.   Z-scores are especially useful for comparing observations from different distributions. They also provide another informal way to flag unusual values. A common rough rule is that values with may deserve a closer look. That rule is not universal, but it is often used as a quick screen.   Variance and Standard Deviation Practice   Use a small data set so you can practice the variance and standard deviation formulas without getting buried in arithmetic.     For the population data set 2, 4, 6, 8, 10, compute the population mean, variance, and standard deviation.      For the sample data set 2, 4, 6, 8, 10, compute the sample mean and sample standard deviation.      Compare the two standard deviations. Why are they close, and why are they not exactly the same?      Spread from Class Data   Use one quantitative variable from the class data set collected earlier in the book.     Choose a variable such as height, commute time, distance from school, or number of siblings. Compute the sample mean and sample standard deviation.      Describe the spread in one sentence using the standard deviation.      Find one data value that is about one standard deviation above or below the mean, if such a value exists.      Z-Score Practice   Practice interpreting z-scores and comparing values on a standardized scale.     A test score has mean 70 and standard deviation 5. Find the z-score for a score of 80.      A value has z-score in a distribution with mean 50 and standard deviation 8. Find the value.      State whether each z-score is above or below the mean: , , and .     "
},
{
  "id": "sec-variance-sd-zscores-3",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#sec-variance-sd-zscores-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variance summaries variance "
},
{
  "id": "sec-variance-sd-zscores-5",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#sec-variance-sd-zscores-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard deviation summaries standard deviation "
},
{
  "id": "ex-sd-small-data",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#ex-sd-small-data",
  "type": "Example",
  "number": "4.3.1",
  "title": "Comparing Two Small Data Sets.",
  "body": " Comparing Two Small Data Sets  Consider the data sets 1, 2, 3, 4, 5 and 3, 3, 3, 3, 3. Both have mean 3, but they do not have the same spread. The second set has no variation at all, so its standard deviation is 0. The first set has values spread around the mean, so its standard deviation is greater than 0.  This example shows why center alone is not enough. Two distributions can share the same mean and still behave very differently.  "
},
{
  "id": "sec-variance-sd-zscores-9",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#sec-variance-sd-zscores-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample variance summaries sample variance "
},
{
  "id": "sec-variance-sd-zscores-11",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#sec-variance-sd-zscores-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample standard deviation summaries sample standard deviation "
},
{
  "id": "sec-variance-sd-zscores-14",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#sec-variance-sd-zscores-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative standard deviation summaries relative standard deviation RSD summaries RSD "
},
{
  "id": "ex-rsd",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#ex-rsd",
  "type": "Example",
  "number": "4.3.2",
  "title": "Why Relative Standard Deviation Can Help.",
  "body": " Why Relative Standard Deviation Can Help  Suppose one machine fills bottles with mean 500 mL and standard deviation 5 mL, while another fills large containers with mean 2000 mL and standard deviation 12 mL. The second standard deviation is larger in absolute terms, but the first machine has the larger spread relative to its mean because   "
},
{
  "id": "sec-variance-sd-zscores-18",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#sec-variance-sd-zscores-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "z-score summaries standard score "
},
{
  "id": "ex-zscore-test",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#ex-zscore-test",
  "type": "Example",
  "number": "4.3.3",
  "title": "Interpreting a z-Score.",
  "body": " Interpreting a z-Score  A test score of 82 comes from a class with mean 74 and standard deviation 4. The z-score is   This means the score of 82 is 2 standard deviations above the mean.  "
},
{
  "id": "act-ch4-variance-generated",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#act-ch4-variance-generated",
  "type": "Activity",
  "number": "4.3.1",
  "title": "Variance and Standard Deviation Practice.",
  "body": " Variance and Standard Deviation Practice   Use a small data set so you can practice the variance and standard deviation formulas without getting buried in arithmetic.     For the population data set 2, 4, 6, 8, 10, compute the population mean, variance, and standard deviation.      For the sample data set 2, 4, 6, 8, 10, compute the sample mean and sample standard deviation.      Compare the two standard deviations. Why are they close, and why are they not exactly the same?    "
},
{
  "id": "act-ch4-sd-class-data",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#act-ch4-sd-class-data",
  "type": "Activity",
  "number": "4.3.2",
  "title": "Spread from Class Data.",
  "body": " Spread from Class Data   Use one quantitative variable from the class data set collected earlier in the book.     Choose a variable such as height, commute time, distance from school, or number of siblings. Compute the sample mean and sample standard deviation.      Describe the spread in one sentence using the standard deviation.      Find one data value that is about one standard deviation above or below the mean, if such a value exists.    "
},
{
  "id": "act-ch4-zscores",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#act-ch4-zscores",
  "type": "Activity",
  "number": "4.3.3",
  "title": "Z-Score Practice.",
  "body": " Z-Score Practice   Practice interpreting z-scores and comparing values on a standardized scale.     A test score has mean 70 and standard deviation 5. Find the z-score for a score of 80.      A value has z-score in a distribution with mean 50 and standard deviation 8. Find the value.      State whether each z-score is above or below the mean: , , and .    "
},
{
  "id": "ch4-exercises",
  "level": "1",
  "url": "ch4-exercises.html",
  "type": "Exercises",
  "number": "4.4",
  "title": "Exercises",
  "body": " Exercises    For Exercises 1-4, find the requested quartiles, IQRs, or fences.    Find , , and for 2, 4, 5, 7, 8, 10, 12, 14, 18.    Find the quartiles and IQR for 6, 7, 9, 10, 12, 14, 16, 18.    The five-number summary of a data set is 3, 8, 11, 17, 24. What is the IQR?    A data set has and . Find the 1.5 IQR fences.     A data set has , , and includes 1, 6, 12, 15, 19, and 33. Which values are possible outliers by the 1.5 IQR rule?    Explain in words what the interquartile range tells you about a distribution.    Two data sets both have mean 20. One has standard deviation 2 and the other has standard deviation 9. Which data set is more spread out?    For the population data set 2, 4, 6, 8, compute the population mean, the population variance, and the population standard deviation.    For the sample data set 5, 7, 9, 11, compute the sample mean and the sample standard deviation.    A data set has mean 50 and standard deviation 8. Find the z-score of 62.    A data value has z-score . Explain what this tells you about the value relative to the mean.    Machine A has mean 40 and standard deviation 4. Machine B has mean 120 and standard deviation 6. Find the relative standard deviation for each machine and decide which machine has greater spread relative to its mean.   "
},
{
  "id": "ch4-ex-1",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-1",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": " Find , , and for 2, 4, 5, 7, 8, 10, 12, 14, 18.  "
},
{
  "id": "ch4-ex-2",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-2",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": " Find the quartiles and IQR for 6, 7, 9, 10, 12, 14, 16, 18.  "
},
{
  "id": "ch4-ex-3",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-3",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": " The five-number summary of a data set is 3, 8, 11, 17, 24. What is the IQR?  "
},
{
  "id": "ch4-ex-4",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-4",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "",
  "body": " A data set has and . Find the 1.5 IQR fences.  "
},
{
  "id": "ch4-ex-5",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-5",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": " A data set has , , and includes 1, 6, 12, 15, 19, and 33. Which values are possible outliers by the 1.5 IQR rule?  "
},
{
  "id": "ch4-ex-6",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-6",
  "type": "Exercise",
  "number": "4.4.6",
  "title": "",
  "body": " Explain in words what the interquartile range tells you about a distribution.  "
},
{
  "id": "ch4-ex-7",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-7",
  "type": "Exercise",
  "number": "4.4.7",
  "title": "",
  "body": " Two data sets both have mean 20. One has standard deviation 2 and the other has standard deviation 9. Which data set is more spread out?  "
},
{
  "id": "ch4-ex-8",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-8",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": " For the population data set 2, 4, 6, 8, compute the population mean, the population variance, and the population standard deviation.  "
},
{
  "id": "ch4-ex-9",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-9",
  "type": "Exercise",
  "number": "4.4.9",
  "title": "",
  "body": " For the sample data set 5, 7, 9, 11, compute the sample mean and the sample standard deviation.  "
},
{
  "id": "ch4-ex-10",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-10",
  "type": "Exercise",
  "number": "4.4.10",
  "title": "",
  "body": " A data set has mean 50 and standard deviation 8. Find the z-score of 62.  "
},
{
  "id": "ch4-ex-11",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-11",
  "type": "Exercise",
  "number": "4.4.11",
  "title": "",
  "body": " A data value has z-score . Explain what this tells you about the value relative to the mean.  "
},
{
  "id": "ch4-ex-12",
  "level": "2",
  "url": "ch4-exercises.html#ch4-ex-12",
  "type": "Exercise",
  "number": "4.4.12",
  "title": "",
  "body": " Machine A has mean 40 and standard deviation 4. Machine B has mean 120 and standard deviation 6. Find the relative standard deviation for each machine and decide which machine has greater spread relative to its mean.  "
},
{
  "id": "sec-scatterplots-correlation",
  "level": "1",
  "url": "sec-scatterplots-correlation.html",
  "type": "Section",
  "number": "5.1",
  "title": "Scatterplots and Correlation",
  "body": " Scatterplots and Correlation  When each observation comes as a pair of numbers, we often label the two variables and . Usually is the independent variable regression independent variable and is the dependent variable regression dependent variable . That means we use to help explain or predict .  A scatterplot places each data pair as a point in the plane. Once the points are plotted, we look for an overall pattern.   Study Hours and Exam Scores  Suppose we record the hours studied and exam scores for eight students:    Study hours and exam scores    Hours studied  Exam score    1  58    2  62    3  67    4  71    5  76    6  79    7  85    8  88      Scatterplot of study hours and exam scores   A scatterplot with eight points that rise from lower left to upper right, showing a positive linear trend between study hours and exam score.  The horizontal axis is labeled Hours studied and runs from 0 to 9. The vertical axis is labeled Exam score and runs from 50 to 95. The plotted points are approximately at (1,58), (2,62), (3,67), (4,71), (5,76), (6,79), (7,85), and (8,88). The points form a fairly tight upward pattern, indicating a positive linear relationship.     The scatterplot in shows an upward trend. As study time increases, exam score also tends to increase. That is an example of a positive association regression positive association .  In general, a scatterplot may suggest one of three broad patterns.   Positive correlation regression positive correlation : larger values tend to go with larger values.  Negative correlation regression negative correlation : larger values tend to go with smaller values.  No clear correlation regression no correlation : the points do not show a clear upward or downward trend.   A useful visual trick is to mark the point , where is the mean of the -values and is the mean of the -values. The vertical line through and the horizontal line through form a mean cross regression mean cross .  If most of the points lie in the first and third quadrants relative to that cross, then the variables tend to increase together, which suggests positive correlation. If most of the points lie in the second and fourth quadrants, then one variable tends to increase as the other decreases, which suggests negative correlation. If the points are spread more evenly among all four quadrants, the data may have little or no linear correlation.   Using the mean cross to read the direction of correlation   Three small scatterplots side by side. In the first, most points lie in the first and third quadrants relative to the mean cross, showing positive correlation. In the second, most points lie in the second and fourth quadrants, showing negative correlation. In the third, the points are spread around all four quadrants, showing little or no correlation.  The figure contains three scatterplots. Each has a vertical dashed line at x-bar and a horizontal dashed line at y-bar, forming a mean cross. In the left panel, labeled Positive correlation, the points cluster from lower left to upper right, mainly in quadrants one and three relative to the mean cross. In the middle panel, labeled Negative correlation, the points cluster from upper left to lower right, mainly in quadrants two and four. In the right panel, labeled Little or no correlation, the points are scattered around all four quadrants with no clear linear direction.     The mean cross is a quick visual guide, not a substitute for a full scatterplot or the actual value of . Still, it is a nice way to see why positive correlation puts many points in quadrants one and three, while negative correlation puts many points in quadrants two and four.  The correlation coefficient regression correlation coefficient , written , measures the strength and direction of a linear relationship. Its value always satisfies   The sign of gives the direction, and the size of gives the strength.   If , the linear relationship is positive.  If , the linear relationship is negative.  If is close to 0, there is little or no linear relationship.  If is close to 1, the points lie close to a line and the linear relationship is strong.   One common formula for is   In practice, technology usually computes for us. What matters most in an introductory course is the interpretation. Correlation tells us about the strength of a linear pattern, not about cause and effect.   Interpreting Correlation  If a data set has , then it has a strong positive linear relationship. If another data set has , then it has a strong negative linear relationship. If a third data set has , then it has almost no linear relationship.    Reading a Scatterplot   Use the study-hours data set to practice reading a scatterplot and describing the overall pattern in words.     Make a scatterplot of the study-hours data from . If you use software, label the axes clearly.      Describe the direction of the association and tell whether it looks weak, moderate, or strong.      Explain whether the plot suggests a positive correlation, a negative correlation, or no clear correlation.      Interpreting Correlation Coefficients   Practice translating the value of into a plain-language description of the relationship.     Suppose . Describe the direction and strength of the linear relationship.      Suppose . Describe the direction and strength of the linear relationship.      Suppose . Explain what this says about the linear relationship, if anything.      Using the Mean Cross   Use the study-hours and exam-scores data to connect the mean cross with the direction of correlation.     Find the mean of the hours studied and the mean of the exam scores.      Plot the point on the scatterplot and draw the mean cross.      Count how many data points lie in quadrants one and three relative to the mean cross, then explain why that supports the direction of the correlation.     "
},
{
  "id": "sec-scatterplots-correlation-2",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#sec-scatterplots-correlation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent variable regression independent variable dependent variable regression dependent variable "
},
{
  "id": "ex-study-hours-data",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#ex-study-hours-data",
  "type": "Example",
  "number": "5.1.1",
  "title": "Study Hours and Exam Scores.",
  "body": " Study Hours and Exam Scores  Suppose we record the hours studied and exam scores for eight students:  "
},
{
  "id": "tbl-study-hours-score",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#tbl-study-hours-score",
  "type": "Table",
  "number": "5.1.2",
  "title": "Study hours and exam scores",
  "body": " Study hours and exam scores    Hours studied  Exam score    1  58    2  62    3  67    4  71    5  76    6  79    7  85    8  88    "
},
{
  "id": "fig-study-hours-scatter",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#fig-study-hours-scatter",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": " Scatterplot of study hours and exam scores   A scatterplot with eight points that rise from lower left to upper right, showing a positive linear trend between study hours and exam score.  The horizontal axis is labeled Hours studied and runs from 0 to 9. The vertical axis is labeled Exam score and runs from 50 to 95. The plotted points are approximately at (1,58), (2,62), (3,67), (4,71), (5,76), (6,79), (7,85), and (8,88). The points form a fairly tight upward pattern, indicating a positive linear relationship.    "
},
{
  "id": "sec-scatterplots-correlation-7",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#sec-scatterplots-correlation-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive association regression positive association "
},
{
  "id": "sec-scatterplots-correlation-9-1-1",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#sec-scatterplots-correlation-9-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Positive correlation regression positive correlation "
},
{
  "id": "sec-scatterplots-correlation-9-2-1",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#sec-scatterplots-correlation-9-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Negative correlation regression negative correlation "
},
{
  "id": "sec-scatterplots-correlation-9-3-1",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#sec-scatterplots-correlation-9-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "No clear correlation regression no correlation "
},
{
  "id": "sec-scatterplots-correlation-10",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#sec-scatterplots-correlation-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean cross regression mean cross "
},
{
  "id": "fig-mean-cross-cases",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#fig-mean-cross-cases",
  "type": "Figure",
  "number": "5.1.4",
  "title": "",
  "body": " Using the mean cross to read the direction of correlation   Three small scatterplots side by side. In the first, most points lie in the first and third quadrants relative to the mean cross, showing positive correlation. In the second, most points lie in the second and fourth quadrants, showing negative correlation. In the third, the points are spread around all four quadrants, showing little or no correlation.  The figure contains three scatterplots. Each has a vertical dashed line at x-bar and a horizontal dashed line at y-bar, forming a mean cross. In the left panel, labeled Positive correlation, the points cluster from lower left to upper right, mainly in quadrants one and three relative to the mean cross. In the middle panel, labeled Negative correlation, the points cluster from upper left to lower right, mainly in quadrants two and four. In the right panel, labeled Little or no correlation, the points are scattered around all four quadrants with no clear linear direction.    "
},
{
  "id": "sec-scatterplots-correlation-14",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#sec-scatterplots-correlation-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "correlation coefficient regression correlation coefficient "
},
{
  "id": "ex-r-interpretation",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#ex-r-interpretation",
  "type": "Example",
  "number": "5.1.5",
  "title": "Interpreting Correlation.",
  "body": " Interpreting Correlation  If a data set has , then it has a strong positive linear relationship. If another data set has , then it has a strong negative linear relationship. If a third data set has , then it has almost no linear relationship.  "
},
{
  "id": "act-ch5-scatterplot-read-relationship",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#act-ch5-scatterplot-read-relationship",
  "type": "Activity",
  "number": "5.1.1",
  "title": "Reading a Scatterplot.",
  "body": " Reading a Scatterplot   Use the study-hours data set to practice reading a scatterplot and describing the overall pattern in words.     Make a scatterplot of the study-hours data from . If you use software, label the axes clearly.      Describe the direction of the association and tell whether it looks weak, moderate, or strong.      Explain whether the plot suggests a positive correlation, a negative correlation, or no clear correlation.    "
},
{
  "id": "act-ch5-correlation-interpretation",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#act-ch5-correlation-interpretation",
  "type": "Activity",
  "number": "5.1.2",
  "title": "Interpreting Correlation Coefficients.",
  "body": " Interpreting Correlation Coefficients   Practice translating the value of into a plain-language description of the relationship.     Suppose . Describe the direction and strength of the linear relationship.      Suppose . Describe the direction and strength of the linear relationship.      Suppose . Explain what this says about the linear relationship, if anything.    "
},
{
  "id": "act-ch5-mean-cross",
  "level": "2",
  "url": "sec-scatterplots-correlation.html#act-ch5-mean-cross",
  "type": "Activity",
  "number": "5.1.3",
  "title": "Using the Mean Cross.",
  "body": " Using the Mean Cross   Use the study-hours and exam-scores data to connect the mean cross with the direction of correlation.     Find the mean of the hours studied and the mean of the exam scores.      Plot the point on the scatterplot and draw the mean cross.      Count how many data points lie in quadrants one and three relative to the mean cross, then explain why that supports the direction of the correlation.    "
},
{
  "id": "sec-regression-line",
  "level": "1",
  "url": "sec-regression-line.html",
  "type": "Section",
  "number": "5.2",
  "title": "Regression Lines and Prediction",
  "body": " Regression Lines and Prediction  A linear relation regression linear relation has the form   where is the slope regression slope and is the y-intercept regression y-intercept . If , the line goes up as increases. If , the line goes down as increases.  In real data, the points usually do not lie exactly on a line. Instead we choose a line that fits the pattern as well as possible. That line is called the best-fit line regression best-fit line or regression line regression regression line . Its equation is often written   Here is the predicted value of for a given value of .   Scatterplot with a regression line   A scatterplot of study hours and exam scores together with an upward sloping line that passes through the middle of the points.  The graphic shows the same eight data points as the previous scatterplot. A straight line rises from left to right through the center of the cloud of points. The line represents a regression model that predicts higher scores for larger numbers of study hours.      Using a Regression Equation  Suppose a regression line for study hours and exam score is   If a student studies for 5 hours, the predicted exam score is   So the model predicts a score of about 76.   The slope tells us how much the predicted changes when increases by 1 unit. In the example above, the slope is 4.4, so the model predicts that each additional hour of study is associated with about 4.4 more exam points.  The sign of the slope matches the sign of the correlation coefficient . That is useful, but the two numbers are not the same. The slope measures change in the original units, while is a unit-free measure of linear strength and always stays between and .  Regression is helpful for prediction, but it should be used with care. Predicting for an value inside the range of the observed data is called interpolation regression interpolation . Predicting far outside the observed range is called extrapolation regression extrapolation , and that is usually much less reliable.   Interpolation Versus Extrapolation  If our study-hours data only covers values from 1 to 8 hours, then predicting the score for 6 hours is interpolation. Predicting the score for 20 hours is extrapolation. The line might give a numerical answer, but there is no guarantee that the same pattern continues that far.    Using a Regression Equation   Practice using a regression equation to make predictions in context.     Suppose a regression line for study hours and exam score is . Find the predicted score for a student who studies for 4 hours.      Use the same equation to predict the score for a student who studies for 7 hours.      In one sentence, explain what the prediction means in the context of the data.      Interpreting Slope and Intercept   Focus on the meaning of the slope and intercept rather than just the arithmetic.     For the equation , identify the slope and the y-intercept.      Explain what the slope means if is hours studied and is exam score.      Explain why the y-intercept may or may not have a sensible interpretation in this situation.      Interpolation or Extrapolation?   Decide whether each prediction stays within the observed data or goes beyond it.     If the study-hours data only includes values from 1 to 8 hours, decide whether predicting a score for 5 hours is interpolation or extrapolation.      Decide whether predicting a score for 10 hours is interpolation or extrapolation.      Explain why one of these predictions is usually more trustworthy than the other.     "
},
{
  "id": "sec-regression-line-2",
  "level": "2",
  "url": "sec-regression-line.html#sec-regression-line-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear relation regression linear relation "
},
{
  "id": "sec-regression-line-4",
  "level": "2",
  "url": "sec-regression-line.html#sec-regression-line-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope regression slope y-intercept regression y-intercept "
},
{
  "id": "sec-regression-line-5",
  "level": "2",
  "url": "sec-regression-line.html#sec-regression-line-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "best-fit line regression best-fit line regression line regression regression line "
},
{
  "id": "fig-study-hours-regression",
  "level": "2",
  "url": "sec-regression-line.html#fig-study-hours-regression",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Scatterplot with a regression line   A scatterplot of study hours and exam scores together with an upward sloping line that passes through the middle of the points.  The graphic shows the same eight data points as the previous scatterplot. A straight line rises from left to right through the center of the cloud of points. The line represents a regression model that predicts higher scores for larger numbers of study hours.    "
},
{
  "id": "ex-regression-prediction",
  "level": "2",
  "url": "sec-regression-line.html#ex-regression-prediction",
  "type": "Example",
  "number": "5.2.2",
  "title": "Using a Regression Equation.",
  "body": " Using a Regression Equation  Suppose a regression line for study hours and exam score is   If a student studies for 5 hours, the predicted exam score is   So the model predicts a score of about 76.  "
},
{
  "id": "sec-regression-line-12",
  "level": "2",
  "url": "sec-regression-line.html#sec-regression-line-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interpolation regression interpolation extrapolation regression extrapolation "
},
{
  "id": "ex-extrapolation-warning",
  "level": "2",
  "url": "sec-regression-line.html#ex-extrapolation-warning",
  "type": "Example",
  "number": "5.2.3",
  "title": "Interpolation Versus Extrapolation.",
  "body": " Interpolation Versus Extrapolation  If our study-hours data only covers values from 1 to 8 hours, then predicting the score for 6 hours is interpolation. Predicting the score for 20 hours is extrapolation. The line might give a numerical answer, but there is no guarantee that the same pattern continues that far.  "
},
{
  "id": "act-ch5-regression-prediction",
  "level": "2",
  "url": "sec-regression-line.html#act-ch5-regression-prediction",
  "type": "Activity",
  "number": "5.2.1",
  "title": "Using a Regression Equation.",
  "body": " Using a Regression Equation   Practice using a regression equation to make predictions in context.     Suppose a regression line for study hours and exam score is . Find the predicted score for a student who studies for 4 hours.      Use the same equation to predict the score for a student who studies for 7 hours.      In one sentence, explain what the prediction means in the context of the data.    "
},
{
  "id": "act-ch5-slope-meaning",
  "level": "2",
  "url": "sec-regression-line.html#act-ch5-slope-meaning",
  "type": "Activity",
  "number": "5.2.2",
  "title": "Interpreting Slope and Intercept.",
  "body": " Interpreting Slope and Intercept   Focus on the meaning of the slope and intercept rather than just the arithmetic.     For the equation , identify the slope and the y-intercept.      Explain what the slope means if is hours studied and is exam score.      Explain why the y-intercept may or may not have a sensible interpretation in this situation.    "
},
{
  "id": "act-ch5-interpolation-extrapolation",
  "level": "2",
  "url": "sec-regression-line.html#act-ch5-interpolation-extrapolation",
  "type": "Activity",
  "number": "5.2.3",
  "title": "Interpolation or Extrapolation?",
  "body": " Interpolation or Extrapolation?   Decide whether each prediction stays within the observed data or goes beyond it.     If the study-hours data only includes values from 1 to 8 hours, decide whether predicting a score for 5 hours is interpolation or extrapolation.      Decide whether predicting a score for 10 hours is interpolation or extrapolation.      Explain why one of these predictions is usually more trustworthy than the other.    "
},
{
  "id": "ch5-exercises",
  "level": "1",
  "url": "ch5-exercises.html",
  "type": "Exercises",
  "number": "5.3",
  "title": "Exercises",
  "body": " Exercises   State whether each situation involves one-variable data or two-variable data.   The heights of 20 students  The heights and weights of 20 students  The daily high temperatures in a city for one month  The number of hours studied and the final exam scores for a class     For each pair of variables, decide which one is more naturally treated as the independent variable and which one is more naturally treated as the dependent variable.   Hours worked and weekly pay  Outdoor temperature and electricity used for air conditioning  Age of a used car and its selling price     Use the data in to make a scatterplot by hand or with software. Describe whether the association appears positive, negative, or unclear.    Suppose a data set has correlation coefficient . Describe the direction and strength of the linear relationship.    Suppose a data set has correlation coefficient . Describe the direction and strength of the linear relationship.    Suppose a data set has correlation coefficient . What does this suggest about the linear relationship?    Explain why the correlation coefficient must always lie between and , at least at the level of interpretation.    A regression line is given by   Find the predicted value of when .    A regression equation is   What is the slope? What does it mean in context if is age of a car in years and is selling price in thousands of dollars?    A regression equation for predicting quiz score from hours of review is   Use the equation to predict the quiz score for a student who reviews for 5 hours.    Explain the difference between interpolation and extrapolation. Then give one example of each.    A data set has a strong positive correlation. Does that prove that changes in cause changes in ? Explain briefly.   "
},
{
  "id": "ch5-ex-1",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-1",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " State whether each situation involves one-variable data or two-variable data.   The heights of 20 students  The heights and weights of 20 students  The daily high temperatures in a city for one month  The number of hours studied and the final exam scores for a class   "
},
{
  "id": "ch5-ex-2",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-2",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": " For each pair of variables, decide which one is more naturally treated as the independent variable and which one is more naturally treated as the dependent variable.   Hours worked and weekly pay  Outdoor temperature and electricity used for air conditioning  Age of a used car and its selling price   "
},
{
  "id": "ch5-ex-3",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-3",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": " Use the data in to make a scatterplot by hand or with software. Describe whether the association appears positive, negative, or unclear.  "
},
{
  "id": "ch5-ex-4",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-4",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": " Suppose a data set has correlation coefficient . Describe the direction and strength of the linear relationship.  "
},
{
  "id": "ch5-ex-5",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-5",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": " Suppose a data set has correlation coefficient . Describe the direction and strength of the linear relationship.  "
},
{
  "id": "ch5-ex-6",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-6",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": " Suppose a data set has correlation coefficient . What does this suggest about the linear relationship?  "
},
{
  "id": "ch5-ex-7",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-7",
  "type": "Exercise",
  "number": "5.3.7",
  "title": "",
  "body": " Explain why the correlation coefficient must always lie between and , at least at the level of interpretation.  "
},
{
  "id": "ch5-ex-8",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-8",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "",
  "body": " A regression line is given by   Find the predicted value of when .  "
},
{
  "id": "ch5-ex-9",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-9",
  "type": "Exercise",
  "number": "5.3.9",
  "title": "",
  "body": " A regression equation is   What is the slope? What does it mean in context if is age of a car in years and is selling price in thousands of dollars?  "
},
{
  "id": "ch5-ex-10",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-10",
  "type": "Exercise",
  "number": "5.3.10",
  "title": "",
  "body": " A regression equation for predicting quiz score from hours of review is   Use the equation to predict the quiz score for a student who reviews for 5 hours.  "
},
{
  "id": "ch5-ex-11",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-11",
  "type": "Exercise",
  "number": "5.3.11",
  "title": "",
  "body": " Explain the difference between interpolation and extrapolation. Then give one example of each.  "
},
{
  "id": "ch5-ex-12",
  "level": "2",
  "url": "ch5-exercises.html#ch5-ex-12",
  "type": "Exercise",
  "number": "5.3.12",
  "title": "",
  "body": " A data set has a strong positive correlation. Does that prove that changes in cause changes in ? Explain briefly.  "
},
{
  "id": "sec-sample-spaces-events",
  "level": "1",
  "url": "sec-sample-spaces-events.html",
  "type": "Section",
  "number": "6.1",
  "title": "Sample Spaces and Events",
  "body": " Sample Spaces and Events  A random experiment probability random experiment is a process with a known collection of possible outcomes, but the outcome of one trial is not known ahead of time. Flipping a coin, rolling a die, and selecting a student at random are all random experiments.  The set of all possible outcomes is called the sample space probability sample space , usually written . An event probability event is a subset of the sample space.   A Sample Space for a Die Roll  If a fair six-sided die is rolled once, then the sample space is   The event “an even number occurs” is   and the event “a number greater than 4 occurs” is    Once we treat events as sets, we can use ordinary set operations.  The complement probability complement of an event of an event , written , consists of all outcomes in the sample space that are not in .  The union probability union of events  consists of outcomes that are in or in or in both. The intersection probability intersection of events  consists of outcomes that are in both and .   Set Operations with Two Coin Flips  If a coin is flipped twice, then the sample space is   Let be the event “exactly one head occurs,” so . Let be the event “the first flip is a head,” so .  Then    Two events are mutually exclusive probability mutually exclusive events if they cannot happen at the same time. In set language, that means their intersection is empty.   Mutually Exclusive Events  When a die is rolled, the event “the outcome is 2” and the event “the outcome is 5” are mutually exclusive, because no single roll can be both 2 and 5.  On the other hand, the events “the outcome is even” and “the outcome is greater than 3” are not mutually exclusive, because 4 and 6 belong to both events.    Sample Spaces and Events   Practice writing sample spaces and identifying events for simple random experiments.     Write the sample space for one roll of a fair six-sided die. Then list the outcomes for the event “the number is at least 4.”      Write the sample space for one coin flip and list the outcomes for the event “heads occurs.” Then do the same for the event “tails occurs.”      For two coin flips, write the event “exactly one head occurs” as a set of outcomes.      Complements, Unions, and Intersections   Use the language of sets to describe common probability events.     Using the sample space for one die roll, let be the event “the outcome is even” and let be the event “the outcome is greater than 3.” Write , , and .      For two coin flips, let be the event “the first flip is a head” and let be the event “exactly one head occurs.” Find .      Decide whether the events “the number is 1” and “the number is 6” are mutually exclusive. Explain your answer.     "
},
{
  "id": "sec-sample-spaces-events-2",
  "level": "2",
  "url": "sec-sample-spaces-events.html#sec-sample-spaces-events-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random experiment probability random experiment "
},
{
  "id": "sec-sample-spaces-events-3",
  "level": "2",
  "url": "sec-sample-spaces-events.html#sec-sample-spaces-events-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample space probability sample space event probability event "
},
{
  "id": "ex-sample-space-die",
  "level": "2",
  "url": "sec-sample-spaces-events.html#ex-sample-space-die",
  "type": "Example",
  "number": "6.1.1",
  "title": "A Sample Space for a Die Roll.",
  "body": " A Sample Space for a Die Roll  If a fair six-sided die is rolled once, then the sample space is   The event “an even number occurs” is   and the event “a number greater than 4 occurs” is   "
},
{
  "id": "sec-sample-spaces-events-6",
  "level": "2",
  "url": "sec-sample-spaces-events.html#sec-sample-spaces-events-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complement probability complement of an event "
},
{
  "id": "sec-sample-spaces-events-7",
  "level": "2",
  "url": "sec-sample-spaces-events.html#sec-sample-spaces-events-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "union probability union of events intersection probability intersection of events "
},
{
  "id": "ex-coin-set-operations",
  "level": "2",
  "url": "sec-sample-spaces-events.html#ex-coin-set-operations",
  "type": "Example",
  "number": "6.1.2",
  "title": "Set Operations with Two Coin Flips.",
  "body": " Set Operations with Two Coin Flips  If a coin is flipped twice, then the sample space is   Let be the event “exactly one head occurs,” so . Let be the event “the first flip is a head,” so .  Then   "
},
{
  "id": "sec-sample-spaces-events-9",
  "level": "2",
  "url": "sec-sample-spaces-events.html#sec-sample-spaces-events-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mutually exclusive probability mutually exclusive events "
},
{
  "id": "ex-mutually-exclusive-die",
  "level": "2",
  "url": "sec-sample-spaces-events.html#ex-mutually-exclusive-die",
  "type": "Example",
  "number": "6.1.3",
  "title": "Mutually Exclusive Events.",
  "body": " Mutually Exclusive Events  When a die is rolled, the event “the outcome is 2” and the event “the outcome is 5” are mutually exclusive, because no single roll can be both 2 and 5.  On the other hand, the events “the outcome is even” and “the outcome is greater than 3” are not mutually exclusive, because 4 and 6 belong to both events.  "
},
{
  "id": "act-ch6-sample-spaces-events",
  "level": "2",
  "url": "sec-sample-spaces-events.html#act-ch6-sample-spaces-events",
  "type": "Activity",
  "number": "6.1.1",
  "title": "Sample Spaces and Events.",
  "body": " Sample Spaces and Events   Practice writing sample spaces and identifying events for simple random experiments.     Write the sample space for one roll of a fair six-sided die. Then list the outcomes for the event “the number is at least 4.”      Write the sample space for one coin flip and list the outcomes for the event “heads occurs.” Then do the same for the event “tails occurs.”      For two coin flips, write the event “exactly one head occurs” as a set of outcomes.    "
},
{
  "id": "act-ch6-set-operations",
  "level": "2",
  "url": "sec-sample-spaces-events.html#act-ch6-set-operations",
  "type": "Activity",
  "number": "6.1.2",
  "title": "Complements, Unions, and Intersections.",
  "body": " Complements, Unions, and Intersections   Use the language of sets to describe common probability events.     Using the sample space for one die roll, let be the event “the outcome is even” and let be the event “the outcome is greater than 3.” Write , , and .      For two coin flips, let be the event “the first flip is a head” and let be the event “exactly one head occurs.” Find .      Decide whether the events “the number is 1” and “the number is 6” are mutually exclusive. Explain your answer.    "
},
{
  "id": "sec-probability-rules",
  "level": "1",
  "url": "sec-probability-rules.html",
  "type": "Section",
  "number": "6.2",
  "title": "Probability Rules",
  "body": " Probability Rules  A probability law probability probability law assigns a number to each event . The number measures the chance that the outcome lies in .  Every probability law satisfies three basic facts.   for every event .  .  If and are mutually exclusive, then .   From these facts we get several rules that are used all the time:    Probability with Equally Likely Outcomes  When a fair die is rolled, all six outcomes are equally likely. If , then   If , then   Since , we have    When the individual outcomes are equally likely , the probability of an event is   That shortcut is useful, but it only works in equally likely situations. A loaded die is a good reminder that counting outcomes is not always enough.   A Loaded Die  Suppose a loaded die has the probability distribution shown in .    Probability distribution for a loaded die    Outcome  1  2  3  4  5  6              Let be the event “an odd outcome occurs,” and let .  Then    and since ,   Therefore   Notice what happens here: the event contains two outcomes, but its probability is not . That is why the formula cannot be used unless the outcomes are equally likely.   Using the Probability Rules   Practice computing probabilities from equally likely outcomes and from a probability table.     For a fair die, let be the event “the outcome is prime” and let be the event “the outcome is odd.” Find , , , and .      Using the loaded die in , find the probability of rolling a number less than 4.      Using the same table, find the complement of the event “rolling a 1 or a 2.” Then explain why the complement rule is useful here.      Fair and Loaded Dice   Compare a fair die with the loaded die to see how probability laws depend on the model.     For a fair die, find the probability of rolling a 6 and the probability of rolling an even number.      For the loaded die in , find the probability of rolling a 6 and the probability of rolling an even number.      Compare the two answers and explain what makes the loaded die different from the fair die.     "
},
{
  "id": "sec-probability-rules-2",
  "level": "2",
  "url": "sec-probability-rules.html#sec-probability-rules-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability law probability probability law "
},
{
  "id": "ex-fair-die-probability",
  "level": "2",
  "url": "sec-probability-rules.html#ex-fair-die-probability",
  "type": "Example",
  "number": "6.2.1",
  "title": "Probability with Equally Likely Outcomes.",
  "body": " Probability with Equally Likely Outcomes  When a fair die is rolled, all six outcomes are equally likely. If , then   If , then   Since , we have   "
},
{
  "id": "ex-loaded-die",
  "level": "2",
  "url": "sec-probability-rules.html#ex-loaded-die",
  "type": "Example",
  "number": "6.2.2",
  "title": "A Loaded Die.",
  "body": " A Loaded Die  Suppose a loaded die has the probability distribution shown in .  "
},
{
  "id": "tbl-loaded-die",
  "level": "2",
  "url": "sec-probability-rules.html#tbl-loaded-die",
  "type": "Table",
  "number": "6.2.3",
  "title": "Probability distribution for a loaded die",
  "body": " Probability distribution for a loaded die    Outcome  1  2  3  4  5  6             "
},
{
  "id": "act-ch6-probability-rules",
  "level": "2",
  "url": "sec-probability-rules.html#act-ch6-probability-rules",
  "type": "Activity",
  "number": "6.2.1",
  "title": "Using the Probability Rules.",
  "body": " Using the Probability Rules   Practice computing probabilities from equally likely outcomes and from a probability table.     For a fair die, let be the event “the outcome is prime” and let be the event “the outcome is odd.” Find , , , and .      Using the loaded die in , find the probability of rolling a number less than 4.      Using the same table, find the complement of the event “rolling a 1 or a 2.” Then explain why the complement rule is useful here.    "
},
{
  "id": "act-ch6-fair-vs-loaded",
  "level": "2",
  "url": "sec-probability-rules.html#act-ch6-fair-vs-loaded",
  "type": "Activity",
  "number": "6.2.2",
  "title": "Fair and Loaded Dice.",
  "body": " Fair and Loaded Dice   Compare a fair die with the loaded die to see how probability laws depend on the model.     For a fair die, find the probability of rolling a 6 and the probability of rolling an even number.      For the loaded die in , find the probability of rolling a 6 and the probability of rolling an even number.      Compare the two answers and explain what makes the loaded die different from the fair die.    "
},
{
  "id": "sec-conditional-probability",
  "level": "1",
  "url": "sec-conditional-probability.html",
  "type": "Section",
  "number": "6.3",
  "title": "Conditional Probability and Independence",
  "body": " Conditional Probability and Independence   Sometimes the probability of an event changes once we learn extra information. That idea leads to conditional probability probability conditional probability . In this section we will compute conditional probabilities directly, organize them with contingency tables, and use them to decide whether two events are independent.    Conditional Probability  The probability of given is written . It means the probability that the outcome is in once we already know the outcome is in . If , then   This formula can be rearranged into the multiplication rule probability multiplication rule :    Conditional Probability on a Die Roll  Suppose a fair die is rolled. Let be the event “the outcome is odd,” and let .  Without extra information,   But if we know the outcome is in , then only 1, 3, and 5 are still possible. Among those three odd outcomes, two are in . So   Using the formula gives the same answer:     Conditional Probability with a Die   Use a die roll to practice the conditional probability formula and the multiplication rule.     Let be the event “the outcome is odd” and let be the event “the outcome is greater than 2.” Find .      Find for the same events.      Use the multiplication rule to find and check that it matches the direct count.      Conditional Probability with a Card Sample   Draw 10 random cards from a standard deck and use the sample to create and answer conditional probability questions. If a condition does not occur in your 10 cards, choose a different condition or draw a new sample.     Draw 10 random cards from a standard deck. Record each card's rank, suit, and color in a table or list.      Using your sample, answer a few conditional probability questions such as: What is the probability of getting a red card given that the card drawn is a 3? What is the probability of getting a face card given that the card is a heart? What is the probability of getting a club given that the card is black?      Write two conditional probability questions of your own based on your 10-card sample, and answer them clearly.       Independence  Two events and are independent probability independent events if knowing that one occurred does not change the probability of the other. In symbols, independence means   which is equivalent to    Checking Independence  Let be the event “the die shows an odd number,” and let be the event “the die shows a number at most 4.”  Then   The intersection is , so   Because   the events are independent.   It is important not to mix up independence and mutual exclusivity. They are different ideas.   Mutually exclusive events cannot happen together.  Independent events can happen together, but one does not affect the probability of the other.   If two events have positive probability and are mutually exclusive, then they cannot be independent, because their intersection has probability 0 while the product is positive.   Independent or Not?   Decide whether pairs of events are independent, mutually exclusive, or neither.     For a fair die, let be the event “the outcome is even” and let be the event “the outcome is greater than 3.” Decide whether the events are independent.      For the same die, let be the event “the outcome is 1” and let be the event “the outcome is 6.” Decide whether the events are mutually exclusive.      Explain in one or two sentences why independence and mutual exclusivity are different ideas.       Contingency Tables  A contingency table tables contingency table , also called a two-way table, organizes counts for two categorical variables at the same time. It is one of the most useful ways to compute conditional probabilities from real data.  The counts inside the table are joint frequencies tables joint frequency because each count belongs to a combination of two categories. The totals along the edges are marginal totals tables marginal total . The grand total is the total number of observations.   Conditional Probability from a Contingency Table  A class survey asked 80 students whether they usually take public transportation to campus and whether their commute is at least 30 minutes. The results are shown in .    Commute length and public transportation use     Public transportation  No public transportation  Total    Commute at least 30 minutes  18  22  40    Commute under 30 minutes  12  28  40    Total  30  50  80     Let be the event “the commute is at least 30 minutes” and let be the event “the student uses public transportation.” From the table,   To find , restrict attention to the row for commutes at least 30 minutes. Out of those 40 students, 18 use public transportation, so   To find , restrict attention to the column for public transportation. Out of those 30 students, 18 have commutes at least 30 minutes, so   This is a good reminder that and usually answer different questions. The condition tells us which row or column becomes the new total.  Contingency tables also help us check independence. In this example, , but . Since knowing that the commute is at least 30 minutes changes the probability that a student uses public transportation, the events and are not independent.   Reading a Contingency Table   Use a two-way table to compute conditional probabilities and check whether two events appear independent.     Use to find the probability that a randomly selected student uses public transportation.      Use the same table to find the probability that a randomly selected student uses public transportation, given that the student's commute is under 30 minutes.      Compare the two probabilities from the previous tasks. Based on this comparison, do commute length and public transportation use appear independent in this class survey?      "
},
{
  "id": "sec-conditional-probability-2-1",
  "level": "2",
  "url": "sec-conditional-probability.html#sec-conditional-probability-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conditional probability probability conditional probability "
},
{
  "id": "subsec-conditional-probability-formula-4",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-conditional-probability-formula-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplication rule probability multiplication rule "
},
{
  "id": "ex-conditional-die",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-conditional-die",
  "type": "Example",
  "number": "6.3.1",
  "title": "Conditional Probability on a Die Roll.",
  "body": " Conditional Probability on a Die Roll  Suppose a fair die is rolled. Let be the event “the outcome is odd,” and let .  Without extra information,   But if we know the outcome is in , then only 1, 3, and 5 are still possible. Among those three odd outcomes, two are in . So   Using the formula gives the same answer:   "
},
{
  "id": "act-ch6-conditional-die",
  "level": "2",
  "url": "sec-conditional-probability.html#act-ch6-conditional-die",
  "type": "Activity",
  "number": "6.3.1",
  "title": "Conditional Probability with a Die.",
  "body": " Conditional Probability with a Die   Use a die roll to practice the conditional probability formula and the multiplication rule.     Let be the event “the outcome is odd” and let be the event “the outcome is greater than 2.” Find .      Find for the same events.      Use the multiplication rule to find and check that it matches the direct count.    "
},
{
  "id": "act-ch6-card-sample-conditional",
  "level": "2",
  "url": "sec-conditional-probability.html#act-ch6-card-sample-conditional",
  "type": "Activity",
  "number": "6.3.2",
  "title": "Conditional Probability with a Card Sample.",
  "body": " Conditional Probability with a Card Sample   Draw 10 random cards from a standard deck and use the sample to create and answer conditional probability questions. If a condition does not occur in your 10 cards, choose a different condition or draw a new sample.     Draw 10 random cards from a standard deck. Record each card's rank, suit, and color in a table or list.      Using your sample, answer a few conditional probability questions such as: What is the probability of getting a red card given that the card drawn is a 3? What is the probability of getting a face card given that the card is a heart? What is the probability of getting a club given that the card is black?      Write two conditional probability questions of your own based on your 10-card sample, and answer them clearly.    "
},
{
  "id": "subsec-independence-2",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-independence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent probability independent events "
},
{
  "id": "ex-independent-die",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-independent-die",
  "type": "Example",
  "number": "6.3.2",
  "title": "Checking Independence.",
  "body": " Checking Independence  Let be the event “the die shows an odd number,” and let be the event “the die shows a number at most 4.”  Then   The intersection is , so   Because   the events are independent.  "
},
{
  "id": "act-ch6-independence-check",
  "level": "2",
  "url": "sec-conditional-probability.html#act-ch6-independence-check",
  "type": "Activity",
  "number": "6.3.3",
  "title": "Independent or Not?",
  "body": " Independent or Not?   Decide whether pairs of events are independent, mutually exclusive, or neither.     For a fair die, let be the event “the outcome is even” and let be the event “the outcome is greater than 3.” Decide whether the events are independent.      For the same die, let be the event “the outcome is 1” and let be the event “the outcome is 6.” Decide whether the events are mutually exclusive.      Explain in one or two sentences why independence and mutual exclusivity are different ideas.    "
},
{
  "id": "subsec-contingency-tables-2",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-contingency-tables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contingency table tables contingency table "
},
{
  "id": "subsec-contingency-tables-3",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-contingency-tables-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "joint frequencies tables joint frequency marginal totals tables marginal total "
},
{
  "id": "ex-contingency-table-commute",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-contingency-table-commute",
  "type": "Example",
  "number": "6.3.3",
  "title": "Conditional Probability from a Contingency Table.",
  "body": " Conditional Probability from a Contingency Table  A class survey asked 80 students whether they usually take public transportation to campus and whether their commute is at least 30 minutes. The results are shown in .  "
},
{
  "id": "tbl-commute-contingency",
  "level": "2",
  "url": "sec-conditional-probability.html#tbl-commute-contingency",
  "type": "Table",
  "number": "6.3.4",
  "title": "Commute length and public transportation use",
  "body": " Commute length and public transportation use     Public transportation  No public transportation  Total    Commute at least 30 minutes  18  22  40    Commute under 30 minutes  12  28  40    Total  30  50  80    "
},
{
  "id": "act-ch6-contingency-table",
  "level": "2",
  "url": "sec-conditional-probability.html#act-ch6-contingency-table",
  "type": "Activity",
  "number": "6.3.4",
  "title": "Reading a Contingency Table.",
  "body": " Reading a Contingency Table   Use a two-way table to compute conditional probabilities and check whether two events appear independent.     Use to find the probability that a randomly selected student uses public transportation.      Use the same table to find the probability that a randomly selected student uses public transportation, given that the student's commute is under 30 minutes.      Compare the two probabilities from the previous tasks. Based on this comparison, do commute length and public transportation use appear independent in this class survey?    "
},
{
  "id": "ch6-exercises",
  "level": "1",
  "url": "ch6-exercises.html",
  "type": "Exercises",
  "number": "6.4",
  "title": "Exercises",
  "body": " Exercises   A fair die is rolled once. Let and .   Find .  Find .  Find .     A coin is flipped twice.   Write the sample space.  Let be the event “at least one head occurs.” List the outcomes in .  Let be the event “the second flip is tails.” List the outcomes in .     A fair die is rolled once. Find the probability of each event.   The outcome is prime.  The outcome is less than 5.  The outcome is even or greater than 4.     Suppose , , and .   Find .  Find .  Find .     Use .   Find the probability of rolling a number at least 4.  Find the probability of rolling an even number.  Find the probability of rolling a number that is even or at least 4.     A card is drawn from a standard deck of 52 cards. Let be the event “the card is a heart” and let be the event “the card is a face card.”   Find , , and .  Find .  Are and independent? Explain.     Can two events with positive probability be both mutually exclusive and independent? Explain why or why not.    A survey of 100 students recorded whether each student works at least 10 hours per week and whether the student is taking an online class.   Work schedule and online classes     Online class  No online class  Total    Works at least 10 hours  32  18  50    Works under 10 hours  20  30  50    Total  52  48  100      Find the probability that a randomly selected student is taking an online class.  Find the probability that a randomly selected student is taking an online class, given that the student works at least 10 hours per week.  Based on your answers, do working at least 10 hours per week and taking an online class appear independent? Explain.    "
},
{
  "id": "ch6-ex-1",
  "level": "2",
  "url": "ch6-exercises.html#ch6-ex-1",
  "type": "Exercise",
  "number": "6.4.1",
  "title": "",
  "body": " A fair die is rolled once. Let and .   Find .  Find .  Find .   "
},
{
  "id": "ch6-ex-2",
  "level": "2",
  "url": "ch6-exercises.html#ch6-ex-2",
  "type": "Exercise",
  "number": "6.4.2",
  "title": "",
  "body": " A coin is flipped twice.   Write the sample space.  Let be the event “at least one head occurs.” List the outcomes in .  Let be the event “the second flip is tails.” List the outcomes in .   "
},
{
  "id": "ch6-ex-3",
  "level": "2",
  "url": "ch6-exercises.html#ch6-ex-3",
  "type": "Exercise",
  "number": "6.4.3",
  "title": "",
  "body": " A fair die is rolled once. Find the probability of each event.   The outcome is prime.  The outcome is less than 5.  The outcome is even or greater than 4.   "
},
{
  "id": "ch6-ex-4",
  "level": "2",
  "url": "ch6-exercises.html#ch6-ex-4",
  "type": "Exercise",
  "number": "6.4.4",
  "title": "",
  "body": " Suppose , , and .   Find .  Find .  Find .   "
},
{
  "id": "ch6-ex-5",
  "level": "2",
  "url": "ch6-exercises.html#ch6-ex-5",
  "type": "Exercise",
  "number": "6.4.5",
  "title": "",
  "body": " Use .   Find the probability of rolling a number at least 4.  Find the probability of rolling an even number.  Find the probability of rolling a number that is even or at least 4.   "
},
{
  "id": "ch6-ex-6",
  "level": "2",
  "url": "ch6-exercises.html#ch6-ex-6",
  "type": "Exercise",
  "number": "6.4.6",
  "title": "",
  "body": " A card is drawn from a standard deck of 52 cards. Let be the event “the card is a heart” and let be the event “the card is a face card.”   Find , , and .  Find .  Are and independent? Explain.   "
},
{
  "id": "ch6-ex-7",
  "level": "2",
  "url": "ch6-exercises.html#ch6-ex-7",
  "type": "Exercise",
  "number": "6.4.7",
  "title": "",
  "body": " Can two events with positive probability be both mutually exclusive and independent? Explain why or why not.  "
},
{
  "id": "ch6-ex-8",
  "level": "2",
  "url": "ch6-exercises.html#ch6-ex-8",
  "type": "Exercise",
  "number": "6.4.8",
  "title": "",
  "body": " A survey of 100 students recorded whether each student works at least 10 hours per week and whether the student is taking an online class.   Work schedule and online classes     Online class  No online class  Total    Works at least 10 hours  32  18  50    Works under 10 hours  20  30  50    Total  52  48  100      Find the probability that a randomly selected student is taking an online class.  Find the probability that a randomly selected student is taking an online class, given that the student works at least 10 hours per week.  Based on your answers, do working at least 10 hours per week and taking an online class appear independent? Explain.   "
},
{
  "id": "sec-random-variables-pmf",
  "level": "1",
  "url": "sec-random-variables-pmf.html",
  "type": "Section",
  "number": "7.1",
  "title": "Random Variables, CDFs, Expectation, and Variance",
  "body": " Random Variables, CDFs, Expectation, and Variance  A random variable probability random variable is a function that assigns a real number to each outcome in a sample space. We often use a capital letter such as to name a random variable.  A random variable is discrete probability discrete random variable if it takes values in a countable set. It is continuous probability continuous random variable if it can take any value in an interval. In this chapter we focus only on the discrete case.   The Sum of Two Dice  Suppose two fair dice are rolled. The sample space consists of the 36 ordered pairs   Define the random variable by letting be the sum of the two dice. Then , , and the possible values of are    The probability function of a discrete random variable is called its probability distribution function probability probability distribution function . In many statistics books this is also called the probability mass function.   Probability distribution of the sum of two fair dice     2  3  4  5  6  7  8  9  10  11  12                   For example, because four ordered pairs produce a total of 5: , , , and .  Every discrete probability distribution satisfies two basic properties:   for each possible value .  The probabilities add to 1.    The cumulative distribution function probability cumulative distribution function , or CDF probability CDF , of a discrete random variable is defined by   For a discrete random variable, the CDF is found by adding the probabilities of all values up to .   A probability mass function and its corresponding cumulative distribution function   Two graphs shown side by side for the same discrete random variable. The left graph is a bar chart for the probability mass function at x equals 0, 1, 2, and 3 with heights 0.1, 0.3, 0.4, and 0.2. The right graph is a step graph for the cumulative distribution function with levels 0.1, 0.4, 0.8, and 1.0.  The figure has two panels. In the left panel, labeled PMF, a discrete random variable takes the values 0, 1, 2, and 3 with probabilities 0.1, 0.3, 0.4, and 0.2, displayed as separate vertical bars. In the right panel, labeled CDF, the cumulative distribution function starts at 0 to the left of 0, jumps to 0.1 at x equals 0, then to 0.4 at x equals 1, to 0.8 at x equals 2, and to 1.0 at x equals 3. The picture shows that the CDF is built by accumulating the PMF values from left to right.     shows the difference in how these two functions look. The PMF records the probability at each individual value, while the CDF keeps a running total and therefore has a step-like shape for a discrete random variable.   Computing a CDF Value  For the random variable equal to the sum of two fair dice,   Using ,    The CDF and the probability distribution contain the same information. For instance, if 5 is the next possible value after 4, then   The expected value probability expected value , also called the mean probability mean of a random variable , is the long-run average value of a random variable. For a discrete random variable,   If is a continuous random variable with probability density function , then the corresponding definition is   So the basic idea is the same in both cases: expectation is a weighted average, where probabilities play the role of the weights.   Expected Value from a Relative Frequency Table  Suppose the score of a randomly selected student from a class has the distribution shown in .    Probability distribution for a student's score    Score  13  15  16  17  18  19  20               The expected score is   So if we repeatedly select students at random from this class, the long-run average score would settle near 17.3.  The expected value tells us the center of a random variable, but it does not tell us how spread out the values are. For that, we use the variance probability variance of a random variable and the standard deviation probability standard deviation of a random variable .  The variance can be defined in terms of expectation by   The standard deviation is   For a discrete random variable, it is often easiest to compute the variance by first finding and    Variance and Standard Deviation from a Distribution  Using the score distribution in , we already know that .  Now compute   Therefore   and     Arcade Dice Game   Use a simple dice game to turn outcomes into a probability distribution, a CDF, and an expected value.     Roll one fair die. Let be the number of tickets earned, where 1, 2, and 3 earn 0 tickets, 4 earns 2 tickets, 5 earns 5 tickets, and 6 earns 10 tickets. Write the probability distribution of .      Find and .      Compute and explain what that value means if the game is played many times.      Prize Wheel Distribution   Practice checking a distribution and using it to compute the mean and variance of a random variable.     A prize wheel gives 0, 1, 2, or 4 tokens with probabilities 0.25, 0.35, 0.25, and 0.15. Verify that this is a valid probability distribution and sketch its bar chart.      Find and .      Use those values to find and .     "
},
{
  "id": "sec-random-variables-pmf-2",
  "level": "2",
  "url": "sec-random-variables-pmf.html#sec-random-variables-pmf-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random variable probability random variable "
},
{
  "id": "sec-random-variables-pmf-3",
  "level": "2",
  "url": "sec-random-variables-pmf.html#sec-random-variables-pmf-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete probability discrete random variable continuous probability continuous random variable "
},
{
  "id": "ex-two-dice-sum-rv",
  "level": "2",
  "url": "sec-random-variables-pmf.html#ex-two-dice-sum-rv",
  "type": "Example",
  "number": "7.1.1",
  "title": "The Sum of Two Dice.",
  "body": " The Sum of Two Dice  Suppose two fair dice are rolled. The sample space consists of the 36 ordered pairs   Define the random variable by letting be the sum of the two dice. Then , , and the possible values of are   "
},
{
  "id": "sec-random-variables-pmf-5",
  "level": "2",
  "url": "sec-random-variables-pmf.html#sec-random-variables-pmf-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability distribution function probability probability distribution function "
},
{
  "id": "tbl-two-dice-pmf",
  "level": "2",
  "url": "sec-random-variables-pmf.html#tbl-two-dice-pmf",
  "type": "Table",
  "number": "7.1.2",
  "title": "Probability distribution of the sum of two fair dice",
  "body": " Probability distribution of the sum of two fair dice     2  3  4  5  6  7  8  9  10  11  12                  "
},
{
  "id": "sec-random-variables-pmf-11",
  "level": "2",
  "url": "sec-random-variables-pmf.html#sec-random-variables-pmf-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cumulative distribution function probability cumulative distribution function CDF probability CDF "
},
{
  "id": "fig-pmf-cdf-side-by-side",
  "level": "2",
  "url": "sec-random-variables-pmf.html#fig-pmf-cdf-side-by-side",
  "type": "Figure",
  "number": "7.1.3",
  "title": "",
  "body": " A probability mass function and its corresponding cumulative distribution function   Two graphs shown side by side for the same discrete random variable. The left graph is a bar chart for the probability mass function at x equals 0, 1, 2, and 3 with heights 0.1, 0.3, 0.4, and 0.2. The right graph is a step graph for the cumulative distribution function with levels 0.1, 0.4, 0.8, and 1.0.  The figure has two panels. In the left panel, labeled PMF, a discrete random variable takes the values 0, 1, 2, and 3 with probabilities 0.1, 0.3, 0.4, and 0.2, displayed as separate vertical bars. In the right panel, labeled CDF, the cumulative distribution function starts at 0 to the left of 0, jumps to 0.1 at x equals 0, then to 0.4 at x equals 1, to 0.8 at x equals 2, and to 1.0 at x equals 3. The picture shows that the CDF is built by accumulating the PMF values from left to right.    "
},
{
  "id": "ex-cdf-two-dice",
  "level": "2",
  "url": "sec-random-variables-pmf.html#ex-cdf-two-dice",
  "type": "Example",
  "number": "7.1.4",
  "title": "Computing a CDF Value.",
  "body": " Computing a CDF Value  For the random variable equal to the sum of two fair dice,   Using ,   "
},
{
  "id": "sec-random-variables-pmf-19",
  "level": "2",
  "url": "sec-random-variables-pmf.html#sec-random-variables-pmf-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expected value probability expected value mean probability mean of a random variable "
},
{
  "id": "ex-score-distribution-mean",
  "level": "2",
  "url": "sec-random-variables-pmf.html#ex-score-distribution-mean",
  "type": "Example",
  "number": "7.1.5",
  "title": "Expected Value from a Relative Frequency Table.",
  "body": " Expected Value from a Relative Frequency Table  Suppose the score of a randomly selected student from a class has the distribution shown in .  "
},
{
  "id": "tbl-score-distribution",
  "level": "2",
  "url": "sec-random-variables-pmf.html#tbl-score-distribution",
  "type": "Table",
  "number": "7.1.6",
  "title": "Probability distribution for a student’s score",
  "body": " Probability distribution for a student's score    Score  13  15  16  17  18  19  20              "
},
{
  "id": "sec-random-variables-pmf-29",
  "level": "2",
  "url": "sec-random-variables-pmf.html#sec-random-variables-pmf-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variance probability variance of a random variable standard deviation probability standard deviation of a random variable "
},
{
  "id": "ex-score-distribution-variance",
  "level": "2",
  "url": "sec-random-variables-pmf.html#ex-score-distribution-variance",
  "type": "Example",
  "number": "7.1.7",
  "title": "Variance and Standard Deviation from a Distribution.",
  "body": " Variance and Standard Deviation from a Distribution  Using the score distribution in , we already know that .  Now compute   Therefore   and   "
},
{
  "id": "act-ch7-arcade-dice-game",
  "level": "2",
  "url": "sec-random-variables-pmf.html#act-ch7-arcade-dice-game",
  "type": "Activity",
  "number": "7.1.1",
  "title": "Arcade Dice Game.",
  "body": " Arcade Dice Game   Use a simple dice game to turn outcomes into a probability distribution, a CDF, and an expected value.     Roll one fair die. Let be the number of tickets earned, where 1, 2, and 3 earn 0 tickets, 4 earns 2 tickets, 5 earns 5 tickets, and 6 earns 10 tickets. Write the probability distribution of .      Find and .      Compute and explain what that value means if the game is played many times.    "
},
{
  "id": "act-ch7-prize-wheel-distribution",
  "level": "2",
  "url": "sec-random-variables-pmf.html#act-ch7-prize-wheel-distribution",
  "type": "Activity",
  "number": "7.1.2",
  "title": "Prize Wheel Distribution.",
  "body": " Prize Wheel Distribution   Practice checking a distribution and using it to compute the mean and variance of a random variable.     A prize wheel gives 0, 1, 2, or 4 tokens with probabilities 0.25, 0.35, 0.25, and 0.15. Verify that this is a valid probability distribution and sketch its bar chart.      Find and .      Use those values to find and .    "
},
{
  "id": "sec-cdf-expected-value",
  "level": "1",
  "url": "sec-cdf-expected-value.html",
  "type": "Section",
  "number": "7.2",
  "title": "Properties of Expectation and Variance",
  "body": " Properties of Expectation and Variance  The formulas in the previous section tell us how to compute expectation and variance. Now we collect a few properties that are useful much more broadly. These are not specific to discrete random variables.  Expectation is linear. In particular,   and more generally, for constants and ,   Variance behaves differently from expectation. Shifting a random variable does not change its spread, and scaling it by multiplies the variance by :   If and are independent , then their variances add:   This last formula is important enough to remember. Expectation always adds, but variance adds only under extra conditions such as independence.   Using the Properties  Suppose , , , and . Assume and are independent.  Then    and    These properties are handy when units change. For example, converting from meters to centimeters multiplies both the expected value and the standard deviation by 100, but it multiplies the variance by .   Stretch the Score   See how adding and multiplying a random variable change its mean and spread.     Suppose a game score has and . Find .      Find and the standard deviation of .      In one sentence, explain why shifting changes the mean but not the spread, while multiplying changes both.      Two Games, One Total   Combine two independent random variables and see how expectation and variance behave.     Suppose game A gives a random score with and . Game B gives a random score with and . Assuming the games are independent, find and .      Find and .      Which game contributes more to the variability of the total, and why?     "
},
{
  "id": "ex-properties-expectation-variance",
  "level": "2",
  "url": "sec-cdf-expected-value.html#ex-properties-expectation-variance",
  "type": "Example",
  "number": "7.2.1",
  "title": "Using the Properties.",
  "body": " Using the Properties  Suppose , , , and . Assume and are independent.  Then    and   "
},
{
  "id": "act-ch7-stretch-the-score",
  "level": "2",
  "url": "sec-cdf-expected-value.html#act-ch7-stretch-the-score",
  "type": "Activity",
  "number": "7.2.1",
  "title": "Stretch the Score.",
  "body": " Stretch the Score   See how adding and multiplying a random variable change its mean and spread.     Suppose a game score has and . Find .      Find and the standard deviation of .      In one sentence, explain why shifting changes the mean but not the spread, while multiplying changes both.    "
},
{
  "id": "act-ch7-two-games-total",
  "level": "2",
  "url": "sec-cdf-expected-value.html#act-ch7-two-games-total",
  "type": "Activity",
  "number": "7.2.2",
  "title": "Two Games, One Total.",
  "body": " Two Games, One Total   Combine two independent random variables and see how expectation and variance behave.     Suppose game A gives a random score with and . Game B gives a random score with and . Assuming the games are independent, find and .      Find and .      Which game contributes more to the variability of the total, and why?    "
},
{
  "id": "ch7-exercises",
  "level": "1",
  "url": "ch7-exercises.html",
  "type": "Exercises",
  "number": "7.3",
  "title": "Exercises",
  "body": " Exercises   Two fair dice are rolled and is the sum of the outcomes.   List the possible values of .  Find .  Find .     A random variable has the following probability distribution:   Distribution for     0  1  2  3             Verify that this is a valid probability distribution.  Find .  Find .     Use the distribution in Exercise to find .    A discrete random variable has distribution   Distribution for     1  3  5           Find , , and .    The random variable has mean 12 and variance 4.   Find .  Find .  Find the standard deviation of .     Explain in words what the expected value and the standard deviation of a discrete random variable are telling us.   "
},
{
  "id": "ch7-ex-1",
  "level": "2",
  "url": "ch7-exercises.html#ch7-ex-1",
  "type": "Exercise",
  "number": "7.3.1",
  "title": "",
  "body": " Two fair dice are rolled and is the sum of the outcomes.   List the possible values of .  Find .  Find .   "
},
{
  "id": "ch7-ex-2",
  "level": "2",
  "url": "ch7-exercises.html#ch7-ex-2",
  "type": "Exercise",
  "number": "7.3.2",
  "title": "",
  "body": " A random variable has the following probability distribution:   Distribution for     0  1  2  3             Verify that this is a valid probability distribution.  Find .  Find .   "
},
{
  "id": "ch7-ex-3",
  "level": "2",
  "url": "ch7-exercises.html#ch7-ex-3",
  "type": "Exercise",
  "number": "7.3.3",
  "title": "",
  "body": " Use the distribution in Exercise to find .  "
},
{
  "id": "ch7-ex-4",
  "level": "2",
  "url": "ch7-exercises.html#ch7-ex-4",
  "type": "Exercise",
  "number": "7.3.4",
  "title": "",
  "body": " A discrete random variable has distribution   Distribution for     1  3  5           Find , , and .  "
},
{
  "id": "ch7-ex-5",
  "level": "2",
  "url": "ch7-exercises.html#ch7-ex-5",
  "type": "Exercise",
  "number": "7.3.5",
  "title": "",
  "body": " The random variable has mean 12 and variance 4.   Find .  Find .  Find the standard deviation of .   "
},
{
  "id": "ch7-ex-6",
  "level": "2",
  "url": "ch7-exercises.html#ch7-ex-6",
  "type": "Exercise",
  "number": "7.3.6",
  "title": "",
  "body": " Explain in words what the expected value and the standard deviation of a discrete random variable are telling us.  "
},
{
  "id": "sec-bernoulli-binomial",
  "level": "1",
  "url": "sec-bernoulli-binomial.html",
  "type": "Section",
  "number": "8.1",
  "title": "Bernoulli Trials and Binomial Coefficients",
  "body": " Bernoulli Trials and Binomial Coefficients  A Bernoulli trial probability Bernoulli trial is an experiment with exactly two outcomes, which we usually call success and failure . A made free throw versus a missed free throw is one example. A person who does or does not respond to a survey is another.  If a single Bernoulli trial has success probability , then the corresponding Bernoulli random variable probability Bernoulli random variable  is defined by   So and .  Now suppose we repeat the same Bernoulli trial times, independently, with the same success probability each time. Let be the number of successes. Then follows a binomial distribution.  A situation is binomial when these four conditions hold:   There is a fixed number of trials.  Each trial has only two outcomes: success or failure.  The trials are independent.  The probability of success is the same on every trial.    Decide whether each situation can reasonably be modeled by a binomial random variable.   A student guesses on 8 true-false questions and we count the number answered correctly.  Five cards are drawn without replacement from a standard deck and we count the number of hearts.  A basketball player takes 12 free throws and we count the number made, assuming the player's success probability stays the same from shot to shot.     Binomial or Not?   Use a few quick examples to check whether the four binomial conditions really hold.     Decide whether guessing on 8 true-false questions can be modeled by a binomial random variable. If it can, state and .      Decide whether drawing 5 cards without replacement from a standard deck and counting the number of hearts is binomial. If not, say which condition fails.      Decide whether 12 free throws with the same success probability on every shot can be modeled by a binomial random variable.      Counting Success Patterns   See how binomial coefficients count the different ways to place successes among trials.     List all sequences of 5 Bernoulli trials with exactly 2 successes. Use for success and for failure.      Count the sequences you listed and verify that the answer matches .      For 6 trials with exactly 3 successes, how many success patterns are possible? Explain briefly why the order of the successes does not matter in the coefficient.     To compute binomial probabilities, we also need the binomial coefficient probability binomial coefficient   which is read “ choose .” It counts the number of ways to choose objects from objects, without regard to order.   Computing a Binomial Coefficient  The number of ways to choose 3 students from a group of 5 is    "
},
{
  "id": "sec-bernoulli-binomial-2",
  "level": "2",
  "url": "sec-bernoulli-binomial.html#sec-bernoulli-binomial-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bernoulli trial probability Bernoulli trial "
},
{
  "id": "sec-bernoulli-binomial-3",
  "level": "2",
  "url": "sec-bernoulli-binomial.html#sec-bernoulli-binomial-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bernoulli random variable probability Bernoulli random variable "
},
{
  "id": "binom-inline-ex-1",
  "level": "2",
  "url": "sec-bernoulli-binomial.html#binom-inline-ex-1",
  "type": "Checkpoint",
  "number": "8.1.1",
  "title": "",
  "body": " Decide whether each situation can reasonably be modeled by a binomial random variable.   A student guesses on 8 true-false questions and we count the number answered correctly.  Five cards are drawn without replacement from a standard deck and we count the number of hearts.  A basketball player takes 12 free throws and we count the number made, assuming the player's success probability stays the same from shot to shot.   "
},
{
  "id": "act-ch8-binomial-or-not",
  "level": "2",
  "url": "sec-bernoulli-binomial.html#act-ch8-binomial-or-not",
  "type": "Activity",
  "number": "8.1.1",
  "title": "Binomial or Not?",
  "body": " Binomial or Not?   Use a few quick examples to check whether the four binomial conditions really hold.     Decide whether guessing on 8 true-false questions can be modeled by a binomial random variable. If it can, state and .      Decide whether drawing 5 cards without replacement from a standard deck and counting the number of hearts is binomial. If not, say which condition fails.      Decide whether 12 free throws with the same success probability on every shot can be modeled by a binomial random variable.    "
},
{
  "id": "act-ch8-pattern-hunt",
  "level": "2",
  "url": "sec-bernoulli-binomial.html#act-ch8-pattern-hunt",
  "type": "Activity",
  "number": "8.1.2",
  "title": "Counting Success Patterns.",
  "body": " Counting Success Patterns   See how binomial coefficients count the different ways to place successes among trials.     List all sequences of 5 Bernoulli trials with exactly 2 successes. Use for success and for failure.      Count the sequences you listed and verify that the answer matches .      For 6 trials with exactly 3 successes, how many success patterns are possible? Explain briefly why the order of the successes does not matter in the coefficient.    "
},
{
  "id": "sec-bernoulli-binomial-12",
  "level": "2",
  "url": "sec-bernoulli-binomial.html#sec-bernoulli-binomial-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial coefficient probability binomial coefficient "
},
{
  "id": "ex-binom-coefficient",
  "level": "2",
  "url": "sec-bernoulli-binomial.html#ex-binom-coefficient",
  "type": "Example",
  "number": "8.1.2",
  "title": "Computing a Binomial Coefficient.",
  "body": " Computing a Binomial Coefficient  The number of ways to choose 3 students from a group of 5 is   "
},
{
  "id": "sec-binomial-pdf-cdf",
  "level": "1",
  "url": "sec-binomial-pdf-cdf.html",
  "type": "Section",
  "number": "8.2",
  "title": "Binomial Probabilities and the Cumulative Distribution",
  "body": " Binomial Probabilities and the Cumulative Distribution  If counts the number of successes in independent Bernoulli trials with success probability , then we write   The possible values of are   The probability that exactly successes occur is   This formula makes sense for a simple reason. A particular sequence with exactly successes has probability . Then counts how many such sequences there are.   Exactly Three Goals in Five Penalty Kicks  Suppose a soccer player makes a penalty kick with probability . Let be the number of goals in 5 penalty kicks. Then .  The probability of exactly 3 goals is   Since ,   So the chance of scoring exactly 3 times is about 0.264.    Using the Complement  A factory knows that 2% of the items it produces are defective. Suppose 20 items are selected independently, and let be the number of defective items. Then .  The probability of getting at least one defective item is easier to compute by using the complement:    The cumulative distribution function probability cumulative distribution function , or CDF, of a binomial random variable is   For a binomial random variable, the CDF is found by adding the probabilities from 0 up to .   At Most Three Goals  Continue with . Then   Computing the four terms gives   So the probability of scoring at most 3 goals in 5 kicks is about 0.367.   The CDF is useful because many probability questions can be rewritten in terms of “at most.” For example,   and if , then    A multiple-choice quiz has 6 questions, each with 4 answer choices, and a student guesses on every question. Let be the number answered correctly.   State the values of and .  Write a formula for .  Write a formula for .     Quiz Guessing Challenge   Work with a short quiz and practice exact, at-most, and at-least binomial probabilities.     A 6-question true-false quiz is answered by guessing. Let be the number correct. State and , and write a formula for .      Write a formula for . Then explain why the complement is the quickest way to compute it.      Write a formula for .      Factory Fault Finder   Use a defect-rate model to practice the binomial CDF and the complement rule.     A factory inspects 20 items, and each item has defect probability . Let be the number of defective items. State the binomial model for .      Find and .      Find and explain why the result is small or large in context.     "
},
{
  "id": "ex-penalty-kicks",
  "level": "2",
  "url": "sec-binomial-pdf-cdf.html#ex-penalty-kicks",
  "type": "Example",
  "number": "8.2.1",
  "title": "Exactly Three Goals in Five Penalty Kicks.",
  "body": " Exactly Three Goals in Five Penalty Kicks  Suppose a soccer player makes a penalty kick with probability . Let be the number of goals in 5 penalty kicks. Then .  The probability of exactly 3 goals is   Since ,   So the chance of scoring exactly 3 times is about 0.264.  "
},
{
  "id": "ex-binom-at-least-one",
  "level": "2",
  "url": "sec-binomial-pdf-cdf.html#ex-binom-at-least-one",
  "type": "Example",
  "number": "8.2.2",
  "title": "Using the Complement.",
  "body": " Using the Complement  A factory knows that 2% of the items it produces are defective. Suppose 20 items are selected independently, and let be the number of defective items. Then .  The probability of getting at least one defective item is easier to compute by using the complement:   "
},
{
  "id": "sec-binomial-pdf-cdf-11",
  "level": "2",
  "url": "sec-binomial-pdf-cdf.html#sec-binomial-pdf-cdf-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cumulative distribution function probability cumulative distribution function "
},
{
  "id": "ex-binom-cdf",
  "level": "2",
  "url": "sec-binomial-pdf-cdf.html#ex-binom-cdf",
  "type": "Example",
  "number": "8.2.3",
  "title": "At Most Three Goals.",
  "body": " At Most Three Goals  Continue with . Then   Computing the four terms gives   So the probability of scoring at most 3 goals in 5 kicks is about 0.367.  "
},
{
  "id": "binom-inline-ex-2",
  "level": "2",
  "url": "sec-binomial-pdf-cdf.html#binom-inline-ex-2",
  "type": "Checkpoint",
  "number": "8.2.4",
  "title": "",
  "body": " A multiple-choice quiz has 6 questions, each with 4 answer choices, and a student guesses on every question. Let be the number answered correctly.   State the values of and .  Write a formula for .  Write a formula for .   "
},
{
  "id": "act-ch8-quiz-guessing",
  "level": "2",
  "url": "sec-binomial-pdf-cdf.html#act-ch8-quiz-guessing",
  "type": "Activity",
  "number": "8.2.1",
  "title": "Quiz Guessing Challenge.",
  "body": " Quiz Guessing Challenge   Work with a short quiz and practice exact, at-most, and at-least binomial probabilities.     A 6-question true-false quiz is answered by guessing. Let be the number correct. State and , and write a formula for .      Write a formula for . Then explain why the complement is the quickest way to compute it.      Write a formula for .    "
},
{
  "id": "act-ch8-factory-defects",
  "level": "2",
  "url": "sec-binomial-pdf-cdf.html#act-ch8-factory-defects",
  "type": "Activity",
  "number": "8.2.2",
  "title": "Factory Fault Finder.",
  "body": " Factory Fault Finder   Use a defect-rate model to practice the binomial CDF and the complement rule.     A factory inspects 20 items, and each item has defect probability . Let be the number of defective items. State the binomial model for .      Find and .      Find and explain why the result is small or large in context.    "
},
{
  "id": "sec-binomial-mean-variance",
  "level": "1",
  "url": "sec-binomial-mean-variance.html",
  "type": "Section",
  "number": "8.3",
  "title": "Mean, Variance, and Standard Deviation",
  "body": " Mean, Variance, and Standard Deviation  The binomial distribution is especially nice because its center and spread have simple formulas.  Think of a binomial random variable as a sum of Bernoulli random variables:   where each equals 1 for success and 0 for failure. For one Bernoulli random variable,   Because expectation adds and independent variances add, a binomial random variable satisfies    and therefore the standard deviation probability standard deviation of a binomial distribution is   The mean gives the long-run average number of successes. The standard deviation tells us how much the actual count typically varies around that average.   Free Throws  A player makes free throws with probability . Suppose the player takes 20 free throws, and let be the number made. Then .  The mean number of made shots is   The variance is   so the standard deviation is   In other words, over many such 20-shot sessions, the player would average about 16 made shots, with typical variation of about 1.8 shots.   These formulas are worth remembering because they come up constantly in applications.   Free-Throw Forecast   Practice the binomial mean and variance formulas with a sports context.     A player makes free throws with probability and takes 12 shots. Let . Find the mean number of made shots.      Find the variance and standard deviation of .      Explain what the mean and standard deviation say about the player's long-run performance.      Which Binomial is More Spread Out?   Compare two binomial models that have the same mean but different variability.     For , find the mean and standard deviation.      For , find the mean and standard deviation.      Both random variables have the same mean. Which one is more spread out, and what does that say about the game or process it models?      If , find , , and .   "
},
{
  "id": "sec-binomial-mean-variance-10",
  "level": "2",
  "url": "sec-binomial-mean-variance.html#sec-binomial-mean-variance-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard deviation probability standard deviation of a binomial distribution "
},
{
  "id": "ex-binom-mean-variance",
  "level": "2",
  "url": "sec-binomial-mean-variance.html#ex-binom-mean-variance",
  "type": "Example",
  "number": "8.3.1",
  "title": "Free Throws.",
  "body": " Free Throws  A player makes free throws with probability . Suppose the player takes 20 free throws, and let be the number made. Then .  The mean number of made shots is   The variance is   so the standard deviation is   In other words, over many such 20-shot sessions, the player would average about 16 made shots, with typical variation of about 1.8 shots.  "
},
{
  "id": "act-ch8-free-throw-forecast",
  "level": "2",
  "url": "sec-binomial-mean-variance.html#act-ch8-free-throw-forecast",
  "type": "Activity",
  "number": "8.3.1",
  "title": "Free-Throw Forecast.",
  "body": " Free-Throw Forecast   Practice the binomial mean and variance formulas with a sports context.     A player makes free throws with probability and takes 12 shots. Let . Find the mean number of made shots.      Find the variance and standard deviation of .      Explain what the mean and standard deviation say about the player's long-run performance.    "
},
{
  "id": "act-ch8-compare-binomial-spread",
  "level": "2",
  "url": "sec-binomial-mean-variance.html#act-ch8-compare-binomial-spread",
  "type": "Activity",
  "number": "8.3.2",
  "title": "Which Binomial is More Spread Out?",
  "body": " Which Binomial is More Spread Out?   Compare two binomial models that have the same mean but different variability.     For , find the mean and standard deviation.      For , find the mean and standard deviation.      Both random variables have the same mean. Which one is more spread out, and what does that say about the game or process it models?    "
},
{
  "id": "binom-inline-ex-3",
  "level": "2",
  "url": "sec-binomial-mean-variance.html#binom-inline-ex-3",
  "type": "Checkpoint",
  "number": "8.3.2",
  "title": "",
  "body": " If , find , , and .  "
},
{
  "id": "sec-binomial-normal-approximation",
  "level": "1",
  "url": "sec-binomial-normal-approximation.html",
  "type": "Section",
  "number": "8.4",
  "title": "Binomial Approximation of Normal Distribution",
  "body": " Binomial Approximation of Normal Distribution  The previous section showed that if , then the mean of is and the standard deviation is . Those same two numbers will guide us here.  We have not formally studied the normal distribution yet. That happens in . For now, think of a normal distribution as a smooth bell-shaped curve determined by its center and its spread.  When is fairly large and is not too close to 0 or 1, the graph of a binomial distribution begins to look bell-shaped instead of strongly skewed. A common rule of thumb is that the binomial model is reasonably approximated by a normal distribution when   These conditions say that we expect at least about 5 successes and at least about 5 failures. If one side is too small, then the binomial distribution is usually too lopsided for a normal curve to match it well.  When the rule of thumb is satisfied, we match the binomial model with the normal model   In other words, we use a normal distribution with the same mean and the same standard deviation as the binomial distribution. So the formulas from the previous section are exactly what make this approximation possible.  For now, exact binomial probabilities still come from the binomial formula or technology. The point of this section is to see the shape connection. In the next chapter, once area under a normal curve has been introduced, we will be able to use this idea more fully.   A Binomial Model That Looks Nearly Normal  Let . Then   Since and , the rule of thumb is satisfied. So should be approximated reasonably well by the normal model   overlays a histogram-style plot of the binomial probabilities with the matching normal curve. The bars rise toward the middle and then fall in a nearly symmetric way, which is exactly the shape we want before using a normal curve as an approximation.    The binomial distribution and the normal curve   A probability plot with light bars for the binomial distribution B(20,0.5) at the integers 0 through 20 and a smooth red bell-shaped curve over them. The curve is centered at 10 and closely follows the overall shape of the bars.  The graphic compares two models on the same axes. Light shaded bars show the probabilities for the binomial distribution B(20,0.5) at each whole-number value from 0 through 20, with the tallest bars near 10 and shorter bars toward 0 and 20. A smooth red bell-shaped curve for the normal distribution N(10,square root of 5) is drawn on top. The red curve is centered at 10 and tracks the height pattern of the binomial bars closely, showing why the normal model is a good visual approximation here.     In , the binomial bars and the normal curve line up at the same center, and their spreads are very similar. That is exactly what we expect, because both models use mean 10 and standard deviation .   For each binomial model below, decide whether a normal approximation is reasonable. If it is, write the matching normal model.        When Does the Bell Curve Fit?   Use the rule of thumb together with the mean and standard deviation formulas from the previous section.     For , compute and . Should a normal approximation be reasonable?      If the approximation is reasonable, write the matching normal model and identify its mean and standard deviation.      Now consider . Repeat the check. Why should this distribution look less like a normal curve?     "
},
{
  "id": "ex-binom-normal-approximation",
  "level": "2",
  "url": "sec-binomial-normal-approximation.html#ex-binom-normal-approximation",
  "type": "Example",
  "number": "8.4.1",
  "title": "A Binomial Model That Looks Nearly Normal.",
  "body": " A Binomial Model That Looks Nearly Normal  Let . Then   Since and , the rule of thumb is satisfied. So should be approximated reasonably well by the normal model   overlays a histogram-style plot of the binomial probabilities with the matching normal curve. The bars rise toward the middle and then fall in a nearly symmetric way, which is exactly the shape we want before using a normal curve as an approximation.  "
},
{
  "id": "fig-binom-normal-approximation",
  "level": "2",
  "url": "sec-binomial-normal-approximation.html#fig-binom-normal-approximation",
  "type": "Figure",
  "number": "8.4.2",
  "title": "",
  "body": " The binomial distribution and the normal curve   A probability plot with light bars for the binomial distribution B(20,0.5) at the integers 0 through 20 and a smooth red bell-shaped curve over them. The curve is centered at 10 and closely follows the overall shape of the bars.  The graphic compares two models on the same axes. Light shaded bars show the probabilities for the binomial distribution B(20,0.5) at each whole-number value from 0 through 20, with the tallest bars near 10 and shorter bars toward 0 and 20. A smooth red bell-shaped curve for the normal distribution N(10,square root of 5) is drawn on top. The red curve is centered at 10 and tracks the height pattern of the binomial bars closely, showing why the normal model is a good visual approximation here.    "
},
{
  "id": "binom-inline-ex-4",
  "level": "2",
  "url": "sec-binomial-normal-approximation.html#binom-inline-ex-4",
  "type": "Checkpoint",
  "number": "8.4.3",
  "title": "",
  "body": " For each binomial model below, decide whether a normal approximation is reasonable. If it is, write the matching normal model.      "
},
{
  "id": "act-ch8-normal-preview",
  "level": "2",
  "url": "sec-binomial-normal-approximation.html#act-ch8-normal-preview",
  "type": "Activity",
  "number": "8.4.1",
  "title": "When Does the Bell Curve Fit?",
  "body": " When Does the Bell Curve Fit?   Use the rule of thumb together with the mean and standard deviation formulas from the previous section.     For , compute and . Should a normal approximation be reasonable?      If the approximation is reasonable, write the matching normal model and identify its mean and standard deviation.      Now consider . Repeat the check. Why should this distribution look less like a normal curve?    "
},
{
  "id": "ch8-exercises",
  "level": "1",
  "url": "ch8-exercises.html",
  "type": "Exercises",
  "number": "8.5",
  "title": "Exercises",
  "body": " Exercises   Decide whether each setting is binomial. If it is, state and .   A fair coin is flipped 12 times and the number of heads is counted.  Four cards are drawn without replacement from a deck and the number of aces is counted.  A machine fills 15 bottles, and the number of bottles that pass inspection is counted, assuming the probability of passing stays the same from bottle to bottle.     Let .   Find .  Find .  Find .     A basketball player makes free throws with probability . If the player takes 6 free throws, what is the probability of making exactly 4 of them?    A quiz has 10 true-false questions, and a student guesses on every question. Let be the number answered correctly.   Find .  Find .  Find .     If , find the mean, variance, and standard deviation.    In a certain town, 18% of households have a dog. Suppose 20 households are selected at random, and let be the number that have a dog.   Find .  Find .  What is the expected number of selected households that have a dog?     For each binomial model below, decide whether a normal approximation is reasonable. Explain your decision using and .         Let .   Show that a normal approximation is reasonable.  Find the mean and standard deviation of .  Write the matching normal model.     Explain why should be approximated better by a normal curve than , even though both models have the same value of . In your explanation, discuss both the rule of thumb and the shape of the distribution.   "
},
{
  "id": "ch8-ex-1",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-1",
  "type": "Exercise",
  "number": "8.5.1",
  "title": "",
  "body": " Decide whether each setting is binomial. If it is, state and .   A fair coin is flipped 12 times and the number of heads is counted.  Four cards are drawn without replacement from a deck and the number of aces is counted.  A machine fills 15 bottles, and the number of bottles that pass inspection is counted, assuming the probability of passing stays the same from bottle to bottle.   "
},
{
  "id": "ch8-ex-2",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-2",
  "type": "Exercise",
  "number": "8.5.2",
  "title": "",
  "body": " Let .   Find .  Find .  Find .   "
},
{
  "id": "ch8-ex-3",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-3",
  "type": "Exercise",
  "number": "8.5.3",
  "title": "",
  "body": " A basketball player makes free throws with probability . If the player takes 6 free throws, what is the probability of making exactly 4 of them?  "
},
{
  "id": "ch8-ex-4",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-4",
  "type": "Exercise",
  "number": "8.5.4",
  "title": "",
  "body": " A quiz has 10 true-false questions, and a student guesses on every question. Let be the number answered correctly.   Find .  Find .  Find .   "
},
{
  "id": "ch8-ex-5",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-5",
  "type": "Exercise",
  "number": "8.5.5",
  "title": "",
  "body": " If , find the mean, variance, and standard deviation.  "
},
{
  "id": "ch8-ex-6",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-6",
  "type": "Exercise",
  "number": "8.5.6",
  "title": "",
  "body": " In a certain town, 18% of households have a dog. Suppose 20 households are selected at random, and let be the number that have a dog.   Find .  Find .  What is the expected number of selected households that have a dog?   "
},
{
  "id": "ch8-ex-7",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-7",
  "type": "Exercise",
  "number": "8.5.7",
  "title": "",
  "body": " For each binomial model below, decide whether a normal approximation is reasonable. Explain your decision using and .       "
},
{
  "id": "ch8-ex-8",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-8",
  "type": "Exercise",
  "number": "8.5.8",
  "title": "",
  "body": " Let .   Show that a normal approximation is reasonable.  Find the mean and standard deviation of .  Write the matching normal model.   "
},
{
  "id": "ch8-ex-9",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-9",
  "type": "Exercise",
  "number": "8.5.9",
  "title": "",
  "body": " Explain why should be approximated better by a normal curve than , even though both models have the same value of . In your explanation, discuss both the rule of thumb and the shape of the distribution.  "
},
{
  "id": "sec-continuous-uniform",
  "level": "1",
  "url": "sec-continuous-uniform.html",
  "type": "Section",
  "number": "9.1",
  "title": "Continuous Random Variables and the Uniform Model",
  "body": " Continuous Random Variables and the Uniform Model  A random variable is continuous probability continuous random variable if its possible values fill an interval instead of landing in a countable list. A person's height is a standard example. So is the amount of time until the next customer arrives.  For a continuous random variable, probabilities come from intervals, not isolated points. The easiest model to start with is the uniform distribution probability uniform distribution .   An Arrival Time During Office Hours  Suppose a student arrives to office hours at a completely random time between noon and 1:00 p.m., and every time in that hour is equally likely. Let be the arrival time, measured in minutes after noon.  Then is uniformly distributed on the interval .  Now ask a sequence of questions.   What is ? Since this interval has length 30 out of a total length of 60, the probability is .  What is ? This interval also has length 30, so its probability is again .  What is ? Now the interval has length 15, so the probability is .  What is , meaning the student arrives exactly at 12:30?   The first three questions suggest the right idea: in a uniform model, probability depends on the length of an interval. But a single point has length 0. So   The same reasoning shows that for every specific value . A continuous random variable can certainly take the value ; it is just that one exact point carries no area and therefore no probability mass by itself.   More generally, if is uniformly distributed on , then for any interval inside ,   This formula says exactly what the office-hours example suggested: probability is proportional to interval length.  A probability density function probability probability density function , or PDF, is a function whose area over an interval gives probability. For the uniform distribution on , the density is constant:   That is why the graph is just a rectangle. Probability is area, so for a continuous random variable, a single point has probability 0.   A bus arrives at a stop at a time chosen uniformly at random between 8:00 and 8:20. Let be the arrival time in minutes after 8:00.   Find .  Find .  Explain why .     Food Truck Arrival Window   Use a simple arrival-time model to practice probability on a uniform interval.     A food truck arrives uniformly at random between 11:00 and 11:30. Let be the number of minutes after 11:00. Find and .      Find and explain why the answer is zero.      Compare and . What do the two probabilities have in common?      Equal-Length Interval Challenge   See why equal-length intervals have equal probability in a uniform model.     Suppose is uniformly distributed on . Find the probability of any interval of length 10, such as .      Find the probability of another interval of length 10, such as . Compare your answer with the first one.      In one sentence, explain the general rule for probabilities in a uniform distribution.     "
},
{
  "id": "sec-continuous-uniform-2",
  "level": "2",
  "url": "sec-continuous-uniform.html#sec-continuous-uniform-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous probability continuous random variable "
},
{
  "id": "sec-continuous-uniform-3",
  "level": "2",
  "url": "sec-continuous-uniform.html#sec-continuous-uniform-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform distribution probability uniform distribution "
},
{
  "id": "ex-office-hours-uniform",
  "level": "2",
  "url": "sec-continuous-uniform.html#ex-office-hours-uniform",
  "type": "Example",
  "number": "9.1.1",
  "title": "An Arrival Time During Office Hours.",
  "body": " An Arrival Time During Office Hours  Suppose a student arrives to office hours at a completely random time between noon and 1:00 p.m., and every time in that hour is equally likely. Let be the arrival time, measured in minutes after noon.  Then is uniformly distributed on the interval .  Now ask a sequence of questions.   What is ? Since this interval has length 30 out of a total length of 60, the probability is .  What is ? This interval also has length 30, so its probability is again .  What is ? Now the interval has length 15, so the probability is .  What is , meaning the student arrives exactly at 12:30?   The first three questions suggest the right idea: in a uniform model, probability depends on the length of an interval. But a single point has length 0. So   The same reasoning shows that for every specific value . A continuous random variable can certainly take the value ; it is just that one exact point carries no area and therefore no probability mass by itself.  "
},
{
  "id": "sec-continuous-uniform-8",
  "level": "2",
  "url": "sec-continuous-uniform.html#sec-continuous-uniform-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability density function probability probability density function "
},
{
  "id": "normal-inline-ex-1",
  "level": "2",
  "url": "sec-continuous-uniform.html#normal-inline-ex-1",
  "type": "Checkpoint",
  "number": "9.1.2",
  "title": "",
  "body": " A bus arrives at a stop at a time chosen uniformly at random between 8:00 and 8:20. Let be the arrival time in minutes after 8:00.   Find .  Find .  Explain why .   "
},
{
  "id": "act-ch9-uniform-food-truck",
  "level": "2",
  "url": "sec-continuous-uniform.html#act-ch9-uniform-food-truck",
  "type": "Activity",
  "number": "9.1.1",
  "title": "Food Truck Arrival Window.",
  "body": " Food Truck Arrival Window   Use a simple arrival-time model to practice probability on a uniform interval.     A food truck arrives uniformly at random between 11:00 and 11:30. Let be the number of minutes after 11:00. Find and .      Find and explain why the answer is zero.      Compare and . What do the two probabilities have in common?    "
},
{
  "id": "act-ch9-uniform-equal-length",
  "level": "2",
  "url": "sec-continuous-uniform.html#act-ch9-uniform-equal-length",
  "type": "Activity",
  "number": "9.1.2",
  "title": "Equal-Length Interval Challenge.",
  "body": " Equal-Length Interval Challenge   See why equal-length intervals have equal probability in a uniform model.     Suppose is uniformly distributed on . Find the probability of any interval of length 10, such as .      Find the probability of another interval of length 10, such as . Compare your answer with the first one.      In one sentence, explain the general rule for probabilities in a uniform distribution.    "
},
{
  "id": "sec-normal-distributions",
  "level": "1",
  "url": "sec-normal-distributions.html",
  "type": "Section",
  "number": "9.2",
  "title": "Normal Distributions and Z-Scores",
  "body": " Normal Distributions and Z-Scores  The most important continuous model in elementary statistics is the normal distribution probability normal distribution . Its graph is the familiar bell-shaped curve.  A normal distribution is determined by two numbers:   the mean , which tells us where the center is, and  the standard deviation , which tells us how spread out the distribution is.   If has a normal distribution with mean and standard deviation , we write    A Normal Model for Heights  Suppose the heights of adult women in a population are modeled by a normal distribution with mean 64 inches and standard deviation 2.8 inches. Then   This says the distribution is centered at 64 inches, and typical distances from the center are about 2.8 inches.   One of the nicest features of the normal curve is its symmetry. Values equally far above and below the mean have the same density, so the left half of the curve is a mirror image of the right half. The mean sits right in the middle.   The mean and standard deviation on a normal curve   A bell-shaped normal curve with a dotted vertical line through the center labeled mu. The points of inflection are marked on both sides, and the horizontal distance from mu to the right inflection point is labeled sigma.  The graphic shows a normal density curve symmetric about a central dotted vertical line labeled mu. Small dots mark the two inflection points, one to the left and one to the right of the center. A double arrow runs horizontally from the center line to the right inflection point, and that distance is labeled sigma. The picture emphasizes that the curve is symmetric and that one standard deviation is the width from the center to an inflection point.     In , the dotted line marks the mean . The curve changes concavity at the inflection points, and each one is exactly one standard deviation from the center. So the horizontal distance from to either inflection point is .  In the family of normal distributions, the one with mean 0 and standard deviation 1 is called the standard normal distribution probability standard normal distribution . It is customary to use to denote a random variable with the standard normal distribution .  A useful standardization is the z-score probability z-score   The z-score tells us how many standard deviations a value is above or below the mean. A positive z-score means the value is above the mean. A negative z-score means it is below the mean.  If , then the transformation   recenters the distribution at 0 and rescales the horizontal axis so that one standard deviation becomes length 1. In that way, the normal curve for is converted into the standard normal curve for . The important point is that probabilities are preserved under this relabeling of the axis. In particular, for any cutoff value ,   So the area to the left of under the curve for is exactly the same as the area to the left of the corresponding z-score under the standard normal curve.   Standardizing a normal random variable preserves left-tail area   Two bell-shaped curves shown side by side. On the left, a normal curve for X has the region to the left of a shaded. On the right, the standard normal curve for Z has the region to the left of z(a) shaded. The shaded areas represent the same probability.  The figure has two panels. The left panel shows a normal density curve labeled X distributed as N(mu, sigma), with a dashed line at the mean mu and another dashed line at a point labeled a to the right of the mean. The region under the curve to the left of a is shaded. The right panel shows the standard normal density curve labeled Z distributed as N(0,1), with dashed lines at 0 and at the point z(a). The region under the curve to the left of z(a) is shaded in the same way. The picture indicates that standardization changes the horizontal scale but preserves the probability area.      Interpreting a Z-Score  Using , the z-score of 62 inches is   So a height of 62 inches is about 0.71 standard deviations below the mean.   This matters because probability tables and technology are usually organized around the standard normal distribution.   Height Detective   Compare heights using z-scores instead of raw inches.     Using , find the z-scores for 61 inches, 67 inches, and 70 inches.      Which of those three heights is most unusual relative to the model?      For each z-score, say whether the height is above or below the mean and by about how many standard deviations.      Same Raw Score, Different Crowd   Use z-scores to compare a raw score across two different normal distributions.     A score of 85 occurs on Exam A, where scores are modeled by . Find its z-score.      The same score of 85 occurs on Exam B, where scores are modeled by . Find its z-score.      Which score is better relative to its own group, and why?     "
},
{
  "id": "sec-normal-distributions-2",
  "level": "2",
  "url": "sec-normal-distributions.html#sec-normal-distributions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal distribution probability normal distribution "
},
{
  "id": "ex-women-height-normal",
  "level": "2",
  "url": "sec-normal-distributions.html#ex-women-height-normal",
  "type": "Example",
  "number": "9.2.1",
  "title": "A Normal Model for Heights.",
  "body": " A Normal Model for Heights  Suppose the heights of adult women in a population are modeled by a normal distribution with mean 64 inches and standard deviation 2.8 inches. Then   This says the distribution is centered at 64 inches, and typical distances from the center are about 2.8 inches.  "
},
{
  "id": "fig-normal-mu-sigma",
  "level": "2",
  "url": "sec-normal-distributions.html#fig-normal-mu-sigma",
  "type": "Figure",
  "number": "9.2.2",
  "title": "",
  "body": " The mean and standard deviation on a normal curve   A bell-shaped normal curve with a dotted vertical line through the center labeled mu. The points of inflection are marked on both sides, and the horizontal distance from mu to the right inflection point is labeled sigma.  The graphic shows a normal density curve symmetric about a central dotted vertical line labeled mu. Small dots mark the two inflection points, one to the left and one to the right of the center. A double arrow runs horizontally from the center line to the right inflection point, and that distance is labeled sigma. The picture emphasizes that the curve is symmetric and that one standard deviation is the width from the center to an inflection point.    "
},
{
  "id": "sec-normal-distributions-11",
  "level": "2",
  "url": "sec-normal-distributions.html#sec-normal-distributions-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard normal distribution probability standard normal distribution "
},
{
  "id": "sec-normal-distributions-12",
  "level": "2",
  "url": "sec-normal-distributions.html#sec-normal-distributions-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "z-score probability z-score "
},
{
  "id": "fig-standardization-area",
  "level": "2",
  "url": "sec-normal-distributions.html#fig-standardization-area",
  "type": "Figure",
  "number": "9.2.3",
  "title": "",
  "body": " Standardizing a normal random variable preserves left-tail area   Two bell-shaped curves shown side by side. On the left, a normal curve for X has the region to the left of a shaded. On the right, the standard normal curve for Z has the region to the left of z(a) shaded. The shaded areas represent the same probability.  The figure has two panels. The left panel shows a normal density curve labeled X distributed as N(mu, sigma), with a dashed line at the mean mu and another dashed line at a point labeled a to the right of the mean. The region under the curve to the left of a is shaded. The right panel shows the standard normal density curve labeled Z distributed as N(0,1), with dashed lines at 0 and at the point z(a). The region under the curve to the left of z(a) is shaded in the same way. The picture indicates that standardization changes the horizontal scale but preserves the probability area.    "
},
{
  "id": "ex-zscore-height",
  "level": "2",
  "url": "sec-normal-distributions.html#ex-zscore-height",
  "type": "Example",
  "number": "9.2.4",
  "title": "Interpreting a Z-Score.",
  "body": " Interpreting a Z-Score  Using , the z-score of 62 inches is   So a height of 62 inches is about 0.71 standard deviations below the mean.  "
},
{
  "id": "act-ch9-height-detective",
  "level": "2",
  "url": "sec-normal-distributions.html#act-ch9-height-detective",
  "type": "Activity",
  "number": "9.2.1",
  "title": "Height Detective.",
  "body": " Height Detective   Compare heights using z-scores instead of raw inches.     Using , find the z-scores for 61 inches, 67 inches, and 70 inches.      Which of those three heights is most unusual relative to the model?      For each z-score, say whether the height is above or below the mean and by about how many standard deviations.    "
},
{
  "id": "act-ch9-score-comparison",
  "level": "2",
  "url": "sec-normal-distributions.html#act-ch9-score-comparison",
  "type": "Activity",
  "number": "9.2.2",
  "title": "Same Raw Score, Different Crowd.",
  "body": " Same Raw Score, Different Crowd   Use z-scores to compare a raw score across two different normal distributions.     A score of 85 occurs on Exam A, where scores are modeled by . Find its z-score.      The same score of 85 occurs on Exam B, where scores are modeled by . Find its z-score.      Which score is better relative to its own group, and why?    "
},
{
  "id": "sec-z-alpha-notation",
  "level": "1",
  "url": "sec-z-alpha-notation.html",
  "type": "Section",
  "number": "9.3",
  "title": "The z-Alpha Notation",
  "body": " The z-Alpha Notation  The z-Alpha Notation  When working with the standard normal distribution, we often use the notation . This is especially important later when we study confidence intervals and hypothesis tests.  By convention, is the value on the horizontal axis so that the area to the right under the standard normal curve is . In symbols,   Since the total area under the curve is 1, the area to the left of is therefore :   This is the standard convention used in statistics. For example, because the area to the right of 1.96 under the standard normal curve is 0.025.   The notation for the standard normal distribution   A bell-shaped standard normal curve centered at 0, with a vertical line at z-alpha to the right of the mean and the area to the right of that line shaded and labeled alpha.  The graphic shows the standard normal density curve over a horizontal axis. A vertical dashed line is drawn at a positive x-value labeled z-alpha. The region under the curve to the right of that line is shaded and labeled alpha, indicating that the right-tail area equals alpha.     So if you know the confidence level or the significance level, you can translate that information into a cutoff on the standard normal curve by finding the appropriate .   Critical Value Hunt   Find and compare a few standard normal cutoffs used in confidence intervals and tests.     Find approximate values of , , and using technology or a z-table.      Which of these cutoffs is farthest from 0? Explain why that makes sense.      If a test uses a smaller right-tail area, what happens to the critical value?      Tail-Area Match-Up   Translate between right-tail area, left-tail area, and the notation.     If the right-tail area is 0.025, what notation is used for the corresponding critical value?      If , what is the area to the left of ?      In one sentence, explain what happens to as gets smaller.     "
},
{
  "id": "fig-z-alpha-right-tail",
  "level": "2",
  "url": "sec-z-alpha-notation.html#fig-z-alpha-right-tail",
  "type": "Figure",
  "number": "9.3.1",
  "title": "",
  "body": " The notation for the standard normal distribution   A bell-shaped standard normal curve centered at 0, with a vertical line at z-alpha to the right of the mean and the area to the right of that line shaded and labeled alpha.  The graphic shows the standard normal density curve over a horizontal axis. A vertical dashed line is drawn at a positive x-value labeled z-alpha. The region under the curve to the right of that line is shaded and labeled alpha, indicating that the right-tail area equals alpha.    "
},
{
  "id": "act-ch9-zalpha-hunt",
  "level": "2",
  "url": "sec-z-alpha-notation.html#act-ch9-zalpha-hunt",
  "type": "Activity",
  "number": "9.3.1",
  "title": "Critical Value Hunt.",
  "body": " Critical Value Hunt   Find and compare a few standard normal cutoffs used in confidence intervals and tests.     Find approximate values of , , and using technology or a z-table.      Which of these cutoffs is farthest from 0? Explain why that makes sense.      If a test uses a smaller right-tail area, what happens to the critical value?    "
},
{
  "id": "act-ch9-tail-area-match",
  "level": "2",
  "url": "sec-z-alpha-notation.html#act-ch9-tail-area-match",
  "type": "Activity",
  "number": "9.3.2",
  "title": "Tail-Area Match-Up.",
  "body": " Tail-Area Match-Up   Translate between right-tail area, left-tail area, and the notation.     If the right-tail area is 0.025, what notation is used for the corresponding critical value?      If , what is the area to the left of ?      In one sentence, explain what happens to as gets smaller.    "
},
{
  "id": "sec-normal-probabilities-percentiles",
  "level": "1",
  "url": "sec-normal-probabilities-percentiles.html",
  "type": "Section",
  "number": "9.4",
  "title": "Normal Probabilities and Percentiles",
  "body": " Normal Probabilities and Percentiles  For a continuous random variable, probability is area. So for a normal random variable, is the area under the normal curve between and .  Because , it does not matter whether the endpoints are included:   In practice, we usually convert the problem to z-scores and use technology or a table for the standard normal distribution.   At Most 62 Inches  Continue with . To find the probability that a randomly selected woman is at most 62 inches tall, we standardize:   So   About 23.75% of the population is modeled as being 62 inches or shorter.    Between 60 and 70 Inches  Again using , we find   Standardizing gives   Using technology,   So about 90.74% of the population falls between 60 and 70 inches.   A percentile data percentile is a value below which a given percentage of the distribution lies.   The 60th Percentile  What height cuts off the lowest 60% of the distribution? In symbols, we want the value such that   Using inverse normal technology for , we get   So the 60th percentile is about 64.71 inches.    Suppose test scores are modeled by .   Find the z-score of 84.  Write the standardized form of .  Explain in words what the 90th percentile of this distribution means.     Exam Score Area Hunt   Practice turning normal probability questions into z-scores and areas under the curve.     Suppose test scores are modeled by . Find .      Write the standardized form of .      What does the 90th percentile mean in this context?      Prize Cutoff Percentile   Find a percentile cutoff and interpret it as a prize threshold.     Suppose a scholarship goes to the top 5% of scores in a normal model . Find the cutoff score.      Decide whether a score of 80 would earn the scholarship.      Explain in one sentence what it means for a value to be a percentile cutoff.     "
},
{
  "id": "ex-height-at-most-62",
  "level": "2",
  "url": "sec-normal-probabilities-percentiles.html#ex-height-at-most-62",
  "type": "Example",
  "number": "9.4.1",
  "title": "At Most 62 Inches.",
  "body": " At Most 62 Inches  Continue with . To find the probability that a randomly selected woman is at most 62 inches tall, we standardize:   So   About 23.75% of the population is modeled as being 62 inches or shorter.  "
},
{
  "id": "ex-height-between-60-and-70",
  "level": "2",
  "url": "sec-normal-probabilities-percentiles.html#ex-height-between-60-and-70",
  "type": "Example",
  "number": "9.4.2",
  "title": "Between 60 and 70 Inches.",
  "body": " Between 60 and 70 Inches  Again using , we find   Standardizing gives   Using technology,   So about 90.74% of the population falls between 60 and 70 inches.  "
},
{
  "id": "sec-normal-probabilities-percentiles-8",
  "level": "2",
  "url": "sec-normal-probabilities-percentiles.html#sec-normal-probabilities-percentiles-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "percentile data percentile "
},
{
  "id": "ex-60th-percentile-height",
  "level": "2",
  "url": "sec-normal-probabilities-percentiles.html#ex-60th-percentile-height",
  "type": "Example",
  "number": "9.4.3",
  "title": "The 60th Percentile.",
  "body": " The 60th Percentile  What height cuts off the lowest 60% of the distribution? In symbols, we want the value such that   Using inverse normal technology for , we get   So the 60th percentile is about 64.71 inches.  "
},
{
  "id": "normal-inline-ex-2",
  "level": "2",
  "url": "sec-normal-probabilities-percentiles.html#normal-inline-ex-2",
  "type": "Checkpoint",
  "number": "9.4.4",
  "title": "",
  "body": " Suppose test scores are modeled by .   Find the z-score of 84.  Write the standardized form of .  Explain in words what the 90th percentile of this distribution means.   "
},
{
  "id": "act-ch9-normal-score-area",
  "level": "2",
  "url": "sec-normal-probabilities-percentiles.html#act-ch9-normal-score-area",
  "type": "Activity",
  "number": "9.4.1",
  "title": "Exam Score Area Hunt.",
  "body": " Exam Score Area Hunt   Practice turning normal probability questions into z-scores and areas under the curve.     Suppose test scores are modeled by . Find .      Write the standardized form of .      What does the 90th percentile mean in this context?    "
},
{
  "id": "act-ch9-percentile-cutoff",
  "level": "2",
  "url": "sec-normal-probabilities-percentiles.html#act-ch9-percentile-cutoff",
  "type": "Activity",
  "number": "9.4.2",
  "title": "Prize Cutoff Percentile.",
  "body": " Prize Cutoff Percentile   Find a percentile cutoff and interpret it as a prize threshold.     Suppose a scholarship goes to the top 5% of scores in a normal model . Find the cutoff score.      Decide whether a score of 80 would earn the scholarship.      Explain in one sentence what it means for a value to be a percentile cutoff.    "
},
{
  "id": "ch9-exercises",
  "level": "1",
  "url": "ch9-exercises.html",
  "type": "Exercises",
  "number": "9.5",
  "title": "Exercises",
  "body": " Exercises   A phone call arrives uniformly at random between 2:00 and 2:40 p.m. Let be the arrival time in minutes after 2:00.   Find .  Find .  Find and explain why.     The lifetime of a certain light bulb is modeled by , where the units are hours.   Find the z-score of 1350 hours.  Write the standardized form of .  Write the standardized form of .     Exam scores are modeled by .   What does it mean to say that 85 is the 76th percentile?  Would the 90th percentile be above or below the mean? Explain.  Would a score with z-score be above or below the mean? By about how many standard deviations?    "
},
{
  "id": "ch9-ex-1",
  "level": "2",
  "url": "ch9-exercises.html#ch9-ex-1",
  "type": "Exercise",
  "number": "9.5.1",
  "title": "",
  "body": " A phone call arrives uniformly at random between 2:00 and 2:40 p.m. Let be the arrival time in minutes after 2:00.   Find .  Find .  Find and explain why.   "
},
{
  "id": "ch9-ex-2",
  "level": "2",
  "url": "ch9-exercises.html#ch9-ex-2",
  "type": "Exercise",
  "number": "9.5.2",
  "title": "",
  "body": " The lifetime of a certain light bulb is modeled by , where the units are hours.   Find the z-score of 1350 hours.  Write the standardized form of .  Write the standardized form of .   "
},
{
  "id": "ch9-ex-3",
  "level": "2",
  "url": "ch9-exercises.html#ch9-ex-3",
  "type": "Exercise",
  "number": "9.5.3",
  "title": "",
  "body": " Exam scores are modeled by .   What does it mean to say that 85 is the 76th percentile?  Would the 90th percentile be above or below the mean? Explain.  Would a score with z-score be above or below the mean? By about how many standard deviations?   "
},
{
  "id": "sec-sampling-distributions-clt",
  "level": "1",
  "url": "sec-sampling-distributions-clt.html",
  "type": "Section",
  "number": "10.1",
  "title": "Sampling Distributions and the CLT",
  "body": " Sampling Distributions and the CLT  Sampling Distributions and the CLT  Suppose a population has mean and standard deviation . If we draw a sample of size , then the sample mean data sample mean is   The variable is itself a random variable. Its distribution is called a sampling distribution inference sampling distribution .  Two facts are especially important:   These formulas follow directly from the properties of expectation and variance from . Since   linearity of expectation gives   So the sample mean is an unbiased estimate of the population mean.  For the variance, independence lets us add variances:   Because each has variance ,   Taking square roots gives   The first fact says that the sample mean is centered at the population mean. The second says that larger samples give less variation. Averaging many observations produces a more stable estimate than using just one observation.  The real breakthrough is the Central Limit Theorem inference Central Limit Theorem , usually shortened to CLT. In plain language, it says this:  If we repeatedly take independent samples from the same population, then for large the distribution of the sample means becomes approximately normal, even if the original population is not normal.  More precisely, when the observations are independent and identically distributed with mean and standard deviation , the sample mean is approximately distributed as   for large enough .  This theorem is a big deal. It explains why the normal distribution keeps showing up in statistics. Even when the raw data are skewed or irregular, the average of a reasonably large sample often behaves in a nearly normal way.  A common rule of thumb is that is often enough, though very skewed populations may need larger samples. The sample should also come from an independent process, which is usually reasonable when we sample with replacement or sample from a population much larger than the sample size.   Using the CLT for a Sample Mean  Suppose customer wait times have population mean 18 minutes and population standard deviation 6 minutes. The shape of the population distribution is not known. If we take a random sample of customers, then by the CLT the sample mean is approximately normal:   The probability that the sample mean is less than 17 minutes is therefore     A population has mean 50 and standard deviation 12. A sample of size 36 is taken.   Find the mean of .  Find the standard deviation of .  State the approximate distribution of using the CLT.     Sample Mean Sprint   See how the spread of sample means changes as the sample size grows.     A population has mean 50 and standard deviation 12. Find the mean and standard deviation of for sample sizes , , and .      Which sample size gives the most stable sample mean, and why?      If the population is strongly skewed, what does the CLT say about the shape of the sampling distribution when is large?      CLT Sketchbook   Draw the idea of the Central Limit Theorem instead of only writing formulas.     Sketch a population distribution that is strongly right-skewed. Label the sketch with a few sample values that might come from it.      Sketch what the distribution of sample means might look like for samples of size 5 and for samples of size 40.      Explain in words how the center and spread of the sampling distribution compare with the original population.     "
},
{
  "id": "sec-sampling-distributions-clt-3",
  "level": "2",
  "url": "sec-sampling-distributions-clt.html#sec-sampling-distributions-clt-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample mean data sample mean "
},
{
  "id": "sec-sampling-distributions-clt-5",
  "level": "2",
  "url": "sec-sampling-distributions-clt.html#sec-sampling-distributions-clt-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sampling distribution inference sampling distribution "
},
{
  "id": "sec-sampling-distributions-clt-20",
  "level": "2",
  "url": "sec-sampling-distributions-clt.html#sec-sampling-distributions-clt-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Central Limit Theorem inference Central Limit Theorem "
},
{
  "id": "ex-clt-wait-times",
  "level": "2",
  "url": "sec-sampling-distributions-clt.html#ex-clt-wait-times",
  "type": "Example",
  "number": "10.1.1",
  "title": "Using the CLT for a Sample Mean.",
  "body": " Using the CLT for a Sample Mean  Suppose customer wait times have population mean 18 minutes and population standard deviation 6 minutes. The shape of the population distribution is not known. If we take a random sample of customers, then by the CLT the sample mean is approximately normal:   The probability that the sample mean is less than 17 minutes is therefore   "
},
{
  "id": "ci-inline-ex-1",
  "level": "2",
  "url": "sec-sampling-distributions-clt.html#ci-inline-ex-1",
  "type": "Checkpoint",
  "number": "10.1.2",
  "title": "",
  "body": " A population has mean 50 and standard deviation 12. A sample of size 36 is taken.   Find the mean of .  Find the standard deviation of .  State the approximate distribution of using the CLT.   "
},
{
  "id": "act-ch10-sample-mean-sprint",
  "level": "2",
  "url": "sec-sampling-distributions-clt.html#act-ch10-sample-mean-sprint",
  "type": "Activity",
  "number": "10.1.1",
  "title": "Sample Mean Sprint.",
  "body": " Sample Mean Sprint   See how the spread of sample means changes as the sample size grows.     A population has mean 50 and standard deviation 12. Find the mean and standard deviation of for sample sizes , , and .      Which sample size gives the most stable sample mean, and why?      If the population is strongly skewed, what does the CLT say about the shape of the sampling distribution when is large?    "
},
{
  "id": "act-ch10-clt-sketchbook",
  "level": "2",
  "url": "sec-sampling-distributions-clt.html#act-ch10-clt-sketchbook",
  "type": "Activity",
  "number": "10.1.2",
  "title": "CLT Sketchbook.",
  "body": " CLT Sketchbook   Draw the idea of the Central Limit Theorem instead of only writing formulas.     Sketch a population distribution that is strongly right-skewed. Label the sketch with a few sample values that might come from it.      Sketch what the distribution of sample means might look like for samples of size 5 and for samples of size 40.      Explain in words how the center and spread of the sampling distribution compare with the original population.    "
},
{
  "id": "sec-confidence-intervals-mean",
  "level": "1",
  "url": "sec-confidence-intervals-mean.html",
  "type": "Section",
  "number": "10.2",
  "title": "Confidence Intervals for the Mean",
  "body": " Confidence Intervals for the Mean  A sample mean is a point estimate inference point estimate of the population mean . But a single number does not tell us how much uncertainty comes from sampling. A  confidence interval inference confidence interval adds a margin of error to the point estimate and gives a range of plausible values for , where is the confidence level inference confidence level . In informal language, we say we are confident that the resulting interval captures the true mean.  To see where the formula comes from, suppose are iid with mean and standard deviation , and suppose the standardized sample mean has a standard normal distribution (exactly when the population is normal, or approximately for large samples by the CLT):   Let . To capture the middle proportion of the standard normal curve, we leave total area outside and split it evenly between the two tails. That is, each tail has area .   The middle of the standard normal curve   A standard normal curve with the central region between negative z-alpha-over-2 and positive z-alpha-over-2 shaded and labeled C. Each tail outside that region is labeled alpha over 2.  The graphic shows the standard normal density curve centered at 0. Vertical dashed lines mark the cutoff points at negative z-alpha-over-2 and positive z-alpha-over-2. The region under the curve between these two lines is shaded and labeled C. The two unshaded tails outside the dashed lines are each labeled alpha over 2, showing that the total area outside the center is alpha.     So the corresponding probability statement is   After we collect the sample and observe , we solve that inequality for . The result is the z-interval   or, written as an interval,   In practice, is often unknown. When the sample is large, we usually replace by the sample standard deviation and still use the z critical value as an approximation. When the sample is small and the population is normal, we use a z-interval if is known, but if is unknown and we replace it by , then   In every case, the confidence interval has the form point estimate margin of error. For the population mean, that means   So the interval is centered at a sample mean, and its total width is twice the margin of error.  We summarize the confidence-interval settings for a population mean in .   Sampling distributions and confidence intervals for a mean    Setting  Statistic  Margin    , known      , unknown      , normal, known      , normal, unknown       The next four examples illustrate these four cases.   Case 1: Large Sample, Known  Suppose a sample of 36 women has mean height inches. Assume the population standard deviation is known to be 2.8 inches. A 95% confidence interval for the mean height is   So the interval is     Case 2: Large Sample, Unknown  A random sample of 64 delivery times has mean minutes and sample standard deviation minutes. Find a 95% confidence interval for the population mean.  Because the sample is large, we use the z critical value and replace by :   So the confidence interval is     Case 3: Small Sample, Population Normal, Known  Assume the population distribution is normal. A sample of size 16 has mean , and the population standard deviation is known to be . Find a 90% confidence interval for the population mean.  Because the population is normal and is known, we use a z interval:   So the confidence interval is     Case 4: Small Sample, Population Normal, Unknown  Assume the population is normal. A sample of 11 observations has sample mean and sample standard deviation . For a 95% confidence interval, we use and .  The margin of error is   So the confidence interval is    Interpreting a confidence interval takes some care. Before we collect the data, the sample mean is random, so the interval built from it is random too. In that stage, it is correct to say that the interval procedure has probability 0.95 of capturing .  After we collect the sample and get a specific value , the interval becomes a fixed interval with fixed endpoints. At that point, the true mean is either inside the interval or it is not. So a 95% confidence level does not mean there is a 95% chance that is in this one computed interval. It means that if we repeated the same sampling process many times and built an interval each time, about 95% of those intervals would capture the true mean. The parameter is fixed; the interval is what changes from sample to sample.   A sample of size 49 has mean . Assume the population standard deviation is known to be 14.   Write the formula for a 90% confidence interval for .  Find the margin of error.  Find the interval.     Confidence Interval Builder   Build a confidence interval from a sample mean and a known population standard deviation.     A sample of size 49 has mean . Assume the population standard deviation is 14. Find a 90% confidence interval for .      Find the margin of error and interpret it in context.      Explain what the confidence level means in this situation.      Interval Face-Off   Compare confidence intervals made from the same sample but with different confidence levels.     Using the same sample from the previous activity, compare the width of a 90% interval and a 95% interval.      Which interval is wider, and why does that happen?      If a student wants a narrower interval, should they ask for higher confidence or lower confidence?     "
},
{
  "id": "sec-confidence-intervals-mean-2",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#sec-confidence-intervals-mean-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "point estimate inference point estimate confidence interval inference confidence interval confidence level inference confidence level "
},
{
  "id": "fig-ci-central-area",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#fig-ci-central-area",
  "type": "Figure",
  "number": "10.2.1",
  "title": "",
  "body": " The middle of the standard normal curve   A standard normal curve with the central region between negative z-alpha-over-2 and positive z-alpha-over-2 shaded and labeled C. Each tail outside that region is labeled alpha over 2.  The graphic shows the standard normal density curve centered at 0. Vertical dashed lines mark the cutoff points at negative z-alpha-over-2 and positive z-alpha-over-2. The region under the curve between these two lines is shaded and labeled C. The two unshaded tails outside the dashed lines are each labeled alpha over 2, showing that the total area outside the center is alpha.    "
},
{
  "id": "tbl-ci-summary",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#tbl-ci-summary",
  "type": "Table",
  "number": "10.2.2",
  "title": "Sampling distributions and confidence intervals for a mean",
  "body": " Sampling distributions and confidence intervals for a mean    Setting  Statistic  Margin    , known      , unknown      , normal, known      , normal, unknown      "
},
{
  "id": "ex-z-ci-height",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#ex-z-ci-height",
  "type": "Example",
  "number": "10.2.3",
  "title": "Case 1: Large Sample, <span class=\"process-math\">\\(\\sigma\\)<\/span> Known.",
  "body": " Case 1: Large Sample, Known  Suppose a sample of 36 women has mean height inches. Assume the population standard deviation is known to be 2.8 inches. A 95% confidence interval for the mean height is   So the interval is   "
},
{
  "id": "ex-z-ci-large-unknown",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#ex-z-ci-large-unknown",
  "type": "Example",
  "number": "10.2.4",
  "title": "Case 2: Large Sample, <span class=\"process-math\">\\(\\sigma\\)<\/span> Unknown.",
  "body": " Case 2: Large Sample, Unknown  A random sample of 64 delivery times has mean minutes and sample standard deviation minutes. Find a 95% confidence interval for the population mean.  Because the sample is large, we use the z critical value and replace by :   So the confidence interval is   "
},
{
  "id": "ex-z-ci-small-known",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#ex-z-ci-small-known",
  "type": "Example",
  "number": "10.2.5",
  "title": "Case 3: Small Sample, Population Normal, <span class=\"process-math\">\\(\\sigma\\)<\/span> Known.",
  "body": " Case 3: Small Sample, Population Normal, Known  Assume the population distribution is normal. A sample of size 16 has mean , and the population standard deviation is known to be . Find a 90% confidence interval for the population mean.  Because the population is normal and is known, we use a z interval:   So the confidence interval is   "
},
{
  "id": "ex-t-ci-small-sample",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#ex-t-ci-small-sample",
  "type": "Example",
  "number": "10.2.6",
  "title": "Case 4: Small Sample, Population Normal, <span class=\"process-math\">\\(\\sigma\\)<\/span> Unknown.",
  "body": " Case 4: Small Sample, Population Normal, Unknown  Assume the population is normal. A sample of 11 observations has sample mean and sample standard deviation . For a 95% confidence interval, we use and .  The margin of error is   So the confidence interval is   "
},
{
  "id": "ci-inline-ex-2",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#ci-inline-ex-2",
  "type": "Checkpoint",
  "number": "10.2.7",
  "title": "",
  "body": " A sample of size 49 has mean . Assume the population standard deviation is known to be 14.   Write the formula for a 90% confidence interval for .  Find the margin of error.  Find the interval.   "
},
{
  "id": "act-ch10-confidence-builder",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#act-ch10-confidence-builder",
  "type": "Activity",
  "number": "10.2.1",
  "title": "Confidence Interval Builder.",
  "body": " Confidence Interval Builder   Build a confidence interval from a sample mean and a known population standard deviation.     A sample of size 49 has mean . Assume the population standard deviation is 14. Find a 90% confidence interval for .      Find the margin of error and interpret it in context.      Explain what the confidence level means in this situation.    "
},
{
  "id": "act-ch10-interval-faceoff",
  "level": "2",
  "url": "sec-confidence-intervals-mean.html#act-ch10-interval-faceoff",
  "type": "Activity",
  "number": "10.2.2",
  "title": "Interval Face-Off.",
  "body": " Interval Face-Off   Compare confidence intervals made from the same sample but with different confidence levels.     Using the same sample from the previous activity, compare the width of a 90% interval and a 95% interval.      Which interval is wider, and why does that happen?      If a student wants a narrower interval, should they ask for higher confidence or lower confidence?    "
},
{
  "id": "sec-confidence-intervals-proportion",
  "level": "1",
  "url": "sec-confidence-intervals-proportion.html",
  "type": "Section",
  "number": "10.3",
  "title": "Confidence Intervals for a Population Proportion",
  "body": " Confidence Intervals for a Population Proportion  Many statistical questions are really yes-or-no questions. What proportion of voters support a ballot measure? What proportion of products coming off an assembly line are defective? What proportion of students at a college work more than 20 hours per week? In settings like these, the parameter we want is the population proportion inference population proportion , usually written .  If we take a random sample of size and count the number of successes, say , then a natural estimate of is the sample proportion data sample proportion :   This section is built directly on the binomial model from . If each observation is a success or failure, and the success probability is , then the count of successes in independent trials has a binomial distribution:   From the binomial chapter, for large enough we can approximate this binomial count by a normal random variable with the same mean and standard deviation:   provided the expected numbers of successes and failures are both at least about 5:   Now divide everything by . Since , the sample proportion is approximately normal with mean   and standard deviation   So for large samples,   That is the key fact behind a one-proportion confidence interval. Once we standardize, we get the approximate z-statistic   Let as before. Then the middle proportion of the standard normal curve gives   Solving that inequality for suggests the interval   There is one catch: the standard deviation still contains the unknown parameter . In practice we plug in the sample proportion in its place. That gives the usual large-sample confidence interval for a population proportion:   So the margin of error for a proportion is   This method works well when the sample is random or otherwise independent, and when the sample is large enough that the observed counts of successes and failures are both at least about 5:   If sampling is done without replacement from a finite population, a common rule of thumb is that the population should be at least 10 times as large as the sample so the observations are close to independent.   A Confidence Interval for Support in a Campus Poll  A random sample of 200 students is asked whether they support a new campus tutoring center. Suppose 124 students say yes. Estimate the population proportion of all students who support the plan with 95% confidence.  Here , , so   The large-sample conditions are met because   and both numbers are much larger than 5. For 95% confidence, . The margin of error is   So the confidence interval is   So we estimate that between about 55.3% and 68.7% of all students support the tutoring center.    A Confidence Interval for a Defect Rate  A quality-control inspector checks 400 light bulbs and finds 18 defective ones. Find a 90% confidence interval for the population proportion of defective bulbs.  First compute the sample proportion:   The large-sample conditions are satisfied because   For 90% confidence, . The margin of error is   So the confidence interval is   That puts the defect rate at about 2.8% to 6.2%.   The interpretation follows the same pattern as for means. A 95% confidence interval for does not mean there is a 95% chance that the fixed population proportion is inside the one interval we already computed. It means that if we repeated the sampling process many times and built an interval each time, about 95% of those intervals would capture the true proportion.   In a random sample of 150 customers, 57 say they used a store coupon that week.   Find .  Check whether the large-sample conditions for a one-proportion z-interval are met.  Write the formula for a 95% confidence interval for .     Proportion Interval Builder   Build a confidence interval for a population proportion from a sample count.     A random sample of 120 students finds that 48 prefer digital notes to printed notes. Compute .      Check whether the conditions for a one-proportion z-interval are satisfied.      Find a 95% confidence interval for the population proportion and interpret it in context.      Can We Trust the Approximation?   Decide when the normal approximation behind a proportion interval is reasonable.     For each pair , compute and : , , and .      For which cases would a one-proportion z-interval be reasonable? Explain briefly.      Why is it a problem when the sample has very few observed successes or very few observed failures?     "
},
{
  "id": "sec-confidence-intervals-proportion-2",
  "level": "2",
  "url": "sec-confidence-intervals-proportion.html#sec-confidence-intervals-proportion-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "population proportion inference population proportion "
},
{
  "id": "sec-confidence-intervals-proportion-3",
  "level": "2",
  "url": "sec-confidence-intervals-proportion.html#sec-confidence-intervals-proportion-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample proportion data sample proportion "
},
{
  "id": "ex-ci-proportion-campus-poll",
  "level": "2",
  "url": "sec-confidence-intervals-proportion.html#ex-ci-proportion-campus-poll",
  "type": "Example",
  "number": "10.3.1",
  "title": "A Confidence Interval for Support in a Campus Poll.",
  "body": " A Confidence Interval for Support in a Campus Poll  A random sample of 200 students is asked whether they support a new campus tutoring center. Suppose 124 students say yes. Estimate the population proportion of all students who support the plan with 95% confidence.  Here , , so   The large-sample conditions are met because   and both numbers are much larger than 5. For 95% confidence, . The margin of error is   So the confidence interval is   So we estimate that between about 55.3% and 68.7% of all students support the tutoring center.  "
},
{
  "id": "ex-ci-proportion-defects",
  "level": "2",
  "url": "sec-confidence-intervals-proportion.html#ex-ci-proportion-defects",
  "type": "Example",
  "number": "10.3.2",
  "title": "A Confidence Interval for a Defect Rate.",
  "body": " A Confidence Interval for a Defect Rate  A quality-control inspector checks 400 light bulbs and finds 18 defective ones. Find a 90% confidence interval for the population proportion of defective bulbs.  First compute the sample proportion:   The large-sample conditions are satisfied because   For 90% confidence, . The margin of error is   So the confidence interval is   That puts the defect rate at about 2.8% to 6.2%.  "
},
{
  "id": "ci-inline-ex-3",
  "level": "2",
  "url": "sec-confidence-intervals-proportion.html#ci-inline-ex-3",
  "type": "Checkpoint",
  "number": "10.3.3",
  "title": "",
  "body": " In a random sample of 150 customers, 57 say they used a store coupon that week.   Find .  Check whether the large-sample conditions for a one-proportion z-interval are met.  Write the formula for a 95% confidence interval for .   "
},
{
  "id": "act-ch10-proportion-builder",
  "level": "2",
  "url": "sec-confidence-intervals-proportion.html#act-ch10-proportion-builder",
  "type": "Activity",
  "number": "10.3.1",
  "title": "Proportion Interval Builder.",
  "body": " Proportion Interval Builder   Build a confidence interval for a population proportion from a sample count.     A random sample of 120 students finds that 48 prefer digital notes to printed notes. Compute .      Check whether the conditions for a one-proportion z-interval are satisfied.      Find a 95% confidence interval for the population proportion and interpret it in context.    "
},
{
  "id": "act-ch10-approximation-check",
  "level": "2",
  "url": "sec-confidence-intervals-proportion.html#act-ch10-approximation-check",
  "type": "Activity",
  "number": "10.3.2",
  "title": "Can We Trust the Approximation?",
  "body": " Can We Trust the Approximation?   Decide when the normal approximation behind a proportion interval is reasonable.     For each pair , compute and : , , and .      For which cases would a one-proportion z-interval be reasonable? Explain briefly.      Why is it a problem when the sample has very few observed successes or very few observed failures?    "
},
{
  "id": "sec-confidence-intervals-variance",
  "level": "1",
  "url": "sec-confidence-intervals-variance.html",
  "type": "Section",
  "number": "10.4",
  "title": "Confidence Intervals for a Population Variance and Standard Deviation",
  "body": " Confidence Intervals for a Population Variance and Standard Deviation  Confidence Intervals for Variance and Standard Deviation  Sometimes the main question is about spread rather than center. A manufacturer may want to estimate how much bottle fills vary. A coach may care about the variability of race times, not just the average time. In problems like these, the parameter of interest is the population variance inference population variance  , or equivalently the population standard deviation .  From , the sample variance summaries sample variance is based on squared deviations from the sample mean. Before the data are collected, the random sample variance is   After the sample is observed, its value is written .  The reason the chi-square distribution appears is that this formula is built from squared normal quantities. Suppose is a random sample from a normal population . If we standardize each observation,   then each is standard normal. A sum of squares of independent standard normal random variables has a chi-square distribution inference chi-square distribution .  If the population mean were known, then   But in practice is usually unknown, so we replace it by the sample mean . That uses up one degree of freedom inference degrees of freedom , because once of the deviations are known, the last one is forced by the fact that they add up to 0. So   Since   the key result becomes   That one fact is what makes a confidence interval for possible.  The assumptions need to be stated carefully.   The data should come from a random sample or a similarly independent sampling process.  The observations should be independent. If sampling is done without replacement from a finite population, a common rule of thumb is that the population should be at least 10 times as large as the sample.  The population itself should be normal. This is the crucial assumption.   That last point matters more here than it did for intervals about a mean. The CLT helps sample means become approximately normal for large samples, but it does not make the chi-square interval for variance exact. For variance and standard deviation, this method is justified only when the population distribution is normal or very close to normal.  Let . Using the critical-value notation from , where leaves right-tail area for a chi-square distribution with degrees of freedom, we have   Solving that inequality for gives the confidence interval for the population variance:   If we want an interval for the population standard deviation instead, we simply take square roots of both endpoints:    An Interval for Variation in Delivery Times  Suppose delivery times on a short route are well modeled by a normal distribution. A random sample of 12 deliveries has sample standard deviation minutes. Find a 95% confidence interval for the population variance and the population standard deviation.  Here , so the degrees of freedom are . For 95% confidence, . From ,   Since , the variance interval is   Now take square roots to get an interval for the population standard deviation:   So a reasonable estimate for the route-to-route spread is that the population standard deviation is between about 2.83 and 6.79 minutes.    Why Large Sample Size Is Not the Main Issue  A researcher takes a random sample of 50 household incomes and wants a confidence interval for the population variance. Even though is not small, household incomes are usually strongly right-skewed.  So a chi-square interval for is not automatically justified. The key result depends on a normal population, not just on a large sample. For variance intervals, the shape of the population matters a lot.    Assume a population is normal. A random sample of size 16 has sample variance .   What are the degrees of freedom?  Write the formula for a 90% confidence interval for .  Write the corresponding interval for .     Variance Interval Builder   Build a confidence interval for a population variance and standard deviation from a sample standard deviation.     Suppose a normal population is sampled with and the sample standard deviation is . Find the degrees of freedom.      Using the chi-square table, find a 90% confidence interval for the population variance .      Convert the interval to a 90% confidence interval for the population standard deviation .      Can We Trust the Chi-Square Method?   Check the assumptions before using a confidence interval for variance.     A random sample of bolt lengths comes from a manufacturing process that is known to be close to normal. Is a chi-square interval for reasonable?      A random sample of 40 household incomes is strongly right-skewed. Should we be comfortable using the chi-square interval here? Explain.      Why does a large sample size help more for intervals about a mean than for intervals about a variance?     "
},
{
  "id": "sec-confidence-intervals-variance-3",
  "level": "2",
  "url": "sec-confidence-intervals-variance.html#sec-confidence-intervals-variance-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "population variance inference population variance "
},
{
  "id": "sec-confidence-intervals-variance-4",
  "level": "2",
  "url": "sec-confidence-intervals-variance.html#sec-confidence-intervals-variance-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample variance summaries sample variance "
},
{
  "id": "sec-confidence-intervals-variance-9",
  "level": "2",
  "url": "sec-confidence-intervals-variance.html#sec-confidence-intervals-variance-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chi-square distribution inference chi-square distribution "
},
{
  "id": "sec-confidence-intervals-variance-12",
  "level": "2",
  "url": "sec-confidence-intervals-variance.html#sec-confidence-intervals-variance-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degree of freedom inference degrees of freedom "
},
{
  "id": "ex-ci-variance-delivery-times",
  "level": "2",
  "url": "sec-confidence-intervals-variance.html#ex-ci-variance-delivery-times",
  "type": "Example",
  "number": "10.4.1",
  "title": "An Interval for Variation in Delivery Times.",
  "body": " An Interval for Variation in Delivery Times  Suppose delivery times on a short route are well modeled by a normal distribution. A random sample of 12 deliveries has sample standard deviation minutes. Find a 95% confidence interval for the population variance and the population standard deviation.  Here , so the degrees of freedom are . For 95% confidence, . From ,   Since , the variance interval is   Now take square roots to get an interval for the population standard deviation:   So a reasonable estimate for the route-to-route spread is that the population standard deviation is between about 2.83 and 6.79 minutes.  "
},
{
  "id": "ex-ci-variance-normality-warning",
  "level": "2",
  "url": "sec-confidence-intervals-variance.html#ex-ci-variance-normality-warning",
  "type": "Example",
  "number": "10.4.2",
  "title": "Why Large Sample Size Is Not the Main Issue.",
  "body": " Why Large Sample Size Is Not the Main Issue  A researcher takes a random sample of 50 household incomes and wants a confidence interval for the population variance. Even though is not small, household incomes are usually strongly right-skewed.  So a chi-square interval for is not automatically justified. The key result depends on a normal population, not just on a large sample. For variance intervals, the shape of the population matters a lot.  "
},
{
  "id": "ci-inline-ex-4",
  "level": "2",
  "url": "sec-confidence-intervals-variance.html#ci-inline-ex-4",
  "type": "Checkpoint",
  "number": "10.4.3",
  "title": "",
  "body": " Assume a population is normal. A random sample of size 16 has sample variance .   What are the degrees of freedom?  Write the formula for a 90% confidence interval for .  Write the corresponding interval for .   "
},
{
  "id": "act-ch10-variance-builder",
  "level": "2",
  "url": "sec-confidence-intervals-variance.html#act-ch10-variance-builder",
  "type": "Activity",
  "number": "10.4.1",
  "title": "Variance Interval Builder.",
  "body": " Variance Interval Builder   Build a confidence interval for a population variance and standard deviation from a sample standard deviation.     Suppose a normal population is sampled with and the sample standard deviation is . Find the degrees of freedom.      Using the chi-square table, find a 90% confidence interval for the population variance .      Convert the interval to a 90% confidence interval for the population standard deviation .    "
},
{
  "id": "act-ch10-variance-assumption-check",
  "level": "2",
  "url": "sec-confidence-intervals-variance.html#act-ch10-variance-assumption-check",
  "type": "Activity",
  "number": "10.4.2",
  "title": "Can We Trust the Chi-Square Method?",
  "body": " Can We Trust the Chi-Square Method?   Check the assumptions before using a confidence interval for variance.     A random sample of bolt lengths comes from a manufacturing process that is known to be close to normal. Is a chi-square interval for reasonable?      A random sample of 40 household incomes is strongly right-skewed. Should we be comfortable using the chi-square interval here? Explain.      Why does a large sample size help more for intervals about a mean than for intervals about a variance?    "
},
{
  "id": "sec-sample-size-margin-error",
  "level": "1",
  "url": "sec-sample-size-margin-error.html",
  "type": "Section",
  "number": "10.5",
  "title": "Margin of Error and Sample Size",
  "body": " Margin of Error and Sample Size  This section returns to the z-interval for a population mean. In that setting, the margin of error is   This formula shows two basic truths:   Higher confidence means a larger critical value and therefore a larger margin of error.  Larger samples make the denominator bigger and therefore shrink the margin of error.   If we want the margin of error to be at most some target value , then we solve for :   Since sample size must be a whole number, we always round up.   Finding a Required Sample Size  Suppose we want to estimate the mean height of women with 98% confidence and margin of error at most 0.5 inches. Assume .  Here , so . Therefore   We round up, so the least acceptable sample size is    This is one of the most practical formulas in the course. It tells us how much data we need before we even begin sampling.   Survey Planner   Plan a sample size before collecting data so the margin of error stays under control.     You want to estimate the mean amount of weekly screen time with 95% confidence and margin of error at most 3 hours. Assume . Find the minimum sample size.      Suppose the margin of error is cut in half. What happens to the required sample size?      In one sentence, explain why larger samples are useful when precision matters.      Budget vs Precision   Compare two sampling plans and decide which one gives the better estimate.     A campus poll can survey either 100 students or 196 students. If the same population standard deviation is used, which plan gives the smaller margin of error?      If the confidence level increases from 90% to 99%, what happens to the margin of error when the sample size stays the same?      Explain the tradeoff between wanting high confidence and wanting a small margin of error.     "
},
{
  "id": "ex-sample-size-women-height",
  "level": "2",
  "url": "sec-sample-size-margin-error.html#ex-sample-size-women-height",
  "type": "Example",
  "number": "10.5.1",
  "title": "Finding a Required Sample Size.",
  "body": " Finding a Required Sample Size  Suppose we want to estimate the mean height of women with 98% confidence and margin of error at most 0.5 inches. Assume .  Here , so . Therefore   We round up, so the least acceptable sample size is   "
},
{
  "id": "act-ch10-survey-planner",
  "level": "2",
  "url": "sec-sample-size-margin-error.html#act-ch10-survey-planner",
  "type": "Activity",
  "number": "10.5.1",
  "title": "Survey Planner.",
  "body": " Survey Planner   Plan a sample size before collecting data so the margin of error stays under control.     You want to estimate the mean amount of weekly screen time with 95% confidence and margin of error at most 3 hours. Assume . Find the minimum sample size.      Suppose the margin of error is cut in half. What happens to the required sample size?      In one sentence, explain why larger samples are useful when precision matters.    "
},
{
  "id": "act-ch10-budget-vs-precision",
  "level": "2",
  "url": "sec-sample-size-margin-error.html#act-ch10-budget-vs-precision",
  "type": "Activity",
  "number": "10.5.2",
  "title": "Budget vs Precision.",
  "body": " Budget vs Precision   Compare two sampling plans and decide which one gives the better estimate.     A campus poll can survey either 100 students or 196 students. If the same population standard deviation is used, which plan gives the smaller margin of error?      If the confidence level increases from 90% to 99%, what happens to the margin of error when the sample size stays the same?      Explain the tradeoff between wanting high confidence and wanting a small margin of error.    "
},
{
  "id": "ch10-exercises",
  "level": "1",
  "url": "ch10-exercises.html",
  "type": "Exercises",
  "number": "10.6",
  "title": "Exercises",
  "body": " Exercises   A population has mean 24 and standard deviation 9. A random sample of size 81 is taken.   Find the mean of .  Find the standard deviation of .  Use the CLT to state an approximate distribution for .     A sample of size 64 has mean . Assume the population standard deviation is known to be 8.   Find a 95% confidence interval for the population mean.  Find the margin of error.  Explain what the 95% confidence level means.     Assume the population is normal. A sample of size 16 has mean and sample standard deviation .   Write the form of the 95% t-interval for the mean.  What are the degrees of freedom?  Why is a t critical value used instead of a z critical value?     How large a sample is needed to estimate a population mean with 95% confidence, population standard deviation 10, and margin of error at most 2?    Explain how the confidence-interval formula for a population proportion comes from the normal approximation to a binomial random variable.   Start with and write its approximate normal model for large .  Use to find the approximate mean and standard deviation of .  Write the resulting z-based confidence-interval formula for .     In a random sample of 250 voters, 140 say they support a local park bond measure.   Find .  Check whether the large-sample conditions are satisfied.  Find a 95% confidence interval for the population proportion of voters who support the measure.  Interpret the interval in context.     A manufacturer samples 80 batteries and finds that 6 are defective.   Is a one-proportion z-interval appropriate here? Check the large-sample conditions.  If it is appropriate, find a 90% confidence interval for the population defect proportion.  If it is not appropriate, explain what goes wrong with the normal approximation.     Assume a normal population. A random sample of size 12 has sample standard deviation .   Find the degrees of freedom.  Find a 95% confidence interval for the population variance .  Convert the result to a 95% confidence interval for the population standard deviation .     Explain carefully why the chi-square distribution appears in a confidence interval for a population variance.   Start with a random sample from a normal population and standardize each observation.  Explain why squaring and adding leads to a chi-square distribution.  Explain why replacing by changes the degrees of freedom from to .     State the assumptions for using a chi-square confidence interval for the population variance.   Why is independence needed?  Why is normality the crucial assumption?  Why does a large sample not rescue this method in the same way the CLT helps intervals for a mean?    "
},
{
  "id": "ch10-ex-1",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-1",
  "type": "Exercise",
  "number": "10.6.1",
  "title": "",
  "body": " A population has mean 24 and standard deviation 9. A random sample of size 81 is taken.   Find the mean of .  Find the standard deviation of .  Use the CLT to state an approximate distribution for .   "
},
{
  "id": "ch10-ex-2",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-2",
  "type": "Exercise",
  "number": "10.6.2",
  "title": "",
  "body": " A sample of size 64 has mean . Assume the population standard deviation is known to be 8.   Find a 95% confidence interval for the population mean.  Find the margin of error.  Explain what the 95% confidence level means.   "
},
{
  "id": "ch10-ex-3",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-3",
  "type": "Exercise",
  "number": "10.6.3",
  "title": "",
  "body": " Assume the population is normal. A sample of size 16 has mean and sample standard deviation .   Write the form of the 95% t-interval for the mean.  What are the degrees of freedom?  Why is a t critical value used instead of a z critical value?   "
},
{
  "id": "ch10-ex-4",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-4",
  "type": "Exercise",
  "number": "10.6.4",
  "title": "",
  "body": " How large a sample is needed to estimate a population mean with 95% confidence, population standard deviation 10, and margin of error at most 2?  "
},
{
  "id": "ch10-ex-5",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-5",
  "type": "Exercise",
  "number": "10.6.5",
  "title": "",
  "body": " Explain how the confidence-interval formula for a population proportion comes from the normal approximation to a binomial random variable.   Start with and write its approximate normal model for large .  Use to find the approximate mean and standard deviation of .  Write the resulting z-based confidence-interval formula for .   "
},
{
  "id": "ch10-ex-6",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-6",
  "type": "Exercise",
  "number": "10.6.6",
  "title": "",
  "body": " In a random sample of 250 voters, 140 say they support a local park bond measure.   Find .  Check whether the large-sample conditions are satisfied.  Find a 95% confidence interval for the population proportion of voters who support the measure.  Interpret the interval in context.   "
},
{
  "id": "ch10-ex-7",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-7",
  "type": "Exercise",
  "number": "10.6.7",
  "title": "",
  "body": " A manufacturer samples 80 batteries and finds that 6 are defective.   Is a one-proportion z-interval appropriate here? Check the large-sample conditions.  If it is appropriate, find a 90% confidence interval for the population defect proportion.  If it is not appropriate, explain what goes wrong with the normal approximation.   "
},
{
  "id": "ch10-ex-8",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-8",
  "type": "Exercise",
  "number": "10.6.8",
  "title": "",
  "body": " Assume a normal population. A random sample of size 12 has sample standard deviation .   Find the degrees of freedom.  Find a 95% confidence interval for the population variance .  Convert the result to a 95% confidence interval for the population standard deviation .   "
},
{
  "id": "ch10-ex-9",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-9",
  "type": "Exercise",
  "number": "10.6.9",
  "title": "",
  "body": " Explain carefully why the chi-square distribution appears in a confidence interval for a population variance.   Start with a random sample from a normal population and standardize each observation.  Explain why squaring and adding leads to a chi-square distribution.  Explain why replacing by changes the degrees of freedom from to .   "
},
{
  "id": "ch10-ex-10",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-10",
  "type": "Exercise",
  "number": "10.6.10",
  "title": "",
  "body": " State the assumptions for using a chi-square confidence interval for the population variance.   Why is independence needed?  Why is normality the crucial assumption?  Why does a large sample not rescue this method in the same way the CLT helps intervals for a mean?   "
},
{
  "id": "sec-hypothesis-tests-basics",
  "level": "1",
  "url": "sec-hypothesis-tests-basics.html",
  "type": "Section",
  "number": "11.1",
  "title": "Null Hypotheses and P-Values",
  "body": " Null Hypotheses and P-Values  Null Hypotheses and P-Values  A hypothesis test begins with two competing statements.   The null hypothesis inference null hypothesis , written , is the claim we test against.  The alternative hypothesis inference alternative hypothesis , written , is what we will support if the data give enough evidence against .   For tests about a population mean, the null hypothesis usually has the form   The alternative can take one of three common forms:   These correspond to a left-tailed test, a right-tailed test, and a two-tailed test.  The next ingredient is the test statistic inference test statistic , a number computed from the sample that measures how far the sample result is from the null value. For one-sample tests of a mean, we use   depending on whether a z-test or t-test is appropriate.  The significance level inference significance level , written , is the cutoff we use for deciding whether the evidence is strong enough. Common choices are 0.10, 0.05, and 0.01.  One way to make the decision is by using a p-value inference p-value . The p-value is the probability, assuming is true, of getting a test statistic at least as extreme as the one observed.  The smaller the p-value, the stronger the evidence against . The decision rule is simple:   If the p-value is less than , reject .  If the p-value is at least , fail to reject .   Notice the wording. We say fail to reject , not “accept .” A nonsignificant result does not prove the null hypothesis is true; it only says the sample did not provide enough evidence against it.   Setting Up a Test  A manufacturer claims that its batteries last 22 hours on average. A buyer suspects the mean lifetime is actually lower than 22 hours. The hypotheses are   Because the alternative says “less than,” this is a left-tailed test.    Hypothesis Claim Match-Up   Translate informal claims into null and alternative hypotheses, then identify the tail of the test.     A coffee shop claims the average wait time is 5 minutes, but a customer thinks it is longer. Write and , and say whether the test is left-tailed, right-tailed, or two-tailed.      A school claims the mean math score is 70, and a teacher wants to know whether the mean has changed. Write and , and identify the tail type.      A snack company claims its bags contain 12 ounces on average, and a buyer suspects the bags are short. Write the hypotheses for that situation.      P-Value Verdict   Practice the reject-or-fail-to-reject decision using p-values and a chosen significance level.     At significance level , decide what to do with p-values 0.12, 0.03, and 0.001.      For each p-value, explain in one sentence what the decision means in plain language.      Which result gives the strongest evidence against the null hypothesis?     "
},
{
  "id": "sec-hypothesis-tests-basics-4-1-1",
  "level": "2",
  "url": "sec-hypothesis-tests-basics.html#sec-hypothesis-tests-basics-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "null hypothesis inference null hypothesis "
},
{
  "id": "sec-hypothesis-tests-basics-4-2-1",
  "level": "2",
  "url": "sec-hypothesis-tests-basics.html#sec-hypothesis-tests-basics-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "alternative hypothesis inference alternative hypothesis "
},
{
  "id": "sec-hypothesis-tests-basics-10",
  "level": "2",
  "url": "sec-hypothesis-tests-basics.html#sec-hypothesis-tests-basics-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "test statistic inference test statistic "
},
{
  "id": "sec-hypothesis-tests-basics-13",
  "level": "2",
  "url": "sec-hypothesis-tests-basics.html#sec-hypothesis-tests-basics-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "significance level inference significance level "
},
{
  "id": "sec-hypothesis-tests-basics-14",
  "level": "2",
  "url": "sec-hypothesis-tests-basics.html#sec-hypothesis-tests-basics-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "p-value inference p-value "
},
{
  "id": "ex-battery-setup",
  "level": "2",
  "url": "sec-hypothesis-tests-basics.html#ex-battery-setup",
  "type": "Example",
  "number": "11.1.1",
  "title": "Setting Up a Test.",
  "body": " Setting Up a Test  A manufacturer claims that its batteries last 22 hours on average. A buyer suspects the mean lifetime is actually lower than 22 hours. The hypotheses are   Because the alternative says “less than,” this is a left-tailed test.  "
},
{
  "id": "act-ch11-hypothesis-claims",
  "level": "2",
  "url": "sec-hypothesis-tests-basics.html#act-ch11-hypothesis-claims",
  "type": "Activity",
  "number": "11.1.1",
  "title": "Hypothesis Claim Match-Up.",
  "body": " Hypothesis Claim Match-Up   Translate informal claims into null and alternative hypotheses, then identify the tail of the test.     A coffee shop claims the average wait time is 5 minutes, but a customer thinks it is longer. Write and , and say whether the test is left-tailed, right-tailed, or two-tailed.      A school claims the mean math score is 70, and a teacher wants to know whether the mean has changed. Write and , and identify the tail type.      A snack company claims its bags contain 12 ounces on average, and a buyer suspects the bags are short. Write the hypotheses for that situation.    "
},
{
  "id": "act-ch11-pvalue-verdict",
  "level": "2",
  "url": "sec-hypothesis-tests-basics.html#act-ch11-pvalue-verdict",
  "type": "Activity",
  "number": "11.1.2",
  "title": "P-Value Verdict.",
  "body": " P-Value Verdict   Practice the reject-or-fail-to-reject decision using p-values and a chosen significance level.     At significance level , decide what to do with p-values 0.12, 0.03, and 0.001.      For each p-value, explain in one sentence what the decision means in plain language.      Which result gives the strongest evidence against the null hypothesis?    "
},
{
  "id": "sec-type1-type2-errors",
  "level": "1",
  "url": "sec-type1-type2-errors.html",
  "type": "Section",
  "number": "11.2",
  "title": "Type I and Type II Errors",
  "body": " Type I and Type II Errors  Any hypothesis test can make two different kinds of mistakes.   A Type I error inference Type I error happens when we reject even though is actually true.  A Type II error inference Type II error happens when we fail to reject even though is actually false.    Possible decisions in a hypothesis test     true  false    Reject  Type I error  Correct decision    Fail to reject  Correct decision  Type II error     The significance level is the probability of a Type I error:   That is why choosing a smaller significance level makes the test more cautious about rejecting the null hypothesis.   Reading the Errors in Context  Return to the battery example with   In context:   A Type I error means we conclude the mean battery life is less than 22 hours when in fact the true mean is really 22 hours.  A Type II error means we fail to detect a drop in battery life and keep the 22-hour claim even though the true mean is actually less than 22 hours.    The two error types pull in opposite directions. If we make smaller, Type I errors become less likely, but it usually becomes harder to reject , so Type II errors can become more likely unless we also increase the sample size.  The probability of a Type II error is often written . The quantity   is called the power inference power of a test of the test. Power is the probability that the test successfully detects a false null hypothesis.  In practice, larger samples improve power. With more data, the test statistic has a better chance to separate real effects from ordinary random variation.   A school tests whether the mean math score has increased from 70 points. The hypotheses are and .   Describe a Type I error in context.  Describe a Type II error in context.  Which error would the school want to avoid more strongly if a new program is very expensive?     Error Detective   Identify Type I and Type II errors in a few familiar settings.     A hospital uses a screening test to detect a disease. If the test says a healthy patient is positive, what type of error is that? What if the test says a sick patient is negative?      Give a Type I and a Type II error for a smoke alarm.      Give a Type I and a Type II error for a spam filter on an email account.      Which Error Hurts More?   Decide which kind of mistake is more serious in a few real-world decisions.     For a smoke alarm, which error is worse: a false alarm or missing a real fire? Explain briefly.      For a medical screening test, which error is worse in general, and why?      Why do Type I and Type II errors usually pull in opposite directions when you change the significance level?     "
},
{
  "id": "sec-type1-type2-errors-3-1-1",
  "level": "2",
  "url": "sec-type1-type2-errors.html#sec-type1-type2-errors-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Type I error inference Type I error "
},
{
  "id": "sec-type1-type2-errors-3-2-1",
  "level": "2",
  "url": "sec-type1-type2-errors.html#sec-type1-type2-errors-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Type II error inference Type II error "
},
{
  "id": "tbl-type1-type2",
  "level": "2",
  "url": "sec-type1-type2-errors.html#tbl-type1-type2",
  "type": "Table",
  "number": "11.2.1",
  "title": "Possible decisions in a hypothesis test",
  "body": " Possible decisions in a hypothesis test     true  false    Reject  Type I error  Correct decision    Fail to reject  Correct decision  Type II error    "
},
{
  "id": "ex-type-errors-batteries",
  "level": "2",
  "url": "sec-type1-type2-errors.html#ex-type-errors-batteries",
  "type": "Example",
  "number": "11.2.2",
  "title": "Reading the Errors in Context.",
  "body": " Reading the Errors in Context  Return to the battery example with   In context:   A Type I error means we conclude the mean battery life is less than 22 hours when in fact the true mean is really 22 hours.  A Type II error means we fail to detect a drop in battery life and keep the 22-hour claim even though the true mean is actually less than 22 hours.   "
},
{
  "id": "sec-type1-type2-errors-12",
  "level": "2",
  "url": "sec-type1-type2-errors.html#sec-type1-type2-errors-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power inference power of a test "
},
{
  "id": "ht-inline-ex-1",
  "level": "2",
  "url": "sec-type1-type2-errors.html#ht-inline-ex-1",
  "type": "Checkpoint",
  "number": "11.2.3",
  "title": "",
  "body": " A school tests whether the mean math score has increased from 70 points. The hypotheses are and .   Describe a Type I error in context.  Describe a Type II error in context.  Which error would the school want to avoid more strongly if a new program is very expensive?   "
},
{
  "id": "act-ch11-error-detective",
  "level": "2",
  "url": "sec-type1-type2-errors.html#act-ch11-error-detective",
  "type": "Activity",
  "number": "11.2.1",
  "title": "Error Detective.",
  "body": " Error Detective   Identify Type I and Type II errors in a few familiar settings.     A hospital uses a screening test to detect a disease. If the test says a healthy patient is positive, what type of error is that? What if the test says a sick patient is negative?      Give a Type I and a Type II error for a smoke alarm.      Give a Type I and a Type II error for a spam filter on an email account.    "
},
{
  "id": "act-ch11-which-error-hurts-more",
  "level": "2",
  "url": "sec-type1-type2-errors.html#act-ch11-which-error-hurts-more",
  "type": "Activity",
  "number": "11.2.2",
  "title": "Which Error Hurts More?",
  "body": " Which Error Hurts More?   Decide which kind of mistake is more serious in a few real-world decisions.     For a smoke alarm, which error is worse: a false alarm or missing a real fire? Explain briefly.      For a medical screening test, which error is worse in general, and why?      Why do Type I and Type II errors usually pull in opposite directions when you change the significance level?    "
},
{
  "id": "sec-one-sample-mean-tests",
  "level": "1",
  "url": "sec-one-sample-mean-tests.html",
  "type": "Section",
  "number": "11.3",
  "title": "One-Sample Tests for a Mean",
  "body": " One-Sample Tests for a Mean  For a one-sample test of a mean, the test statistic depends on the setting:   Use a z-test when the population standard deviation is known, or when the sample is large enough that using in its place is reasonable.  Use a t-test when the sample is small, the population is approximately normal, and the population standard deviation is unknown.   To see why the decision rule makes sense, it helps to focus on one concrete case first: a right-tailed z-test. Suppose we want to test   Assume the population standard deviation is known, so the test statistic is   If is true, then the sample mean is centered at , so   That tells us what ordinary sampling variation looks like when the null hypothesis is true. Values of near 0 are routine. Moderately positive values can happen by chance. But very large positive values are rare under .  This is why a right-tailed test rejects only for large positive statistics. If the alternative says , then evidence against should come from a sample mean that is unusually high, not from one that is low or merely a little above . The word “large” here means large relative to the null distribution, or in more practical language, many standard errors above .  At significance level , we agree in advance to reject only when the observed statistic lands in the most extreme right-tail area of the null distribution. That cutoff is the critical value inference critical value  , defined by   So the rejection rule for a right-tailed z-test is   This rule is sensible for two reasons. First, it rejects only when the sample mean is unusually large under . Second, if really is true, the probability of rejecting is exactly the chosen significance level . In other words, the rule controls the Type I error rate.   The rejection region for a right-tailed z-test   A standard normal curve with a dashed vertical line at z-alpha and the area to the right shaded to show the rejection region of size alpha.  The graphic shows the standard normal density curve centered at 0. A dashed vertical line marks the cutoff z-alpha to the right of the center. The entire area under the curve to the right of that cutoff is shaded and labeled alpha. This shaded right tail is the rejection region for a right-tailed z-test at significance level alpha.      Why the Critical-Value and P-Value Rules Agree  Suppose a school wants to know whether the mean weekly study time is greater than 40 hours. Assume the population standard deviation is known to be 8 hours, and a random sample of students gives sample mean . We test   at significance level .  If is true, then   The observed test statistic is   Using the critical-value method, the right-tailed cutoff is . Since , the observed statistic lies in the rejection region shown in , so we reject .  Now look at the same decision through the p-value method. The p-value inference p-value is the probability, assuming is true, of getting a test statistic at least as large as the one observed:   This means that if the true mean really were 40, then a sample mean this high or higher would occur only about 2.28% of the time. Since , the sample is too unusual under , so we again reject .    The p-value is the tail area beyond the observed statistic   A standard normal curve with dashed lines at z-alpha and at a larger observed value z-obs. The tail beyond z-alpha is lightly shaded for alpha, and the smaller tail beyond z-obs is darkly shaded for the p-value.  The graphic shows the standard normal density curve centered at 0. A dashed line marks z-alpha to the right of the center and a second dashed line farther right marks the observed statistic z-obs. The tail to the right of z-alpha is shaded lightly and represents alpha. The smaller tail to the right of z-obs is shaded more darkly and represents the p-value. Because the darker area is contained inside the lighter area, the picture shows that p-value less than alpha exactly when z-obs is beyond z-alpha.     explains why the p-value method says the same thing as the critical-value method. In a right-tailed z-test, if the observed statistic is , then   The farther to the right is, the smaller this tail area becomes. Therefore, for a right-tailed test,   So the two rules are really the same comparison written in two different ways:   The critical-value method compares the observed statistic with a cutoff chosen in advance.  The p-value method compares the observed tail area with the significance level .   Both methods ask the same question: if were true, would this sample result be so far out in the right tail that it should count as unusually strong evidence for ?   A Left-Tailed Test for Battery Life  A sample of 50 batteries has mean lifetime hours and sample standard deviation hours. Test   at significance level .  Because the sample is large, we use the z statistic   The p-value is   Since , we reject . At the 10% significance level, the sample gives enough evidence to conclude that the mean battery life is less than 22 hours.    A Two-Tailed T-Test  Ten participants estimate a target distance that is actually 2.5 feet. The sample results have mean and sample standard deviation . We test   at the 5% significance level.  Because the sample is small and is unknown, we use a t-test with :   For a two-tailed test with and , the critical values are about . Since falls beyond the left critical value, we reject . The data suggest that the true mean estimate differs from 2.5 feet.   Whether we use a critical-value method or a p-value method, the logic is always the same: compare the observed statistic with what the null hypothesis predicts, then decide whether the result is too extreme to be explained by ordinary sampling variation alone.   Consider a right-tailed z-test with significance level .   If the observed statistic is , is it in the rejection region?  Without computing an exact p-value, explain whether the p-value is greater than or less than 0.05.  What decision should be made about ?     Run the Test   Carry out a one-sample mean test from start to finish.     A sample of 64 students has mean study time minutes. Assume the population standard deviation is known to be 8 minutes. Test against .      Compute the test statistic and p-value.      At , decide whether to reject and write the conclusion in context.      Test Result Translator   Turn a test output into a plain-language conclusion.     A test reports at significance level . What decision should be made?      Write a one-sentence conclusion in context for a result like this.      Explain why a p-value of 0.018 is considered statistically significant at the 5% level.     "
},
{
  "id": "sec-one-sample-mean-tests-12",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#sec-one-sample-mean-tests-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critical value inference critical value "
},
{
  "id": "fig-right-tailed-z-critical-region",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#fig-right-tailed-z-critical-region",
  "type": "Figure",
  "number": "11.3.1",
  "title": "",
  "body": " The rejection region for a right-tailed z-test   A standard normal curve with a dashed vertical line at z-alpha and the area to the right shaded to show the rejection region of size alpha.  The graphic shows the standard normal density curve centered at 0. A dashed vertical line marks the cutoff z-alpha to the right of the center. The entire area under the curve to the right of that cutoff is shaded and labeled alpha. This shaded right tail is the rejection region for a right-tailed z-test at significance level alpha.    "
},
{
  "id": "ex-right-tailed-z-test-logic",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#ex-right-tailed-z-test-logic",
  "type": "Example",
  "number": "11.3.2",
  "title": "Why the Critical-Value and P-Value Rules Agree.",
  "body": " Why the Critical-Value and P-Value Rules Agree  Suppose a school wants to know whether the mean weekly study time is greater than 40 hours. Assume the population standard deviation is known to be 8 hours, and a random sample of students gives sample mean . We test   at significance level .  If is true, then   The observed test statistic is   Using the critical-value method, the right-tailed cutoff is . Since , the observed statistic lies in the rejection region shown in , so we reject .  Now look at the same decision through the p-value method. The p-value inference p-value is the probability, assuming is true, of getting a test statistic at least as large as the one observed:   This means that if the true mean really were 40, then a sample mean this high or higher would occur only about 2.28% of the time. Since , the sample is too unusual under , so we again reject .  "
},
{
  "id": "fig-right-tailed-z-pvalue",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#fig-right-tailed-z-pvalue",
  "type": "Figure",
  "number": "11.3.3",
  "title": "",
  "body": " The p-value is the tail area beyond the observed statistic   A standard normal curve with dashed lines at z-alpha and at a larger observed value z-obs. The tail beyond z-alpha is lightly shaded for alpha, and the smaller tail beyond z-obs is darkly shaded for the p-value.  The graphic shows the standard normal density curve centered at 0. A dashed line marks z-alpha to the right of the center and a second dashed line farther right marks the observed statistic z-obs. The tail to the right of z-alpha is shaded lightly and represents alpha. The smaller tail to the right of z-obs is shaded more darkly and represents the p-value. Because the darker area is contained inside the lighter area, the picture shows that p-value less than alpha exactly when z-obs is beyond z-alpha.    "
},
{
  "id": "ex-battery-test",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#ex-battery-test",
  "type": "Example",
  "number": "11.3.4",
  "title": "A Left-Tailed Test for Battery Life.",
  "body": " A Left-Tailed Test for Battery Life  A sample of 50 batteries has mean lifetime hours and sample standard deviation hours. Test   at significance level .  Because the sample is large, we use the z statistic   The p-value is   Since , we reject . At the 10% significance level, the sample gives enough evidence to conclude that the mean battery life is less than 22 hours.  "
},
{
  "id": "ex-distance-t-test",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#ex-distance-t-test",
  "type": "Example",
  "number": "11.3.5",
  "title": "A Two-Tailed T-Test.",
  "body": " A Two-Tailed T-Test  Ten participants estimate a target distance that is actually 2.5 feet. The sample results have mean and sample standard deviation . We test   at the 5% significance level.  Because the sample is small and is unknown, we use a t-test with :   For a two-tailed test with and , the critical values are about . Since falls beyond the left critical value, we reject . The data suggest that the true mean estimate differs from 2.5 feet.  "
},
{
  "id": "ht-inline-ex-2",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#ht-inline-ex-2",
  "type": "Checkpoint",
  "number": "11.3.6",
  "title": "",
  "body": " Consider a right-tailed z-test with significance level .   If the observed statistic is , is it in the rejection region?  Without computing an exact p-value, explain whether the p-value is greater than or less than 0.05.  What decision should be made about ?   "
},
{
  "id": "act-ch11-run-the-test",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#act-ch11-run-the-test",
  "type": "Activity",
  "number": "11.3.1",
  "title": "Run the Test.",
  "body": " Run the Test   Carry out a one-sample mean test from start to finish.     A sample of 64 students has mean study time minutes. Assume the population standard deviation is known to be 8 minutes. Test against .      Compute the test statistic and p-value.      At , decide whether to reject and write the conclusion in context.    "
},
{
  "id": "act-ch11-test-translation",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#act-ch11-test-translation",
  "type": "Activity",
  "number": "11.3.2",
  "title": "Test Result Translator.",
  "body": " Test Result Translator   Turn a test output into a plain-language conclusion.     A test reports at significance level . What decision should be made?      Write a one-sentence conclusion in context for a result like this.      Explain why a p-value of 0.018 is considered statistically significant at the 5% level.    "
},
{
  "id": "sec-two-sample-mean-tests",
  "level": "1",
  "url": "sec-two-sample-mean-tests.html",
  "type": "Section",
  "number": "11.4",
  "title": "Two-Sample Tests for the Difference of Means",
  "body": " Two-Sample Tests for the Difference of Means   Many questions compare two population means rather than one. For example, we might compare the mean exam score for two teaching methods, the mean wait time at two clinics, or the mean amount spent by two groups of customers.  Let and be the two population means. The parameter we care about is the difference of means inference difference of means   The natural estimate of this difference is   So a typical null hypothesis is   which says the two population means are equal. The alternative can be left-tailed, right-tailed, or two-tailed:     Large Samples: A Two-Sample Z-Test  To see where the test statistic comes from, start with the sampling distributions of the two sample means. For large samples, the CLT gives   approximately. Here the second input in is the standard deviation, so the variances are and .  Now use two facts from earlier chapters. First, sums and differences of independent normal random variables are normal. Second, from , expectation is linear and variances add for independent random variables. Therefore the difference   is approximately normal. Its mean is   Because the two samples are independent, the variance is   So for large independent samples,   approximately. This is the key reason the standard error for a difference of sample means is   In practice, the population standard deviations and are usually unknown. For large samples, we estimate them with and . That gives the large-sample two-sample z-test inference two-sample z-test statistic   where is the difference claimed by the null hypothesis. For the common null hypothesis , this becomes    Pieces of a large-sample two-sample mean test    Quantity  Meaning     observed difference between sample means     difference claimed by     estimated standard error of the difference     number of estimated standard errors from the null value     As usual, the z statistic tells us how far the observed result is from the null value, measured in standard errors. A large positive z-value supports an alternative such as . A large negative z-value supports an alternative such as . Values far from 0 in either direction support a two-tailed alternative.  The main conditions are that the two samples are random or otherwise representative, the two samples are independent of each other, and both sample sizes are large enough for the CLT to make the sample means approximately normal. A common rule of thumb is that both and should be at least 30, though strongly skewed populations may require larger samples.   Comparing Two Teaching Methods  A department compares exam scores from two large independent classes. Method 1 has , , and . Method 2 has , , and . Test whether Method 1 has the higher mean score:   The estimated standard error is   The observed difference is , so   For a right-tailed test, the p-value is   At the 5% significance level, , so we reject . The sample gives evidence that Method 1 has the higher population mean exam score.    Two independent large samples give , , , and , , .   Compute the estimated standard error of .  For , compute the z statistic.  For , decide whether the result is significant at .      Small Samples: A Two-Sample T-Test  When one or both samples are small, the same basic comparison is still natural:   So the numerator stays   The standard error idea also stays the same. The spread of comes from the spread of both sample means, so we still use   The difference is the reference distribution. With large samples, replacing and by and barely changes the shape, so a standard normal model works well. With small samples, that extra uncertainty matters more. The test statistic   is compared with a t distribution instead of a standard normal distribution.  There is one complication: this statistic does not usually have a t distribution with a simple degree of freedom like . Because the denominator uses two separate sample variances, the degrees of freedom are estimated. A common choice is the Welch approximation:   This formula looks unpleasant, but its purpose is reasonable: it adjusts the t curve for the fact that two sample standard deviations are being estimated, possibly from samples of different sizes and different spreads. In practice, technology usually computes the degrees of freedom. The important idea is that small samples need a t reference curve because the estimated standard error is less stable.  This method is often called Welch's two-sample t-test inference Welch's two-sample t-test . It is a good default because it does not require us to assume the two population variances are equal.  The conditions are stricter than in the large-sample case. The samples should be random or otherwise representative, the two samples should be independent of each other, and each population distribution should be approximately normal or at least not strongly skewed with serious outliers. For very small samples, the normality condition matters a lot.   Comparing Two Small Samples  A tutor compares quiz scores from two small independent groups. Group 1 has , , and . Group 2 has , , and . Test whether the first group has the higher population mean score:   The estimated standard error is   The test statistic is   Using the Welch formula gives about . For a right-tailed test, technology gives   At the 5% significance level, this is just small enough to reject . The sample gives some evidence that the first group has the higher population mean score, assuming the small-sample conditions are reasonable.    Two independent small samples give , , , and , , .   Compute the estimated standard error of .  For , compute the t statistic.  Why should this statistic be compared with a t distribution rather than a standard normal distribution?      Choosing a Two-Sample Mean Test   Two Groups, One Difference   Practice setting up a two-sample test before doing calculations.     A counselor compares mean weekly study hours for students who use tutoring and students who do not. Identify , , and the parameter .      Write null and alternative hypotheses for testing whether the tutoring group has a higher mean study time.      List the conditions you would check before deciding whether a large-sample z-test or a small-sample t-test is appropriate.      "
},
{
  "id": "sec-two-sample-mean-tests-2-2",
  "level": "2",
  "url": "sec-two-sample-mean-tests.html#sec-two-sample-mean-tests-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "difference of means inference difference of means "
},
{
  "id": "subsec-two-sample-large-samples-15",
  "level": "2",
  "url": "sec-two-sample-mean-tests.html#subsec-two-sample-large-samples-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "two-sample z-test inference two-sample z-test "
},
{
  "id": "tbl-two-sample-mean-test-pieces",
  "level": "2",
  "url": "sec-two-sample-mean-tests.html#tbl-two-sample-mean-test-pieces",
  "type": "Table",
  "number": "11.4.1",
  "title": "Pieces of a large-sample two-sample mean test",
  "body": " Pieces of a large-sample two-sample mean test    Quantity  Meaning     observed difference between sample means     difference claimed by     estimated standard error of the difference     number of estimated standard errors from the null value    "
},
{
  "id": "ex-two-sample-mean-test-teaching",
  "level": "2",
  "url": "sec-two-sample-mean-tests.html#ex-two-sample-mean-test-teaching",
  "type": "Example",
  "number": "11.4.2",
  "title": "Comparing Two Teaching Methods.",
  "body": " Comparing Two Teaching Methods  A department compares exam scores from two large independent classes. Method 1 has , , and . Method 2 has , , and . Test whether Method 1 has the higher mean score:   The estimated standard error is   The observed difference is , so   For a right-tailed test, the p-value is   At the 5% significance level, , so we reject . The sample gives evidence that Method 1 has the higher population mean exam score.  "
},
{
  "id": "ht-inline-ex-two-sample-means",
  "level": "2",
  "url": "sec-two-sample-mean-tests.html#ht-inline-ex-two-sample-means",
  "type": "Checkpoint",
  "number": "11.4.3",
  "title": "",
  "body": " Two independent large samples give , , , and , , .   Compute the estimated standard error of .  For , compute the z statistic.  For , decide whether the result is significant at .   "
},
{
  "id": "subsec-two-sample-small-samples-14",
  "level": "2",
  "url": "sec-two-sample-mean-tests.html#subsec-two-sample-small-samples-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Welch's two-sample t-test inference Welch's two-sample t-test "
},
{
  "id": "ex-two-sample-small-t-test",
  "level": "2",
  "url": "sec-two-sample-mean-tests.html#ex-two-sample-small-t-test",
  "type": "Example",
  "number": "11.4.4",
  "title": "Comparing Two Small Samples.",
  "body": " Comparing Two Small Samples  A tutor compares quiz scores from two small independent groups. Group 1 has , , and . Group 2 has , , and . Test whether the first group has the higher population mean score:   The estimated standard error is   The test statistic is   Using the Welch formula gives about . For a right-tailed test, technology gives   At the 5% significance level, this is just small enough to reject . The sample gives some evidence that the first group has the higher population mean score, assuming the small-sample conditions are reasonable.  "
},
{
  "id": "ht-inline-ex-two-sample-small-t",
  "level": "2",
  "url": "sec-two-sample-mean-tests.html#ht-inline-ex-two-sample-small-t",
  "type": "Checkpoint",
  "number": "11.4.5",
  "title": "",
  "body": " Two independent small samples give , , , and , , .   Compute the estimated standard error of .  For , compute the t statistic.  Why should this statistic be compared with a t distribution rather than a standard normal distribution?   "
},
{
  "id": "act-ch11-two-sample-mean-setup",
  "level": "2",
  "url": "sec-two-sample-mean-tests.html#act-ch11-two-sample-mean-setup",
  "type": "Activity",
  "number": "11.4.1",
  "title": "Two Groups, One Difference.",
  "body": " Two Groups, One Difference   Practice setting up a two-sample test before doing calculations.     A counselor compares mean weekly study hours for students who use tutoring and students who do not. Identify , , and the parameter .      Write null and alternative hypotheses for testing whether the tutoring group has a higher mean study time.      List the conditions you would check before deciding whether a large-sample z-test or a small-sample t-test is appropriate.    "
},
{
  "id": "sec-paired-sample-mean-tests",
  "level": "1",
  "url": "sec-paired-sample-mean-tests.html",
  "type": "Section",
  "number": "11.5",
  "title": "Paired-Sample Tests for a Mean Difference",
  "body": " Paired-Sample Tests for a Mean Difference   Sometimes two measurements are linked before the data are collected. A person may be measured before and after a treatment, a student may take two versions of a test, or two similar subjects may be matched into a pair. In cases like these, the observations are paired data inference paired data , and treating the two columns as independent samples would throw away useful information.  The fix is simple: subtract within each pair first. If the paired observations are   define the individual differences   Now the parameter is the population mean difference . The usual null hypothesis is   which says there is no average difference between the two paired measurements. More generally, we may test .    Large Samples: A Z-Test on Differences  Once we form the differences, this is just a one-sample problem. The sample mean of the differences is   and the sample standard deviation of the differences is . For large , the CLT says that is approximately normal with mean and standard deviation . Since is usually unknown, we estimate it with .  That gives the large-sample paired z statistic   For the common null hypothesis , this becomes   This formula has the same shape as every other test statistic in this chapter: observed estimate minus null value, divided by its estimated standard error. The only new step is that the observed estimate is the mean of the within-pair differences, not the difference between two independent sample means.   A Large-Sample Paired Test  A transit planner records commute times for 40 riders before and after a route change. For each rider, let , so positive differences mean the commute became shorter. The sample has minutes and minutes. Test whether the route change reduced average commute time:   Because the sample of differences is large, we use   The right-tailed p-value is . At the 5% significance level, we reject . The paired data give evidence that the route change reduced the mean commute time.    A large paired sample has , , and . Test against .   Compute the estimated standard error of .  Compute the z statistic.  State whether the result is significant at .      Small Samples: A Paired T-Test  For small paired samples, we still subtract within each pair and test the mean of the differences. The statistic is   For , this is   The reason for the t distribution is the same as in a one-sample t-test. With a small sample, is a noisy estimate of the true standard deviation of the differences, so the standardized statistic has heavier tails than the standard normal curve. Since there are differences, the degrees of freedom are   This is called a paired-sample t-test inference paired-sample t-test . It is not a two-sample t-test. After forming the differences, we have one sample: .  The conditions are that the pairs are randomly selected or otherwise representative, the pairs are independent of each other, and the distribution of differences is approximately normal. For larger samples, the CLT makes the normality condition less strict. For small samples, strong skewness or serious outliers in the differences can make the paired t-test unreliable.   A Small-Sample Paired T-Test  A class records systolic blood pressure for 10 volunteers before and after a relaxation exercise. Let , so positive differences mean blood pressure decreased. The differences have and . Test whether the exercise lowers the mean blood pressure:   The test statistic is   There are degrees of freedom. For a right-tailed test, technology gives a p-value of about . At the 5% significance level, we reject . The sample gives evidence that the exercise lowers mean systolic blood pressure, assuming the differences are reasonably close to normal.    For a small paired study, the differences have , , and .   Compute the paired t statistic for .  Find the degrees of freedom.  If the alternative is , explain what a negative t statistic means in context.      Paired or Independent?  The choice between a paired test and an independent two-sample test is not about sample size. It is about how the data were collected. If each observation in one group is naturally linked to one observation in the other group, use the paired differences. If the two groups are separate and unrelated, use an independent two-sample test.   Paired or Independent?   Decide whether a study should use paired differences or two independent samples.     Each student takes a quiz before and after a review session. Should this be treated as paired or independent? Explain.      One class uses online homework and another class uses paper homework. The students are different people. Should this be treated as paired or independent? Explain.      For the paired case, define a useful difference and write the hypotheses for testing whether the second measurement is higher on average.      "
},
{
  "id": "sec-paired-sample-mean-tests-2-1",
  "level": "2",
  "url": "sec-paired-sample-mean-tests.html#sec-paired-sample-mean-tests-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paired data inference paired data "
},
{
  "id": "ex-paired-large-sample-commute",
  "level": "2",
  "url": "sec-paired-sample-mean-tests.html#ex-paired-large-sample-commute",
  "type": "Example",
  "number": "11.5.1",
  "title": "A Large-Sample Paired Test.",
  "body": " A Large-Sample Paired Test  A transit planner records commute times for 40 riders before and after a route change. For each rider, let , so positive differences mean the commute became shorter. The sample has minutes and minutes. Test whether the route change reduced average commute time:   Because the sample of differences is large, we use   The right-tailed p-value is . At the 5% significance level, we reject . The paired data give evidence that the route change reduced the mean commute time.  "
},
{
  "id": "ht-inline-ex-paired-large",
  "level": "2",
  "url": "sec-paired-sample-mean-tests.html#ht-inline-ex-paired-large",
  "type": "Checkpoint",
  "number": "11.5.2",
  "title": "",
  "body": " A large paired sample has , , and . Test against .   Compute the estimated standard error of .  Compute the z statistic.  State whether the result is significant at .   "
},
{
  "id": "subsec-paired-small-samples-8",
  "level": "2",
  "url": "sec-paired-sample-mean-tests.html#subsec-paired-small-samples-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paired-sample t-test inference paired-sample t-test "
},
{
  "id": "ex-paired-small-sample-blood-pressure",
  "level": "2",
  "url": "sec-paired-sample-mean-tests.html#ex-paired-small-sample-blood-pressure",
  "type": "Example",
  "number": "11.5.3",
  "title": "A Small-Sample Paired T-Test.",
  "body": " A Small-Sample Paired T-Test  A class records systolic blood pressure for 10 volunteers before and after a relaxation exercise. Let , so positive differences mean blood pressure decreased. The differences have and . Test whether the exercise lowers the mean blood pressure:   The test statistic is   There are degrees of freedom. For a right-tailed test, technology gives a p-value of about . At the 5% significance level, we reject . The sample gives evidence that the exercise lowers mean systolic blood pressure, assuming the differences are reasonably close to normal.  "
},
{
  "id": "ht-inline-ex-paired-small",
  "level": "2",
  "url": "sec-paired-sample-mean-tests.html#ht-inline-ex-paired-small",
  "type": "Checkpoint",
  "number": "11.5.4",
  "title": "",
  "body": " For a small paired study, the differences have , , and .   Compute the paired t statistic for .  Find the degrees of freedom.  If the alternative is , explain what a negative t statistic means in context.   "
},
{
  "id": "act-ch11-paired-or-independent",
  "level": "2",
  "url": "sec-paired-sample-mean-tests.html#act-ch11-paired-or-independent",
  "type": "Activity",
  "number": "11.5.1",
  "title": "Paired or Independent?",
  "body": " Paired or Independent?   Decide whether a study should use paired differences or two independent samples.     Each student takes a quiz before and after a review session. Should this be treated as paired or independent? Explain.      One class uses online homework and another class uses paper homework. The students are different people. Should this be treated as paired or independent? Explain.      For the paired case, define a useful difference and write the hypotheses for testing whether the second measurement is higher on average.    "
},
{
  "id": "sec-one-proportion-tests",
  "level": "1",
  "url": "sec-one-proportion-tests.html",
  "type": "Section",
  "number": "11.6",
  "title": "Tests for a Population Proportion",
  "body": " Tests for a Population Proportion  This section is the testing counterpart to . The setup is the same: each observation is a success or failure, the population proportion of success is , and the sample proportion is .  The normal model behind proportion tests comes from . If , then for large enough , the count is approximately normal. Dividing by gives an approximate normal model for .  To test a claim about a population proportion, we begin with hypotheses such as   Under the null hypothesis, the sample proportion is approximately normal with mean and standard deviation   provided the expected counts under are both at least about 5:   That leads to the one-proportion z-test inference one-proportion z-test statistic   This looks a lot like the z-interval from , but there is an important difference. In a confidence interval, the unknown proportion is replaced by in the standard error. In a hypothesis test, the null hypothesis tells us exactly which value to use, so the standard error is built from .  Once the z statistic is computed, the rest is familiar:   For , use the left-tail p-value .  For , use the right-tail p-value .  For , use the two-tail p-value .   As before, reject when the p-value is less than the chosen significance level .   Testing a Claimed Defect Rate  A manufacturer claims that at most 4% of its light bulbs are defective. A quality-control inspector checks 250 bulbs and finds 18 defectives. Is there evidence at the 5% significance level that the true defect rate is higher than 4%?  Let be the population proportion of defective bulbs. Then   The sample proportion is   The large-sample conditions under the null are satisfied because   So the test statistic is   Because this is a right-tailed test, the p-value is   Since , we reject . The sample gives strong evidence that the defect rate is greater than 4%.    Testing a Claimed Support Level  A college newspaper reports that 60% of students support a new parking plan. A random sample of 200 students finds that 108 support the plan. Test the newspaper’s claim at the 5% significance level.  Let be the true proportion of all students who support the plan. Since we want to know whether the reported value is off in either direction, we test   The sample proportion is   The null-model counts are   so the normal approximation is reasonable. The test statistic is   For a two-tailed test, the p-value is   Since , we fail to reject . At the 5% level, the sample does not give enough evidence to conclude that the true support level differs from 60%.   The connection with confidence intervals is worth noticing. If a hypothesized value sits far outside a confidence interval for , then it is also likely to be rejected by a hypothesis test at a matching significance level. So intervals and tests are two ways of looking at the same sample evidence.   A random sample of 160 customers finds that 68 used a self-checkout lane. Test against at the 5% significance level.   Compute the sample proportion.  Check the large-sample conditions under the null hypothesis.  Find the z statistic and state the conclusion.     Run a Proportion Test   Carry out a one-proportion z-test from the claim to the final conclusion.     A gym says that 60% of its members attend at least three times per week. In a random sample of 150 members, 99 say they do. Test against .      Compute , check the null-model conditions, and find the z statistic.      At , decide whether to reject and write the conclusion in context.      Connect the Test and the Interval   Compare the logic of a one-proportion test with the matching confidence interval.     Return to the campus sample with and . Use the interval method from to build a 95% confidence interval for .      Does the claimed value fall inside that interval?      Explain how that interval result matches the hypothesis-test conclusion from .     "
},
{
  "id": "sec-one-proportion-tests-10",
  "level": "2",
  "url": "sec-one-proportion-tests.html#sec-one-proportion-tests-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-proportion z-test inference one-proportion z-test "
},
{
  "id": "ex-one-proportion-defect-test",
  "level": "2",
  "url": "sec-one-proportion-tests.html#ex-one-proportion-defect-test",
  "type": "Example",
  "number": "11.6.1",
  "title": "Testing a Claimed Defect Rate.",
  "body": " Testing a Claimed Defect Rate  A manufacturer claims that at most 4% of its light bulbs are defective. A quality-control inspector checks 250 bulbs and finds 18 defectives. Is there evidence at the 5% significance level that the true defect rate is higher than 4%?  Let be the population proportion of defective bulbs. Then   The sample proportion is   The large-sample conditions under the null are satisfied because   So the test statistic is   Because this is a right-tailed test, the p-value is   Since , we reject . The sample gives strong evidence that the defect rate is greater than 4%.  "
},
{
  "id": "ex-one-proportion-campus-plan",
  "level": "2",
  "url": "sec-one-proportion-tests.html#ex-one-proportion-campus-plan",
  "type": "Example",
  "number": "11.6.2",
  "title": "Testing a Claimed Support Level.",
  "body": " Testing a Claimed Support Level  A college newspaper reports that 60% of students support a new parking plan. A random sample of 200 students finds that 108 support the plan. Test the newspaper’s claim at the 5% significance level.  Let be the true proportion of all students who support the plan. Since we want to know whether the reported value is off in either direction, we test   The sample proportion is   The null-model counts are   so the normal approximation is reasonable. The test statistic is   For a two-tailed test, the p-value is   Since , we fail to reject . At the 5% level, the sample does not give enough evidence to conclude that the true support level differs from 60%.  "
},
{
  "id": "ht-inline-ex-3",
  "level": "2",
  "url": "sec-one-proportion-tests.html#ht-inline-ex-3",
  "type": "Checkpoint",
  "number": "11.6.3",
  "title": "",
  "body": " A random sample of 160 customers finds that 68 used a self-checkout lane. Test against at the 5% significance level.   Compute the sample proportion.  Check the large-sample conditions under the null hypothesis.  Find the z statistic and state the conclusion.   "
},
{
  "id": "act-ch11-proportion-test-builder",
  "level": "2",
  "url": "sec-one-proportion-tests.html#act-ch11-proportion-test-builder",
  "type": "Activity",
  "number": "11.6.1",
  "title": "Run a Proportion Test.",
  "body": " Run a Proportion Test   Carry out a one-proportion z-test from the claim to the final conclusion.     A gym says that 60% of its members attend at least three times per week. In a random sample of 150 members, 99 say they do. Test against .      Compute , check the null-model conditions, and find the z statistic.      At , decide whether to reject and write the conclusion in context.    "
},
{
  "id": "act-ch11-test-and-interval-link",
  "level": "2",
  "url": "sec-one-proportion-tests.html#act-ch11-test-and-interval-link",
  "type": "Activity",
  "number": "11.6.2",
  "title": "Connect the Test and the Interval.",
  "body": " Connect the Test and the Interval   Compare the logic of a one-proportion test with the matching confidence interval.     Return to the campus sample with and . Use the interval method from to build a 95% confidence interval for .      Does the claimed value fall inside that interval?      Explain how that interval result matches the hypothesis-test conclusion from .    "
},
{
  "id": "sec-one-variance-tests",
  "level": "1",
  "url": "sec-one-variance-tests.html",
  "type": "Section",
  "number": "11.7",
  "title": "Tests for a Population Variance and Standard Deviation",
  "body": " Tests for a Population Variance and Standard Deviation  Tests for Variance and Standard Deviation  This section is the testing counterpart to . The goal is to decide whether the sample spread gives enough evidence against a claimed value of the population variance or the population standard deviation .  If a claim is written in terms of standard deviation, we can square both sides and test variance instead. So   The alternative can again be left-tailed, right-tailed, or two-tailed:   These tests require careful assumptions.   The data should come from a random sample or a similarly independent process.  The observations should be independent.  The population should be normal. This is the crucial assumption.   That last condition matters much more here than it does for tests about a mean. A large sample by itself does not justify the chi-square test for variance. The method depends on the population distribution being normal, not just on the sample size being large.  From , if is true and the population is normal, then   This gives the chi-square test for a population variance inference chi-square test for variance . The interpretation is straightforward:   If the sample variance is much larger than the null value , then the observed chi-square statistic will be large.  If the sample variance is much smaller than the null value , then the observed chi-square statistic will be small.   So the tail of the test matches the direction of the alternative.  Let when is true, and let be the observed test statistic.   For , use the right-tail p-value .  For , use the left-tail p-value .  For , reject at significance level when or . Because the chi-square distribution is not symmetric, technology is often the easiest way to find a two-sided p-value.    Testing Whether Delivery Times Have Become More Variable  Suppose delivery times on a short route are well modeled by a normal distribution. A company claims the population standard deviation is 2 minutes. A random sample of 16 deliveries gives sample standard deviation minutes. Test at the 5% significance level whether the true standard deviation is greater than 2 minutes.  Let be the population standard deviation of delivery times. Then   Equivalently, we are testing against . Because the population is assumed normal, we use the chi-square statistic with :   If is true, then . Since this is a right-tailed test, the p-value is   Because , we reject . The sample gives strong evidence that delivery times vary more than the claimed 2 minutes.    Testing Whether a Machine's Variation Has Changed  Assume bottle fill amounts are normally distributed. A machine is supposed to have population standard deviation 1.2 ounces. A random sample of 12 bottles gives sample standard deviation ounces. Test at the 5% significance level whether the standard deviation differs from 1.2 ounces.  We test   Equivalently, and . The test statistic has :   For a two-tailed test with and , the rejection region is   From ,   Since , the observed statistic falls in the rejection region, so we reject . The data suggest that the machine's standard deviation differs from 1.2 ounces, and in fact it appears to be larger.   The connection with confidence intervals is the same as before. If a claimed value of or falls outside the matching confidence interval from , then that claim is also likely to be rejected by a hypothesis test at the corresponding significance level.   Assume a normal population. A random sample of size 12 has sample standard deviation . Test against at the 10% significance level.   Find the degrees of freedom.  Compute the chi-square test statistic.  Find the p-value and state the conclusion.     Run a Variance Test   Carry out a chi-square test for a population standard deviation from start to finish.     Assume bolt lengths from a machine are normally distributed. The machine is supposed to have standard deviation 2.5 millimeters. A random sample of 15 bolts gives sample standard deviation millimeters. Test against .      Find the degrees of freedom, compute the chi-square statistic, and find the p-value.      At , decide whether to reject and write the conclusion in context.      Connect the Test and the Interval   Compare a chi-square test for spread with the matching confidence interval.     Return to the bottle-fill sample with and . Use the method from to build a 95% confidence interval for .      Does the claimed value fall inside that interval?      Explain how that interval result matches the hypothesis-test conclusion from .     "
},
{
  "id": "sec-one-variance-tests-13",
  "level": "2",
  "url": "sec-one-variance-tests.html#sec-one-variance-tests-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chi-square test for a population variance inference chi-square test for variance "
},
{
  "id": "ex-variance-test-deliveries",
  "level": "2",
  "url": "sec-one-variance-tests.html#ex-variance-test-deliveries",
  "type": "Example",
  "number": "11.7.1",
  "title": "Testing Whether Delivery Times Have Become More Variable.",
  "body": " Testing Whether Delivery Times Have Become More Variable  Suppose delivery times on a short route are well modeled by a normal distribution. A company claims the population standard deviation is 2 minutes. A random sample of 16 deliveries gives sample standard deviation minutes. Test at the 5% significance level whether the true standard deviation is greater than 2 minutes.  Let be the population standard deviation of delivery times. Then   Equivalently, we are testing against . Because the population is assumed normal, we use the chi-square statistic with :   If is true, then . Since this is a right-tailed test, the p-value is   Because , we reject . The sample gives strong evidence that delivery times vary more than the claimed 2 minutes.  "
},
{
  "id": "ex-variance-test-bottles",
  "level": "2",
  "url": "sec-one-variance-tests.html#ex-variance-test-bottles",
  "type": "Example",
  "number": "11.7.2",
  "title": "Testing Whether a Machine’s Variation Has Changed.",
  "body": " Testing Whether a Machine's Variation Has Changed  Assume bottle fill amounts are normally distributed. A machine is supposed to have population standard deviation 1.2 ounces. A random sample of 12 bottles gives sample standard deviation ounces. Test at the 5% significance level whether the standard deviation differs from 1.2 ounces.  We test   Equivalently, and . The test statistic has :   For a two-tailed test with and , the rejection region is   From ,   Since , the observed statistic falls in the rejection region, so we reject . The data suggest that the machine's standard deviation differs from 1.2 ounces, and in fact it appears to be larger.  "
},
{
  "id": "ht-inline-ex-4",
  "level": "2",
  "url": "sec-one-variance-tests.html#ht-inline-ex-4",
  "type": "Checkpoint",
  "number": "11.7.3",
  "title": "",
  "body": " Assume a normal population. A random sample of size 12 has sample standard deviation . Test against at the 10% significance level.   Find the degrees of freedom.  Compute the chi-square test statistic.  Find the p-value and state the conclusion.   "
},
{
  "id": "act-ch11-variance-test-builder",
  "level": "2",
  "url": "sec-one-variance-tests.html#act-ch11-variance-test-builder",
  "type": "Activity",
  "number": "11.7.1",
  "title": "Run a Variance Test.",
  "body": " Run a Variance Test   Carry out a chi-square test for a population standard deviation from start to finish.     Assume bolt lengths from a machine are normally distributed. The machine is supposed to have standard deviation 2.5 millimeters. A random sample of 15 bolts gives sample standard deviation millimeters. Test against .      Find the degrees of freedom, compute the chi-square statistic, and find the p-value.      At , decide whether to reject and write the conclusion in context.    "
},
{
  "id": "act-ch11-variance-test-interval-link",
  "level": "2",
  "url": "sec-one-variance-tests.html#act-ch11-variance-test-interval-link",
  "type": "Activity",
  "number": "11.7.2",
  "title": "Connect the Test and the Interval.",
  "body": " Connect the Test and the Interval   Compare a chi-square test for spread with the matching confidence interval.     Return to the bottle-fill sample with and . Use the method from to build a 95% confidence interval for .      Does the claimed value fall inside that interval?      Explain how that interval result matches the hypothesis-test conclusion from .    "
},
{
  "id": "ch11-exercises",
  "level": "1",
  "url": "ch11-exercises.html",
  "type": "Exercises",
  "number": "11.8",
  "title": "Exercises",
  "body": " Exercises   For each pair of hypotheses below, state whether the test is left-tailed, right-tailed, or two-tailed.   ,  ,  ,     A company claims its cereal boxes contain 16 ounces on average. A quality-control manager tests against .   Describe a Type I error in context.  Describe a Type II error in context.  What does it mean if the test uses ?     A sample of size 64 has mean and sample standard deviation . Test against at the 5% significance level.   Compute the test statistic.  State whether the test is a z-test or a t-test.  Would you reject or fail to reject ?     Why is “fail to reject ” a better phrase than “accept ”?    Consider a right-tailed z-test of versus .   Explain why large positive z-values count as evidence against .  Explain why the rejection region has the form .  Explain why the rule is equivalent to the rule p-value .     Two independent large samples give , , , and , , .   Write the hypotheses for testing whether the first population mean is greater than the second.  Compute the estimated standard error of .  Compute the z statistic for .  State the conclusion at the 5% significance level.     Explain why, for large independent samples, the statistic is approximately normal with variance .   Which theorem explains why each sample mean is approximately normal?  Why is the mean of the difference ?  Why do the variances add instead of subtract?     Two independent small samples give , , , and , , .   Write hypotheses for testing whether the first population mean is greater than the second.  Compute the estimated standard error and the two-sample t statistic.  Explain why a t distribution is used instead of the standard normal distribution.  State the small-sample conditions that should be checked before trusting the test.     A study records resting heart rate for 36 students before and after a four-week exercise program. Let . The sample of differences has beats per minute and beats per minute.   Explain why this is a paired-sample problem.  Write hypotheses for testing whether the program lowers mean resting heart rate.  Compute the large-sample paired z statistic.  At , state the conclusion in context.     Eight students take a short skills test before and after a workshop. Let . The differences have points and points.   Write hypotheses for testing whether the workshop improves the mean score.  Compute the paired t statistic.  Find the degrees of freedom.  State the condition about the distribution of differences that matters most for this small sample.     A city claims that 45% of residents use public transportation at least once per week. In a random sample of 220 residents, 117 say they do.   Write the hypotheses for testing whether the true proportion is greater than 45%.  Check the large-sample conditions under the null hypothesis.  Compute the z statistic.  At , state the conclusion in context.     A school board says that 70% of parents support a calendar change. A random sample of 180 parents finds support from 117 of them.   Test against at the 10% significance level.  Compute the p-value.  Would the conclusion change at the 5% significance level?     Explain why a one-proportion confidence interval uses in the standard error, while a one-proportion hypothesis test uses in the standard error.    Assume a normal manufacturing process is supposed to have standard deviation 5 units. A random sample of 20 items gives sample standard deviation units.   Test against at the 5% significance level.  Compute the chi-square test statistic.  State the p-value or compare with an appropriate critical value.  Write the conclusion in context.     Assume coating thicknesses from a process are normally distributed. The process is supposed to have standard deviation 1.2 millimeters. A random sample of 18 items gives sample standard deviation millimeters.   Test against at the 5% significance level.  Find the degrees of freedom and the chi-square test statistic.  Use two-tailed critical values to decide whether to reject .  State the conclusion in context.     State the assumptions for using a chi-square test for a population variance or standard deviation.   Why is normality the crucial assumption?  Why does a large sample not rescue this method in the same way the CLT helps tests about a mean?  How is this test connected to the confidence interval in ?    "
},
{
  "id": "ch11-ex-1",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-1",
  "type": "Exercise",
  "number": "11.8.1",
  "title": "",
  "body": " For each pair of hypotheses below, state whether the test is left-tailed, right-tailed, or two-tailed.   ,  ,  ,   "
},
{
  "id": "ch11-ex-2",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-2",
  "type": "Exercise",
  "number": "11.8.2",
  "title": "",
  "body": " A company claims its cereal boxes contain 16 ounces on average. A quality-control manager tests against .   Describe a Type I error in context.  Describe a Type II error in context.  What does it mean if the test uses ?   "
},
{
  "id": "ch11-ex-3",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-3",
  "type": "Exercise",
  "number": "11.8.3",
  "title": "",
  "body": " A sample of size 64 has mean and sample standard deviation . Test against at the 5% significance level.   Compute the test statistic.  State whether the test is a z-test or a t-test.  Would you reject or fail to reject ?   "
},
{
  "id": "ch11-ex-4",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-4",
  "type": "Exercise",
  "number": "11.8.4",
  "title": "",
  "body": " Why is “fail to reject ” a better phrase than “accept ”?  "
},
{
  "id": "ch11-ex-5",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-5",
  "type": "Exercise",
  "number": "11.8.5",
  "title": "",
  "body": " Consider a right-tailed z-test of versus .   Explain why large positive z-values count as evidence against .  Explain why the rejection region has the form .  Explain why the rule is equivalent to the rule p-value .   "
},
{
  "id": "ch11-ex-12",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-12",
  "type": "Exercise",
  "number": "11.8.6",
  "title": "",
  "body": " Two independent large samples give , , , and , , .   Write the hypotheses for testing whether the first population mean is greater than the second.  Compute the estimated standard error of .  Compute the z statistic for .  State the conclusion at the 5% significance level.   "
},
{
  "id": "ch11-ex-13",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-13",
  "type": "Exercise",
  "number": "11.8.7",
  "title": "",
  "body": " Explain why, for large independent samples, the statistic is approximately normal with variance .   Which theorem explains why each sample mean is approximately normal?  Why is the mean of the difference ?  Why do the variances add instead of subtract?   "
},
{
  "id": "ch11-ex-14",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-14",
  "type": "Exercise",
  "number": "11.8.8",
  "title": "",
  "body": " Two independent small samples give , , , and , , .   Write hypotheses for testing whether the first population mean is greater than the second.  Compute the estimated standard error and the two-sample t statistic.  Explain why a t distribution is used instead of the standard normal distribution.  State the small-sample conditions that should be checked before trusting the test.   "
},
{
  "id": "ch11-ex-15",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-15",
  "type": "Exercise",
  "number": "11.8.9",
  "title": "",
  "body": " A study records resting heart rate for 36 students before and after a four-week exercise program. Let . The sample of differences has beats per minute and beats per minute.   Explain why this is a paired-sample problem.  Write hypotheses for testing whether the program lowers mean resting heart rate.  Compute the large-sample paired z statistic.  At , state the conclusion in context.   "
},
{
  "id": "ch11-ex-16",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-16",
  "type": "Exercise",
  "number": "11.8.10",
  "title": "",
  "body": " Eight students take a short skills test before and after a workshop. Let . The differences have points and points.   Write hypotheses for testing whether the workshop improves the mean score.  Compute the paired t statistic.  Find the degrees of freedom.  State the condition about the distribution of differences that matters most for this small sample.   "
},
{
  "id": "ch11-ex-6",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-6",
  "type": "Exercise",
  "number": "11.8.11",
  "title": "",
  "body": " A city claims that 45% of residents use public transportation at least once per week. In a random sample of 220 residents, 117 say they do.   Write the hypotheses for testing whether the true proportion is greater than 45%.  Check the large-sample conditions under the null hypothesis.  Compute the z statistic.  At , state the conclusion in context.   "
},
{
  "id": "ch11-ex-7",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-7",
  "type": "Exercise",
  "number": "11.8.12",
  "title": "",
  "body": " A school board says that 70% of parents support a calendar change. A random sample of 180 parents finds support from 117 of them.   Test against at the 10% significance level.  Compute the p-value.  Would the conclusion change at the 5% significance level?   "
},
{
  "id": "ch11-ex-8",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-8",
  "type": "Exercise",
  "number": "11.8.13",
  "title": "",
  "body": " Explain why a one-proportion confidence interval uses in the standard error, while a one-proportion hypothesis test uses in the standard error.  "
},
{
  "id": "ch11-ex-9",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-9",
  "type": "Exercise",
  "number": "11.8.14",
  "title": "",
  "body": " Assume a normal manufacturing process is supposed to have standard deviation 5 units. A random sample of 20 items gives sample standard deviation units.   Test against at the 5% significance level.  Compute the chi-square test statistic.  State the p-value or compare with an appropriate critical value.  Write the conclusion in context.   "
},
{
  "id": "ch11-ex-10",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-10",
  "type": "Exercise",
  "number": "11.8.15",
  "title": "",
  "body": " Assume coating thicknesses from a process are normally distributed. The process is supposed to have standard deviation 1.2 millimeters. A random sample of 18 items gives sample standard deviation millimeters.   Test against at the 5% significance level.  Find the degrees of freedom and the chi-square test statistic.  Use two-tailed critical values to decide whether to reject .  State the conclusion in context.   "
},
{
  "id": "ch11-ex-11",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-11",
  "type": "Exercise",
  "number": "11.8.16",
  "title": "",
  "body": " State the assumptions for using a chi-square test for a population variance or standard deviation.   Why is normality the crucial assumption?  Why does a large sample not rescue this method in the same way the CLT helps tests about a mean?  How is this test connected to the confidence interval in ?   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
},
{
  "id": "sec-binomial-table-p01",
  "level": "1",
  "url": "sec-binomial-table-p01.html",
  "type": "Section",
  "number": "A.1",
  "title": "Success Probability 0.10",
  "body": " Success Probability 0.10   Exact probabilities for with     0  1  2  3  4  5    1  0.9000  0.1000        2  0.8100  0.1800  0.0100       3  0.7290  0.2430  0.0270  0.0010      4  0.6561  0.2916  0.0486  0.0036  0.0001     5  0.5905  0.3281  0.0729  0.0081  0.0005  0.0000    6  0.5314  0.3543  0.0984  0.0146  0.0012  0.0001    7  0.4783  0.3720  0.1240  0.0230  0.0026  0.0002    8  0.4305  0.3826  0.1488  0.0331  0.0046  0.0004    9  0.3874  0.3874  0.1722  0.0446  0.0074  0.0008    10  0.3487  0.3874  0.1937  0.0574  0.0112  0.0015      Exact probabilities for with     6  7  8  9  10    6  0.0000        7  0.0000  0.0000       8  0.0000  0.0000  0.0000      9  0.0001  0.0000  0.0000  0.0000     10  0.0001  0.0000  0.0000  0.0000  0.0000     "
},
{
  "id": "tbl-binomial-p01-low",
  "level": "2",
  "url": "sec-binomial-table-p01.html#tbl-binomial-p01-low",
  "type": "Table",
  "number": "A.1.1",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.10)\\)<\/span> with <span class=\"process-math\">\\(k=0,1,2,3,4,5\\)<\/span>",
  "body": " Exact probabilities for with     0  1  2  3  4  5    1  0.9000  0.1000        2  0.8100  0.1800  0.0100       3  0.7290  0.2430  0.0270  0.0010      4  0.6561  0.2916  0.0486  0.0036  0.0001     5  0.5905  0.3281  0.0729  0.0081  0.0005  0.0000    6  0.5314  0.3543  0.0984  0.0146  0.0012  0.0001    7  0.4783  0.3720  0.1240  0.0230  0.0026  0.0002    8  0.4305  0.3826  0.1488  0.0331  0.0046  0.0004    9  0.3874  0.3874  0.1722  0.0446  0.0074  0.0008    10  0.3487  0.3874  0.1937  0.0574  0.0112  0.0015    "
},
{
  "id": "tbl-binomial-p01-high",
  "level": "2",
  "url": "sec-binomial-table-p01.html#tbl-binomial-p01-high",
  "type": "Table",
  "number": "A.1.2",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.10)\\)<\/span> with <span class=\"process-math\">\\(k=6,7,8,9,10\\)<\/span>",
  "body": " Exact probabilities for with     6  7  8  9  10    6  0.0000        7  0.0000  0.0000       8  0.0000  0.0000  0.0000      9  0.0001  0.0000  0.0000  0.0000     10  0.0001  0.0000  0.0000  0.0000  0.0000    "
},
{
  "id": "sec-binomial-table-p02",
  "level": "1",
  "url": "sec-binomial-table-p02.html",
  "type": "Section",
  "number": "A.2",
  "title": "Success Probability 0.20",
  "body": " Success Probability 0.20   Exact probabilities for with     0  1  2  3  4  5    1  0.8000  0.2000        2  0.6400  0.3200  0.0400       3  0.5120  0.3840  0.0960  0.0080      4  0.4096  0.4096  0.1536  0.0256  0.0016     5  0.3277  0.4096  0.2048  0.0512  0.0064  0.0003    6  0.2621  0.3932  0.2458  0.0819  0.0154  0.0015    7  0.2097  0.3670  0.2753  0.1147  0.0287  0.0043    8  0.1678  0.3355  0.2936  0.1468  0.0459  0.0092    9  0.1342  0.3020  0.3020  0.1762  0.0661  0.0165    10  0.1074  0.2684  0.3020  0.2013  0.0881  0.0264      Exact probabilities for with     6  7  8  9  10    6  0.0001        7  0.0004  0.0000       8  0.0011  0.0001  0.0000      9  0.0028  0.0003  0.0000  0.0000     10  0.0055  0.0008  0.0001  0.0000  0.0000     "
},
{
  "id": "tbl-binomial-p02-low",
  "level": "2",
  "url": "sec-binomial-table-p02.html#tbl-binomial-p02-low",
  "type": "Table",
  "number": "A.2.1",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.20)\\)<\/span> with <span class=\"process-math\">\\(k=0,1,2,3,4,5\\)<\/span>",
  "body": " Exact probabilities for with     0  1  2  3  4  5    1  0.8000  0.2000        2  0.6400  0.3200  0.0400       3  0.5120  0.3840  0.0960  0.0080      4  0.4096  0.4096  0.1536  0.0256  0.0016     5  0.3277  0.4096  0.2048  0.0512  0.0064  0.0003    6  0.2621  0.3932  0.2458  0.0819  0.0154  0.0015    7  0.2097  0.3670  0.2753  0.1147  0.0287  0.0043    8  0.1678  0.3355  0.2936  0.1468  0.0459  0.0092    9  0.1342  0.3020  0.3020  0.1762  0.0661  0.0165    10  0.1074  0.2684  0.3020  0.2013  0.0881  0.0264    "
},
{
  "id": "tbl-binomial-p02-high",
  "level": "2",
  "url": "sec-binomial-table-p02.html#tbl-binomial-p02-high",
  "type": "Table",
  "number": "A.2.2",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.20)\\)<\/span> with <span class=\"process-math\">\\(k=6,7,8,9,10\\)<\/span>",
  "body": " Exact probabilities for with     6  7  8  9  10    6  0.0001        7  0.0004  0.0000       8  0.0011  0.0001  0.0000      9  0.0028  0.0003  0.0000  0.0000     10  0.0055  0.0008  0.0001  0.0000  0.0000    "
},
{
  "id": "sec-binomial-table-p03",
  "level": "1",
  "url": "sec-binomial-table-p03.html",
  "type": "Section",
  "number": "A.3",
  "title": "Success Probability 0.30",
  "body": " Success Probability 0.30   Exact probabilities for with     0  1  2  3  4  5    1  0.7000  0.3000        2  0.4900  0.4200  0.0900       3  0.3430  0.4410  0.1890  0.0270      4  0.2401  0.4116  0.2646  0.0756  0.0081     5  0.1681  0.3601  0.3087  0.1323  0.0283  0.0024    6  0.1176  0.3025  0.3241  0.1852  0.0595  0.0102    7  0.0824  0.2471  0.3177  0.2269  0.0972  0.0250    8  0.0576  0.1977  0.2965  0.2541  0.1361  0.0467    9  0.0404  0.1556  0.2668  0.2668  0.1715  0.0735    10  0.0282  0.1211  0.2335  0.2668  0.2001  0.1029      Exact probabilities for with     6  7  8  9  10    6  0.0007        7  0.0036  0.0002       8  0.0100  0.0012  0.0001      9  0.0210  0.0039  0.0004  0.0000     10  0.0368  0.0090  0.0014  0.0001  0.0000     "
},
{
  "id": "tbl-binomial-p03-low",
  "level": "2",
  "url": "sec-binomial-table-p03.html#tbl-binomial-p03-low",
  "type": "Table",
  "number": "A.3.1",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.30)\\)<\/span> with <span class=\"process-math\">\\(k=0,1,2,3,4,5\\)<\/span>",
  "body": " Exact probabilities for with     0  1  2  3  4  5    1  0.7000  0.3000        2  0.4900  0.4200  0.0900       3  0.3430  0.4410  0.1890  0.0270      4  0.2401  0.4116  0.2646  0.0756  0.0081     5  0.1681  0.3601  0.3087  0.1323  0.0283  0.0024    6  0.1176  0.3025  0.3241  0.1852  0.0595  0.0102    7  0.0824  0.2471  0.3177  0.2269  0.0972  0.0250    8  0.0576  0.1977  0.2965  0.2541  0.1361  0.0467    9  0.0404  0.1556  0.2668  0.2668  0.1715  0.0735    10  0.0282  0.1211  0.2335  0.2668  0.2001  0.1029    "
},
{
  "id": "tbl-binomial-p03-high",
  "level": "2",
  "url": "sec-binomial-table-p03.html#tbl-binomial-p03-high",
  "type": "Table",
  "number": "A.3.2",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.30)\\)<\/span> with <span class=\"process-math\">\\(k=6,7,8,9,10\\)<\/span>",
  "body": " Exact probabilities for with     6  7  8  9  10    6  0.0007        7  0.0036  0.0002       8  0.0100  0.0012  0.0001      9  0.0210  0.0039  0.0004  0.0000     10  0.0368  0.0090  0.0014  0.0001  0.0000    "
},
{
  "id": "sec-binomial-table-p04",
  "level": "1",
  "url": "sec-binomial-table-p04.html",
  "type": "Section",
  "number": "A.4",
  "title": "Success Probability 0.40",
  "body": " Success Probability 0.40   Exact probabilities for with     0  1  2  3  4  5    1  0.6000  0.4000        2  0.3600  0.4800  0.1600       3  0.2160  0.4320  0.2880  0.0640      4  0.1296  0.3456  0.3456  0.1536  0.0256     5  0.0778  0.2592  0.3456  0.2304  0.0768  0.0102    6  0.0467  0.1866  0.3110  0.2765  0.1382  0.0369    7  0.0280  0.1306  0.2613  0.2903  0.1935  0.0774    8  0.0168  0.0896  0.2090  0.2787  0.2322  0.1239    9  0.0101  0.0605  0.1612  0.2508  0.2508  0.1672    10  0.0060  0.0403  0.1209  0.2150  0.2508  0.2007      Exact probabilities for with     6  7  8  9  10    6  0.0041        7  0.0172  0.0016       8  0.0413  0.0079  0.0007      9  0.0743  0.0212  0.0035  0.0003     10  0.1115  0.0425  0.0106  0.0016  0.0001     "
},
{
  "id": "tbl-binomial-p04-low",
  "level": "2",
  "url": "sec-binomial-table-p04.html#tbl-binomial-p04-low",
  "type": "Table",
  "number": "A.4.1",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.40)\\)<\/span> with <span class=\"process-math\">\\(k=0,1,2,3,4,5\\)<\/span>",
  "body": " Exact probabilities for with     0  1  2  3  4  5    1  0.6000  0.4000        2  0.3600  0.4800  0.1600       3  0.2160  0.4320  0.2880  0.0640      4  0.1296  0.3456  0.3456  0.1536  0.0256     5  0.0778  0.2592  0.3456  0.2304  0.0768  0.0102    6  0.0467  0.1866  0.3110  0.2765  0.1382  0.0369    7  0.0280  0.1306  0.2613  0.2903  0.1935  0.0774    8  0.0168  0.0896  0.2090  0.2787  0.2322  0.1239    9  0.0101  0.0605  0.1612  0.2508  0.2508  0.1672    10  0.0060  0.0403  0.1209  0.2150  0.2508  0.2007    "
},
{
  "id": "tbl-binomial-p04-high",
  "level": "2",
  "url": "sec-binomial-table-p04.html#tbl-binomial-p04-high",
  "type": "Table",
  "number": "A.4.2",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.40)\\)<\/span> with <span class=\"process-math\">\\(k=6,7,8,9,10\\)<\/span>",
  "body": " Exact probabilities for with     6  7  8  9  10    6  0.0041        7  0.0172  0.0016       8  0.0413  0.0079  0.0007      9  0.0743  0.0212  0.0035  0.0003     10  0.1115  0.0425  0.0106  0.0016  0.0001    "
},
{
  "id": "sec-binomial-table-p05",
  "level": "1",
  "url": "sec-binomial-table-p05.html",
  "type": "Section",
  "number": "A.5",
  "title": "Success Probability 0.50",
  "body": " Success Probability 0.50   Exact probabilities for with     0  1  2  3  4  5    1  0.5000  0.5000        2  0.2500  0.5000  0.2500       3  0.1250  0.3750  0.3750  0.1250      4  0.0625  0.2500  0.3750  0.2500  0.0625     5  0.0312  0.1562  0.3125  0.3125  0.1562  0.0312    6  0.0156  0.0938  0.2344  0.3125  0.2344  0.0938    7  0.0078  0.0547  0.1641  0.2734  0.2734  0.1641    8  0.0039  0.0312  0.1094  0.2188  0.2734  0.2188    9  0.0020  0.0176  0.0703  0.1641  0.2461  0.2461    10  0.0010  0.0098  0.0439  0.1172  0.2051  0.2461      Exact probabilities for with     6  7  8  9  10    6  0.0156        7  0.0547  0.0078       8  0.1094  0.0312  0.0039      9  0.1641  0.0703  0.0176  0.0020     10  0.2051  0.1172  0.0439  0.0098  0.0010     "
},
{
  "id": "tbl-binomial-p05-low",
  "level": "2",
  "url": "sec-binomial-table-p05.html#tbl-binomial-p05-low",
  "type": "Table",
  "number": "A.5.1",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.50)\\)<\/span> with <span class=\"process-math\">\\(k=0,1,2,3,4,5\\)<\/span>",
  "body": " Exact probabilities for with     0  1  2  3  4  5    1  0.5000  0.5000        2  0.2500  0.5000  0.2500       3  0.1250  0.3750  0.3750  0.1250      4  0.0625  0.2500  0.3750  0.2500  0.0625     5  0.0312  0.1562  0.3125  0.3125  0.1562  0.0312    6  0.0156  0.0938  0.2344  0.3125  0.2344  0.0938    7  0.0078  0.0547  0.1641  0.2734  0.2734  0.1641    8  0.0039  0.0312  0.1094  0.2188  0.2734  0.2188    9  0.0020  0.0176  0.0703  0.1641  0.2461  0.2461    10  0.0010  0.0098  0.0439  0.1172  0.2051  0.2461    "
},
{
  "id": "tbl-binomial-p05-high",
  "level": "2",
  "url": "sec-binomial-table-p05.html#tbl-binomial-p05-high",
  "type": "Table",
  "number": "A.5.2",
  "title": "Exact probabilities for <span class=\"process-math\">\\(X\\sim B(n,0.50)\\)<\/span> with <span class=\"process-math\">\\(k=6,7,8,9,10\\)<\/span>",
  "body": " Exact probabilities for with     6  7  8  9  10    6  0.0156        7  0.0547  0.0078       8  0.1094  0.0312  0.0039      9  0.1641  0.0703  0.0176  0.0020     10  0.2051  0.1172  0.0439  0.0098  0.0010    "
},
{
  "id": "app-normal-table",
  "level": "1",
  "url": "app-normal-table.html",
  "type": "Appendix",
  "number": "B",
  "title": "Normal Distribution",
  "body": " Normal Distribution  This appendix gives the standard normal cumulative distribution table. Each entry is for a standard normal random variable appendices standard normal table  .  The table lists only nonnegative -values. For negative values, use symmetry: .  To keep the print layout readable, the columns are split into two companion tables.   Columns 0.00 through 0.04 for     0.00  0.01  0.02  0.03  0.04    0.0  0.5000  0.5040  0.5080  0.5120  0.5160    0.1  0.5398  0.5438  0.5478  0.5517  0.5557    0.2  0.5793  0.5832  0.5871  0.5910  0.5948    0.3  0.6179  0.6217  0.6255  0.6293  0.6331    0.4  0.6554  0.6591  0.6628  0.6664  0.6700    0.5  0.6915  0.6950  0.6985  0.7019  0.7054    0.6  0.7257  0.7291  0.7324  0.7357  0.7389    0.7  0.7580  0.7611  0.7642  0.7673  0.7704    0.8  0.7881  0.7910  0.7939  0.7967  0.7995    0.9  0.8159  0.8186  0.8212  0.8238  0.8264    1.0  0.8413  0.8438  0.8461  0.8485  0.8508    1.1  0.8643  0.8665  0.8686  0.8708  0.8729    1.2  0.8849  0.8869  0.8888  0.8907  0.8925    1.3  0.9032  0.9049  0.9066  0.9082  0.9099    1.4  0.9192  0.9207  0.9222  0.9236  0.9251    1.5  0.9332  0.9345  0.9357  0.9370  0.9382    1.6  0.9452  0.9463  0.9474  0.9484  0.9495    1.7  0.9554  0.9564  0.9573  0.9582  0.9591    1.8  0.9641  0.9649  0.9656  0.9664  0.9671    1.9  0.9713  0.9719  0.9726  0.9732  0.9738    2.0  0.9772  0.9778  0.9783  0.9788  0.9793    2.1  0.9821  0.9826  0.9830  0.9834  0.9838    2.2  0.9861  0.9864  0.9868  0.9871  0.9875    2.3  0.9893  0.9896  0.9898  0.9901  0.9904    2.4  0.9918  0.9920  0.9922  0.9925  0.9927    2.5  0.9938  0.9940  0.9941  0.9943  0.9945    2.6  0.9953  0.9955  0.9956  0.9957  0.9959    2.7  0.9965  0.9966  0.9967  0.9968  0.9969    2.8  0.9974  0.9975  0.9976  0.9977  0.9977    2.9  0.9981  0.9982  0.9982  0.9983  0.9984    3.0  0.9987  0.9987  0.9987  0.9988  0.9988    3.1  0.9990  0.9991  0.9991  0.9991  0.9992    3.2  0.9993  0.9993  0.9994  0.9994  0.9994    3.3  0.9995  0.9995  0.9995  0.9996  0.9996    3.4  0.9997  0.9997  0.9997  0.9997  0.9997    3.5  0.9998  0.9998  0.9998  0.9998  0.9998    3.6  0.9998  0.9998  0.9999  0.9999  0.9999    3.7  0.9999  0.9999  0.9999  0.9999  0.9999    3.8  0.9999  0.9999  0.9999  0.9999  0.9999    3.9  1.0000  1.0000  1.0000  1.0000  1.0000      Columns 0.05 through 0.09 for     0.05  0.06  0.07  0.08  0.09    0.0  0.5199  0.5239  0.5279  0.5319  0.5359    0.1  0.5596  0.5636  0.5675  0.5714  0.5753    0.2  0.5987  0.6026  0.6064  0.6103  0.6141    0.3  0.6368  0.6406  0.6443  0.6480  0.6517    0.4  0.6736  0.6772  0.6808  0.6844  0.6879    0.5  0.7088  0.7123  0.7157  0.7190  0.7224    0.6  0.7422  0.7454  0.7486  0.7517  0.7549    0.7  0.7734  0.7764  0.7794  0.7823  0.7852    0.8  0.8023  0.8051  0.8078  0.8106  0.8133    0.9  0.8289  0.8315  0.8340  0.8365  0.8389    1.0  0.8531  0.8554  0.8577  0.8599  0.8621    1.1  0.8749  0.8770  0.8790  0.8810  0.8830    1.2  0.8944  0.8962  0.8980  0.8997  0.9015    1.3  0.9115  0.9131  0.9147  0.9162  0.9177    1.4  0.9265  0.9279  0.9292  0.9306  0.9319    1.5  0.9394  0.9406  0.9418  0.9429  0.9441    1.6  0.9505  0.9515  0.9525  0.9535  0.9545    1.7  0.9599  0.9608  0.9616  0.9625  0.9633    1.8  0.9678  0.9686  0.9693  0.9699  0.9706    1.9  0.9744  0.9750  0.9756  0.9761  0.9767    2.0  0.9798  0.9803  0.9808  0.9812  0.9817    2.1  0.9842  0.9846  0.9850  0.9854  0.9857    2.2  0.9878  0.9881  0.9884  0.9887  0.9890    2.3  0.9906  0.9909  0.9911  0.9913  0.9916    2.4  0.9929  0.9931  0.9932  0.9934  0.9936    2.5  0.9946  0.9948  0.9949  0.9951  0.9952    2.6  0.9960  0.9961  0.9962  0.9963  0.9964    2.7  0.9970  0.9971  0.9972  0.9973  0.9974    2.8  0.9978  0.9979  0.9979  0.9980  0.9981    2.9  0.9984  0.9985  0.9985  0.9986  0.9986    3.0  0.9989  0.9989  0.9989  0.9990  0.9990    3.1  0.9992  0.9992  0.9992  0.9993  0.9993    3.2  0.9994  0.9994  0.9995  0.9995  0.9995    3.3  0.9996  0.9996  0.9996  0.9996  0.9997    3.4  0.9997  0.9997  0.9997  0.9997  0.9998    3.5  0.9998  0.9998  0.9998  0.9998  0.9998    3.6  0.9999  0.9999  0.9999  0.9999  0.9999    3.7  0.9999  0.9999  0.9999  0.9999  0.9999    3.8  0.9999  0.9999  0.9999  0.9999  0.9999    3.9  1.0000  1.0000  1.0000  1.0000  1.0000     "
},
{
  "id": "app-normal-table-2",
  "level": "2",
  "url": "app-normal-table.html#app-normal-table-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard normal random variable appendices standard normal table "
},
{
  "id": "tbl-standard-normal-cdf-a",
  "level": "2",
  "url": "app-normal-table.html#tbl-standard-normal-cdf-a",
  "type": "Table",
  "number": "B.0.1",
  "title": "Columns 0.00 through 0.04 for <span class=\"process-math\">\\(P(Z\\le z)\\)<\/span>",
  "body": " Columns 0.00 through 0.04 for     0.00  0.01  0.02  0.03  0.04    0.0  0.5000  0.5040  0.5080  0.5120  0.5160    0.1  0.5398  0.5438  0.5478  0.5517  0.5557    0.2  0.5793  0.5832  0.5871  0.5910  0.5948    0.3  0.6179  0.6217  0.6255  0.6293  0.6331    0.4  0.6554  0.6591  0.6628  0.6664  0.6700    0.5  0.6915  0.6950  0.6985  0.7019  0.7054    0.6  0.7257  0.7291  0.7324  0.7357  0.7389    0.7  0.7580  0.7611  0.7642  0.7673  0.7704    0.8  0.7881  0.7910  0.7939  0.7967  0.7995    0.9  0.8159  0.8186  0.8212  0.8238  0.8264    1.0  0.8413  0.8438  0.8461  0.8485  0.8508    1.1  0.8643  0.8665  0.8686  0.8708  0.8729    1.2  0.8849  0.8869  0.8888  0.8907  0.8925    1.3  0.9032  0.9049  0.9066  0.9082  0.9099    1.4  0.9192  0.9207  0.9222  0.9236  0.9251    1.5  0.9332  0.9345  0.9357  0.9370  0.9382    1.6  0.9452  0.9463  0.9474  0.9484  0.9495    1.7  0.9554  0.9564  0.9573  0.9582  0.9591    1.8  0.9641  0.9649  0.9656  0.9664  0.9671    1.9  0.9713  0.9719  0.9726  0.9732  0.9738    2.0  0.9772  0.9778  0.9783  0.9788  0.9793    2.1  0.9821  0.9826  0.9830  0.9834  0.9838    2.2  0.9861  0.9864  0.9868  0.9871  0.9875    2.3  0.9893  0.9896  0.9898  0.9901  0.9904    2.4  0.9918  0.9920  0.9922  0.9925  0.9927    2.5  0.9938  0.9940  0.9941  0.9943  0.9945    2.6  0.9953  0.9955  0.9956  0.9957  0.9959    2.7  0.9965  0.9966  0.9967  0.9968  0.9969    2.8  0.9974  0.9975  0.9976  0.9977  0.9977    2.9  0.9981  0.9982  0.9982  0.9983  0.9984    3.0  0.9987  0.9987  0.9987  0.9988  0.9988    3.1  0.9990  0.9991  0.9991  0.9991  0.9992    3.2  0.9993  0.9993  0.9994  0.9994  0.9994    3.3  0.9995  0.9995  0.9995  0.9996  0.9996    3.4  0.9997  0.9997  0.9997  0.9997  0.9997    3.5  0.9998  0.9998  0.9998  0.9998  0.9998    3.6  0.9998  0.9998  0.9999  0.9999  0.9999    3.7  0.9999  0.9999  0.9999  0.9999  0.9999    3.8  0.9999  0.9999  0.9999  0.9999  0.9999    3.9  1.0000  1.0000  1.0000  1.0000  1.0000    "
},
{
  "id": "tbl-standard-normal-cdf-b",
  "level": "2",
  "url": "app-normal-table.html#tbl-standard-normal-cdf-b",
  "type": "Table",
  "number": "B.0.2",
  "title": "Columns 0.05 through 0.09 for <span class=\"process-math\">\\(P(Z\\le z)\\)<\/span>",
  "body": " Columns 0.05 through 0.09 for     0.05  0.06  0.07  0.08  0.09    0.0  0.5199  0.5239  0.5279  0.5319  0.5359    0.1  0.5596  0.5636  0.5675  0.5714  0.5753    0.2  0.5987  0.6026  0.6064  0.6103  0.6141    0.3  0.6368  0.6406  0.6443  0.6480  0.6517    0.4  0.6736  0.6772  0.6808  0.6844  0.6879    0.5  0.7088  0.7123  0.7157  0.7190  0.7224    0.6  0.7422  0.7454  0.7486  0.7517  0.7549    0.7  0.7734  0.7764  0.7794  0.7823  0.7852    0.8  0.8023  0.8051  0.8078  0.8106  0.8133    0.9  0.8289  0.8315  0.8340  0.8365  0.8389    1.0  0.8531  0.8554  0.8577  0.8599  0.8621    1.1  0.8749  0.8770  0.8790  0.8810  0.8830    1.2  0.8944  0.8962  0.8980  0.8997  0.9015    1.3  0.9115  0.9131  0.9147  0.9162  0.9177    1.4  0.9265  0.9279  0.9292  0.9306  0.9319    1.5  0.9394  0.9406  0.9418  0.9429  0.9441    1.6  0.9505  0.9515  0.9525  0.9535  0.9545    1.7  0.9599  0.9608  0.9616  0.9625  0.9633    1.8  0.9678  0.9686  0.9693  0.9699  0.9706    1.9  0.9744  0.9750  0.9756  0.9761  0.9767    2.0  0.9798  0.9803  0.9808  0.9812  0.9817    2.1  0.9842  0.9846  0.9850  0.9854  0.9857    2.2  0.9878  0.9881  0.9884  0.9887  0.9890    2.3  0.9906  0.9909  0.9911  0.9913  0.9916    2.4  0.9929  0.9931  0.9932  0.9934  0.9936    2.5  0.9946  0.9948  0.9949  0.9951  0.9952    2.6  0.9960  0.9961  0.9962  0.9963  0.9964    2.7  0.9970  0.9971  0.9972  0.9973  0.9974    2.8  0.9978  0.9979  0.9979  0.9980  0.9981    2.9  0.9984  0.9985  0.9985  0.9986  0.9986    3.0  0.9989  0.9989  0.9989  0.9990  0.9990    3.1  0.9992  0.9992  0.9992  0.9993  0.9993    3.2  0.9994  0.9994  0.9995  0.9995  0.9995    3.3  0.9996  0.9996  0.9996  0.9996  0.9997    3.4  0.9997  0.9997  0.9997  0.9997  0.9998    3.5  0.9998  0.9998  0.9998  0.9998  0.9998    3.6  0.9999  0.9999  0.9999  0.9999  0.9999    3.7  0.9999  0.9999  0.9999  0.9999  0.9999    3.8  0.9999  0.9999  0.9999  0.9999  0.9999    3.9  1.0000  1.0000  1.0000  1.0000  1.0000    "
},
{
  "id": "app-t-table",
  "level": "1",
  "url": "app-t-table.html",
  "type": "Appendix",
  "number": "C",
  "title": "The t Distribution",
  "body": " The t Distribution  This appendix lists upper-tail critical values for the t distribution appendices t table . Each entry satisfies for with the indicated degrees of freedom.  For a two-tailed confidence interval or hypothesis test with total tail area , use the column for .   Upper-tail critical values for the distribution    df           1.000  3.078  6.314  12.706  31.821  63.657     0.816  1.886  2.920  4.303  6.965  9.925     0.765  1.638  2.353  3.182  4.541  5.841     0.741  1.533  2.132  2.776  3.747  4.604     0.727  1.476  2.015  2.571  3.365  4.032     0.718  1.440  1.943  2.447  3.143  3.707     0.711  1.415  1.895  2.365  2.998  3.499     0.706  1.397  1.860  2.306  2.896  3.355     0.703  1.383  1.833  2.262  2.821  3.250     0.700  1.372  1.812  2.228  2.764  3.169     0.697  1.363  1.796  2.201  2.718  3.106     0.695  1.356  1.782  2.179  2.681  3.055     0.694  1.350  1.771  2.160  2.650  3.012     0.692  1.345  1.761  2.145  2.624  2.977     0.691  1.341  1.753  2.131  2.602  2.947     0.690  1.337  1.746  2.120  2.583  2.921     0.689  1.333  1.740  2.110  2.567  2.898     0.688  1.330  1.734  2.101  2.552  2.878     0.688  1.328  1.729  2.093  2.539  2.861     0.687  1.325  1.725  2.086  2.528  2.845     0.686  1.323  1.721  2.080  2.518  2.831     0.686  1.321  1.717  2.074  2.508  2.819     0.685  1.319  1.714  2.069  2.500  2.807     0.685  1.318  1.711  2.064  2.492  2.797     0.684  1.316  1.708  2.060  2.485  2.787     0.684  1.315  1.706  2.056  2.479  2.779     0.684  1.314  1.703  2.052  2.473  2.771     0.683  1.313  1.701  2.048  2.467  2.763     0.683  1.311  1.699  2.045  2.462  2.756     0.683  1.310  1.697  2.042  2.457  2.750     0.681  1.303  1.684  2.021  2.423  2.704     0.679  1.296  1.671  2.000  2.390  2.660     0.677  1.289  1.658  1.980  2.358  2.617     0.674  1.282  1.645  1.960  2.326  2.576     "
},
{
  "id": "app-t-table-2",
  "level": "2",
  "url": "app-t-table.html#app-t-table-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "t distribution appendices t table "
},
{
  "id": "tbl-t-critical-values",
  "level": "2",
  "url": "app-t-table.html#tbl-t-critical-values",
  "type": "Table",
  "number": "C.0.1",
  "title": "Upper-tail critical values for the <span class=\"process-math\">\\(t\\)<\/span> distribution",
  "body": " Upper-tail critical values for the distribution    df           1.000  3.078  6.314  12.706  31.821  63.657     0.816  1.886  2.920  4.303  6.965  9.925     0.765  1.638  2.353  3.182  4.541  5.841     0.741  1.533  2.132  2.776  3.747  4.604     0.727  1.476  2.015  2.571  3.365  4.032     0.718  1.440  1.943  2.447  3.143  3.707     0.711  1.415  1.895  2.365  2.998  3.499     0.706  1.397  1.860  2.306  2.896  3.355     0.703  1.383  1.833  2.262  2.821  3.250     0.700  1.372  1.812  2.228  2.764  3.169     0.697  1.363  1.796  2.201  2.718  3.106     0.695  1.356  1.782  2.179  2.681  3.055     0.694  1.350  1.771  2.160  2.650  3.012     0.692  1.345  1.761  2.145  2.624  2.977     0.691  1.341  1.753  2.131  2.602  2.947     0.690  1.337  1.746  2.120  2.583  2.921     0.689  1.333  1.740  2.110  2.567  2.898     0.688  1.330  1.734  2.101  2.552  2.878     0.688  1.328  1.729  2.093  2.539  2.861     0.687  1.325  1.725  2.086  2.528  2.845     0.686  1.323  1.721  2.080  2.518  2.831     0.686  1.321  1.717  2.074  2.508  2.819     0.685  1.319  1.714  2.069  2.500  2.807     0.685  1.318  1.711  2.064  2.492  2.797     0.684  1.316  1.708  2.060  2.485  2.787     0.684  1.315  1.706  2.056  2.479  2.779     0.684  1.314  1.703  2.052  2.473  2.771     0.683  1.313  1.701  2.048  2.467  2.763     0.683  1.311  1.699  2.045  2.462  2.756     0.683  1.310  1.697  2.042  2.457  2.750     0.681  1.303  1.684  2.021  2.423  2.704     0.679  1.296  1.671  2.000  2.390  2.660     0.677  1.289  1.658  1.980  2.358  2.617     0.674  1.282  1.645  1.960  2.326  2.576    "
},
{
  "id": "app-chi-square-table",
  "level": "1",
  "url": "app-chi-square-table.html",
  "type": "Appendix",
  "number": "D",
  "title": "The Chi-Square Distribution",
  "body": " The Chi-Square Distribution  This appendix gives right-tail critical values for the chi-square distribution appendices chi-square table . Each entry satisfies for the stated degrees of freedom.  The left-side columns are useful for lower-tail cutoffs, while the right-side columns are the ones most often used for hypothesis tests and confidence intervals.  In this book, these values are used most directly for confidence intervals and hypothesis tests for a population variance or standard deviation from a normal population.  To keep the print layout centered and readable, the columns are split into two related tables.   Columns for larger right-tail areas for the distribution    df         1  0.000  0.000  0.001  0.004  0.016    2  0.010  0.020  0.051  0.103  0.211    3  0.072  0.115  0.216  0.352  0.584    4  0.207  0.297  0.484  0.711  1.064    5  0.412  0.554  0.831  1.145  1.610    6  0.676  0.872  1.237  1.635  2.204    7  0.989  1.239  1.690  2.167  2.833    8  1.344  1.646  2.180  2.733  3.490    9  1.735  2.088  2.700  3.325  4.168    10  2.156  2.558  3.247  3.940  4.865    11  2.603  3.053  3.816  4.575  5.578    12  3.074  3.571  4.404  5.226  6.304    13  3.565  4.107  5.009  5.892  7.042    14  4.075  4.660  5.629  6.571  7.790    15  4.601  5.229  6.262  7.261  8.547    16  5.142  5.812  6.908  7.962  9.312    17  5.697  6.408  7.564  8.672  10.085    18  6.265  7.015  8.231  9.390  10.865    19  6.844  7.633  8.907  10.117  11.651    20  7.434  8.260  9.591  10.851  12.443    21  8.034  8.897  10.283  11.591  13.240    22  8.643  9.542  10.982  12.338  14.041    23  9.260  10.196  11.689  13.091  14.848    24  9.886  10.856  12.401  13.848  15.659    25  10.520  11.524  13.120  14.611  16.473    26  11.160  12.198  13.844  15.379  17.292    27  11.808  12.879  14.573  16.151  18.114    28  12.461  13.565  15.308  16.928  18.939    29  13.121  14.256  16.047  17.708  19.768    30  13.787  14.953  16.791  18.493  20.599    40  20.707  22.164  24.433  26.509  29.051    60  35.534  37.485  40.482  43.188  46.459    80  51.172  53.540  57.153  60.391  64.278    100  67.328  70.065  74.222  77.929  82.358      Columns for smaller right-tail areas for the distribution    df         1  2.706  3.841  5.024  6.635  7.879    2  4.605  5.991  7.378  9.210  10.597    3  6.251  7.815  9.348  11.345  12.838    4  7.779  9.488  11.143  13.277  14.860    5  9.236  11.070  12.833  15.086  16.750    6  10.645  12.592  14.449  16.812  18.548    7  12.017  14.067  16.013  18.475  20.278    8  13.362  15.507  17.535  20.090  21.955    9  14.684  16.919  19.023  21.666  23.589    10  15.987  18.307  20.483  23.209  25.188    11  17.275  19.675  21.920  24.725  26.757    12  18.549  21.026  23.337  26.217  28.300    13  19.812  22.362  24.736  27.688  29.819    14  21.064  23.685  26.119  29.141  31.319    15  22.307  24.996  27.488  30.578  32.801    16  23.542  26.296  28.845  32.000  34.267    17  24.769  27.587  30.191  33.409  35.718    18  25.989  28.869  31.526  34.805  37.156    19  27.204  30.144  32.852  36.191  38.582    20  28.412  31.410  34.170  37.566  39.997    21  29.615  32.671  35.479  38.932  41.401    22  30.813  33.924  36.781  40.289  42.796    23  32.007  35.172  38.076  41.638  44.181    24  33.196  36.415  39.364  42.980  45.559    25  34.382  37.652  40.646  44.314  46.928    26  35.563  38.885  41.923  45.642  48.290    27  36.741  40.113  43.195  46.963  49.645    28  37.916  41.337  44.461  48.278  50.993    29  39.087  42.557  45.722  49.588  52.336    30  40.256  43.773  46.979  50.892  53.672    40  51.805  55.758  59.342  63.691  66.766    60  74.397  79.082  83.298  88.379  91.952    80  96.578  101.879  106.629  112.329  116.321    100  118.498  124.342  129.561  135.807  140.169     "
},
{
  "id": "app-chi-square-table-2",
  "level": "2",
  "url": "app-chi-square-table.html#app-chi-square-table-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chi-square distribution appendices chi-square table "
},
{
  "id": "tbl-chi-square-critical-values-left",
  "level": "2",
  "url": "app-chi-square-table.html#tbl-chi-square-critical-values-left",
  "type": "Table",
  "number": "D.0.1",
  "title": "Columns for larger right-tail areas for the <span class=\"process-math\">\\(\\chi^2\\)<\/span> distribution",
  "body": " Columns for larger right-tail areas for the distribution    df         1  0.000  0.000  0.001  0.004  0.016    2  0.010  0.020  0.051  0.103  0.211    3  0.072  0.115  0.216  0.352  0.584    4  0.207  0.297  0.484  0.711  1.064    5  0.412  0.554  0.831  1.145  1.610    6  0.676  0.872  1.237  1.635  2.204    7  0.989  1.239  1.690  2.167  2.833    8  1.344  1.646  2.180  2.733  3.490    9  1.735  2.088  2.700  3.325  4.168    10  2.156  2.558  3.247  3.940  4.865    11  2.603  3.053  3.816  4.575  5.578    12  3.074  3.571  4.404  5.226  6.304    13  3.565  4.107  5.009  5.892  7.042    14  4.075  4.660  5.629  6.571  7.790    15  4.601  5.229  6.262  7.261  8.547    16  5.142  5.812  6.908  7.962  9.312    17  5.697  6.408  7.564  8.672  10.085    18  6.265  7.015  8.231  9.390  10.865    19  6.844  7.633  8.907  10.117  11.651    20  7.434  8.260  9.591  10.851  12.443    21  8.034  8.897  10.283  11.591  13.240    22  8.643  9.542  10.982  12.338  14.041    23  9.260  10.196  11.689  13.091  14.848    24  9.886  10.856  12.401  13.848  15.659    25  10.520  11.524  13.120  14.611  16.473    26  11.160  12.198  13.844  15.379  17.292    27  11.808  12.879  14.573  16.151  18.114    28  12.461  13.565  15.308  16.928  18.939    29  13.121  14.256  16.047  17.708  19.768    30  13.787  14.953  16.791  18.493  20.599    40  20.707  22.164  24.433  26.509  29.051    60  35.534  37.485  40.482  43.188  46.459    80  51.172  53.540  57.153  60.391  64.278    100  67.328  70.065  74.222  77.929  82.358    "
},
{
  "id": "tbl-chi-square-critical-values-right",
  "level": "2",
  "url": "app-chi-square-table.html#tbl-chi-square-critical-values-right",
  "type": "Table",
  "number": "D.0.2",
  "title": "Columns for smaller right-tail areas for the <span class=\"process-math\">\\(\\chi^2\\)<\/span> distribution",
  "body": " Columns for smaller right-tail areas for the distribution    df         1  2.706  3.841  5.024  6.635  7.879    2  4.605  5.991  7.378  9.210  10.597    3  6.251  7.815  9.348  11.345  12.838    4  7.779  9.488  11.143  13.277  14.860    5  9.236  11.070  12.833  15.086  16.750    6  10.645  12.592  14.449  16.812  18.548    7  12.017  14.067  16.013  18.475  20.278    8  13.362  15.507  17.535  20.090  21.955    9  14.684  16.919  19.023  21.666  23.589    10  15.987  18.307  20.483  23.209  25.188    11  17.275  19.675  21.920  24.725  26.757    12  18.549  21.026  23.337  26.217  28.300    13  19.812  22.362  24.736  27.688  29.819    14  21.064  23.685  26.119  29.141  31.319    15  22.307  24.996  27.488  30.578  32.801    16  23.542  26.296  28.845  32.000  34.267    17  24.769  27.587  30.191  33.409  35.718    18  25.989  28.869  31.526  34.805  37.156    19  27.204  30.144  32.852  36.191  38.582    20  28.412  31.410  34.170  37.566  39.997    21  29.615  32.671  35.479  38.932  41.401    22  30.813  33.924  36.781  40.289  42.796    23  32.007  35.172  38.076  41.638  44.181    24  33.196  36.415  39.364  42.980  45.559    25  34.382  37.652  40.646  44.314  46.928    26  35.563  38.885  41.923  45.642  48.290    27  36.741  40.113  43.195  46.963  49.645    28  37.916  41.337  44.461  48.278  50.993    29  39.087  42.557  45.722  49.588  52.336    30  40.256  43.773  46.979  50.892  53.672    40  51.805  55.758  59.342  63.691  66.766    60  74.397  79.082  83.298  88.379  91.952    80  96.578  101.879  106.629  112.329  116.321    100  118.498  124.342  129.561  135.807  140.169    "
},
{
  "id": "sec-f-alpha-005",
  "level": "1",
  "url": "sec-f-alpha-005.html",
  "type": "Section",
  "number": "E.1",
  "title": "Right-Tail Area 0.05",
  "body": " Right-Tail Area 0.05   Critical values for with numerator degrees of freedom equal to 1, 2, 3, 4, 5     1  2  3  4  5     161.448  199.500  215.707  224.583  230.162     18.513  19.000  19.164  19.247  19.296     10.128  9.552  9.277  9.117  9.013     7.709  6.944  6.591  6.388  6.256     6.608  5.786  5.409  5.192  5.050     5.987  5.143  4.757  4.534  4.387     5.591  4.737  4.347  4.120  3.972     5.318  4.459  4.066  3.838  3.687     5.117  4.256  3.863  3.633  3.482     4.965  4.103  3.708  3.478  3.326     4.747  3.885  3.490  3.259  3.106     4.543  3.682  3.287  3.056  2.901     4.351  3.493  3.098  2.866  2.711     4.260  3.403  3.009  2.776  2.621     4.171  3.316  2.922  2.690  2.534     4.085  3.232  2.839  2.606  2.449     4.001  3.150  2.758  2.525  2.368     3.920  3.072  2.680  2.447  2.290     3.841  2.996  2.605  2.372  2.214      Critical values for with numerator degrees of freedom equal to 6, 7, 8, 9, 10     6  7  8  9  10     233.986  236.768  238.883  240.543  241.882     19.330  19.353  19.371  19.385  19.396     8.941  8.887  8.845  8.812  8.786     6.163  6.094  6.041  5.999  5.964     4.950  4.876  4.818  4.772  4.735     4.284  4.207  4.147  4.099  4.060     3.866  3.787  3.726  3.677  3.637     3.581  3.500  3.438  3.388  3.347     3.374  3.293  3.230  3.179  3.137     3.217  3.135  3.072  3.020  2.978     2.996  2.913  2.849  2.796  2.753     2.790  2.707  2.641  2.588  2.544     2.599  2.514  2.447  2.393  2.348     2.508  2.423  2.355  2.300  2.255     2.421  2.334  2.266  2.211  2.165     2.336  2.249  2.180  2.124  2.077     2.254  2.167  2.097  2.040  1.993     2.175  2.087  2.016  1.959  1.910     2.099  2.010  1.938  1.880  1.831      Critical values for with numerator degrees of freedom equal to 12, 15, 20, 24, 30, 40, 60, 120     12  15  20  24  30  40  60  120     243.906  245.950  248.013  249.052  250.095  251.143  252.196  253.253     19.413  19.429  19.446  19.454  19.462  19.471  19.479  19.487     8.745  8.703  8.660  8.639  8.617  8.594  8.572  8.549     5.912  5.858  5.803  5.774  5.746  5.717  5.688  5.658     4.678  4.619  4.558  4.527  4.496  4.464  4.431  4.398     4.000  3.938  3.874  3.841  3.808  3.774  3.740  3.705     3.575  3.511  3.445  3.410  3.376  3.340  3.304  3.267     3.284  3.218  3.150  3.115  3.079  3.043  3.005  2.967     3.073  3.006  2.936  2.900  2.864  2.826  2.787  2.748     2.913  2.845  2.774  2.737  2.700  2.661  2.621  2.580     2.687  2.617  2.544  2.505  2.466  2.426  2.384  2.341     2.475  2.403  2.328  2.288  2.247  2.204  2.160  2.114     2.278  2.203  2.124  2.082  2.039  1.994  1.946  1.896     2.183  2.108  2.027  1.984  1.939  1.892  1.842  1.790     2.092  2.015  1.932  1.887  1.841  1.792  1.740  1.683     2.003  1.924  1.839  1.793  1.744  1.693  1.637  1.577     1.917  1.836  1.748  1.700  1.649  1.594  1.534  1.467     1.834  1.750  1.659  1.608  1.554  1.495  1.429  1.352     1.752  1.666  1.571  1.517  1.459  1.394  1.318  1.221     "
},
{
  "id": "tbl-f-alpha-005-g1a",
  "level": "2",
  "url": "sec-f-alpha-005.html#tbl-f-alpha-005-g1a",
  "type": "Table",
  "number": "E.1.1",
  "title": "Critical values for <span class=\"process-math\">\\(\\alpha=0.05\\)<\/span> with numerator degrees of freedom <span class=\"process-math\">\\(d_1\\)<\/span> equal to 1, 2, 3, 4, 5",
  "body": " Critical values for with numerator degrees of freedom equal to 1, 2, 3, 4, 5     1  2  3  4  5     161.448  199.500  215.707  224.583  230.162     18.513  19.000  19.164  19.247  19.296     10.128  9.552  9.277  9.117  9.013     7.709  6.944  6.591  6.388  6.256     6.608  5.786  5.409  5.192  5.050     5.987  5.143  4.757  4.534  4.387     5.591  4.737  4.347  4.120  3.972     5.318  4.459  4.066  3.838  3.687     5.117  4.256  3.863  3.633  3.482     4.965  4.103  3.708  3.478  3.326     4.747  3.885  3.490  3.259  3.106     4.543  3.682  3.287  3.056  2.901     4.351  3.493  3.098  2.866  2.711     4.260  3.403  3.009  2.776  2.621     4.171  3.316  2.922  2.690  2.534     4.085  3.232  2.839  2.606  2.449     4.001  3.150  2.758  2.525  2.368     3.920  3.072  2.680  2.447  2.290     3.841  2.996  2.605  2.372  2.214    "
},
{
  "id": "tbl-f-alpha-005-g1b",
  "level": "2",
  "url": "sec-f-alpha-005.html#tbl-f-alpha-005-g1b",
  "type": "Table",
  "number": "E.1.2",
  "title": "Critical values for <span class=\"process-math\">\\(\\alpha=0.05\\)<\/span> with numerator degrees of freedom <span class=\"process-math\">\\(d_1\\)<\/span> equal to 6, 7, 8, 9, 10",
  "body": " Critical values for with numerator degrees of freedom equal to 6, 7, 8, 9, 10     6  7  8  9  10     233.986  236.768  238.883  240.543  241.882     19.330  19.353  19.371  19.385  19.396     8.941  8.887  8.845  8.812  8.786     6.163  6.094  6.041  5.999  5.964     4.950  4.876  4.818  4.772  4.735     4.284  4.207  4.147  4.099  4.060     3.866  3.787  3.726  3.677  3.637     3.581  3.500  3.438  3.388  3.347     3.374  3.293  3.230  3.179  3.137     3.217  3.135  3.072  3.020  2.978     2.996  2.913  2.849  2.796  2.753     2.790  2.707  2.641  2.588  2.544     2.599  2.514  2.447  2.393  2.348     2.508  2.423  2.355  2.300  2.255     2.421  2.334  2.266  2.211  2.165     2.336  2.249  2.180  2.124  2.077     2.254  2.167  2.097  2.040  1.993     2.175  2.087  2.016  1.959  1.910     2.099  2.010  1.938  1.880  1.831    "
},
{
  "id": "tbl-f-alpha-005-g2",
  "level": "2",
  "url": "sec-f-alpha-005.html#tbl-f-alpha-005-g2",
  "type": "Table",
  "number": "E.1.3",
  "title": "Critical values for <span class=\"process-math\">\\(\\alpha=0.05\\)<\/span> with numerator degrees of freedom <span class=\"process-math\">\\(d_1\\)<\/span> equal to 12, 15, 20, 24, 30, 40, 60, 120",
  "body": " Critical values for with numerator degrees of freedom equal to 12, 15, 20, 24, 30, 40, 60, 120     12  15  20  24  30  40  60  120     243.906  245.950  248.013  249.052  250.095  251.143  252.196  253.253     19.413  19.429  19.446  19.454  19.462  19.471  19.479  19.487     8.745  8.703  8.660  8.639  8.617  8.594  8.572  8.549     5.912  5.858  5.803  5.774  5.746  5.717  5.688  5.658     4.678  4.619  4.558  4.527  4.496  4.464  4.431  4.398     4.000  3.938  3.874  3.841  3.808  3.774  3.740  3.705     3.575  3.511  3.445  3.410  3.376  3.340  3.304  3.267     3.284  3.218  3.150  3.115  3.079  3.043  3.005  2.967     3.073  3.006  2.936  2.900  2.864  2.826  2.787  2.748     2.913  2.845  2.774  2.737  2.700  2.661  2.621  2.580     2.687  2.617  2.544  2.505  2.466  2.426  2.384  2.341     2.475  2.403  2.328  2.288  2.247  2.204  2.160  2.114     2.278  2.203  2.124  2.082  2.039  1.994  1.946  1.896     2.183  2.108  2.027  1.984  1.939  1.892  1.842  1.790     2.092  2.015  1.932  1.887  1.841  1.792  1.740  1.683     2.003  1.924  1.839  1.793  1.744  1.693  1.637  1.577     1.917  1.836  1.748  1.700  1.649  1.594  1.534  1.467     1.834  1.750  1.659  1.608  1.554  1.495  1.429  1.352     1.752  1.666  1.571  1.517  1.459  1.394  1.318  1.221    "
},
{
  "id": "sec-f-alpha-001",
  "level": "1",
  "url": "sec-f-alpha-001.html",
  "type": "Section",
  "number": "E.2",
  "title": "Right-Tail Area 0.01",
  "body": " Right-Tail Area 0.01   Critical values for with numerator degrees of freedom equal to 1, 2, 3, 4, 5     1  2  3  4  5     4052.181  4999.500  5403.352  5624.583  5763.650     98.503  99.000  99.166  99.249  99.299     34.116  30.817  29.457  28.710  28.237     21.198  18.000  16.694  15.977  15.522     16.258  13.274  12.060  11.392  10.967     13.745  10.925  9.780  9.148  8.746     12.246  9.547  8.451  7.847  7.460     11.259  8.649  7.591  7.006  6.632     10.561  8.022  6.992  6.422  6.057     10.044  7.559  6.552  5.994  5.636     9.330  6.927  5.953  5.412  5.064     8.683  6.359  5.417  4.893  4.556     8.096  5.849  4.938  4.431  4.103     7.823  5.614  4.718  4.218  3.895     7.562  5.390  4.510  4.018  3.699     7.314  5.179  4.313  3.828  3.514     7.077  4.977  4.126  3.649  3.339     6.851  4.787  3.949  3.480  3.174     6.635  4.605  3.782  3.319  3.017      Critical values for with numerator degrees of freedom equal to 6, 7, 8, 9, 10     6  7  8  9  10     5858.986  5928.356  5981.070  6022.473  6055.847     99.333  99.356  99.374  99.388  99.399     27.911  27.672  27.489  27.345  27.229     15.207  14.976  14.799  14.659  14.546     10.672  10.456  10.289  10.158  10.051     8.466  8.260  8.102  7.976  7.874     7.191  6.993  6.840  6.719  6.620     6.371  6.178  6.029  5.911  5.814     5.802  5.613  5.467  5.351  5.257     5.386  5.200  5.057  4.942  4.849     4.821  4.640  4.499  4.388  4.296     4.318  4.142  4.004  3.895  3.805     3.871  3.699  3.564  3.457  3.368     3.667  3.496  3.363  3.256  3.168     3.473  3.304  3.173  3.067  2.979     3.291  3.124  2.993  2.888  2.801     3.119  2.953  2.823  2.718  2.632     2.956  2.792  2.663  2.559  2.472     2.802  2.639  2.511  2.407  2.321      Critical values for with numerator degrees of freedom equal to 12, 15, 20, 24, 30, 40, 60, 120     12  15  20  24  30  40  60  120     6106.321  6157.285  6208.730  6234.631  6260.649  6286.782  6313.030  6339.391     99.416  99.433  99.449  99.458  99.466  99.474  99.482  99.491     27.052  26.872  26.690  26.598  26.505  26.411  26.316  26.221     14.374  14.198  14.020  13.929  13.838  13.745  13.652  13.558     9.888  9.722  9.553  9.466  9.379  9.291  9.202  9.112     7.718  7.559  7.396  7.313  7.229  7.143  7.057  6.969     6.469  6.314  6.155  6.074  5.992  5.908  5.824  5.737     5.667  5.515  5.359  5.279  5.198  5.116  5.032  4.946     5.111  4.962  4.808  4.729  4.649  4.567  4.483  4.398     4.706  4.558  4.405  4.327  4.247  4.165  4.082  3.996     4.155  4.010  3.858  3.780  3.701  3.619  3.535  3.449     3.666  3.522  3.372  3.294  3.214  3.132  3.047  2.959     3.231  3.088  2.938  2.859  2.778  2.695  2.608  2.517     3.032  2.889  2.738  2.659  2.577  2.492  2.403  2.310     2.843  2.700  2.549  2.469  2.386  2.299  2.208  2.111     2.665  2.522  2.369  2.288  2.203  2.114  2.019  1.917     2.496  2.352  2.198  2.115  2.028  1.936  1.836  1.726     2.336  2.192  2.035  1.950  1.860  1.763  1.656  1.533     2.185  2.039  1.878  1.791  1.696  1.592  1.473  1.325     "
},
{
  "id": "tbl-f-alpha-001-g1a",
  "level": "2",
  "url": "sec-f-alpha-001.html#tbl-f-alpha-001-g1a",
  "type": "Table",
  "number": "E.2.1",
  "title": "Critical values for <span class=\"process-math\">\\(\\alpha=0.01\\)<\/span> with numerator degrees of freedom <span class=\"process-math\">\\(d_1\\)<\/span> equal to 1, 2, 3, 4, 5",
  "body": " Critical values for with numerator degrees of freedom equal to 1, 2, 3, 4, 5     1  2  3  4  5     4052.181  4999.500  5403.352  5624.583  5763.650     98.503  99.000  99.166  99.249  99.299     34.116  30.817  29.457  28.710  28.237     21.198  18.000  16.694  15.977  15.522     16.258  13.274  12.060  11.392  10.967     13.745  10.925  9.780  9.148  8.746     12.246  9.547  8.451  7.847  7.460     11.259  8.649  7.591  7.006  6.632     10.561  8.022  6.992  6.422  6.057     10.044  7.559  6.552  5.994  5.636     9.330  6.927  5.953  5.412  5.064     8.683  6.359  5.417  4.893  4.556     8.096  5.849  4.938  4.431  4.103     7.823  5.614  4.718  4.218  3.895     7.562  5.390  4.510  4.018  3.699     7.314  5.179  4.313  3.828  3.514     7.077  4.977  4.126  3.649  3.339     6.851  4.787  3.949  3.480  3.174     6.635  4.605  3.782  3.319  3.017    "
},
{
  "id": "tbl-f-alpha-001-g1b",
  "level": "2",
  "url": "sec-f-alpha-001.html#tbl-f-alpha-001-g1b",
  "type": "Table",
  "number": "E.2.2",
  "title": "Critical values for <span class=\"process-math\">\\(\\alpha=0.01\\)<\/span> with numerator degrees of freedom <span class=\"process-math\">\\(d_1\\)<\/span> equal to 6, 7, 8, 9, 10",
  "body": " Critical values for with numerator degrees of freedom equal to 6, 7, 8, 9, 10     6  7  8  9  10     5858.986  5928.356  5981.070  6022.473  6055.847     99.333  99.356  99.374  99.388  99.399     27.911  27.672  27.489  27.345  27.229     15.207  14.976  14.799  14.659  14.546     10.672  10.456  10.289  10.158  10.051     8.466  8.260  8.102  7.976  7.874     7.191  6.993  6.840  6.719  6.620     6.371  6.178  6.029  5.911  5.814     5.802  5.613  5.467  5.351  5.257     5.386  5.200  5.057  4.942  4.849     4.821  4.640  4.499  4.388  4.296     4.318  4.142  4.004  3.895  3.805     3.871  3.699  3.564  3.457  3.368     3.667  3.496  3.363  3.256  3.168     3.473  3.304  3.173  3.067  2.979     3.291  3.124  2.993  2.888  2.801     3.119  2.953  2.823  2.718  2.632     2.956  2.792  2.663  2.559  2.472     2.802  2.639  2.511  2.407  2.321    "
},
{
  "id": "tbl-f-alpha-001-g2",
  "level": "2",
  "url": "sec-f-alpha-001.html#tbl-f-alpha-001-g2",
  "type": "Table",
  "number": "E.2.3",
  "title": "Critical values for <span class=\"process-math\">\\(\\alpha=0.01\\)<\/span> with numerator degrees of freedom <span class=\"process-math\">\\(d_1\\)<\/span> equal to 12, 15, 20, 24, 30, 40, 60, 120",
  "body": " Critical values for with numerator degrees of freedom equal to 12, 15, 20, 24, 30, 40, 60, 120     12  15  20  24  30  40  60  120     6106.321  6157.285  6208.730  6234.631  6260.649  6286.782  6313.030  6339.391     99.416  99.433  99.449  99.458  99.466  99.474  99.482  99.491     27.052  26.872  26.690  26.598  26.505  26.411  26.316  26.221     14.374  14.198  14.020  13.929  13.838  13.745  13.652  13.558     9.888  9.722  9.553  9.466  9.379  9.291  9.202  9.112     7.718  7.559  7.396  7.313  7.229  7.143  7.057  6.969     6.469  6.314  6.155  6.074  5.992  5.908  5.824  5.737     5.667  5.515  5.359  5.279  5.198  5.116  5.032  4.946     5.111  4.962  4.808  4.729  4.649  4.567  4.483  4.398     4.706  4.558  4.405  4.327  4.247  4.165  4.082  3.996     4.155  4.010  3.858  3.780  3.701  3.619  3.535  3.449     3.666  3.522  3.372  3.294  3.214  3.132  3.047  2.959     3.231  3.088  2.938  2.859  2.778  2.695  2.608  2.517     3.032  2.889  2.738  2.659  2.577  2.492  2.403  2.310     2.843  2.700  2.549  2.469  2.386  2.299  2.208  2.111     2.665  2.522  2.369  2.288  2.203  2.114  2.019  1.917     2.496  2.352  2.198  2.115  2.028  1.936  1.836  1.726     2.336  2.192  2.035  1.950  1.860  1.763  1.656  1.533     2.185  2.039  1.878  1.791  1.696  1.592  1.473  1.325    "
},
{
  "id": "backmatter-8",
  "level": "1",
  "url": "backmatter-8.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
