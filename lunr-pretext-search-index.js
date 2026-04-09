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
  "body": " Classifying Data  A useful way to organize the main data types is to think of them as a classification tree. We first decide whether the data is qualitative or quantitative. Then we refine the classification one more step.    Qualitative data data qualitative , also called categorical data data categorical , records labels, names, or categories.   Nominal data data nominal : categories with no natural order.  Ordinal data data ordinal : categories with a meaningful order, but without equal numerical gaps.     Quantitative data data quantitative , also called numerical data data numerical , records counts or measurements.   Discrete data data discrete : values obtained by counting.  Continuous data data continuous : values obtained by measuring.     This tree is simple, but it is powerful. Once we know where a variable belongs, we already know a lot about how to describe it. Category labels are usually summarized by counts or percentages, while numerical data can often be summarized by averages, spreads, and graphs built around number lines.   Gym Check-In Data  A gym records each member's membership plan, locker preference, number of visits this month, and time spent on the treadmill today. The membership plan is qualitative because it is a category label. Locker preference such as upper, middle, or lower is qualitative and ordinal because the choices have an order. The number of visits is quantitative and discrete because it is counted. Time spent on the treadmill is quantitative and continuous because it is measured.    Online Store Data  An online store keeps track of payment method, customer satisfaction rating, number of items in an order, and delivery time in hours. Payment method is nominal. Customer satisfaction on a five-star scale is ordinal. Number of items is discrete. Delivery time is continuous.    Checkpoint  Classify each variable as nominal, ordinal, discrete, or continuous: type of housing, finish level in a video game (beginner, intermediate, advanced), number of classes missed, and amount of sleep last night.   Qualitative data answers questions like “Which group?” or “What kind?” Quantitative data answers questions like “How many?” or “How much?” Within qualitative data, nominal and ordinal variables differ by whether order matters. Within quantitative data, discrete and continuous variables differ by whether the values arise from counting or measuring.   Nominal examples: browser type, favorite fruit, blood type, and airline carrier.  Ordinal examples: hotel ratings, course grades, pain level, and military rank.  Discrete examples: number of logins, goals scored, books checked out, and children in a family.  Continuous examples: rainfall, waiting time, blood pressure, and distance run.    Hospital Triage  In an emergency room, a patient's triage level might be coded as immediate, urgent, less urgent, or nonurgent. That variable is ordinal because the levels have a clear order. The patient's pulse rate is quantitative. If it is recorded as beats per minute, it is usually treated as discrete because it is based on a count. The patient's body mass is continuous because it is measured.    Checkpoint  A music app records subscription type, playlist mood label, number of songs skipped in a session, and total listening time. Classify each variable as nominal, ordinal, discrete, or continuous.   "
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
  "body": " Levels of Measurement  The four traditional levels of measurement measurement levels are nominal, ordinal, interval, and ratio. These levels tell us not only whether the data is categorical or numerical, but also how much information the values carry.  The nominal scale measurement nominal scale groups observations into categories with no order. The ordinal scale measurement ordinal scale places observations in order, but the differences between categories are not measured evenly. The interval scale measurement interval scale has equal intervals, but no true zero, so differences are meaningful while ratios are not. The ratio scale measurement ratio scale has equal intervals and a true zero, so both differences and ratios are meaningful.   Comparing Temperature and Length  Temperature measured in Celsius is interval data. The difference between 10 degrees and 20 degrees is the same size as the difference between 20 degrees and 30 degrees, but 20 degrees Celsius is not twice as hot as 10 degrees Celsius because zero does not mean the complete absence of temperature. By contrast, length is ratio data: 10 feet really is twice as long as 5 feet, and 0 feet means no length at all.    Checkpoint  Identify the level of measurement for each variable: jersey number, finishing place in a race, temperature in Fahrenheit, and monthly rent in dollars.   "
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
  "id": "cp-levels-of-measurement",
  "level": "2",
  "url": "sec-levels-of-measurement.html#cp-levels-of-measurement",
  "type": "Checkpoint",
  "number": "1.2.2",
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
  "body": " Frequency Tables and Relative Frequency  A frequency table tables frequency table organizes data by listing each value or category together with its frequency tables frequency , which is the number of times that value occurs. If we divide each frequency by the total number of observations, we get the relative frequency tables relative frequency . Relative frequency tells us the share of the data in each category.   Relative frequency is often written as a decimal, but a percentage is usually easier to read. The relative frequencies in a complete table should add up to , or equivalently to .   How Students Get to Campus  Suppose a class records how 12 students usually travel to campus: auto, auto, metro, bike, auto, walk, metro, auto, bike, walk, metro, auto. A frequency table for this data is shown in .    Frequency and relative frequency for commuting to campus    Mode of transportation  Frequency  Relative frequency    Auto  5  or    Metro  3  or    Bike  2  or    Walk  2  or     This table says more than the raw list did. We can immediately see that auto is the most common commuting method, and we can compare categories with either counts or percentages. If the class size changed next semester, the percentages would still make comparison easy.  Sometimes a variable has many possible values, or it is measured on a continuous scale. In that situation a row for every single value would not be very useful. Instead we group nearby values into class intervals tables class interval . A table built from intervals is called a grouped frequency table tables grouped frequency table .   Customer Wait Times  A coffee shop records the waiting time, in minutes, for 50 customers during a busy hour. Rather than listing every separate time, the manager groups the data into intervals. The grouped frequency table appears in .    Grouped frequency table for customer wait times    Wait time (minutes)  Frequency  Relative frequency     6  or     14  or     18  or     9  or     3  or     From this table we can see that the most common waiting times fall in the interval from 4 to 6 minutes. We can also say that of the customers waited between 4 and 6 minutes, and only waited between 8 and 10 minutes.  Frequency tables are simple, but they do a lot of work. They help us summarize the data, compare categories, and prepare for the graphs we will make next.  "
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
  "id": "sec-frequency-tables-8",
  "level": "2",
  "url": "sec-frequency-tables.html#sec-frequency-tables-8",
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
  "body": " Graphs for Displaying Data  Graphs are often faster to read than tables because they turn numerical information into shape and height. Different graphs are useful for different kinds of data. A dot plot graphs dot plot works well for small sets of discrete numerical data. A bar chart graphs bar chart is good for comparing categories. A stem-and-leaf plot graphs stem-and-leaf plot keeps the original data values visible. A histogram graphs histogram and a frequency polygon graphs frequency polygon are especially useful for grouped quantitative data.   A Dot Plot of Siblings  Suppose 12 students report the number of siblings they have: 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4. The dot plot in stacks one dot for each student above the corresponding number of siblings.    Dot plot for number of siblings   A dot plot with sibling counts from 0 through 4. There is one dot above 0, three above 1, three above 2, three above 3, and two above 4.  The horizontal axis is labeled Number of siblings and is marked at 0, 1, 2, 3, and 4. One dot is stacked above 0. Three dots are stacked above 1. Three dots are stacked above 2. Three dots are stacked above 3. Two dots are stacked above 4. The tallest stacks occur at 1, 2, and 3, each with frequency 3.     A dot plot is compact and honest. It shows every observation while still making the distribution easy to read. For small data sets, that is a nice combination.  For categorical data, a bar chart is usually the better choice. The categories are placed on one axis, and the height of each bar shows its frequency or relative frequency.   Bar chart for commuting to campus   A vertical bar chart with four categories: Auto at height 5, Metro at height 3, Bike at height 2, and Walk at height 2.  The horizontal axis lists Auto, Metro, Bike, and Walk. The vertical axis is labeled Frequency and runs from 0 to 6. The Auto bar reaches 5, the Metro bar reaches 3, and the Bike and Walk bars each reach 2. Auto is the tallest bar.     The bar chart in shows the same information as , but now the comparisons are visual. We can tell right away that auto is the most common category and that bike and walk are tied.   A Stem-and-Leaf Plot  Consider these quiz scores: 72, 74, 76, 78, 80, 81, 83, 83, 85, 88, 91, 94. A stem-and-leaf plot separates each score into a stem and a leaf. In this case the tens digits are stems and the ones digits are leaves, as shown in .    Stem-and-leaf plot for quiz scores    Stem  Leaves    7  2, 4, 6, 8    8  0, 1, 3, 3, 5, 8    9  1, 4     The key idea is that the plot still contains the original data values. For example, the leaf 3 on stem 8 represents a score of 83. A stem-and-leaf plot is handy when the data set is not too large and you want both a picture and the exact values.  When the data is grouped into intervals, a histogram is often the natural graph. The bars in a histogram touch because the intervals sit next to each other on a number line. The histogram in uses the grouped wait-time data from .   Histogram for customer wait times   A histogram with five touching bars for the intervals 0 to 2, 2 to 4, 4 to 6, 6 to 8, and 8 to 10 minutes. Their heights are 6, 14, 18, 9, and 3.  The horizontal axis is labeled Wait time in minutes and is marked at 0, 2, 4, 6, 8, and 10. The vertical axis is labeled Frequency and runs from 0 to 20. Five adjacent bars represent the intervals [0,2), [2,4), [4,6), [6,8), and [8,10). Their heights are 6, 14, 18, 9, and 3 respectively. The tallest bar is the interval from 4 to 6 minutes.     A frequency polygon graphs frequency polygon is built from the same grouped data, but instead of bars we plot the class midpoints graphs midpoint against the frequencies and join the points with line segments. This is especially helpful when we want to compare shapes or place more than one distribution on the same set of axes.   Frequency polygon for customer wait times   A line graph formed by connecting the points at midpoints 1, 3, 5, 7, and 9 with frequencies 6, 14, 18, 9, and 3, together with zero-frequency endpoints at -1 and 11.  The horizontal axis is labeled Wait time in minutes and the vertical axis is labeled Frequency. A polyline starts at the point (-1,0), rises to (1,6), then to (3,14), peaks at (5,18), drops to (7,9), then to (9,3), and returns to (11,0). The highest point occurs at the midpoint 5, corresponding to the interval from 4 to 6 minutes. The two endpoints lie one class width beyond the first and last class midpoints.     Each graph has its own job. The trick is not to memorize names blindly, but to match the graph to the kind of data you have and the question you want to answer.  "
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
  "body": " Mean, Median, and Mode  The mean summaries arithmetic mean of a data set is what most people call the average. We add the data values and divide by the number of observations.   Here is the size of the data set. The mean uses every value in the set, so it reacts to changes anywhere in the data. It also does not have to be one of the observed data values.   Computing a Mean  Suppose five students report commute times of 12, 15, 18, 20, and 25 minutes. The mean commute time is   So the average commute time is 18 minutes.   The median summaries median is the middle value when the data is listed in order from smallest to largest. If there is an odd number of observations, the median is the single middle value. If there is an even number of observations, the median is the average of the two middle values.   Odd and Even Cases for the Median  For the ordered data set 4, 7, 9, 12, 15, the median is 9 because it is the middle value. For the ordered data set 4, 7, 9, 12, 15, 20, the median is   That second median is not one of the original data values, and that is completely normal.   The mode summaries mode is the value that occurs most often. Unlike the mean and median, the mode must be an actual data value or category. A data set can have one mode, more than one mode, or no mode at all if every value occurs equally often.   One Mode, Two Modes, or No Mode  In the data set 2, 3, 3, 4, 6, the mode is 3 because it appears most often. In the data set red, blue, blue, green, green, there are two modes, blue and green, so the distribution is bimodal summaries bimodal distribution . In the data set 1, 2, 3, 4, each value appears once, so by convention the data set has no mode.   These three measures answer slightly different questions.   The mean balances the whole data set.  The median marks the middle position.  The mode identifies the most common value or category.   Because they capture different ideas of center, they can tell different stories about the same data.   When Mean and Median Pull Apart  Suppose six hourly wages are 16, 17, 18, 18, 19, and 40 dollars. The mean is   while the median is   The high wage of 40 pulls the mean upward, but it does not move the median very much. This is one reason the median is often preferred for income data.   "
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
  "id": "sec-center-from-tables-and-shape",
  "level": "1",
  "url": "sec-center-from-tables-and-shape.html",
  "type": "Section",
  "number": "3.2",
  "title": "Center from Frequency Tables and the Shape of a Distribution",
  "body": " Center from Frequency Tables and the Shape of a Distribution  We can also compute mean, median, and mode from a frequency table. This is helpful when the raw data has already been summarized.  For a frequency table, the mean is a weighted average:   Here is a data value and is its frequency. To find the mode, we look for the value with the highest frequency. To find the median, we locate the middle observation or middle two observations by using the cumulative frequency tables cumulative frequency .   Finding Center from a Frequency Table  A quiz is graded out of 10 points. The results are summarized in .    Quiz scores with frequencies and cumulative frequencies    Score  Frequency   Cumulative frequency    4  2  8  2    5  3  15  5    6  5  30  10    7  4  28  14    8  3  24  17    9  3  27  20     Since the total frequency is , the mean is   The mode is 6 because 6 has the highest frequency. To find the median, we note that the 10th observation is 6 and the 11th observation is 7, so the median is   Frequency tables are also useful because they connect naturally to the overall distribution graphs distribution of the data. When we look at a histogram or similar graph, we often describe the shape as symmetric, skewed right, or skewed left.  A symmetric distribution graphs symmetric distribution has roughly the same shape on the left and right of its center. In a perfectly symmetric distribution, the mean and median are equal.  A distribution is skewed right graphs right-skewed distribution , or positively skewed, if most of the data is on the left and a longer tail stretches to the right. In that case, a few large values tend to pull the mean above the median.  A distribution is skewed left graphs left-skewed distribution , or negatively skewed, if most of the data is on the right and a longer tail stretches to the left. In that case, a few small values tend to pull the mean below the median.   Reading Shape from Mean and Median  A set of apartment rents has mean 1850 dollars and median 1725 dollars. Since the mean is larger than the median, this suggests the distribution is skewed right. That would make sense if most rents are moderate but a few luxury apartments are much more expensive.  This kind of comparison is useful, but it should not replace looking at a graph. In practice, the best way to judge skewness is to inspect a histogram or another graph of the distribution.   So which measure of center should we use? There is no universal winner. The mean is informative when we want every observation to count fully, while the median is often more resistant to extreme values. The mode is especially useful for categorical data or for identifying the most common case.  "
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
  "id": "ex-skewness-interpretation",
  "level": "2",
  "url": "sec-center-from-tables-and-shape.html#ex-skewness-interpretation",
  "type": "Example",
  "number": "3.2.3",
  "title": "Reading Shape from Mean and Median.",
  "body": " Reading Shape from Mean and Median  A set of apartment rents has mean 1850 dollars and median 1725 dollars. Since the mean is larger than the median, this suggests the distribution is skewed right. That would make sense if most rents are moderate but a few luxury apartments are much more expensive.  This kind of comparison is useful, but it should not replace looking at a graph. In practice, the best way to judge skewness is to inspect a histogram or another graph of the distribution.  "
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
  "body": " Quartiles and the Interquartile Range  Quartiles summaries quartiles divide an ordered data set into four parts with about the same number of observations in each part. The first quartile summaries first quartile , written , is the median of the lower half of the data. The second quartile summaries second quartile is the overall median, so is just the median. The third quartile summaries third quartile , written , is the median of the upper half of the data.  In this book we will use the same convention as the lecture notes: if the number of observations is odd, remove the overall median before finding and . If the number of observations is even, split the ordered data set into two equal halves and find the median of each half.   Quartiles for an Odd-Sized Data Set  Consider the ordered data set 4, 6, 7, 9, 10, 12, 15, 18, 20. Since there are 9 values, the median is the fifth value, so . After removing the median, the lower half is 4, 6, 7, 9 and the upper half is 12, 15, 18, 20. Therefore     Quartiles for an Even-Sized Data Set  Now consider the ordered data set 3, 5, 6, 7, 9, 12, 14, 18. Since there are 8 values, the median is   The lower half is 3, 5, 6, 7 and the upper half is 9, 12, 14, 18, so    The interquartile range summaries interquartile range , or IQR summaries IQR , measures the spread of the middle half of the data.   The IQR is useful because it ignores the most extreme observations and focuses on the central 50% of the distribution. In the previous example with and , the IQR is   A small IQR means the middle half of the data is fairly concentrated. A large IQR means the middle half is more spread out.  "
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
  "id": "sec-boxplots-outliers",
  "level": "1",
  "url": "sec-boxplots-outliers.html",
  "type": "Section",
  "number": "4.2",
  "title": "Five-Number Summary, Boxplots, and Outliers",
  "body": " Five-Number Summary, Boxplots, and Outliers  The five-number summary summaries five-number summary of a data set consists of   These five values give a compact description of both center and spread. The minimum and maximum show the full range of the data, the quartiles show the middle structure, and the median marks the center.   A Five-Number Summary  For the ordered data set 3, 5, 6, 7, 9, 12, 14, 18, we found , , and . Since the minimum is 3 and the maximum is 18, the five-number summary is    A boxplot graphs boxplot , also called a box-and-whisker plot graphs box-and-whisker plot , turns the five-number summary into a picture. The box stretches from to , a line inside the box marks the median, and the whiskers extend toward the smallest and largest values.   Boxplot based on the five-number summary 3, 5.5, 8, 13, 18   A horizontal boxplot on a scale from 0 to 20. The left whisker reaches 3, the box runs from 5.5 to 13, the median is marked at 8, and the right whisker reaches 18.  The graphic is a horizontal boxplot with a number line labeled Data value. The left whisker extends from the box to 3. The left edge of the box is at 5.5. A vertical line inside the box marks the median at 8. The right edge of the box is at 13. The right whisker extends to 18. The right side of the box and whisker is longer than the left, suggesting some right-skew.     A boxplot does not show every data value, but it is very good at showing center, spread, and possible asymmetry. If the box and whiskers are roughly balanced on both sides of the median, the distribution may be fairly symmetric. If one side is stretched out more than the other, the distribution may be skewed. A histogram is still the best tool for judging shape in detail, but a boxplot gives a quick summary.  An outlier summaries outlier is a value that does not fit the general pattern of the data. One common rule for identifying possible outliers is the 1.5 times IQR rule summaries 1.5 times IQR rule . First compute the two fences summaries fence :   Any observation below the lower fence or above the upper fence is called a possible outlier according to this rule. The fences themselves are not data values. They are only cutoffs.   Using the 1.5 Times IQR Rule  Suppose a data set has and . Then the IQR is   So the fences are   Any data value less than 0 or greater than 32 would be flagged as a possible outlier.   "
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
  "id": "sec-variance-sd-zscores",
  "level": "1",
  "url": "sec-variance-sd-zscores.html",
  "type": "Section",
  "number": "4.3",
  "title": "Variance, Standard Deviation, and z-Scores",
  "body": " Variance, Standard Deviation, and z-Scores  The IQR is useful, but it only looks at the middle half of the data. Another important family of measures uses every observation and asks how far the data tends to fall from the mean.  The variance summaries variance measures the average squared distance from the mean. For a population, the variance is   where is the population mean and is the population size. The standard deviation summaries standard deviation is the square root of the variance:   The standard deviation is easier to interpret than the variance because it is measured in the same units as the original data.   Comparing Two Small Data Sets  Consider the data sets 1, 2, 3, 4, 5 and 3, 3, 3, 3, 3. Both have mean 3, but they do not have the same spread. The second set has no variation at all, so its standard deviation is 0. The first set has values spread around the mean, so its standard deviation is greater than 0.  This example shows why center alone is not enough. Two distributions can share the same mean and still behave very differently.   When we work with a sample rather than a whole population, we use the sample standard deviation summaries sample standard deviation , written :   The denominator is , not . That adjustment makes a better estimator of the population standard deviation.  The relative standard deviation summaries relative standard deviation , or RSD summaries RSD , compares the standard deviation to the mean:   RSD is useful when we want to compare variation across data sets measured on different scales or with very different means.   Why Relative Standard Deviation Can Help  Suppose one machine fills bottles with mean 500 mL and standard deviation 5 mL, while another fills large containers with mean 2000 mL and standard deviation 12 mL. The second standard deviation is larger in absolute terms, but the first machine has the larger spread relative to its mean because    A z-score summaries standard score , also called a standard score, tells how many standard deviations a value lies above or below the mean:   if we are working with sample data, or   for a population. Positive z-scores are above the mean, negative z-scores are below the mean, and a z-score of 0 means the value is exactly at the mean.   Interpreting a z-Score  A test score of 82 comes from a class with mean 74 and standard deviation 4. The z-score is   This means the score of 82 is 2 standard deviations above the mean.   Z-scores are especially useful for comparing observations from different distributions. They also provide another informal way to flag unusual values. A common rough rule is that values with may deserve a closer look. That rule is not universal, but it is often used as a quick screen.  "
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
  "body": "sample standard deviation summaries sample standard deviation "
},
{
  "id": "sec-variance-sd-zscores-12",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#sec-variance-sd-zscores-12",
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
  "id": "sec-variance-sd-zscores-16",
  "level": "2",
  "url": "sec-variance-sd-zscores.html#sec-variance-sd-zscores-16",
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
  "body": " Scatterplots and Correlation  When each observation comes as a pair of numbers, we often label the two variables and . Usually is the independent variable regression independent variable and is the dependent variable regression dependent variable . That means we use to help explain or predict .  A scatterplot places each data pair as a point in the plane. Once the points are plotted, we look for an overall pattern.   Study Hours and Exam Scores  Suppose we record the hours studied and exam scores for eight students:    Study hours and exam scores    Hours studied  Exam score    1  58    2  62    3  67    4  71    5  76    6  79    7  85    8  88      Scatterplot of study hours and exam scores   A scatterplot with eight points that rise from lower left to upper right, showing a positive linear trend between study hours and exam score.  The horizontal axis is labeled Hours studied and runs from 0 to 9. The vertical axis is labeled Exam score and runs from 50 to 95. The plotted points are approximately at (1,58), (2,62), (3,67), (4,71), (5,76), (6,79), (7,85), and (8,88). The points form a fairly tight upward pattern, indicating a positive linear relationship.     The scatterplot in shows an upward trend. As study time increases, exam score also tends to increase. That is an example of a positive association regression positive association .  In general, a scatterplot may suggest one of three broad patterns.   Positive correlation regression positive correlation : larger values tend to go with larger values.  Negative correlation regression negative correlation : larger values tend to go with smaller values.  No clear correlation regression no correlation : the points do not show a clear upward or downward trend.   A useful visual trick is to mark the point , where is the mean of the -values and is the mean of the -values. The vertical line through and the horizontal line through form a mean cross regression mean cross .  If most of the points lie in the first and third quadrants relative to that cross, then the variables tend to increase together, which suggests positive correlation. If most of the points lie in the second and fourth quadrants, then one variable tends to increase as the other decreases, which suggests negative correlation. If the points are spread more evenly among all four quadrants, the data may have little or no linear correlation.   Using the mean cross to read the direction of correlation   Three small scatterplots side by side. In the first, most points lie in the first and third quadrants relative to the mean cross, showing positive correlation. In the second, most points lie in the second and fourth quadrants, showing negative correlation. In the third, the points are spread around all four quadrants, showing little or no correlation.  The figure contains three scatterplots. Each has a vertical dashed line at x-bar and a horizontal dashed line at y-bar, forming a mean cross. In the left panel, labeled Positive correlation, the points cluster from lower left to upper right, mainly in quadrants one and three relative to the mean cross. In the middle panel, labeled Negative correlation, the points cluster from upper left to lower right, mainly in quadrants two and four. In the right panel, labeled Little or no correlation, the points are scattered around all four quadrants with no clear linear direction.     The mean cross is a quick visual guide, not a substitute for a full scatterplot or the actual value of . Still, it is a nice way to see why positive correlation puts many points in quadrants one and three, while negative correlation puts many points in quadrants two and four.  The correlation coefficient regression correlation coefficient , written , measures the strength and direction of a linear relationship. Its value always satisfies   The sign of gives the direction, and the size of gives the strength.   If , the linear relationship is positive.  If , the linear relationship is negative.  If is close to 0, there is little or no linear relationship.  If is close to 1, the points lie close to a line and the linear relationship is strong.   One common formula for is   In practice, technology usually computes for us. What matters most in an introductory course is the interpretation. Correlation tells us about the strength of a linear pattern, not about cause and effect.   Interpreting Correlation  If a data set has , then it has a strong positive linear relationship. If another data set has , then it has a strong negative linear relationship. If a third data set has , then it has almost no linear relationship.   "
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
  "id": "sec-regression-line",
  "level": "1",
  "url": "sec-regression-line.html",
  "type": "Section",
  "number": "5.2",
  "title": "Regression Lines and Prediction",
  "body": " Regression Lines and Prediction  A linear relation regression linear relation has the form   where is the slope regression slope and is the y-intercept regression y-intercept . If , the line goes up as increases. If , the line goes down as increases.  In real data, the points usually do not lie exactly on a line. Instead we choose a line that fits the pattern as well as possible. That line is called the best-fit line regression best-fit line or regression line regression regression line . Its equation is often written   Here is the predicted value of for a given value of .   Scatterplot with a regression line   A scatterplot of study hours and exam scores together with an upward sloping line that passes through the middle of the points.  The graphic shows the same eight data points as the previous scatterplot. A straight line rises from left to right through the center of the cloud of points. The line represents a regression model that predicts higher scores for larger numbers of study hours.      Using a Regression Equation  Suppose a regression line for study hours and exam score is   If a student studies for 5 hours, the predicted exam score is   So the model predicts a score of about 76.   The slope tells us how much the predicted changes when increases by 1 unit. In the example above, the slope is 4.4, so the model predicts that each additional hour of study is associated with about 4.4 more exam points.  The sign of the slope matches the sign of the correlation coefficient . That is useful, but the two numbers are not the same. The slope measures change in the original units, while is a unit-free measure of linear strength and always stays between and .  Regression is helpful for prediction, but it should be used with care. Predicting for an value inside the range of the observed data is called interpolation regression interpolation . Predicting far outside the observed range is called extrapolation regression extrapolation , and that is usually much less reliable.   Interpolation Versus Extrapolation  If our study-hours data only covers values from 1 to 8 hours, then predicting the score for 6 hours is interpolation. Predicting the score for 20 hours is extrapolation. The line might give a numerical answer, but there is no guarantee that the same pattern continues that far.   "
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
  "body": " Sample Spaces and Events  A random experiment probability random experiment is a process with a known collection of possible outcomes, but the outcome of one trial is not known ahead of time. Flipping a coin, rolling a die, and selecting a student at random are all random experiments.  The set of all possible outcomes is called the sample space probability sample space , usually written . An event probability event is a subset of the sample space.   A Sample Space for a Die Roll  If a fair six-sided die is rolled once, then the sample space is   The event “an even number occurs” is   and the event “a number greater than 4 occurs” is    Once we treat events as sets, we can use ordinary set operations.  The complement probability complement of an event of an event , written , consists of all outcomes in the sample space that are not in .  The union probability union of events  consists of outcomes that are in or in or in both. The intersection probability intersection of events  consists of outcomes that are in both and .   Set Operations with Two Coin Flips  If a coin is flipped twice, then the sample space is   Let be the event “exactly one head occurs,” so . Let be the event “the first flip is a head,” so .  Then    Two events are mutually exclusive probability mutually exclusive events if they cannot happen at the same time. In set language, that means their intersection is empty.   Mutually Exclusive Events  When a die is rolled, the event “the outcome is 2” and the event “the outcome is 5” are mutually exclusive, because no single roll can be both 2 and 5.  On the other hand, the events “the outcome is even” and “the outcome is greater than 3” are not mutually exclusive, because 4 and 6 belong to both events.   "
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
  "id": "sec-probability-rules",
  "level": "1",
  "url": "sec-probability-rules.html",
  "type": "Section",
  "number": "6.2",
  "title": "Probability Rules",
  "body": " Probability Rules  A probability law probability probability law assigns a number to each event . The number measures the chance that the outcome lies in .  Every probability law satisfies three basic facts.   for every event .  .  If and are mutually exclusive, then .   From these facts we get several rules that are used all the time:    Probability with Equally Likely Outcomes  When a fair die is rolled, all six outcomes are equally likely. If , then   If , then   Since , we have    When the individual outcomes are equally likely , the probability of an event is   That shortcut is useful, but it only works in equally likely situations. A loaded die is a good reminder that counting outcomes is not always enough.   A Loaded Die  Suppose a loaded die has the probability distribution shown in .    Probability distribution for a loaded die    Outcome  1  2  3  4  5  6              Let be the event “an odd outcome occurs,” and let .  Then    and since ,   Therefore   Notice what happens here: the event contains two outcomes, but its probability is not . That is why the formula cannot be used unless the outcomes are equally likely.  "
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
  "id": "sec-conditional-probability",
  "level": "1",
  "url": "sec-conditional-probability.html",
  "type": "Section",
  "number": "6.3",
  "title": "Conditional Probability and Independence",
  "body": " Conditional Probability and Independence  Sometimes the probability of an event changes once we learn extra information. That idea leads to conditional probability probability conditional probability .  The probability of given is written . It means the probability that the outcome is in once we already know the outcome is in . If , then   This formula can be rearranged into the multiplication rule probability multiplication rule :    Conditional Probability on a Die Roll  Suppose a fair die is rolled. Let be the event “the outcome is odd,” and let .  Without extra information,   But if we know the outcome is in , then only 1, 3, and 5 are still possible. Among those three odd outcomes, two are in . So   Using the formula gives the same answer:    Two events and are independent probability independent events if knowing that one occurred does not change the probability of the other. In symbols, independence means   which is equivalent to    Checking Independence  Let be the event “the die shows an odd number,” and let be the event “the die shows a number at most 4.”  Then   The intersection is , so   Because   the events are independent.   It is important not to mix up independence and mutual exclusivity. They are different ideas.   Mutually exclusive events cannot happen together.  Independent events can happen together, but one does not affect the probability of the other.   If two events have positive probability and are mutually exclusive, then they cannot be independent, because their intersection has probability 0 while the product is positive.  "
},
{
  "id": "sec-conditional-probability-2",
  "level": "2",
  "url": "sec-conditional-probability.html#sec-conditional-probability-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conditional probability probability conditional probability "
},
{
  "id": "sec-conditional-probability-5",
  "level": "2",
  "url": "sec-conditional-probability.html#sec-conditional-probability-5",
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
  "id": "sec-conditional-probability-8",
  "level": "2",
  "url": "sec-conditional-probability.html#sec-conditional-probability-8",
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
  "id": "ch6-exercises",
  "level": "1",
  "url": "ch6-exercises.html",
  "type": "Exercises",
  "number": "6.4",
  "title": "Exercises",
  "body": " Exercises   A fair die is rolled once. Let and .   Find .  Find .  Find .     A coin is flipped twice.   Write the sample space.  Let be the event “at least one head occurs.” List the outcomes in .  Let be the event “the second flip is tails.” List the outcomes in .     A fair die is rolled once. Find the probability of each event.   The outcome is prime.  The outcome is less than 5.  The outcome is even or greater than 4.     Suppose , , and .   Find .  Find .  Find .     Use .   Find the probability of rolling a number at least 4.  Find the probability of rolling an even number.  Find the probability of rolling a number that is even or at least 4.     A card is drawn from a standard deck of 52 cards. Let be the event “the card is a heart” and let be the event “the card is a face card.”   Find , , and .  Find .  Are and independent? Explain.     Can two events with positive probability be both mutually exclusive and independent? Explain why or why not.   "
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
  "id": "sec-random-variables-pmf",
  "level": "1",
  "url": "sec-random-variables-pmf.html",
  "type": "Section",
  "number": "7.1",
  "title": "Random Variables, CDFs, Expectation, and Variance",
  "body": " Random Variables, CDFs, Expectation, and Variance  A random variable probability random variable is a function that assigns a real number to each outcome in a sample space. We often use a capital letter such as to name a random variable.  A random variable is discrete probability discrete random variable if it takes values in a countable set. It is continuous probability continuous random variable if it can take any value in an interval. In this chapter we focus only on the discrete case.   The Sum of Two Dice  Suppose two fair dice are rolled. The sample space consists of the 36 ordered pairs   Define the random variable by letting be the sum of the two dice. Then , , and the possible values of are    The probability function of a discrete random variable is called its probability distribution function probability probability distribution function . In many statistics books this is also called the probability mass function.   Probability distribution of the sum of two fair dice     2  3  4  5  6  7  8  9  10  11  12                   For example, because four ordered pairs produce a total of 5: , , , and .  Every discrete probability distribution satisfies two basic properties:   for each possible value .  The probabilities add to 1.    The cumulative distribution function probability cumulative distribution function , or CDF probability CDF , of a discrete random variable is defined by   For a discrete random variable, the CDF is found by adding the probabilities of all values up to .   A probability mass function and its corresponding cumulative distribution function   Two graphs shown side by side for the same discrete random variable. The left graph is a bar chart for the probability mass function at x equals 0, 1, 2, and 3 with heights 0.1, 0.3, 0.4, and 0.2. The right graph is a step graph for the cumulative distribution function with levels 0.1, 0.4, 0.8, and 1.0.  The figure has two panels. In the left panel, labeled PMF, a discrete random variable takes the values 0, 1, 2, and 3 with probabilities 0.1, 0.3, 0.4, and 0.2, displayed as separate vertical bars. In the right panel, labeled CDF, the cumulative distribution function starts at 0 to the left of 0, jumps to 0.1 at x equals 0, then to 0.4 at x equals 1, to 0.8 at x equals 2, and to 1.0 at x equals 3. The picture shows that the CDF is built by accumulating the PMF values from left to right.     shows the difference in how these two functions look. The PMF records the probability at each individual value, while the CDF keeps a running total and therefore has a step-like shape for a discrete random variable.   Computing a CDF Value  For the random variable equal to the sum of two fair dice,   Using ,    The CDF and the probability distribution contain the same information. For instance, if 5 is the next possible value after 4, then   The expected value probability expected value , also called the mean probability mean of a random variable , is the long-run average value of a random variable. For a discrete random variable,   If is a continuous random variable with probability density function , then the corresponding definition is   So the basic idea is the same in both cases: expectation is a weighted average, where probabilities play the role of the weights.   Expected Value from a Relative Frequency Table  Suppose the score of a randomly selected student from a class has the distribution shown in .    Probability distribution for a student's score    Score  13  15  16  17  18  19  20               The expected score is   So if we repeatedly select students at random from this class, the long-run average score would settle near 17.3.  The expected value tells us the center of a random variable, but it does not tell us how spread out the values are. For that, we use the variance probability variance of a random variable and the standard deviation probability standard deviation of a random variable .  The variance can be defined in terms of expectation by   The standard deviation is   For a discrete random variable, it is often easiest to compute the variance by first finding and    Variance and Standard Deviation from a Distribution  Using the score distribution in , we already know that .  Now compute   Therefore   and    "
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
  "id": "sec-cdf-expected-value",
  "level": "1",
  "url": "sec-cdf-expected-value.html",
  "type": "Section",
  "number": "7.2",
  "title": "Properties of Expectation and Variance",
  "body": " Properties of Expectation and Variance  The formulas in the previous section tell us how to compute expectation and variance. Now we collect a few properties that are useful much more broadly. These are not specific to discrete random variables.  Expectation is linear. In particular,   and more generally, for constants and ,   Variance behaves differently from expectation. Shifting a random variable does not change its spread, and scaling it by multiplies the variance by :   If and are independent , then their variances add:   This last formula is important enough to remember. Expectation always adds, but variance adds only under extra conditions such as independence.   Using the Properties  Suppose , , , and . Assume and are independent.  Then    and    These properties are handy when units change. For example, converting from meters to centimeters multiplies both the expected value and the standard deviation by 100, but it multiplies the variance by .  "
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
  "body": " Bernoulli Trials and Binomial Coefficients  A Bernoulli trial probability Bernoulli trial is an experiment with exactly two outcomes, which we usually call success and failure . A made free throw versus a missed free throw is one example. A person who does or does not respond to a survey is another.  If a single Bernoulli trial has success probability , then the corresponding Bernoulli random variable probability Bernoulli random variable  is defined by   So and .  Now suppose we repeat the same Bernoulli trial times, independently, with the same success probability each time. Let be the number of successes. Then follows a binomial distribution.  A situation is binomial when these four conditions hold:   There is a fixed number of trials.  Each trial has only two outcomes: success or failure.  The trials are independent.  The probability of success is the same on every trial.    Decide whether each situation can reasonably be modeled by a binomial random variable.   A student guesses on 8 true-false questions and we count the number answered correctly.  Five cards are drawn without replacement from a standard deck and we count the number of hearts.  A basketball player takes 12 free throws and we count the number made, assuming the player's success probability stays the same from shot to shot.    To compute binomial probabilities, we also need the binomial coefficient probability binomial coefficient   which is read “ choose .” It counts the number of ways to choose objects from objects, without regard to order.   Computing a Binomial Coefficient  The number of ways to choose 3 students from a group of 5 is    "
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
  "id": "sec-bernoulli-binomial-10",
  "level": "2",
  "url": "sec-bernoulli-binomial.html#sec-bernoulli-binomial-10",
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
  "body": " Binomial Probabilities and the Cumulative Distribution  If counts the number of successes in independent Bernoulli trials with success probability , then we write   The possible values of are   The probability that exactly successes occur is   This formula makes sense for a simple reason. A particular sequence with exactly successes has probability . Then counts how many such sequences there are.   Exactly Three Goals in Five Penalty Kicks  Suppose a soccer player makes a penalty kick with probability . Let be the number of goals in 5 penalty kicks. Then .  The probability of exactly 3 goals is   Since ,   So the chance of scoring exactly 3 times is about 0.264.    Using the Complement  A factory knows that 2% of the items it produces are defective. Suppose 20 items are selected independently, and let be the number of defective items. Then .  The probability of getting at least one defective item is easier to compute by using the complement:    The cumulative distribution function probability cumulative distribution function , or CDF, of a binomial random variable is   For a binomial random variable, the CDF is found by adding the probabilities from 0 up to .   At Most Three Goals  Continue with . Then   Computing the four terms gives   So the probability of scoring at most 3 goals in 5 kicks is about 0.367.   The CDF is useful because many probability questions can be rewritten in terms of “at most.” For example,   and if , then    A multiple-choice quiz has 6 questions, each with 4 answer choices, and a student guesses on every question. Let be the number answered correctly.   State the values of and .  Write a formula for .  Write a formula for .    "
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
  "id": "sec-binomial-mean-variance",
  "level": "1",
  "url": "sec-binomial-mean-variance.html",
  "type": "Section",
  "number": "8.3",
  "title": "Mean, Variance, and Standard Deviation",
  "body": " Mean, Variance, and Standard Deviation  The binomial distribution is especially nice because its center and spread have simple formulas.  Think of a binomial random variable as a sum of Bernoulli random variables:   where each equals 1 for success and 0 for failure. For one Bernoulli random variable,   Because expectation adds and independent variances add, a binomial random variable satisfies    and therefore the standard deviation probability standard deviation of a binomial distribution is   The mean gives the long-run average number of successes. The standard deviation tells us how much the actual count typically varies around that average.   Free Throws  A player makes free throws with probability . Suppose the player takes 20 free throws, and let be the number made. Then .  The mean number of made shots is   The variance is   so the standard deviation is   In other words, over many such 20-shot sessions, the player would average about 16 made shots, with typical variation of about 1.8 shots.   These formulas are worth remembering because they come up constantly in applications.   If , find , , and .   "
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
  "id": "binom-inline-ex-3",
  "level": "2",
  "url": "sec-binomial-mean-variance.html#binom-inline-ex-3",
  "type": "Checkpoint",
  "number": "8.3.2",
  "title": "",
  "body": " If , find , , and .  "
},
{
  "id": "ch8-exercises",
  "level": "1",
  "url": "ch8-exercises.html",
  "type": "Exercises",
  "number": "8.4",
  "title": "Exercises",
  "body": " Exercises   Decide whether each setting is binomial. If it is, state and .   A fair coin is flipped 12 times and the number of heads is counted.  Four cards are drawn without replacement from a deck and the number of aces is counted.  A machine fills 15 bottles, and the number of bottles that pass inspection is counted, assuming the probability of passing stays the same from bottle to bottle.     Let .   Find .  Find .  Find .     A basketball player makes free throws with probability . If the player takes 6 free throws, what is the probability of making exactly 4 of them?    A quiz has 10 true-false questions, and a student guesses on every question. Let be the number answered correctly.   Find .  Find .  Find .     If , find the mean, variance, and standard deviation.    In a certain town, 18% of households have a dog. Suppose 20 households are selected at random, and let be the number that have a dog.   Find .  Find .  What is the expected number of selected households that have a dog?    "
},
{
  "id": "ch8-ex-1",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-1",
  "type": "Exercise",
  "number": "8.4.1",
  "title": "",
  "body": " Decide whether each setting is binomial. If it is, state and .   A fair coin is flipped 12 times and the number of heads is counted.  Four cards are drawn without replacement from a deck and the number of aces is counted.  A machine fills 15 bottles, and the number of bottles that pass inspection is counted, assuming the probability of passing stays the same from bottle to bottle.   "
},
{
  "id": "ch8-ex-2",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-2",
  "type": "Exercise",
  "number": "8.4.2",
  "title": "",
  "body": " Let .   Find .  Find .  Find .   "
},
{
  "id": "ch8-ex-3",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-3",
  "type": "Exercise",
  "number": "8.4.3",
  "title": "",
  "body": " A basketball player makes free throws with probability . If the player takes 6 free throws, what is the probability of making exactly 4 of them?  "
},
{
  "id": "ch8-ex-4",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-4",
  "type": "Exercise",
  "number": "8.4.4",
  "title": "",
  "body": " A quiz has 10 true-false questions, and a student guesses on every question. Let be the number answered correctly.   Find .  Find .  Find .   "
},
{
  "id": "ch8-ex-5",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-5",
  "type": "Exercise",
  "number": "8.4.5",
  "title": "",
  "body": " If , find the mean, variance, and standard deviation.  "
},
{
  "id": "ch8-ex-6",
  "level": "2",
  "url": "ch8-exercises.html#ch8-ex-6",
  "type": "Exercise",
  "number": "8.4.6",
  "title": "",
  "body": " In a certain town, 18% of households have a dog. Suppose 20 households are selected at random, and let be the number that have a dog.   Find .  Find .  What is the expected number of selected households that have a dog?   "
},
{
  "id": "sec-continuous-uniform",
  "level": "1",
  "url": "sec-continuous-uniform.html",
  "type": "Section",
  "number": "9.1",
  "title": "Continuous Random Variables and the Uniform Model",
  "body": " Continuous Random Variables and the Uniform Model  A random variable is continuous probability continuous random variable if its possible values fill an interval instead of landing in a countable list. A person's height is a standard example. So is the amount of time until the next customer arrives.  For a continuous random variable, probabilities come from intervals, not isolated points. The easiest model to start with is the uniform distribution probability uniform distribution .   An Arrival Time During Office Hours  Suppose a student arrives to office hours at a completely random time between noon and 1:00 p.m., and every time in that hour is equally likely. Let be the arrival time, measured in minutes after noon.  Then is uniformly distributed on the interval .  Now ask a sequence of questions.   What is ? Since this interval has length 30 out of a total length of 60, the probability is .  What is ? This interval also has length 30, so its probability is again .  What is ? Now the interval has length 15, so the probability is .  What is , meaning the student arrives exactly at 12:30?   The first three questions suggest the right idea: in a uniform model, probability depends on the length of an interval. But a single point has length 0. So   The same reasoning shows that for every specific value . A continuous random variable can certainly take the value ; it is just that one exact point carries no area and therefore no probability mass by itself.   More generally, if is uniformly distributed on , then for any interval inside ,   This formula says exactly what the office-hours example suggested: probability is proportional to interval length.  A probability density function probability probability density function , or PDF, is a function whose area over an interval gives probability. For the uniform distribution on , the density is constant:   That is why the graph is just a rectangle. Probability is area, so for a continuous random variable, a single point has probability 0.   A bus arrives at a stop at a time chosen uniformly at random between 8:00 and 8:20. Let be the arrival time in minutes after 8:00.   Find .  Find .  Explain why .    "
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
  "id": "sec-normal-distributions",
  "level": "1",
  "url": "sec-normal-distributions.html",
  "type": "Section",
  "number": "9.2",
  "title": "Normal Distributions and Z-Scores",
  "body": " Normal Distributions and Z-Scores  The most important continuous model in elementary statistics is the normal distribution probability normal distribution . Its graph is the familiar bell-shaped curve.  A normal distribution is determined by two numbers:   the mean , which tells us where the center is, and  the standard deviation , which tells us how spread out the distribution is.   If has a normal distribution with mean and standard deviation , we write    A Normal Model for Heights  Suppose the heights of adult women in a population are modeled by a normal distribution with mean 64 inches and standard deviation 2.8 inches. Then   This says the distribution is centered at 64 inches, and typical distances from the center are about 2.8 inches.   One of the nicest features of the normal curve is its symmetry. Values equally far above and below the mean have the same density, so the left half of the curve is a mirror image of the right half. The mean sits right in the middle.   The mean and standard deviation on a normal curve   A bell-shaped normal curve with a dotted vertical line through the center labeled mu. The points of inflection are marked on both sides, and the horizontal distance from mu to the right inflection point is labeled sigma.  The graphic shows a normal density curve symmetric about a central dotted vertical line labeled mu. Small dots mark the two inflection points, one to the left and one to the right of the center. A double arrow runs horizontally from the center line to the right inflection point, and that distance is labeled sigma. The picture emphasizes that the curve is symmetric and that one standard deviation is the width from the center to an inflection point.     In , the dotted line marks the mean . The curve changes concavity at the inflection points, and each one is exactly one standard deviation from the center. So the horizontal distance from to either inflection point is .  In the family of normal distributions, the one with mean 0 and standard deviation 1 is called the standard normal distribution probability standard normal distribution . It is customary to use to denote a random variable with the standard normal distribution .  A useful standardization is the z-score probability z-score   The z-score tells us how many standard deviations a value is above or below the mean. A positive z-score means the value is above the mean. A negative z-score means it is below the mean.  If , then the transformation   recenters the distribution at 0 and rescales the horizontal axis so that one standard deviation becomes length 1. In that way, the normal curve for is converted into the standard normal curve for . The important point is that probabilities are preserved under this relabeling of the axis. In particular, for any cutoff value ,   So the area to the left of under the curve for is exactly the same as the area to the left of the corresponding z-score under the standard normal curve.   Standardizing a normal random variable preserves left-tail area   Two bell-shaped curves shown side by side. On the left, a normal curve for X has the region to the left of a shaded. On the right, the standard normal curve for Z has the region to the left of z(a) shaded. The shaded areas represent the same probability.  The figure has two panels. The left panel shows a normal density curve labeled X distributed as N(mu, sigma), with a dashed line at the mean mu and another dashed line at a point labeled a to the right of the mean. The region under the curve to the left of a is shaded. The right panel shows the standard normal density curve labeled Z distributed as N(0,1), with dashed lines at 0 and at the point z(a). The region under the curve to the left of z(a) is shaded in the same way. The picture indicates that standardization changes the horizontal scale but preserves the probability area.      Interpreting a Z-Score  Using , the z-score of 62 inches is   So a height of 62 inches is about 0.71 standard deviations below the mean.   This matters because probability tables and technology are usually organized around the standard normal distribution.  "
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
  "id": "sec-z-alpha-notation",
  "level": "1",
  "url": "sec-z-alpha-notation.html",
  "type": "Section",
  "number": "9.3",
  "title": "The z-Alpha Notation",
  "body": " The z-Alpha Notation  The z-Alpha Notation  When working with the standard normal distribution, we often use the notation . This is especially important later when we study confidence intervals and hypothesis tests.  By convention, is the value on the horizontal axis so that the area to the right under the standard normal curve is . In symbols,   Since the total area under the curve is 1, the area to the left of is therefore :   This is the standard convention used in statistics. For example, because the area to the right of 1.96 under the standard normal curve is 0.025.   The notation for the standard normal distribution   A bell-shaped standard normal curve centered at 0, with a vertical line at z-alpha to the right of the mean and the area to the right of that line shaded and labeled alpha.  The graphic shows the standard normal density curve over a horizontal axis. A vertical dashed line is drawn at a positive x-value labeled z-alpha. The region under the curve to the right of that line is shaded and labeled alpha, indicating that the right-tail area equals alpha.     So if you know the confidence level or the significance level, you can translate that information into a cutoff on the standard normal curve by finding the appropriate .  "
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
  "id": "sec-normal-probabilities-percentiles",
  "level": "1",
  "url": "sec-normal-probabilities-percentiles.html",
  "type": "Section",
  "number": "9.4",
  "title": "Normal Probabilities and Percentiles",
  "body": " Normal Probabilities and Percentiles  For a continuous random variable, probability is area. So for a normal random variable, is the area under the normal curve between and .  Because , it does not matter whether the endpoints are included:   In practice, we usually convert the problem to z-scores and use technology or a table for the standard normal distribution.   At Most 62 Inches  Continue with . To find the probability that a randomly selected woman is at most 62 inches tall, we standardize:   So   About 23.75% of the population is modeled as being 62 inches or shorter.    Between 60 and 70 Inches  Again using , we find   Standardizing gives   Using technology,   So about 90.74% of the population falls between 60 and 70 inches.   A percentile data percentile is a value below which a given percentage of the distribution lies.   The 60th Percentile  What height cuts off the lowest 60% of the distribution? In symbols, we want the value such that   Using inverse normal technology for , we get   So the 60th percentile is about 64.71 inches.    Suppose test scores are modeled by .   Find the z-score of 84.  Write the standardized form of .  Explain in words what the 90th percentile of this distribution means.    "
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
  "body": " Sampling Distributions and the CLT  Sampling Distributions and the CLT  Suppose a population has mean and standard deviation . If we draw a sample of size , then the sample mean data sample mean is   The variable is itself a random variable. Its distribution is called a sampling distribution inference sampling distribution .  Two facts are especially important:   These formulas follow directly from the properties of expectation and variance from . Since   linearity of expectation gives   So the sample mean is an unbiased estimate of the population mean.  For the variance, independence lets us add variances:   Because each has variance ,   Taking square roots gives   The first fact says that the sample mean is centered at the population mean. The second says that larger samples give less variation. Averaging many observations produces a more stable estimate than using just one observation.  The real breakthrough is the Central Limit Theorem inference Central Limit Theorem , usually shortened to CLT. In plain language, it says this:  If we repeatedly take independent samples from the same population, then for large the distribution of the sample means becomes approximately normal, even if the original population is not normal.  More precisely, when the observations are independent and identically distributed with mean and standard deviation , the sample mean is approximately distributed as   for large enough .  This theorem is a big deal. It explains why the normal distribution keeps showing up in statistics. Even when the raw data are skewed or irregular, the average of a reasonably large sample often behaves in a nearly normal way.  A common rule of thumb is that is often enough, though very skewed populations may need larger samples. The sample should also come from an independent process, which is usually reasonable when we sample with replacement or sample from a population much larger than the sample size.   Using the CLT for a Sample Mean  Suppose customer wait times have population mean 18 minutes and population standard deviation 6 minutes. The shape of the population distribution is not known. If we take a random sample of customers, then by the CLT the sample mean is approximately normal:   The probability that the sample mean is less than 17 minutes is therefore     A population has mean 50 and standard deviation 12. A sample of size 36 is taken.   Find the mean of .  Find the standard deviation of .  State the approximate distribution of using the CLT.    "
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
  "id": "sec-confidence-intervals-mean",
  "level": "1",
  "url": "sec-confidence-intervals-mean.html",
  "type": "Section",
  "number": "10.2",
  "title": "Confidence Intervals for the Mean",
  "body": " Confidence Intervals for the Mean  A sample mean is a point estimate inference point estimate of the population mean . But a single number does not tell us how much uncertainty comes from sampling. A  confidence interval inference confidence interval adds a margin of error to the point estimate and gives a range of plausible values for , where is the confidence level inference confidence level . In informal language, we say we are confident that the resulting interval captures the true mean.  To see where the formula comes from, suppose are iid with mean and standard deviation , and suppose the standardized sample mean has a standard normal distribution (exactly when the population is normal, or approximately for large samples by the CLT):   Let . To capture the middle proportion of the standard normal curve, we leave total area outside and split it evenly between the two tails. That is, each tail has area .   The middle of the standard normal curve   A standard normal curve with the central region between negative z-alpha-over-2 and positive z-alpha-over-2 shaded and labeled C. Each tail outside that region is labeled alpha over 2.  The graphic shows the standard normal density curve centered at 0. Vertical dashed lines mark the cutoff points at negative z-alpha-over-2 and positive z-alpha-over-2. The region under the curve between these two lines is shaded and labeled C. The two unshaded tails outside the dashed lines are each labeled alpha over 2, showing that the total area outside the center is alpha.     So the corresponding probability statement is   After we collect the sample and observe , we solve that inequality for . The result is the z-interval   or, written as an interval,   In practice, is often unknown. When the sample is large, we usually replace by the sample standard deviation and still use the z critical value as an approximation. When the sample is small and the population is normal, we use a z-interval if is known, but if is unknown and we replace it by , then   In every case, the confidence interval has the form point estimate margin of error. For the population mean, that means   So the interval is centered at a sample mean, and its total width is twice the margin of error.  We summarize the confidence-interval settings for a population mean in .   Sampling distributions and confidence intervals for a mean    Setting  Statistic  Margin    , known      , unknown      , normal, known      , normal, unknown       The next four examples illustrate these four cases.   Case 1: Large Sample, Known  Suppose a sample of 36 women has mean height inches. Assume the population standard deviation is known to be 2.8 inches. A 95% confidence interval for the mean height is   So the interval is     Case 2: Large Sample, Unknown  A random sample of 64 delivery times has mean minutes and sample standard deviation minutes. Find a 95% confidence interval for the population mean.  Because the sample is large, we use the z critical value and replace by :   So the confidence interval is     Case 3: Small Sample, Population Normal, Known  Assume the population distribution is normal. A sample of size 16 has mean , and the population standard deviation is known to be . Find a 90% confidence interval for the population mean.  Because the population is normal and is known, we use a z interval:   So the confidence interval is     Case 4: Small Sample, Population Normal, Unknown  Assume the population is normal. A sample of 11 observations has sample mean and sample standard deviation . For a 95% confidence interval, we use and .  The margin of error is   So the confidence interval is    Interpreting a confidence interval takes some care. A 95% confidence level does not mean there is a 95% chance that is in the one interval we already computed. Instead, it means that if we repeated the same sampling process many times and built an interval each time, about 95% of those intervals would capture the true mean. The parameter is fixed; the interval is what changes from sample to sample.   A sample of size 49 has mean . Assume the population standard deviation is known to be 14.   Write the formula for a 90% confidence interval for .  Find the margin of error.  Find the interval.    "
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
  "id": "sec-sample-size-margin-error",
  "level": "1",
  "url": "sec-sample-size-margin-error.html",
  "type": "Section",
  "number": "10.3",
  "title": "Margin of Error and Sample Size",
  "body": " Margin of Error and Sample Size  The margin of error in a z-interval is   This formula shows two basic truths:   Higher confidence means a larger critical value and therefore a larger margin of error.  Larger samples make the denominator bigger and therefore shrink the margin of error.   If we want the margin of error to be at most some target value , then we solve for :   Since sample size must be a whole number, we always round up.   Finding a Required Sample Size  Suppose we want to estimate the mean height of women with 98% confidence and margin of error at most 0.5 inches. Assume .  Here , so . Therefore   We round up, so the least acceptable sample size is    This is one of the most practical formulas in the course. It tells us how much data we need before we even begin sampling.  "
},
{
  "id": "ex-sample-size-women-height",
  "level": "2",
  "url": "sec-sample-size-margin-error.html#ex-sample-size-women-height",
  "type": "Example",
  "number": "10.3.1",
  "title": "Finding a Required Sample Size.",
  "body": " Finding a Required Sample Size  Suppose we want to estimate the mean height of women with 98% confidence and margin of error at most 0.5 inches. Assume .  Here , so . Therefore   We round up, so the least acceptable sample size is   "
},
{
  "id": "ch10-exercises",
  "level": "1",
  "url": "ch10-exercises.html",
  "type": "Exercises",
  "number": "10.4",
  "title": "Exercises",
  "body": " Exercises   A population has mean 24 and standard deviation 9. A random sample of size 81 is taken.   Find the mean of .  Find the standard deviation of .  Use the CLT to state an approximate distribution for .     A sample of size 64 has mean . Assume the population standard deviation is known to be 8.   Find a 95% confidence interval for the population mean.  Find the margin of error.  Explain what the 95% confidence level means.     Assume the population is normal. A sample of size 16 has mean and sample standard deviation .   Write the form of the 95% t-interval for the mean.  What are the degrees of freedom?  Why is a t critical value used instead of a z critical value?     How large a sample is needed to estimate a population mean with 95% confidence, population standard deviation 10, and margin of error at most 2?   "
},
{
  "id": "ch10-ex-1",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-1",
  "type": "Exercise",
  "number": "10.4.1",
  "title": "",
  "body": " A population has mean 24 and standard deviation 9. A random sample of size 81 is taken.   Find the mean of .  Find the standard deviation of .  Use the CLT to state an approximate distribution for .   "
},
{
  "id": "ch10-ex-2",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-2",
  "type": "Exercise",
  "number": "10.4.2",
  "title": "",
  "body": " A sample of size 64 has mean . Assume the population standard deviation is known to be 8.   Find a 95% confidence interval for the population mean.  Find the margin of error.  Explain what the 95% confidence level means.   "
},
{
  "id": "ch10-ex-3",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-3",
  "type": "Exercise",
  "number": "10.4.3",
  "title": "",
  "body": " Assume the population is normal. A sample of size 16 has mean and sample standard deviation .   Write the form of the 95% t-interval for the mean.  What are the degrees of freedom?  Why is a t critical value used instead of a z critical value?   "
},
{
  "id": "ch10-ex-4",
  "level": "2",
  "url": "ch10-exercises.html#ch10-ex-4",
  "type": "Exercise",
  "number": "10.4.4",
  "title": "",
  "body": " How large a sample is needed to estimate a population mean with 95% confidence, population standard deviation 10, and margin of error at most 2?  "
},
{
  "id": "sec-hypothesis-tests-basics",
  "level": "1",
  "url": "sec-hypothesis-tests-basics.html",
  "type": "Section",
  "number": "11.1",
  "title": "Null Hypotheses and P-Values",
  "body": " Null Hypotheses and P-Values  Null Hypotheses and P-Values  A hypothesis test begins with two competing statements.   The null hypothesis inference null hypothesis , written , is the claim we test against.  The alternative hypothesis inference alternative hypothesis , written , is what we will support if the data give enough evidence against .   For tests about a population mean, the null hypothesis usually has the form   The alternative can take one of three common forms:   These correspond to a left-tailed test, a right-tailed test, and a two-tailed test.  The next ingredient is the test statistic inference test statistic , a standardized number that measures how far the sample result is from the null value. For one-sample tests of a mean, we use   depending on whether a z-test or t-test is appropriate.  The significance level inference significance level , written , is the cutoff we use for deciding whether the evidence is strong enough. Common choices are 0.10, 0.05, and 0.01.  One way to make the decision is by using a p-value inference p-value . The p-value is the probability, assuming is true, of getting a test statistic at least as extreme as the one observed.  The smaller the p-value, the stronger the evidence against . The decision rule is simple:   If the p-value is less than , reject .  If the p-value is at least , fail to reject .   Notice the wording. We say fail to reject , not “accept .” A nonsignificant result does not prove the null hypothesis is true; it only says the sample did not provide enough evidence against it.   Setting Up a Test  A manufacturer claims that its batteries last 22 hours on average. A buyer suspects the mean lifetime is actually lower than 22 hours. The hypotheses are   Because the alternative says “less than,” this is a left-tailed test.   "
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
  "id": "sec-type1-type2-errors",
  "level": "1",
  "url": "sec-type1-type2-errors.html",
  "type": "Section",
  "number": "11.2",
  "title": "Type I and Type II Errors",
  "body": " Type I and Type II Errors  Any hypothesis test can make two different kinds of mistakes.   A Type I error inference Type I error happens when we reject even though is actually true.  A Type II error inference Type II error happens when we fail to reject even though is actually false.    Possible decisions in a hypothesis test     true  false    Reject  Type I error  Correct decision    Fail to reject  Correct decision  Type II error     The significance level is the probability of a Type I error:   That is why choosing a smaller significance level makes the test more cautious about rejecting the null hypothesis.   Reading the Errors in Context  Return to the battery example with   In context:   A Type I error means we conclude the mean battery life is less than 22 hours when in fact the true mean is really 22 hours.  A Type II error means we fail to detect a drop in battery life and keep the 22-hour claim even though the true mean is actually less than 22 hours.    The two error types pull in opposite directions. If we make smaller, Type I errors become less likely, but it usually becomes harder to reject , so Type II errors can become more likely unless we also increase the sample size.  The probability of a Type II error is often written . The quantity   is called the power inference power of a test of the test. Power is the probability that the test successfully detects a false null hypothesis.  In practice, larger samples improve power. With more data, the test statistic has a better chance to separate real effects from ordinary random variation.   A school tests whether the mean math score has increased from 70 points. The hypotheses are and .   Describe a Type I error in context.  Describe a Type II error in context.  Which error would the school want to avoid more strongly if a new program is very expensive?    "
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
  "id": "sec-one-sample-mean-tests",
  "level": "1",
  "url": "sec-one-sample-mean-tests.html",
  "type": "Section",
  "number": "11.3",
  "title": "One-Sample Tests for a Mean",
  "body": " One-Sample Tests for a Mean  For a one-sample test of a mean, the test statistic depends on the setting:   Use a z-test when the population standard deviation is known, or when the sample is large enough that using in its place is reasonable.  Use a t-test when the sample is small, the population is approximately normal, and the population standard deviation is unknown.    A Left-Tailed Test for Battery Life  A sample of 50 batteries has mean lifetime hours and sample standard deviation hours. Test   at significance level .  Because the sample is large, we use the z statistic   The p-value is   Since , we reject . At the 10% significance level, the sample gives enough evidence to conclude that the mean battery life is less than 22 hours.    A Two-Tailed T-Test  Ten participants estimate a target distance that is actually 2.5 feet. The sample results have mean and sample standard deviation . We test   at the 5% significance level.  Because the sample is small and is unknown, we use a t-test with :   For a two-tailed test with and , the critical values are about . Since falls beyond the left critical value, we reject . The data suggest that the true mean estimate differs from 2.5 feet.   Whether we use a critical-value method or a p-value method, the logic is the same: a test statistic far from what predicts counts as evidence against .  "
},
{
  "id": "ex-battery-test",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#ex-battery-test",
  "type": "Example",
  "number": "11.3.1",
  "title": "A Left-Tailed Test for Battery Life.",
  "body": " A Left-Tailed Test for Battery Life  A sample of 50 batteries has mean lifetime hours and sample standard deviation hours. Test   at significance level .  Because the sample is large, we use the z statistic   The p-value is   Since , we reject . At the 10% significance level, the sample gives enough evidence to conclude that the mean battery life is less than 22 hours.  "
},
{
  "id": "ex-distance-t-test",
  "level": "2",
  "url": "sec-one-sample-mean-tests.html#ex-distance-t-test",
  "type": "Example",
  "number": "11.3.2",
  "title": "A Two-Tailed T-Test.",
  "body": " A Two-Tailed T-Test  Ten participants estimate a target distance that is actually 2.5 feet. The sample results have mean and sample standard deviation . We test   at the 5% significance level.  Because the sample is small and is unknown, we use a t-test with :   For a two-tailed test with and , the critical values are about . Since falls beyond the left critical value, we reject . The data suggest that the true mean estimate differs from 2.5 feet.  "
},
{
  "id": "ch11-exercises",
  "level": "1",
  "url": "ch11-exercises.html",
  "type": "Exercises",
  "number": "11.4",
  "title": "Exercises",
  "body": " Exercises   For each pair of hypotheses below, state whether the test is left-tailed, right-tailed, or two-tailed.   ,  ,  ,     A company claims its cereal boxes contain 16 ounces on average. A quality-control manager tests against .   Describe a Type I error in context.  Describe a Type II error in context.  What does it mean if the test uses ?     A sample of size 64 has mean and sample standard deviation . Test against at the 5% significance level.   Compute the test statistic.  State whether the test is a z-test or a t-test.  Would you reject or fail to reject ?     Why is “fail to reject ” a better phrase than “accept ”?   "
},
{
  "id": "ch11-ex-1",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-1",
  "type": "Exercise",
  "number": "11.4.1",
  "title": "",
  "body": " For each pair of hypotheses below, state whether the test is left-tailed, right-tailed, or two-tailed.   ,  ,  ,   "
},
{
  "id": "ch11-ex-2",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-2",
  "type": "Exercise",
  "number": "11.4.2",
  "title": "",
  "body": " A company claims its cereal boxes contain 16 ounces on average. A quality-control manager tests against .   Describe a Type I error in context.  Describe a Type II error in context.  What does it mean if the test uses ?   "
},
{
  "id": "ch11-ex-3",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-3",
  "type": "Exercise",
  "number": "11.4.3",
  "title": "",
  "body": " A sample of size 64 has mean and sample standard deviation . Test against at the 5% significance level.   Compute the test statistic.  State whether the test is a z-test or a t-test.  Would you reject or fail to reject ?   "
},
{
  "id": "ch11-ex-4",
  "level": "2",
  "url": "ch11-exercises.html#ch11-ex-4",
  "type": "Exercise",
  "number": "11.4.4",
  "title": "",
  "body": " Why is “fail to reject ” a better phrase than “accept ”?  "
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
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
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
