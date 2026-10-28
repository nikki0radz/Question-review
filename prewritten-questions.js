// 1,000 prewritten Pick n Mix candidates. No runtime generation or API calls.
// Self-report is enough. Skip if nobody qualifies or remembers; break ties at random.
const PREWRITTEN_QUESTIONS = [
  {
    "text": "Who most recently went to a New Year's Eve party?",
    "topic": "Nights out",
    "id": "bar1000-0028",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who has the biggest shopping bag with them?",
    "topic": "Here and now",
    "id": "bar1000-0949",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently used a coffee machine?",
    "topic": "Food and drink",
    "id": "bar1000-0216",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently went to a music festival?",
    "topic": "Nights out",
    "id": "bar1000-0011",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently returned a faulty item?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0377",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently called in sick to work?",
    "topic": "People and milestones",
    "id": "bar1000-0510",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently met someone famous in person?",
    "topic": "People and milestones",
    "id": "bar1000-0592",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who has cash in the most different currencies on them?",
    "topic": "Quick comparisons",
    "id": "bar1000-0813",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently played snooker?",
    "topic": "Activities",
    "id": "bar1000-0404",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who has the most charms on one bracelet?",
    "topic": "Here and now",
    "id": "bar1000-0943",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently went to a comedy show?",
    "topic": "Nights out",
    "id": "bar1000-0012",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently had a suitcase delayed by an airline?",
    "topic": "Travel",
    "id": "bar1000-0133",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently woke up late for work?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0399",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently rode a tram?",
    "topic": "Travel",
    "id": "bar1000-0183",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Whose first name has the most syllables?",
    "topic": "Quick comparisons",
    "id": "bar1000-0730",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently went surfing?",
    "topic": "Activities",
    "id": "bar1000-0441",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently pulled a party popper?",
    "topic": "Nights out",
    "id": "bar1000-0091",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who has the most brothers?",
    "topic": "Quick comparisons",
    "id": "bar1000-0716",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently babysat?",
    "topic": "People and milestones",
    "id": "bar1000-0562",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently went to a botanical garden?",
    "topic": "Activities",
    "id": "bar1000-0465",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently went to a leaving do?",
    "topic": "Nights out",
    "id": "bar1000-0005",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who became a parent at the youngest age?",
    "topic": "Quick comparisons",
    "id": "bar1000-0727",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently ate a dessert for breakfast?",
    "topic": "Food and drink",
    "id": "bar1000-0254",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently went to a demonstration or march?",
    "topic": "More to try",
    "id": "bar1000-0999",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently went on a ghost tour?",
    "topic": "Travel",
    "id": "bar1000-0178",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who has the most bathrooms in their home?",
    "topic": "Quick comparisons",
    "id": "bar1000-0762",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently wore a hard hat?",
    "topic": "Personal routines",
    "id": "bar1000-0662",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who first went to a concert at the youngest age?",
    "topic": "Life experiences",
    "id": "bar1000-0876",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who last used a park-and-ride service?",
    "topic": "Quick comparisons",
    "id": "bar1000-0846",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently played a board game?",
    "topic": "Personal routines",
    "id": "bar1000-0690",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who was born closest to midnight?",
    "topic": "Quick comparisons",
    "id": "bar1000-0702",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently spilt food on a white top?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0352",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently bought someone a birthday drink?",
    "topic": "Nights out",
    "id": "bar1000-0051",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who last spoke to a member of staff here?",
    "topic": "Here and now",
    "id": "bar1000-0918",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who has the most unopened drinks in front of them?",
    "topic": "Here and now",
    "id": "bar1000-0910",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who has been on the longest first date by hours?",
    "topic": "Quick comparisons",
    "id": "bar1000-0810",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently celebrated a relationship anniversary?",
    "topic": "Nights out",
    "id": "bar1000-0080",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently played a musical instrument?",
    "topic": "Personal routines",
    "id": "bar1000-0698",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently slept in a sleeping bag?",
    "topic": "Personal routines",
    "id": "bar1000-0670",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently went to a drive-in cinema?",
    "topic": "Activities",
    "id": "bar1000-0468",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-01"
  },
  {
    "text": "Who most recently had a dental filling?",
    "topic": "Personal routines",
    "id": "bar1000-0628",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who has the most visible tattoos?",
    "topic": "Quick comparisons",
    "id": "bar1000-0744",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently accidentally paid for something twice?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0382",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently travelled in a cable car?",
    "topic": "Travel",
    "id": "bar1000-0181",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently went to a wine tasting?",
    "topic": "Nights out",
    "id": "bar1000-0023",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently tried a new cuisine?",
    "topic": "Food and drink",
    "id": "bar1000-0296",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently watched a live football match?",
    "topic": "Activities",
    "id": "bar1000-0476",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently played tennis?",
    "topic": "Activities",
    "id": "bar1000-0407",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently held a newborn baby?",
    "topic": "People and milestones",
    "id": "bar1000-0561",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently ate with their hands at a restaurant?",
    "topic": "Food and drink",
    "id": "bar1000-0242",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who has the shortest hair?",
    "topic": "Quick comparisons",
    "id": "bar1000-0742",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who has had their current glasses the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0751",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently used a photo booth?",
    "topic": "Personal routines",
    "id": "bar1000-0681",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently built a snowman?",
    "topic": "More to try",
    "id": "bar1000-0969",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently ate a meal on a train?",
    "topic": "Food and drink",
    "id": "bar1000-0236",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently drank a gin and tonic?",
    "topic": "Food and drink",
    "id": "bar1000-0283",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently made a packed lunch?",
    "topic": "Food and drink",
    "id": "bar1000-0211",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who has the most keys on the keyring they brought?",
    "topic": "Here and now",
    "id": "bar1000-0950",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently played volleyball?",
    "topic": "Activities",
    "id": "bar1000-0413",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently ate a midnight snack?",
    "topic": "Food and drink",
    "id": "bar1000-0256",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently travelled by ferry?",
    "topic": "Travel",
    "id": "bar1000-0102",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who last withdrew money from a cash machine?",
    "topic": "Quick comparisons",
    "id": "bar1000-0814",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently missed a train?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0310",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who has the most grandchildren?",
    "topic": "Quick comparisons",
    "id": "bar1000-0723",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who has the oldest pet?",
    "topic": "Quick comparisons",
    "id": "bar1000-0766",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who last hiccupped?",
    "topic": "Here and now",
    "id": "bar1000-0926",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently had an umbrella turn inside out?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0345",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently exchanged cash into another currency?",
    "topic": "Travel",
    "id": "bar1000-0145",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently played darts?",
    "topic": "Activities",
    "id": "bar1000-0402",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently got the wrong takeaway order?",
    "topic": "Food and drink",
    "id": "bar1000-0267",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently left an item in a hotel room?",
    "topic": "Travel",
    "id": "bar1000-0193",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently broke a pair of glasses?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0356",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently went to a singles event?",
    "topic": "Nights out",
    "id": "bar1000-0032",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently helped someone move house?",
    "topic": "People and milestones",
    "id": "bar1000-0526",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently went archery shooting?",
    "topic": "More to try",
    "id": "bar1000-0952",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who first became a homeowner at the youngest age?",
    "topic": "Life experiences",
    "id": "bar1000-0873",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently ironed a shirt?",
    "topic": "Personal routines",
    "id": "bar1000-0649",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently watched a live cricket match?",
    "topic": "Activities",
    "id": "bar1000-0482",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who has travelled furthest to attend a wedding?",
    "topic": "Life experiences",
    "id": "bar1000-0899",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who last travelled in a black cab?",
    "topic": "Quick comparisons",
    "id": "bar1000-0849",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-02"
  },
  {
    "text": "Who most recently went to a book signing?",
    "topic": "More to try",
    "id": "bar1000-0994",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently used a sleep mask?",
    "topic": "Personal routines",
    "id": "bar1000-0669",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently had clothes dry-cleaned?",
    "topic": "Personal routines",
    "id": "bar1000-0646",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently was a bridesmaid or groomsman?",
    "topic": "Nights out",
    "id": "bar1000-0082",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently fell asleep at a party?",
    "topic": "Nights out",
    "id": "bar1000-0043",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently had a professional massage?",
    "topic": "Personal routines",
    "id": "bar1000-0620",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who has had the shortest engagement before getting married?",
    "topic": "Quick comparisons",
    "id": "bar1000-0809",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently made a toast with a drink?",
    "topic": "Food and drink",
    "id": "bar1000-0274",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently travelled across three countries in one day?",
    "topic": "Travel",
    "id": "bar1000-0154",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who is wearing the highest heels?",
    "topic": "Here and now",
    "id": "bar1000-0938",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently watched a live band in a pub?",
    "topic": "Nights out",
    "id": "bar1000-0029",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently made a smoothie?",
    "topic": "Food and drink",
    "id": "bar1000-0214",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently asked a restaurant to box up leftovers?",
    "topic": "Nights out",
    "id": "bar1000-0065",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who has the most visible belt holes after the buckle?",
    "topic": "Here and now",
    "id": "bar1000-0942",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently went to a school reunion?",
    "topic": "Nights out",
    "id": "bar1000-0008",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently wore a floor-length dress?",
    "topic": "Personal routines",
    "id": "bar1000-0657",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who last paid someone back?",
    "topic": "Quick comparisons",
    "id": "bar1000-0817",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who has spent the most consecutive nights camping?",
    "topic": "Life experiences",
    "id": "bar1000-0887",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently changed a nappy?",
    "topic": "People and milestones",
    "id": "bar1000-0563",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who has the most ear piercings?",
    "topic": "Quick comparisons",
    "id": "bar1000-0745",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently visited ancient ruins?",
    "topic": "Travel",
    "id": "bar1000-0169",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently saw a DJ perform?",
    "topic": "Nights out",
    "id": "bar1000-0030",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently carved a pumpkin?",
    "topic": "More to try",
    "id": "bar1000-0979",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who last used a taxi rank?",
    "topic": "Quick comparisons",
    "id": "bar1000-0848",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently read a child a bedtime story?",
    "topic": "People and milestones",
    "id": "bar1000-0564",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently wore high heels?",
    "topic": "Personal routines",
    "id": "bar1000-0658",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently visited a grandparent?",
    "topic": "People and milestones",
    "id": "bar1000-0556",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who last travelled on a double-decker bus?",
    "topic": "Quick comparisons",
    "id": "bar1000-0845",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently tripped on stairs?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0335",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who has the most sisters?",
    "topic": "Quick comparisons",
    "id": "bar1000-0717",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently went bungee jumping?",
    "topic": "More to try",
    "id": "bar1000-0957",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who has had the longest single ferry crossing by hours?",
    "topic": "Life experiences",
    "id": "bar1000-0885",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who worked the most hours yesterday?",
    "topic": "Quick comparisons",
    "id": "bar1000-0776",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently made someone breakfast in bed?",
    "topic": "Food and drink",
    "id": "bar1000-0212",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who last kissed someone?",
    "topic": "Quick comparisons",
    "id": "bar1000-0802",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who last sold something they owned?",
    "topic": "Quick comparisons",
    "id": "bar1000-0822",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who has the most stairs inside their home?",
    "topic": "Quick comparisons",
    "id": "bar1000-0763",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently stayed in a hostel?",
    "topic": "Travel",
    "id": "bar1000-0109",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently ate a meal they had frozen themselves?",
    "topic": "Food and drink",
    "id": "bar1000-0257",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently went skydiving from a plane?",
    "topic": "More to try",
    "id": "bar1000-0956",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-03"
  },
  {
    "text": "Who most recently forgot to cancel a free trial?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0383",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently collected a parcel from a neighbour?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0373",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went cycling?",
    "topic": "Activities",
    "id": "bar1000-0420",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who is sitting closest to the bar?",
    "topic": "Here and now",
    "id": "bar1000-0901",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently sat an exam?",
    "topic": "People and milestones",
    "id": "bar1000-0519",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went on a rollercoaster?",
    "topic": "Activities",
    "id": "bar1000-0455",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went kayaking?",
    "topic": "Activities",
    "id": "bar1000-0438",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently ordered extra chips for the table?",
    "topic": "Food and drink",
    "id": "bar1000-0292",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently rode in a car with a pet?",
    "topic": "People and milestones",
    "id": "bar1000-0570",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went to a cabaret show?",
    "topic": "Nights out",
    "id": "bar1000-0099",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently shaved their head?",
    "topic": "Personal routines",
    "id": "bar1000-0608",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently missed a parcel delivery?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0372",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went to a record shop?",
    "topic": "More to try",
    "id": "bar1000-0992",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who has the smallest drinking glass right now?",
    "topic": "Here and now",
    "id": "bar1000-0907",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently ate octopus?",
    "topic": "Food and drink",
    "id": "bar1000-0246",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who has been single the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0797",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went to a cocktail-making class?",
    "topic": "Nights out",
    "id": "bar1000-0024",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently finished reading a book?",
    "topic": "Personal routines",
    "id": "bar1000-0686",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who got their first mobile phone at the oldest age?",
    "topic": "Life experiences",
    "id": "bar1000-0871",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went on holiday with their parents?",
    "topic": "Travel",
    "id": "bar1000-0120",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently made soup from scratch?",
    "topic": "Food and drink",
    "id": "bar1000-0205",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went to a wildlife park?",
    "topic": "Activities",
    "id": "bar1000-0460",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently repotted a plant?",
    "topic": "People and milestones",
    "id": "bar1000-0542",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently volunteered at an event?",
    "topic": "Activities",
    "id": "bar1000-0492",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently drank alcohol-free beer?",
    "topic": "Food and drink",
    "id": "bar1000-0280",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who has lived furthest away from where they were born?",
    "topic": "Quick comparisons",
    "id": "bar1000-0758",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently burnt their tongue on food?",
    "topic": "Food and drink",
    "id": "bar1000-0263",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently used a hot tub?",
    "topic": "Personal routines",
    "id": "bar1000-0624",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently ate a hotel breakfast?",
    "topic": "Travel",
    "id": "bar1000-0192",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went to a silent disco?",
    "topic": "Nights out",
    "id": "bar1000-0018",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who was born closest to where you are now?",
    "topic": "Quick comparisons",
    "id": "bar1000-0705",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently fell over on ice?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0339",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently went on a water slide?",
    "topic": "Activities",
    "id": "bar1000-0457",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently booked a last-minute holiday?",
    "topic": "Travel",
    "id": "bar1000-0150",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who is wearing an item someone else made for them?",
    "topic": "Here and now",
    "id": "bar1000-0933",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently drank a pint of cider?",
    "topic": "Food and drink",
    "id": "bar1000-0282",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently ate at a buffet restaurant?",
    "topic": "Nights out",
    "id": "bar1000-0068",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who ordered their current drink last?",
    "topic": "Here and now",
    "id": "bar1000-0916",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently completed a crossword?",
    "topic": "Personal routines",
    "id": "bar1000-0689",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently put up a Christmas tree?",
    "topic": "More to try",
    "id": "bar1000-0981",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-04"
  },
  {
    "text": "Who most recently repaired a hole in clothing?",
    "topic": "Personal routines",
    "id": "bar1000-0647",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently stayed in a treehouse?",
    "topic": "Travel",
    "id": "bar1000-0113",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently sat on their sunglasses?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0357",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who moved out of their parents' home at the youngest age?",
    "topic": "Quick comparisons",
    "id": "bar1000-0759",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently hosted a barbecue?",
    "topic": "Nights out",
    "id": "bar1000-0036",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently had their car clamped?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0320",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently wore a life jacket?",
    "topic": "Personal routines",
    "id": "bar1000-0666",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently swam in the sea?",
    "topic": "Travel",
    "id": "bar1000-0156",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who has the biggest age gap with their current partner?",
    "topic": "Quick comparisons",
    "id": "bar1000-0795",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who has the most empty glasses in front of them?",
    "topic": "Here and now",
    "id": "bar1000-0911",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who has the most coins on them?",
    "topic": "Quick comparisons",
    "id": "bar1000-0812",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently watched a sports final in a pub?",
    "topic": "Activities",
    "id": "bar1000-0485",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently watched a live boxing match?",
    "topic": "Activities",
    "id": "bar1000-0479",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who is wearing the most visible zips?",
    "topic": "Here and now",
    "id": "bar1000-0940",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently went to a drag show?",
    "topic": "Nights out",
    "id": "bar1000-0013",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently played table tennis?",
    "topic": "Activities",
    "id": "bar1000-0405",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently rode a sightseeing bus?",
    "topic": "Travel",
    "id": "bar1000-0179",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently went to a yoga class?",
    "topic": "Activities",
    "id": "bar1000-0429",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who has worked in the most different countries?",
    "topic": "Life experiences",
    "id": "bar1000-0859",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who last bought a railcard?",
    "topic": "Quick comparisons",
    "id": "bar1000-0847",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently crossed a land border?",
    "topic": "Travel",
    "id": "bar1000-0153",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently made a sandcastle?",
    "topic": "More to try",
    "id": "bar1000-0971",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently had a snowball fight?",
    "topic": "More to try",
    "id": "bar1000-0970",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently planted a tree?",
    "topic": "Activities",
    "id": "bar1000-0494",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently went on a guided city tour?",
    "topic": "Travel",
    "id": "bar1000-0176",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently took part in a sponsored event?",
    "topic": "Activities",
    "id": "bar1000-0491",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who lives furthest from everyone else in this group?",
    "topic": "Quick comparisons",
    "id": "bar1000-0791",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently organised a surprise for someone?",
    "topic": "People and milestones",
    "id": "bar1000-0590",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently gave a presentation?",
    "topic": "People and milestones",
    "id": "bar1000-0514",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently ate leftover takeaway for breakfast?",
    "topic": "Food and drink",
    "id": "bar1000-0255",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently went shopping and forgot the item they needed?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0381",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who has the biggest age gap between their parents?",
    "topic": "Quick comparisons",
    "id": "bar1000-0710",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently drank an energy drink?",
    "topic": "Food and drink",
    "id": "bar1000-0278",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently made something from clay?",
    "topic": "Personal routines",
    "id": "bar1000-0696",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently had clothes professionally altered?",
    "topic": "Personal routines",
    "id": "bar1000-0645",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently used a reusable takeaway cup?",
    "topic": "Food and drink",
    "id": "bar1000-0287",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently drank hot chocolate?",
    "topic": "Food and drink",
    "id": "bar1000-0279",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently was stung by a bee or wasp?",
    "topic": "People and milestones",
    "id": "bar1000-0574",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently got off at the wrong stop?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0313",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently visited a glacier?",
    "topic": "Travel",
    "id": "bar1000-0174",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-05"
  },
  {
    "text": "Who most recently set off a car alarm?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0330",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently moved house?",
    "topic": "People and milestones",
    "id": "bar1000-0527",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who has the longest shoelaces hanging loose?",
    "topic": "Here and now",
    "id": "bar1000-0941",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently ate from a food truck?",
    "topic": "Food and drink",
    "id": "bar1000-0229",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently received flowers?",
    "topic": "People and milestones",
    "id": "bar1000-0580",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently took a first-aid course?",
    "topic": "Personal routines",
    "id": "bar1000-0640",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently went abroad for a wedding?",
    "topic": "Travel",
    "id": "bar1000-0118",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently had their phone die while out?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0393",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently wore coloured contact lenses?",
    "topic": "Personal routines",
    "id": "bar1000-0613",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who learned to swim at the oldest age?",
    "topic": "Life experiences",
    "id": "bar1000-0866",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently completed a charity walk?",
    "topic": "Activities",
    "id": "bar1000-0490",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently broke a plate?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0365",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who has the largest visible hoop earrings?",
    "topic": "Here and now",
    "id": "bar1000-0946",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently asked for extra sauce?",
    "topic": "Food and drink",
    "id": "bar1000-0293",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently blocked a toilet?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0367",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently went to a boat party?",
    "topic": "Nights out",
    "id": "bar1000-0020",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently went to a food festival?",
    "topic": "Nights out",
    "id": "bar1000-0025",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who is wearing an item they made themselves?",
    "topic": "Here and now",
    "id": "bar1000-0932",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently wore a cast for a broken bone?",
    "topic": "Personal routines",
    "id": "bar1000-0634",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who has the most ice cubes visible in their drink?",
    "topic": "Here and now",
    "id": "bar1000-0908",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently collected a certificate?",
    "topic": "People and milestones",
    "id": "bar1000-0522",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently was bitten by a dog?",
    "topic": "People and milestones",
    "id": "bar1000-0572",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently ate something they caught themselves?",
    "topic": "Food and drink",
    "id": "bar1000-0223",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently went to a work Christmas party?",
    "topic": "Nights out",
    "id": "bar1000-0034",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who last reapplied lipstick or lip balm?",
    "topic": "Here and now",
    "id": "bar1000-0930",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who works with the biggest team on a typical shift?",
    "topic": "Quick comparisons",
    "id": "bar1000-0782",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who has the most half-siblings?",
    "topic": "Quick comparisons",
    "id": "bar1000-0718",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently attended a film premiere?",
    "topic": "More to try",
    "id": "bar1000-0995",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently used a hotel gym?",
    "topic": "Travel",
    "id": "bar1000-0191",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently went to a spin class?",
    "topic": "Activities",
    "id": "bar1000-0432",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently visited a sibling?",
    "topic": "People and milestones",
    "id": "bar1000-0557",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently had a car MOT test?",
    "topic": "People and milestones",
    "id": "bar1000-0548",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who has the longest time left on a phone contract?",
    "topic": "Quick comparisons",
    "id": "bar1000-0829",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who is wearing the most buttons you can see?",
    "topic": "Here and now",
    "id": "bar1000-0939",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently graduated?",
    "topic": "People and milestones",
    "id": "bar1000-0521",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently had a picnic?",
    "topic": "Nights out",
    "id": "bar1000-0038",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently stayed in a cabin?",
    "topic": "Travel",
    "id": "bar1000-0115",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently wore false eyelashes?",
    "topic": "Personal routines",
    "id": "bar1000-0612",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently fell out of bed?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0337",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently had a school parents' evening?",
    "topic": "People and milestones",
    "id": "bar1000-0524",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-06"
  },
  {
    "text": "Who most recently drove someone to an appointment?",
    "topic": "People and milestones",
    "id": "bar1000-0553",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently hosted a dinner party?",
    "topic": "Nights out",
    "id": "bar1000-0035",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who last yawned?",
    "topic": "Here and now",
    "id": "bar1000-0925",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently had a spray tan?",
    "topic": "Personal routines",
    "id": "bar1000-0618",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Whose first name contains the most vowels?",
    "topic": "Quick comparisons",
    "id": "bar1000-0731",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently used a restaurant voucher?",
    "topic": "Nights out",
    "id": "bar1000-0063",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently went on a safari?",
    "topic": "Travel",
    "id": "bar1000-0175",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently gave someone a handmade gift?",
    "topic": "People and milestones",
    "id": "bar1000-0586",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently went hiking?",
    "topic": "Activities",
    "id": "bar1000-0495",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently had a flight cancelled?",
    "topic": "Travel",
    "id": "bar1000-0131",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently had a pedicure?",
    "topic": "Personal routines",
    "id": "bar1000-0615",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently changed a tyre?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0324",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently went to a fireworks display?",
    "topic": "Nights out",
    "id": "bar1000-0026",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently set off a smoke alarm while cooking?",
    "topic": "Food and drink",
    "id": "bar1000-0260",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who learned to ride a bike at the youngest age?",
    "topic": "Life experiences",
    "id": "bar1000-0865",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently knocked over a salt shaker?",
    "topic": "Food and drink",
    "id": "bar1000-0271",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently played cricket?",
    "topic": "Activities",
    "id": "bar1000-0415",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently ate snails?",
    "topic": "Food and drink",
    "id": "bar1000-0247",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently had a birthday cake brought to their table?",
    "topic": "Nights out",
    "id": "bar1000-0074",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently went bowling?",
    "topic": "Activities",
    "id": "bar1000-0400",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently found a spider in their bed?",
    "topic": "People and milestones",
    "id": "bar1000-0578",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently borrowed a book from a library?",
    "topic": "Personal routines",
    "id": "bar1000-0685",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently went to a pub quiz?",
    "topic": "Nights out",
    "id": "bar1000-0015",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who has the most days off before their next shift?",
    "topic": "Quick comparisons",
    "id": "bar1000-0774",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently bought prescription glasses?",
    "topic": "Personal routines",
    "id": "bar1000-0626",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently swam in an outdoor pool?",
    "topic": "Travel",
    "id": "bar1000-0158",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently went water-skiing?",
    "topic": "Activities",
    "id": "bar1000-0444",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who has the most tattoos altogether?",
    "topic": "Quick comparisons",
    "id": "bar1000-0747",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Whose birthday is next?",
    "topic": "Quick comparisons",
    "id": "bar1000-0701",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who has the fullest drinking glass right now?",
    "topic": "Here and now",
    "id": "bar1000-0906",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently wore hair extensions?",
    "topic": "Personal routines",
    "id": "bar1000-0610",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently assembled flat-pack furniture?",
    "topic": "People and milestones",
    "id": "bar1000-0532",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently picked someone up from a train station?",
    "topic": "People and milestones",
    "id": "bar1000-0554",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently left their bank card behind in a bar?",
    "topic": "Nights out",
    "id": "bar1000-0045",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently fed an animal by hand?",
    "topic": "People and milestones",
    "id": "bar1000-0571",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently forgot an appointment?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0308",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently needed roadside recovery?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0326",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who has the youngest child?",
    "topic": "Quick comparisons",
    "id": "bar1000-0721",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently cut themselves while cooking?",
    "topic": "Food and drink",
    "id": "bar1000-0262",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently played rounders?",
    "topic": "Activities",
    "id": "bar1000-0414",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-07"
  },
  {
    "text": "Who most recently used a paper map to navigate?",
    "topic": "Travel",
    "id": "bar1000-0180",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently had a flat tyre?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0323",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently won a medal at an organised event?",
    "topic": "Activities",
    "id": "bar1000-0488",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently rode in a tuk-tuk?",
    "topic": "Travel",
    "id": "bar1000-0184",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who has the longest dangling earrings?",
    "topic": "Here and now",
    "id": "bar1000-0945",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently was interviewed for a podcast?",
    "topic": "People and milestones",
    "id": "bar1000-0597",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently went rock climbing?",
    "topic": "Activities",
    "id": "bar1000-0425",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently visited their parents?",
    "topic": "People and milestones",
    "id": "bar1000-0555",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who has the most nieces and nephews?",
    "topic": "Quick comparisons",
    "id": "bar1000-0724",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently trimmed a hedge?",
    "topic": "People and milestones",
    "id": "bar1000-0544",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who last sneezed?",
    "topic": "Here and now",
    "id": "bar1000-0924",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently slept on a friend's sofa while travelling?",
    "topic": "Travel",
    "id": "bar1000-0197",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently brewed beer or cider?",
    "topic": "Food and drink",
    "id": "bar1000-0219",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently had a passport photo taken?",
    "topic": "Personal routines",
    "id": "bar1000-0683",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently took annual leave?",
    "topic": "People and milestones",
    "id": "bar1000-0511",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently ran out of fuel?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0322",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently helped a child with homework?",
    "topic": "People and milestones",
    "id": "bar1000-0565",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently had a tooth removed?",
    "topic": "Personal routines",
    "id": "bar1000-0629",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently went horse riding?",
    "topic": "Activities",
    "id": "bar1000-0424",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently went on a walking holiday?",
    "topic": "Travel",
    "id": "bar1000-0127",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently went to a museum?",
    "topic": "Activities",
    "id": "bar1000-0462",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently went on a narrowboat holiday?",
    "topic": "Travel",
    "id": "bar1000-0189",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently used a French press?",
    "topic": "Food and drink",
    "id": "bar1000-0217",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently went on a camping trip?",
    "topic": "Travel",
    "id": "bar1000-0107",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently wore a paper party hat?",
    "topic": "Nights out",
    "id": "bar1000-0090",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently rode an elephant?",
    "topic": "More to try",
    "id": "bar1000-0964",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently pickled vegetables?",
    "topic": "Food and drink",
    "id": "bar1000-0221",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently bought something at an auction?",
    "topic": "More to try",
    "id": "bar1000-0989",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who became an aunt or uncle at the youngest age?",
    "topic": "Quick comparisons",
    "id": "bar1000-0726",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently spilt a drink on someone else?",
    "topic": "Nights out",
    "id": "bar1000-0056",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently had their blood pressure checked?",
    "topic": "Personal routines",
    "id": "bar1000-0639",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently attended a civil partnership ceremony?",
    "topic": "Nights out",
    "id": "bar1000-0081",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently broke a zip?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0346",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently bought the wrong ticket?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0317",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who arrived at this venue first?",
    "topic": "Quick comparisons",
    "id": "bar1000-0788",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently had an eye test?",
    "topic": "Personal routines",
    "id": "bar1000-0625",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently shared a dessert?",
    "topic": "Food and drink",
    "id": "bar1000-0290",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently boiled a pan dry?",
    "topic": "Food and drink",
    "id": "bar1000-0269",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently bought a new pair of shoes?",
    "topic": "Personal routines",
    "id": "bar1000-0642",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently played a card game?",
    "topic": "Personal routines",
    "id": "bar1000-0691",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-08"
  },
  {
    "text": "Who most recently sent a parcel to an old address by mistake?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0374",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently played netball?",
    "topic": "Activities",
    "id": "bar1000-0410",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently sat in an emergency-exit row?",
    "topic": "Travel",
    "id": "bar1000-0136",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently went birdwatching?",
    "topic": "Activities",
    "id": "bar1000-0498",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who has known the person on their left the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0792",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently went to a ballet?",
    "topic": "Activities",
    "id": "bar1000-0471",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently used a laundrette?",
    "topic": "Personal routines",
    "id": "bar1000-0680",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who last put their phone away?",
    "topic": "Here and now",
    "id": "bar1000-0922",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently made loose-leaf tea?",
    "topic": "Food and drink",
    "id": "bar1000-0218",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently drove on the opposite side of the road to usual?",
    "topic": "Travel",
    "id": "bar1000-0152",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently made sushi?",
    "topic": "Food and drink",
    "id": "bar1000-0206",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently played a console game with someone in the same room?",
    "topic": "Personal routines",
    "id": "bar1000-0693",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently visited a volcano?",
    "topic": "Travel",
    "id": "bar1000-0170",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who has had the longest flight delay by hours?",
    "topic": "Life experiences",
    "id": "bar1000-0886",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who has paid the most for a single concert ticket?",
    "topic": "Life experiences",
    "id": "bar1000-0897",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently painted their face for an event?",
    "topic": "Nights out",
    "id": "bar1000-0095",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently drank mulled wine?",
    "topic": "Food and drink",
    "id": "bar1000-0285",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently put up party decorations?",
    "topic": "Nights out",
    "id": "bar1000-0093",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently went to a wedding?",
    "topic": "Nights out",
    "id": "bar1000-0001",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who took the most separate buses or trains to get here?",
    "topic": "Quick comparisons",
    "id": "bar1000-0787",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently pushed a door marked pull?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0333",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who has climbed to the highest altitude?",
    "topic": "Life experiences",
    "id": "bar1000-0894",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently watched an ice-hockey match in person?",
    "topic": "Activities",
    "id": "bar1000-0483",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently wore a wristband for an event?",
    "topic": "Nights out",
    "id": "bar1000-0048",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently went on a cruise?",
    "topic": "Travel",
    "id": "bar1000-0106",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently went on a walking tour?",
    "topic": "Travel",
    "id": "bar1000-0177",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently slept on an air mattress?",
    "topic": "Personal routines",
    "id": "bar1000-0671",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently pocket-dialled someone?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0387",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who has spent the longest continuous period travelling abroad?",
    "topic": "Life experiences",
    "id": "bar1000-0880",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who has dated the most people with the same first name?",
    "topic": "Quick comparisons",
    "id": "bar1000-0806",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently forgot food in the oven?",
    "topic": "Food and drink",
    "id": "bar1000-0268",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently forgot their reusable shopping bag?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0378",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently stalled a car?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0329",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who has the youngest mum?",
    "topic": "Quick comparisons",
    "id": "bar1000-0708",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently ate breakfast in a café?",
    "topic": "Food and drink",
    "id": "bar1000-0234",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who has visited the most countries?",
    "topic": "Life experiences",
    "id": "bar1000-0853",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently went to an open-mic night?",
    "topic": "Nights out",
    "id": "bar1000-0031",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently went running?",
    "topic": "Activities",
    "id": "bar1000-0419",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently booked a package holiday?",
    "topic": "Travel",
    "id": "bar1000-0149",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently had a blood test?",
    "topic": "Personal routines",
    "id": "bar1000-0632",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-09"
  },
  {
    "text": "Who most recently played football?",
    "topic": "Activities",
    "id": "bar1000-0411",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently went on a group holiday?",
    "topic": "Travel",
    "id": "bar1000-0122",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who has been engaged the longest without getting married?",
    "topic": "Quick comparisons",
    "id": "bar1000-0796",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently spilt a drink on themselves?",
    "topic": "Nights out",
    "id": "bar1000-0055",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently cooked with something they grew?",
    "topic": "Food and drink",
    "id": "bar1000-0222",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently used crutches?",
    "topic": "Personal routines",
    "id": "bar1000-0635",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently sent a postcard?",
    "topic": "Travel",
    "id": "bar1000-0147",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently worked overtime?",
    "topic": "People and milestones",
    "id": "bar1000-0507",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently had breakfast before 6 am?",
    "topic": "Personal routines",
    "id": "bar1000-0676",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently lost an earring?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0354",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who has the most housemates?",
    "topic": "Quick comparisons",
    "id": "bar1000-0760",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently went to a Pilates class?",
    "topic": "Activities",
    "id": "bar1000-0430",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who is closest to a window?",
    "topic": "Here and now",
    "id": "bar1000-0902",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently built a piece of furniture?",
    "topic": "People and milestones",
    "id": "bar1000-0535",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently wore swimming goggles?",
    "topic": "Personal routines",
    "id": "bar1000-0663",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently made a new friend?",
    "topic": "People and milestones",
    "id": "bar1000-0591",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently went sledging?",
    "topic": "More to try",
    "id": "bar1000-0968",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently cut someone else's hair?",
    "topic": "Personal routines",
    "id": "bar1000-0607",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently got soaked by a passing vehicle?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0343",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who has the most different species of pet at home?",
    "topic": "Quick comparisons",
    "id": "bar1000-0768",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently went stargazing?",
    "topic": "Activities",
    "id": "bar1000-0499",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who last drove an electric car?",
    "topic": "Quick comparisons",
    "id": "bar1000-0842",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who has run the longest race distance?",
    "topic": "Life experiences",
    "id": "bar1000-0891",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently had their name on a guest list?",
    "topic": "Nights out",
    "id": "bar1000-0087",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently asked for a late hotel checkout?",
    "topic": "Travel",
    "id": "bar1000-0194",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently had to borrow a phone charger?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0396",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently stayed in a hotel?",
    "topic": "Travel",
    "id": "bar1000-0111",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently wore a wetsuit?",
    "topic": "Personal routines",
    "id": "bar1000-0664",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who has travelled furthest to attend a concert?",
    "topic": "Life experiences",
    "id": "bar1000-0900",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently gave a wedding speech?",
    "topic": "Nights out",
    "id": "bar1000-0084",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently played basketball?",
    "topic": "Activities",
    "id": "bar1000-0409",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently went caving?",
    "topic": "More to try",
    "id": "bar1000-0960",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently went straight from a night out to work?",
    "topic": "Nights out",
    "id": "bar1000-0042",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently had a water leak at home?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0369",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently entered a swimming race?",
    "topic": "Activities",
    "id": "bar1000-0487",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently knocked over a full drink?",
    "topic": "Nights out",
    "id": "bar1000-0057",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently bleached their hair?",
    "topic": "Personal routines",
    "id": "bar1000-0605",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently handed lost property in?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0307",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently went abseiling?",
    "topic": "More to try",
    "id": "bar1000-0959",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who has the longest fingernails?",
    "topic": "Quick comparisons",
    "id": "bar1000-0743",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-10"
  },
  {
    "text": "Who most recently drank a Bloody Mary?",
    "topic": "Food and drink",
    "id": "bar1000-0284",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently fell asleep with the lights on?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0398",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently played pool?",
    "topic": "Activities",
    "id": "bar1000-0403",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently made pizza dough?",
    "topic": "Food and drink",
    "id": "bar1000-0208",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently went paintballing?",
    "topic": "Activities",
    "id": "bar1000-0447",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently wore safety boots?",
    "topic": "Personal routines",
    "id": "bar1000-0660",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently brought homemade food to work?",
    "topic": "Food and drink",
    "id": "bar1000-0289",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently fell off a bicycle?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0338",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently took a pet to the vet?",
    "topic": "People and milestones",
    "id": "bar1000-0569",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently received someone else's post?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0375",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who has had the longest commute in a previous job?",
    "topic": "Life experiences",
    "id": "bar1000-0882",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who has changed their surname the most times?",
    "topic": "Quick comparisons",
    "id": "bar1000-0733",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently lent someone an item of clothing?",
    "topic": "Personal routines",
    "id": "bar1000-0653",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who has been on a date most recently?",
    "topic": "Quick comparisons",
    "id": "bar1000-0801",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently received a free drink from a stranger?",
    "topic": "Nights out",
    "id": "bar1000-0052",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently wore a suit?",
    "topic": "Personal routines",
    "id": "bar1000-0656",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently found someone else's wallet?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0306",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently walked into a glass door?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0334",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who has the earliest alarm set for tomorrow?",
    "topic": "Quick comparisons",
    "id": "bar1000-0772",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently watched a sunset on a beach?",
    "topic": "Travel",
    "id": "bar1000-0164",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently bought a sofa?",
    "topic": "People and milestones",
    "id": "bar1000-0540",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who was born in the northernmost place?",
    "topic": "Quick comparisons",
    "id": "bar1000-0706",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently asked for tap water in a restaurant?",
    "topic": "Food and drink",
    "id": "bar1000-0294",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently went to a baby shower?",
    "topic": "Nights out",
    "id": "bar1000-0006",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently opened a bottle of sparkling wine?",
    "topic": "Food and drink",
    "id": "bar1000-0273",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently went to the wrong address?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0331",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently went white-water rafting?",
    "topic": "More to try",
    "id": "bar1000-0961",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently scraped a car while parking?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0327",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently stayed awake for 24 hours?",
    "topic": "Personal routines",
    "id": "bar1000-0674",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who started their first paid job at the youngest age?",
    "topic": "Quick comparisons",
    "id": "bar1000-0780",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who has owned the shoes they are wearing the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0752",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who has the oldest dad?",
    "topic": "Quick comparisons",
    "id": "bar1000-0709",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who moved to another country at the youngest age?",
    "topic": "Life experiences",
    "id": "bar1000-0867",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently went go-karting?",
    "topic": "Activities",
    "id": "bar1000-0449",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently went to an engagement party?",
    "topic": "Nights out",
    "id": "bar1000-0007",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who has travelled furthest to go on a first date?",
    "topic": "Quick comparisons",
    "id": "bar1000-0808",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently was scratched by a cat?",
    "topic": "People and milestones",
    "id": "bar1000-0573",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently left a tissue in the wash?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0361",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently went to an airport to collect someone?",
    "topic": "Travel",
    "id": "bar1000-0128",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who most recently played mini golf?",
    "topic": "Activities",
    "id": "bar1000-0401",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-11"
  },
  {
    "text": "Who has owned the most cars over their lifetime?",
    "topic": "Life experiences",
    "id": "bar1000-0861",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently booked a table for a group?",
    "topic": "Nights out",
    "id": "bar1000-0070",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently wore mismatched shoes by mistake?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0350",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently lost their coat on a night out?",
    "topic": "Nights out",
    "id": "bar1000-0044",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who last took a coach journey lasting over four hours?",
    "topic": "Quick comparisons",
    "id": "bar1000-0850",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Whose surname comes last alphabetically?",
    "topic": "Quick comparisons",
    "id": "bar1000-0729",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently burnt their dinner?",
    "topic": "Food and drink",
    "id": "bar1000-0259",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently went on a road trip?",
    "topic": "Travel",
    "id": "bar1000-0123",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently bought a mattress?",
    "topic": "People and milestones",
    "id": "bar1000-0539",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently worked on their birthday?",
    "topic": "People and milestones",
    "id": "bar1000-0509",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently went on a canal boat?",
    "topic": "Travel",
    "id": "bar1000-0188",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently locked their keys in a car?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0302",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently worked a night shift?",
    "topic": "People and milestones",
    "id": "bar1000-0506",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who first went to a music festival at the oldest age?",
    "topic": "Life experiences",
    "id": "bar1000-0874",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently went to an aquarium?",
    "topic": "Activities",
    "id": "bar1000-0459",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently had an X-ray?",
    "topic": "Personal routines",
    "id": "bar1000-0633",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently got a stamp on their hand for entry?",
    "topic": "Nights out",
    "id": "bar1000-0089",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently visited a palace?",
    "topic": "Travel",
    "id": "bar1000-0167",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently had stitches?",
    "topic": "Personal routines",
    "id": "bar1000-0638",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently ate a meal in bed?",
    "topic": "Food and drink",
    "id": "bar1000-0239",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently spoke into a microphone in front of an audience?",
    "topic": "People and milestones",
    "id": "bar1000-0598",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently printed a photograph?",
    "topic": "Personal routines",
    "id": "bar1000-0682",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently went canoeing?",
    "topic": "Activities",
    "id": "bar1000-0439",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently queued outside a club?",
    "topic": "Nights out",
    "id": "bar1000-0088",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently went to an escape room?",
    "topic": "Activities",
    "id": "bar1000-0450",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently wore a wig?",
    "topic": "Personal routines",
    "id": "bar1000-0609",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently made fresh pasta?",
    "topic": "Food and drink",
    "id": "bar1000-0207",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently wrapped a present?",
    "topic": "People and milestones",
    "id": "bar1000-0588",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently went whale or dolphin watching?",
    "topic": "Travel",
    "id": "bar1000-0162",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently ate a vegetarian roast?",
    "topic": "Food and drink",
    "id": "bar1000-0252",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently used a steam room?",
    "topic": "Personal routines",
    "id": "bar1000-0623",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who last had sex?",
    "topic": "Quick comparisons",
    "id": "bar1000-0803",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently ordered a takeaway to work?",
    "topic": "Food and drink",
    "id": "bar1000-0232",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently went to a boxing class?",
    "topic": "Activities",
    "id": "bar1000-0433",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently went roller skating?",
    "topic": "Activities",
    "id": "bar1000-0421",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently saw a hedgehog in the wild?",
    "topic": "People and milestones",
    "id": "bar1000-0577",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who last had to replace a lost bank card?",
    "topic": "Quick comparisons",
    "id": "bar1000-0828",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who learned to play a musical instrument at the youngest age?",
    "topic": "Life experiences",
    "id": "bar1000-0877",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently went out with a clothing label still attached?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0351",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who most recently ate dinner after 11 pm?",
    "topic": "Personal routines",
    "id": "bar1000-0677",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-12"
  },
  {
    "text": "Who has spent the longest continuous period living alone?",
    "topic": "Life experiences",
    "id": "bar1000-0881",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently bought a vinyl record?",
    "topic": "More to try",
    "id": "bar1000-0993",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently wore something inside out by mistake?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0349",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently missed the last train after a night out?",
    "topic": "Nights out",
    "id": "bar1000-0041",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who works the most night shifts in a normal month?",
    "topic": "Quick comparisons",
    "id": "bar1000-0783",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently accidentally called someone?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0386",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently rode a funicular railway?",
    "topic": "Travel",
    "id": "bar1000-0182",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who bought their current phone most recently?",
    "topic": "Quick comparisons",
    "id": "bar1000-0753",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who has the closest birthday to Halloween?",
    "topic": "Quick comparisons",
    "id": "bar1000-0736",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently ate mussels?",
    "topic": "Food and drink",
    "id": "bar1000-0245",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently got a piercing?",
    "topic": "Personal routines",
    "id": "bar1000-0602",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently got asked for ID?",
    "topic": "Nights out",
    "id": "bar1000-0047",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently went to a martial-arts class?",
    "topic": "Activities",
    "id": "bar1000-0434",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who last washed their hands?",
    "topic": "Here and now",
    "id": "bar1000-0929",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently ordered a drink they had never tried?",
    "topic": "Nights out",
    "id": "bar1000-0058",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently watched a motor race in person?",
    "topic": "Activities",
    "id": "bar1000-0481",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who has the most lemon or lime slices in their drink?",
    "topic": "Here and now",
    "id": "bar1000-0909",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently went fishing?",
    "topic": "Activities",
    "id": "bar1000-0446",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently went to a sculpture park?",
    "topic": "Activities",
    "id": "bar1000-0464",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently visited a castle?",
    "topic": "Travel",
    "id": "bar1000-0166",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently got a tattoo?",
    "topic": "Personal routines",
    "id": "bar1000-0601",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who has the most food left on their plate?",
    "topic": "Here and now",
    "id": "bar1000-0914",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently went on a first date?",
    "topic": "Nights out",
    "id": "bar1000-0077",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently stayed in a yurt?",
    "topic": "Travel",
    "id": "bar1000-0114",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently went to an aerial class?",
    "topic": "Activities",
    "id": "bar1000-0436",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently bought second-hand clothing?",
    "topic": "Personal routines",
    "id": "bar1000-0643",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently bit their tongue while eating?",
    "topic": "Food and drink",
    "id": "bar1000-0264",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently bought a souvenir magnet?",
    "topic": "Travel",
    "id": "bar1000-0148",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently went to a musical?",
    "topic": "Activities",
    "id": "bar1000-0473",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently started a course?",
    "topic": "People and milestones",
    "id": "bar1000-0517",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who is wearing something they borrowed?",
    "topic": "Here and now",
    "id": "bar1000-0931",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who last cancelled a paid subscription?",
    "topic": "Quick comparisons",
    "id": "bar1000-0830",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently fell off a chair?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0336",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who last went to the toilet?",
    "topic": "Here and now",
    "id": "bar1000-0928",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently went to a foam party?",
    "topic": "Nights out",
    "id": "bar1000-0019",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently paid a speeding fine?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0319",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently cooked on a barbecue?",
    "topic": "Food and drink",
    "id": "bar1000-0209",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently went through passport control?",
    "topic": "Travel",
    "id": "bar1000-0141",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who has the closest birthday to Christmas Day?",
    "topic": "Quick comparisons",
    "id": "bar1000-0735",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who has the most nights away booked this year?",
    "topic": "Quick comparisons",
    "id": "bar1000-0834",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-13"
  },
  {
    "text": "Who most recently wore press-on nails?",
    "topic": "Personal routines",
    "id": "bar1000-0617",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently accidentally liked an old social-media post?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0388",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently entered a raffle?",
    "topic": "More to try",
    "id": "bar1000-0987",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently went to a hen or stag do?",
    "topic": "Nights out",
    "id": "bar1000-0002",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently ate at a chef's tasting menu?",
    "topic": "Nights out",
    "id": "bar1000-0067",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who is closest to the toilets?",
    "topic": "Here and now",
    "id": "bar1000-0904",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently saw a fox in the street?",
    "topic": "People and milestones",
    "id": "bar1000-0575",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who last travelled on a motorbike?",
    "topic": "Quick comparisons",
    "id": "bar1000-0837",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently slept through an alarm?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0397",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently followed a cooking video?",
    "topic": "Food and drink",
    "id": "bar1000-0298",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently went geocaching?",
    "topic": "Activities",
    "id": "bar1000-0500",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who last took off a coat?",
    "topic": "Here and now",
    "id": "bar1000-0921",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently drank a milkshake?",
    "topic": "Food and drink",
    "id": "bar1000-0277",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who has the most letters repeated in their first name?",
    "topic": "Quick comparisons",
    "id": "bar1000-0732",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently had a passport stamped?",
    "topic": "Travel",
    "id": "bar1000-0144",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently had to run to catch public transport?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0315",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently stayed in a holiday apartment?",
    "topic": "Travel",
    "id": "bar1000-0112",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently met a partner's parents for the first time?",
    "topic": "Nights out",
    "id": "bar1000-0078",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently blew up balloons for a party?",
    "topic": "Nights out",
    "id": "bar1000-0092",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently had a power cut at home?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0368",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently cleaned their windows?",
    "topic": "People and milestones",
    "id": "bar1000-0545",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently split a restaurant bill equally?",
    "topic": "Nights out",
    "id": "bar1000-0061",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently completed a jigsaw puzzle?",
    "topic": "Personal routines",
    "id": "bar1000-0688",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently wrote a poem?",
    "topic": "Personal routines",
    "id": "bar1000-0699",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who has the smallest age gap between themselves and a sibling?",
    "topic": "Quick comparisons",
    "id": "bar1000-0711",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who speaks the most languages well enough to order a meal?",
    "topic": "Life experiences",
    "id": "bar1000-0855",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently rode in a gondola?",
    "topic": "Travel",
    "id": "bar1000-0186",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently opened a bottle with a corkscrew?",
    "topic": "Food and drink",
    "id": "bar1000-0272",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently visited an island?",
    "topic": "Travel",
    "id": "bar1000-0155",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently broke a drinking glass?",
    "topic": "Nights out",
    "id": "bar1000-0054",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who has the youngest sibling?",
    "topic": "Quick comparisons",
    "id": "bar1000-0714",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who had their longest relationship end most recently?",
    "topic": "Quick comparisons",
    "id": "bar1000-0798",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who has the longest straw in their drink?",
    "topic": "Here and now",
    "id": "bar1000-0913",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently got refused entry to a venue?",
    "topic": "Nights out",
    "id": "bar1000-0046",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently slept for more than 12 hours?",
    "topic": "Personal routines",
    "id": "bar1000-0675",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently went snorkelling?",
    "topic": "Travel",
    "id": "bar1000-0159",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently visited a cousin?",
    "topic": "People and milestones",
    "id": "bar1000-0558",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who has passed driving tests for the most vehicle categories?",
    "topic": "Life experiences",
    "id": "bar1000-0862",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently went on a boat tour?",
    "topic": "Travel",
    "id": "bar1000-0161",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently ate at a restaurant alone?",
    "topic": "Nights out",
    "id": "bar1000-0069",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-14"
  },
  {
    "text": "Who most recently knitted or crocheted something?",
    "topic": "Personal routines",
    "id": "bar1000-0697",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who has completed the most university degrees?",
    "topic": "Life experiences",
    "id": "bar1000-0857",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who has the furthest-away destination already booked?",
    "topic": "Quick comparisons",
    "id": "bar1000-0833",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who first flew alone at the youngest age?",
    "topic": "Life experiences",
    "id": "bar1000-0869",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently got food stuck between their teeth?",
    "topic": "Food and drink",
    "id": "bar1000-0265",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently asked to change an ingredient in a dish?",
    "topic": "Food and drink",
    "id": "bar1000-0295",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently ate a vegan meal in a restaurant?",
    "topic": "Food and drink",
    "id": "bar1000-0251",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently went out dancing?",
    "topic": "Nights out",
    "id": "bar1000-0039",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently bought an outfit for a wedding?",
    "topic": "Personal routines",
    "id": "bar1000-0644",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently wore a cycle helmet?",
    "topic": "Personal routines",
    "id": "bar1000-0665",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently bought a lottery ticket?",
    "topic": "More to try",
    "id": "bar1000-0986",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently jump-started a car?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0325",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently rode a camel?",
    "topic": "More to try",
    "id": "bar1000-0963",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently went to an art gallery?",
    "topic": "Activities",
    "id": "bar1000-0463",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently went to a theatre?",
    "topic": "Activities",
    "id": "bar1000-0470",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently received a birthday card?",
    "topic": "People and milestones",
    "id": "bar1000-0585",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who first had a paid job abroad at the youngest age?",
    "topic": "Life experiences",
    "id": "bar1000-0870",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently wore a face mask for DIY?",
    "topic": "Personal routines",
    "id": "bar1000-0667",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who was born earliest in the morning?",
    "topic": "Quick comparisons",
    "id": "bar1000-0703",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently had a bath?",
    "topic": "Personal routines",
    "id": "bar1000-0679",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently sat on something wet?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0342",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently went to an outdoor cinema?",
    "topic": "Activities",
    "id": "bar1000-0469",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently sent a message to the wrong person?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0385",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently picked a pumpkin?",
    "topic": "More to try",
    "id": "bar1000-0978",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who has the most pets at home?",
    "topic": "Quick comparisons",
    "id": "bar1000-0765",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently went trampolining?",
    "topic": "Activities",
    "id": "bar1000-0427",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently made a New Year's resolution?",
    "topic": "More to try",
    "id": "bar1000-0985",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently made a Halloween costume?",
    "topic": "More to try",
    "id": "bar1000-0980",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently climbed a mountain?",
    "topic": "Activities",
    "id": "bar1000-0496",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently watched a live rugby match?",
    "topic": "Activities",
    "id": "bar1000-0477",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently played frisbee?",
    "topic": "Activities",
    "id": "bar1000-0417",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently watched a sunrise on holiday?",
    "topic": "Travel",
    "id": "bar1000-0163",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently ate an insect?",
    "topic": "Food and drink",
    "id": "bar1000-0250",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently had a manicure?",
    "topic": "Personal routines",
    "id": "bar1000-0614",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently had a haircut at a salon?",
    "topic": "Personal routines",
    "id": "bar1000-0603",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently rode on a water taxi?",
    "topic": "Travel",
    "id": "bar1000-0187",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently wore a bow tie?",
    "topic": "Personal routines",
    "id": "bar1000-0655",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who most recently got chewing gum stuck on their shoe?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0353",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who has kissed the most people in this room?",
    "topic": "Quick comparisons",
    "id": "bar1000-0805",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who last came back to the table?",
    "topic": "Here and now",
    "id": "bar1000-0920",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-15"
  },
  {
    "text": "Who has sat closest to the stage at a concert?",
    "topic": "Life experiences",
    "id": "bar1000-0896",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently started a new job?",
    "topic": "People and milestones",
    "id": "bar1000-0501",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently went to a cinema?",
    "topic": "Activities",
    "id": "bar1000-0467",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently hosted an overnight guest?",
    "topic": "Nights out",
    "id": "bar1000-0037",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently locked themselves out of home?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0301",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently posted a handwritten letter?",
    "topic": "People and milestones",
    "id": "bar1000-0583",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently got a visa for a trip?",
    "topic": "Travel",
    "id": "bar1000-0143",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently went to a dance class?",
    "topic": "Activities",
    "id": "bar1000-0431",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who first went to a nightclub at the oldest age?",
    "topic": "Life experiences",
    "id": "bar1000-0875",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently attended a fan convention?",
    "topic": "More to try",
    "id": "bar1000-0996",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently went windsurfing?",
    "topic": "Activities",
    "id": "bar1000-0442",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently slipped in mud?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0340",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who last bought something second-hand?",
    "topic": "Quick comparisons",
    "id": "bar1000-0823",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently ordered a starter instead of a main?",
    "topic": "Food and drink",
    "id": "bar1000-0291",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who is furthest from the nearest exit?",
    "topic": "Here and now",
    "id": "bar1000-0903",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently painted a room?",
    "topic": "People and milestones",
    "id": "bar1000-0531",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently had their car towed?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0321",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently went ice skating?",
    "topic": "Activities",
    "id": "bar1000-0422",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently went to an aerobics class?",
    "topic": "Activities",
    "id": "bar1000-0435",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently stayed out until sunrise?",
    "topic": "Nights out",
    "id": "bar1000-0040",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who has driven the furthest in one day?",
    "topic": "Life experiences",
    "id": "bar1000-0889",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently trained a new colleague?",
    "topic": "People and milestones",
    "id": "bar1000-0513",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently viewed a property?",
    "topic": "People and milestones",
    "id": "bar1000-0530",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who has the closest birthday to Valentine's Day?",
    "topic": "Quick comparisons",
    "id": "bar1000-0738",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently paid a parking fine?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0318",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently ordered room service?",
    "topic": "Nights out",
    "id": "bar1000-0072",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who has the longest job title by number of words?",
    "topic": "Quick comparisons",
    "id": "bar1000-0781",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently sang in front of an audience?",
    "topic": "People and milestones",
    "id": "bar1000-0600",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently visited a friend who lives abroad?",
    "topic": "People and milestones",
    "id": "bar1000-0559",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently went to a rooftop bar?",
    "topic": "Nights out",
    "id": "bar1000-0021",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently ate in a restaurant after midnight?",
    "topic": "Nights out",
    "id": "bar1000-0071",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who last received a cash gift?",
    "topic": "Quick comparisons",
    "id": "bar1000-0818",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who last travelled in a helicopter?",
    "topic": "Quick comparisons",
    "id": "bar1000-0839",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently went on a work training course?",
    "topic": "People and milestones",
    "id": "bar1000-0512",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently watched a live basketball match?",
    "topic": "Activities",
    "id": "bar1000-0484",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently went to a birthday party?",
    "topic": "Nights out",
    "id": "bar1000-0003",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who last paid for something in instalments?",
    "topic": "Quick comparisons",
    "id": "bar1000-0826",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently stayed in a tent?",
    "topic": "Travel",
    "id": "bar1000-0110",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently went on a ski holiday?",
    "topic": "Travel",
    "id": "bar1000-0126",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who most recently paid the whole restaurant bill?",
    "topic": "Nights out",
    "id": "bar1000-0062",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-16"
  },
  {
    "text": "Who has the shortest working week by contracted hours?",
    "topic": "Quick comparisons",
    "id": "bar1000-0778",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who lives closest to another person in this group?",
    "topic": "Quick comparisons",
    "id": "bar1000-0790",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently worked on a bank holiday?",
    "topic": "People and milestones",
    "id": "bar1000-0508",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently ate at a motorway service station?",
    "topic": "Food and drink",
    "id": "bar1000-0238",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently got promoted?",
    "topic": "People and milestones",
    "id": "bar1000-0505",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently went to an airport to drop someone off?",
    "topic": "Travel",
    "id": "bar1000-0129",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently played badminton?",
    "topic": "Activities",
    "id": "bar1000-0406",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently flew in business class?",
    "topic": "Travel",
    "id": "bar1000-0137",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who last won money in a competition?",
    "topic": "Quick comparisons",
    "id": "bar1000-0820",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently went to a planetarium?",
    "topic": "Activities",
    "id": "bar1000-0466",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who last won money on a scratchcard?",
    "topic": "Quick comparisons",
    "id": "bar1000-0819",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently sent a drink back?",
    "topic": "Nights out",
    "id": "bar1000-0053",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who has lived in the most different homes?",
    "topic": "Life experiences",
    "id": "bar1000-0860",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently went ziplining?",
    "topic": "More to try",
    "id": "bar1000-0958",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently went to a graduation ceremony?",
    "topic": "People and milestones",
    "id": "bar1000-0525",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently spent a night in hospital as a patient?",
    "topic": "Personal routines",
    "id": "bar1000-0637",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently visited a desert?",
    "topic": "Travel",
    "id": "bar1000-0173",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently ate lobster?",
    "topic": "Food and drink",
    "id": "bar1000-0244",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who has lived in their current home the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0756",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently wore a tie?",
    "topic": "Personal routines",
    "id": "bar1000-0654",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently broke a necklace?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0355",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently travelled somewhere without mobile signal?",
    "topic": "Travel",
    "id": "bar1000-0199",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently finished an audiobook?",
    "topic": "Personal routines",
    "id": "bar1000-0687",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently won a prize at a fairground?",
    "topic": "More to try",
    "id": "bar1000-0988",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently went sailing?",
    "topic": "Activities",
    "id": "bar1000-0443",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently used a drive-through?",
    "topic": "Food and drink",
    "id": "bar1000-0233",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently cooked over a campfire?",
    "topic": "Food and drink",
    "id": "bar1000-0210",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who has dived to the greatest depth?",
    "topic": "Life experiences",
    "id": "bar1000-0895",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently played rugby?",
    "topic": "Activities",
    "id": "bar1000-0412",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently met a friend's new baby?",
    "topic": "People and milestones",
    "id": "bar1000-0560",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently ate oysters?",
    "topic": "Food and drink",
    "id": "bar1000-0243",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently hired a van?",
    "topic": "People and milestones",
    "id": "bar1000-0551",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently visited a cathedral?",
    "topic": "Travel",
    "id": "bar1000-0168",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who wore a cast for the longest time?",
    "topic": "Life experiences",
    "id": "bar1000-0879",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently went to a gym?",
    "topic": "Activities",
    "id": "bar1000-0428",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently hung a picture?",
    "topic": "People and milestones",
    "id": "bar1000-0534",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently lost their house keys?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0303",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently sent an email without its attachment?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0389",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently reversed into something?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0328",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently sent a birthday card?",
    "topic": "People and milestones",
    "id": "bar1000-0584",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-17"
  },
  {
    "text": "Who most recently squeezed their own fruit juice?",
    "topic": "Food and drink",
    "id": "bar1000-0215",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently sewed on a button?",
    "topic": "Personal routines",
    "id": "bar1000-0648",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently ate dinner outdoors?",
    "topic": "Food and drink",
    "id": "bar1000-0240",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went to a spa?",
    "topic": "Personal routines",
    "id": "bar1000-0621",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went to a speed-dating event?",
    "topic": "Nights out",
    "id": "bar1000-0033",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently drank a shot of tequila?",
    "topic": "Food and drink",
    "id": "bar1000-0281",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently ate a gluten-free pizza?",
    "topic": "Food and drink",
    "id": "bar1000-0253",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went to a Christmas market?",
    "topic": "Nights out",
    "id": "bar1000-0027",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently left shopping behind at the checkout?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0379",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently had a vaccination?",
    "topic": "Personal routines",
    "id": "bar1000-0630",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently slept in an airport?",
    "topic": "Travel",
    "id": "bar1000-0140",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently collected a takeaway in person?",
    "topic": "Food and drink",
    "id": "bar1000-0231",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went on a staycation?",
    "topic": "Travel",
    "id": "bar1000-0198",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently lit birthday candles?",
    "topic": "More to try",
    "id": "bar1000-0984",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went on a double date?",
    "topic": "Nights out",
    "id": "bar1000-0075",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who was born furthest from where you are now?",
    "topic": "Quick comparisons",
    "id": "bar1000-0704",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently made jam?",
    "topic": "Food and drink",
    "id": "bar1000-0220",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went on a business trip?",
    "topic": "People and milestones",
    "id": "bar1000-0516",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently rode a mechanical bull?",
    "topic": "More to try",
    "id": "bar1000-0965",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who has the oldest living grandparent?",
    "topic": "Quick comparisons",
    "id": "bar1000-0713",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who is holding their drink in their left hand?",
    "topic": "Here and now",
    "id": "bar1000-0912",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently walked someone else's dog?",
    "topic": "People and milestones",
    "id": "bar1000-0566",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went to a beer festival?",
    "topic": "Nights out",
    "id": "bar1000-0022",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently polished their shoes?",
    "topic": "Personal routines",
    "id": "bar1000-0650",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently had a flight delayed?",
    "topic": "Travel",
    "id": "bar1000-0130",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who met their oldest friend at the youngest age?",
    "topic": "Quick comparisons",
    "id": "bar1000-0793",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went to laser tag?",
    "topic": "Activities",
    "id": "bar1000-0448",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently travelled by Eurostar?",
    "topic": "Travel",
    "id": "bar1000-0103",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently washed up after a group meal?",
    "topic": "Food and drink",
    "id": "bar1000-0300",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently broke a mug?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0366",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently had a bin bag split?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0364",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went to a themed restaurant?",
    "topic": "Nights out",
    "id": "bar1000-0098",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently learned a new practical skill in a class?",
    "topic": "People and milestones",
    "id": "bar1000-0523",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently had a train ticket checked?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0316",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently had a connecting flight?",
    "topic": "Travel",
    "id": "bar1000-0139",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently played a game of chess?",
    "topic": "Personal routines",
    "id": "bar1000-0692",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently bought someone a surprise gift?",
    "topic": "People and milestones",
    "id": "bar1000-0589",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently went litter picking?",
    "topic": "Activities",
    "id": "bar1000-0493",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently ordered a bottle of wine in a restaurant?",
    "topic": "Nights out",
    "id": "bar1000-0060",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who has attended the most different schools?",
    "topic": "Life experiences",
    "id": "bar1000-0856",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-18"
  },
  {
    "text": "Who most recently won a trophy?",
    "topic": "Activities",
    "id": "bar1000-0489",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently left money in a pocket in the wash?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0362",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently shared a hotel room with a friend?",
    "topic": "Travel",
    "id": "bar1000-0196",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently fell asleep on public transport?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0314",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went to a Pride parade?",
    "topic": "More to try",
    "id": "bar1000-0998",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently ate something past its best-before date?",
    "topic": "Food and drink",
    "id": "bar1000-0258",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently left something in a restaurant?",
    "topic": "Nights out",
    "id": "bar1000-0064",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently missed a flight?",
    "topic": "Travel",
    "id": "bar1000-0132",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went to a street party?",
    "topic": "Nights out",
    "id": "bar1000-0010",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who has the biggest shoe size?",
    "topic": "Quick comparisons",
    "id": "bar1000-0739",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went to a karaoke night?",
    "topic": "Nights out",
    "id": "bar1000-0014",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went paddleboarding?",
    "topic": "Activities",
    "id": "bar1000-0437",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently flew on a propeller plane?",
    "topic": "Travel",
    "id": "bar1000-0138",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently had a dental check-up?",
    "topic": "Personal routines",
    "id": "bar1000-0627",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently rode a Segway?",
    "topic": "More to try",
    "id": "bar1000-0966",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently got caught in rain without a coat?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0344",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently ripped their trousers?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0347",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went to a bingo hall?",
    "topic": "Activities",
    "id": "bar1000-0452",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went to a fancy-dress party?",
    "topic": "Nights out",
    "id": "bar1000-0009",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently had afternoon tea?",
    "topic": "Food and drink",
    "id": "bar1000-0235",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who has had their current hairstyle the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0750",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went fossil hunting?",
    "topic": "More to try",
    "id": "bar1000-0975",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently had a cold shower?",
    "topic": "Personal routines",
    "id": "bar1000-0678",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who has the longest flight already booked?",
    "topic": "Quick comparisons",
    "id": "bar1000-0835",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who finished work latest today?",
    "topic": "Quick comparisons",
    "id": "bar1000-0775",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went on holiday with a partner?",
    "topic": "Travel",
    "id": "bar1000-0121",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went clay-pigeon shooting?",
    "topic": "More to try",
    "id": "bar1000-0953",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently passed an exam?",
    "topic": "People and milestones",
    "id": "bar1000-0520",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently cracked a phone screen?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0392",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently painted someone else's nails?",
    "topic": "Personal routines",
    "id": "bar1000-0616",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently had their hearing tested?",
    "topic": "Personal routines",
    "id": "bar1000-0641",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently bought a round for this group?",
    "topic": "Nights out",
    "id": "bar1000-0050",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who was born in the southernmost place?",
    "topic": "Quick comparisons",
    "id": "bar1000-0707",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went to a flea market?",
    "topic": "More to try",
    "id": "bar1000-0991",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently attended a conference?",
    "topic": "People and milestones",
    "id": "bar1000-0515",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who has the most facial piercings?",
    "topic": "Quick comparisons",
    "id": "bar1000-0746",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently bought something from an ice-cream van?",
    "topic": "Food and drink",
    "id": "bar1000-0227",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently went to a murder-mystery evening?",
    "topic": "Nights out",
    "id": "bar1000-0097",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who has lived in the most countries?",
    "topic": "Life experiences",
    "id": "bar1000-0851",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently ate a whole chilli?",
    "topic": "Food and drink",
    "id": "bar1000-0249",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-19"
  },
  {
    "text": "Who most recently played golf on a full-size course?",
    "topic": "Activities",
    "id": "bar1000-0416",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently sang happy birthday in a restaurant?",
    "topic": "Nights out",
    "id": "bar1000-0073",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently bought food from a farm shop?",
    "topic": "Food and drink",
    "id": "bar1000-0225",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently made pancakes?",
    "topic": "Food and drink",
    "id": "bar1000-0203",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently ate street food?",
    "topic": "Food and drink",
    "id": "bar1000-0228",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who last rode on a tractor?",
    "topic": "Quick comparisons",
    "id": "bar1000-0840",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who travels furthest to see their parents?",
    "topic": "Quick comparisons",
    "id": "bar1000-0785",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently went crabbing?",
    "topic": "More to try",
    "id": "bar1000-0974",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently used a foreign banknote?",
    "topic": "Travel",
    "id": "bar1000-0146",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently washed a car?",
    "topic": "People and milestones",
    "id": "bar1000-0546",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who has the most days until their next birthday?",
    "topic": "Quick comparisons",
    "id": "bar1000-0771",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently shrunk something in the wash?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0359",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently missed a bus?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0309",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently stayed in a caravan?",
    "topic": "Travel",
    "id": "bar1000-0108",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently changed their bedsheets?",
    "topic": "People and milestones",
    "id": "bar1000-0538",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently decorated a gingerbread house?",
    "topic": "More to try",
    "id": "bar1000-0982",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently went on a blind date?",
    "topic": "Nights out",
    "id": "bar1000-0076",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently watched a horse race in person?",
    "topic": "Activities",
    "id": "bar1000-0480",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who has the most middle names?",
    "topic": "Quick comparisons",
    "id": "bar1000-0728",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently received a handmade gift?",
    "topic": "People and milestones",
    "id": "bar1000-0587",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently went bouldering?",
    "topic": "Activities",
    "id": "bar1000-0426",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently bought a physical newspaper?",
    "topic": "Personal routines",
    "id": "bar1000-0684",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently drank bubble tea?",
    "topic": "Food and drink",
    "id": "bar1000-0276",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently removed a spider for someone else?",
    "topic": "People and milestones",
    "id": "bar1000-0579",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently caught the wrong bus?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0311",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently had a photo taken with a celebrity?",
    "topic": "People and milestones",
    "id": "bar1000-0593",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently ate with chopsticks?",
    "topic": "Food and drink",
    "id": "bar1000-0241",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently lost their wallet?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0304",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who pays the most rent per month?",
    "topic": "Quick comparisons",
    "id": "bar1000-0827",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who has the most rings on one hand?",
    "topic": "Here and now",
    "id": "bar1000-0944",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently entered a running race?",
    "topic": "Activities",
    "id": "bar1000-0486",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently mowed a lawn?",
    "topic": "People and milestones",
    "id": "bar1000-0543",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently got on the wrong train?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0312",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who has been in their current relationship the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0794",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who has the most bedrooms in their home?",
    "topic": "Quick comparisons",
    "id": "bar1000-0761",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who last went outside?",
    "topic": "Here and now",
    "id": "bar1000-0927",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who last used a hire bicycle?",
    "topic": "Quick comparisons",
    "id": "bar1000-0844",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently went to an opera?",
    "topic": "Activities",
    "id": "bar1000-0472",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who last haggled over a price?",
    "topic": "Quick comparisons",
    "id": "bar1000-0824",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently cleaned a pair of trainers?",
    "topic": "Personal routines",
    "id": "bar1000-0651",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-20"
  },
  {
    "text": "Who most recently used a metal detector?",
    "topic": "More to try",
    "id": "bar1000-0976",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently travelled on a sleeper coach?",
    "topic": "Travel",
    "id": "bar1000-0105",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who last lent someone money?",
    "topic": "Quick comparisons",
    "id": "bar1000-0815",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently wore a Christmas jumper to an event?",
    "topic": "Nights out",
    "id": "bar1000-0096",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who has the most annual leave already booked?",
    "topic": "Quick comparisons",
    "id": "bar1000-0831",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently broke an egg while carrying groceries?",
    "topic": "Food and drink",
    "id": "bar1000-0270",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently slept in a hammock?",
    "topic": "Personal routines",
    "id": "bar1000-0672",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently adopted a pet?",
    "topic": "People and milestones",
    "id": "bar1000-0568",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently was in a newspaper?",
    "topic": "People and milestones",
    "id": "bar1000-0594",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who has the oldest sibling?",
    "topic": "Quick comparisons",
    "id": "bar1000-0715",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who has the longest hair?",
    "topic": "Quick comparisons",
    "id": "bar1000-0741",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who starts work next?",
    "topic": "Quick comparisons",
    "id": "bar1000-0773",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who has owned their current car the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0755",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently had to reset a tripped fuse?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0370",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently had a card payment declined?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0380",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently went to a casino?",
    "topic": "Activities",
    "id": "bar1000-0453",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who has held the most different nationalities?",
    "topic": "Life experiences",
    "id": "bar1000-0854",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently drank a drink through a paper straw?",
    "topic": "Food and drink",
    "id": "bar1000-0286",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who has the most different bags with them?",
    "topic": "Here and now",
    "id": "bar1000-0948",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently danced with a stranger?",
    "topic": "Nights out",
    "id": "bar1000-0085",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently went to a nightclub?",
    "topic": "Nights out",
    "id": "bar1000-0017",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who passed their driving test at the oldest age?",
    "topic": "Life experiences",
    "id": "bar1000-0864",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently attended a cooking class?",
    "topic": "Food and drink",
    "id": "bar1000-0299",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who has the most godchildren?",
    "topic": "Quick comparisons",
    "id": "bar1000-0725",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who last laughed out loud?",
    "topic": "Here and now",
    "id": "bar1000-0923",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently dropped their phone in water?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0391",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who travelled furthest to get here today?",
    "topic": "Quick comparisons",
    "id": "bar1000-0786",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who last borrowed money from a friend?",
    "topic": "Quick comparisons",
    "id": "bar1000-0816",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who got their first piercing at the oldest age?",
    "topic": "Quick comparisons",
    "id": "bar1000-0749",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently ate a meal on a plane?",
    "topic": "Food and drink",
    "id": "bar1000-0237",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently forgot to put the bins out?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0363",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently flew a kite?",
    "topic": "More to try",
    "id": "bar1000-0972",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently went to a bottomless brunch?",
    "topic": "Nights out",
    "id": "bar1000-0016",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently dropped food on the floor while cooking?",
    "topic": "Food and drink",
    "id": "bar1000-0261",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently went scuba diving?",
    "topic": "Travel",
    "id": "bar1000-0160",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who has had their phone number the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0754",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently received a handwritten letter?",
    "topic": "People and milestones",
    "id": "bar1000-0582",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who has the most dogs?",
    "topic": "Quick comparisons",
    "id": "bar1000-0769",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who bought their first car at the youngest age?",
    "topic": "Life experiences",
    "id": "bar1000-0872",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently had a job interview?",
    "topic": "People and milestones",
    "id": "bar1000-0503",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-21"
  },
  {
    "text": "Who most recently appeared on television?",
    "topic": "People and milestones",
    "id": "bar1000-0595",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who has walked the furthest in one day?",
    "topic": "Life experiences",
    "id": "bar1000-0890",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently bought food from a market stall?",
    "topic": "Food and drink",
    "id": "bar1000-0226",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently went to an arcade?",
    "topic": "Activities",
    "id": "bar1000-0451",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently cut their own hair?",
    "topic": "Personal routines",
    "id": "bar1000-0606",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently voted in an election?",
    "topic": "More to try",
    "id": "bar1000-1000",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who lives closest to their workplace?",
    "topic": "Quick comparisons",
    "id": "bar1000-0784",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who has the most children?",
    "topic": "Quick comparisons",
    "id": "bar1000-0720",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently rearranged their bedroom?",
    "topic": "People and milestones",
    "id": "bar1000-0536",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who has the closest birthday to New Year's Day?",
    "topic": "Quick comparisons",
    "id": "bar1000-0737",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who has the smallest hands?",
    "topic": "Quick comparisons",
    "id": "bar1000-0740",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently ordered a takeaway?",
    "topic": "Food and drink",
    "id": "bar1000-0230",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who has the longest journey home from here?",
    "topic": "Quick comparisons",
    "id": "bar1000-0789",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who last drove through a car wash?",
    "topic": "Quick comparisons",
    "id": "bar1000-0843",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who has the longest sleeve pushed up their arm?",
    "topic": "Here and now",
    "id": "bar1000-0947",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently caught a wedding bouquet?",
    "topic": "Nights out",
    "id": "bar1000-0083",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently walked a coastal path?",
    "topic": "Activities",
    "id": "bar1000-0497",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently requested a song from a DJ?",
    "topic": "Nights out",
    "id": "bar1000-0086",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently went snowboarding?",
    "topic": "More to try",
    "id": "bar1000-0967",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently bought something in the wrong size?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0376",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who shares a first name with the most people in this group?",
    "topic": "Quick comparisons",
    "id": "bar1000-0734",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently lost an earbud?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0394",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently visited a cave?",
    "topic": "Travel",
    "id": "bar1000-0172",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently saw a deer in the wild?",
    "topic": "People and milestones",
    "id": "bar1000-0576",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently was charged a late fee?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0384",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently gave someone flowers?",
    "topic": "People and milestones",
    "id": "bar1000-0581",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently spilt a drink on a keyboard?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0390",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who has the oldest child?",
    "topic": "Quick comparisons",
    "id": "bar1000-0722",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently skimmed stones on water?",
    "topic": "More to try",
    "id": "bar1000-0973",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who has been with their current employer the longest?",
    "topic": "Quick comparisons",
    "id": "bar1000-0779",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently borrowed an outfit?",
    "topic": "Personal routines",
    "id": "bar1000-0652",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who has the biggest household by number of people?",
    "topic": "Quick comparisons",
    "id": "bar1000-0764",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently paid an entry fee at a door?",
    "topic": "Nights out",
    "id": "bar1000-0049",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently went on a beach holiday?",
    "topic": "Travel",
    "id": "bar1000-0125",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently bought a car?",
    "topic": "People and milestones",
    "id": "bar1000-0549",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently paid for excess baggage?",
    "topic": "Travel",
    "id": "bar1000-0134",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently flew with only hand luggage?",
    "topic": "Travel",
    "id": "bar1000-0135",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently went to a circus?",
    "topic": "Activities",
    "id": "bar1000-0474",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently bought a fancy-dress costume?",
    "topic": "Nights out",
    "id": "bar1000-0094",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently borrowed someone else's car?",
    "topic": "People and milestones",
    "id": "bar1000-0552",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-22"
  },
  {
    "text": "Who most recently drank from a coconut?",
    "topic": "Food and drink",
    "id": "bar1000-0275",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently went to a housewarming?",
    "topic": "Nights out",
    "id": "bar1000-0004",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently baked bread?",
    "topic": "Food and drink",
    "id": "bar1000-0202",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently played squash?",
    "topic": "Activities",
    "id": "bar1000-0408",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has the biggest age gap between themselves and a sibling?",
    "topic": "Quick comparisons",
    "id": "bar1000-0712",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who got their first tattoo at the youngest age?",
    "topic": "Quick comparisons",
    "id": "bar1000-0748",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has paid the most for a single sports ticket?",
    "topic": "Life experiences",
    "id": "bar1000-0898",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently had a nap during the day?",
    "topic": "Personal routines",
    "id": "bar1000-0673",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently went abroad alone?",
    "topic": "Travel",
    "id": "bar1000-0119",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has the highest-value single banknote on them?",
    "topic": "Quick comparisons",
    "id": "bar1000-0811",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has had the longest relationship in total?",
    "topic": "Quick comparisons",
    "id": "bar1000-0799",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently performed on a stage?",
    "topic": "People and milestones",
    "id": "bar1000-0599",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has the most cats?",
    "topic": "Quick comparisons",
    "id": "bar1000-0770",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who last left the table?",
    "topic": "Here and now",
    "id": "bar1000-0919",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently used earplugs at a live event?",
    "topic": "Personal routines",
    "id": "bar1000-0668",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who ordered their current drink first?",
    "topic": "Here and now",
    "id": "bar1000-0915",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has the most words printed on their top?",
    "topic": "Here and now",
    "id": "bar1000-0937",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has gone longest since they last had sex?",
    "topic": "Quick comparisons",
    "id": "bar1000-0804",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently visited a waterfall?",
    "topic": "Travel",
    "id": "bar1000-0171",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently wore a hi-vis vest?",
    "topic": "Personal routines",
    "id": "bar1000-0661",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has had the most different paid occupations?",
    "topic": "Life experiences",
    "id": "bar1000-0858",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently finished a course?",
    "topic": "People and milestones",
    "id": "bar1000-0518",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently signed a tenancy agreement?",
    "topic": "People and milestones",
    "id": "bar1000-0528",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently went to a shooting range?",
    "topic": "More to try",
    "id": "bar1000-0954",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently went foraging?",
    "topic": "More to try",
    "id": "bar1000-0977",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently flew on a plane?",
    "topic": "Travel",
    "id": "bar1000-0101",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently used a sauna?",
    "topic": "Personal routines",
    "id": "bar1000-0622",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently used a flask for a hot drink?",
    "topic": "Food and drink",
    "id": "bar1000-0288",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has been married the most times?",
    "topic": "Quick comparisons",
    "id": "bar1000-0800",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently sold something at a car boot sale?",
    "topic": "More to try",
    "id": "bar1000-0990",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently watched a live tennis match?",
    "topic": "Activities",
    "id": "bar1000-0478",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently forgot a password?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0395",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently slept in a different bedroom at home?",
    "topic": "People and milestones",
    "id": "bar1000-0537",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently cooked for someone else?",
    "topic": "Food and drink",
    "id": "bar1000-0200",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently climbed a lighthouse?",
    "topic": "Travel",
    "id": "bar1000-0165",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has the youngest pet?",
    "topic": "Quick comparisons",
    "id": "bar1000-0767",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who has had the longest single flight by hours?",
    "topic": "Life experiences",
    "id": "bar1000-0883",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently went to a petting farm?",
    "topic": "Activities",
    "id": "bar1000-0461",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who last donated money to charity?",
    "topic": "Quick comparisons",
    "id": "bar1000-0821",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently rented a car abroad?",
    "topic": "Travel",
    "id": "bar1000-0151",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-23"
  },
  {
    "text": "Who most recently went rowing?",
    "topic": "Activities",
    "id": "bar1000-0440",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently made a cocktail?",
    "topic": "Food and drink",
    "id": "bar1000-0213",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently bought a home?",
    "topic": "People and milestones",
    "id": "bar1000-0529",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who last used a discount code?",
    "topic": "Quick comparisons",
    "id": "bar1000-0825",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently left laundry in the washing machine overnight?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0358",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently sold a car?",
    "topic": "People and milestones",
    "id": "bar1000-0550",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently swam in a lake?",
    "topic": "Travel",
    "id": "bar1000-0157",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently stepped in dog poo?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0341",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently went axe throwing?",
    "topic": "More to try",
    "id": "bar1000-0951",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently painted a picture?",
    "topic": "Personal routines",
    "id": "bar1000-0695",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who has swum the longest distance without stopping?",
    "topic": "Life experiences",
    "id": "bar1000-0892",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently lost their phone?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0305",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently went to a theme park?",
    "topic": "Activities",
    "id": "bar1000-0454",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who has lived in their current town the shortest time?",
    "topic": "Quick comparisons",
    "id": "bar1000-0757",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who has the soonest holiday booked?",
    "topic": "Quick comparisons",
    "id": "bar1000-0832",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who is sitting closest to a speaker?",
    "topic": "Here and now",
    "id": "bar1000-0905",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who took the most attempts to pass their driving test?",
    "topic": "Life experiences",
    "id": "bar1000-0863",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently had their hair braided?",
    "topic": "Personal routines",
    "id": "bar1000-0611",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently had their hair professionally coloured?",
    "topic": "Personal routines",
    "id": "bar1000-0604",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who has spent the most consecutive nights on a cruise?",
    "topic": "Life experiences",
    "id": "bar1000-0888",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently walked into the wrong room by mistake?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0332",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently went on a city break?",
    "topic": "Travel",
    "id": "bar1000-0124",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently bought a houseplant?",
    "topic": "People and milestones",
    "id": "bar1000-0541",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently got a pay rise?",
    "topic": "People and milestones",
    "id": "bar1000-0504",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently used a recipe book?",
    "topic": "Food and drink",
    "id": "bar1000-0297",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently introduced a partner to their own parents?",
    "topic": "Nights out",
    "id": "bar1000-0079",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who is wearing something they received as a birthday gift?",
    "topic": "Here and now",
    "id": "bar1000-0934",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently ate frog's legs?",
    "topic": "Food and drink",
    "id": "bar1000-0248",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently used a hotel swimming pool?",
    "topic": "Travel",
    "id": "bar1000-0190",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently went swimming in an indoor pool?",
    "topic": "Activities",
    "id": "bar1000-0418",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently went fruit picking?",
    "topic": "Food and drink",
    "id": "bar1000-0224",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently checked into accommodation after midnight?",
    "topic": "Travel",
    "id": "bar1000-0195",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently made a roast dinner?",
    "topic": "Food and drink",
    "id": "bar1000-0204",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently watched a pantomime?",
    "topic": "Activities",
    "id": "bar1000-0475",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who has visited the most continents?",
    "topic": "Life experiences",
    "id": "bar1000-0852",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who has had the longest single train journey by hours?",
    "topic": "Life experiences",
    "id": "bar1000-0884",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently had a parcel delivered to the wrong place?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0371",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently stayed at an all-inclusive resort?",
    "topic": "Travel",
    "id": "bar1000-0116",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently rode in a rickshaw?",
    "topic": "Travel",
    "id": "bar1000-0185",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who most recently went skateboarding?",
    "topic": "Activities",
    "id": "bar1000-0423",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-24"
  },
  {
    "text": "Who first travelled abroad at the oldest age?",
    "topic": "Life experiences",
    "id": "bar1000-0868",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who had their first kiss at the oldest age?",
    "topic": "Quick comparisons",
    "id": "bar1000-0807",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently went wakeboarding?",
    "topic": "Activities",
    "id": "bar1000-0445",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently spat out a mouthful of food?",
    "topic": "Food and drink",
    "id": "bar1000-0266",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who is wearing a top with the earliest year printed on it?",
    "topic": "Here and now",
    "id": "bar1000-0936",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who last rode in a convertible with the roof down?",
    "topic": "Quick comparisons",
    "id": "bar1000-0838",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who last travelled in a limousine?",
    "topic": "Quick comparisons",
    "id": "bar1000-0836",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently travelled on an overnight train?",
    "topic": "Travel",
    "id": "bar1000-0104",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently used fake tan at home?",
    "topic": "Personal routines",
    "id": "bar1000-0619",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently baked a cake?",
    "topic": "Food and drink",
    "id": "bar1000-0201",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who has the most step-siblings?",
    "topic": "Quick comparisons",
    "id": "bar1000-0719",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently wore a uniform?",
    "topic": "Personal routines",
    "id": "bar1000-0659",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently left a job?",
    "topic": "People and milestones",
    "id": "bar1000-0502",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently went abroad for work?",
    "topic": "Travel",
    "id": "bar1000-0117",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently built something with LEGO?",
    "topic": "Personal routines",
    "id": "bar1000-0694",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently went to a zoo?",
    "topic": "Activities",
    "id": "bar1000-0458",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently renewed their passport?",
    "topic": "Travel",
    "id": "bar1000-0142",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who last went to the bar?",
    "topic": "Here and now",
    "id": "bar1000-0917",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who last drove a van?",
    "topic": "Quick comparisons",
    "id": "bar1000-0841",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who has the longest shift tomorrow?",
    "topic": "Quick comparisons",
    "id": "bar1000-0777",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently ordered a mocktail in a bar?",
    "topic": "Nights out",
    "id": "bar1000-0059",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently went on a hot-air balloon flight?",
    "topic": "More to try",
    "id": "bar1000-0962",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently went on a Ferris wheel?",
    "topic": "Activities",
    "id": "bar1000-0456",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who is wearing something they bought on holiday?",
    "topic": "Here and now",
    "id": "bar1000-0935",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently spoke on the radio?",
    "topic": "People and milestones",
    "id": "bar1000-0596",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently went indoor skydiving?",
    "topic": "More to try",
    "id": "bar1000-0955",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently looked after someone's pet while they were away?",
    "topic": "People and milestones",
    "id": "bar1000-0567",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently gave blood?",
    "topic": "Personal routines",
    "id": "bar1000-0631",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently watched a live burlesque performance?",
    "topic": "Nights out",
    "id": "bar1000-0100",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently made an Easter egg hunt?",
    "topic": "More to try",
    "id": "bar1000-0983",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who had braces on their teeth for the longest time?",
    "topic": "Life experiences",
    "id": "bar1000-0878",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently put up a shelf?",
    "topic": "People and milestones",
    "id": "bar1000-0533",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently visited someone in hospital?",
    "topic": "Personal routines",
    "id": "bar1000-0636",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently had a car serviced?",
    "topic": "People and milestones",
    "id": "bar1000-0547",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently went to a tattoo convention?",
    "topic": "More to try",
    "id": "bar1000-0997",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently kept a paper diary?",
    "topic": "Personal routines",
    "id": "bar1000-0700",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who has cycled the furthest in one day?",
    "topic": "Life experiences",
    "id": "bar1000-0893",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently dyed laundry the wrong colour by accident?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0360",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently sent food back in a restaurant?",
    "topic": "Nights out",
    "id": "bar1000-0066",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  },
  {
    "text": "Who most recently lost a button from their clothes?",
    "topic": "Everyday mishaps",
    "id": "bar1000-0348",
    "category": "proven",
    "source": "prewritten",
    "batchId": "bar1000-25"
  }
];
