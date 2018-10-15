const CONSTANTS = {
  SYSTEM: {
    DEBUG: true,
    API_URL_LOCALHOST: 'http://localhost:3005/',
    API_URL_PRODUCTION: 'http://%s/api/',
    COPYRIGHT: '2017',
    DB_PREFIX_PS: 'ps_',
    DB_PREFIX_OSPS: 'osps_',
    DB_NAME: 'osps4',
    EMAIL_LOG_TO: 'rjaffe@sandi.net',
    EMAIL_HOST: 'mail.sandi.net',
    LAST_UPDATE_FILE: 'lastUpdate.txt',
    COURSE_UNDER_REVIEW_CONTACT: 'Jason Maher at jmaher@sandi.net',
    MAX_STUDENTS_TO_SHOW_IN_COURSE: 200
  },
  I_HIGH_LAB_COURSE_NUMBERS: ['8155'],
  I_HIGH_SCHOOL_CODES: ['504'],
  CREDIT_CHECK: {
    CREDIT_THRESHOLDS: {
      '9': 10,
      '10': 21,
      '11': 32,
      '12': 44
    }
  },
  CCTE: {
    NOT_COMPLETED: 0,
    NOT_ATTEMPTED: 0,
    ATTEMPTED: 1,
    COMPLETED: 2,
    SDUSD_SATISFIED: 0x1,
    CALPADS_SATISFIED: 0x2
  },
  OSPS_DATA: {
    OSPS_TABLE_LIST: ['osps_course_lists','osps_users_config','osps_ihigh_teacher_list'/*,'osps_ccte_pathways'*/],
    CSV_REQUIREMENT_FLAGS_FILENAME: 'csv_student_data.csv',
    CSV_REQUIREMENT_FLAGS_FIELDS_FILENAME: 'csv_student_data_fields.csv',
    CSV_JSON_FILENAME: 'csv_json.csv',
    CSV_JSON_FIELDS_FILENAME: 'csv_json_fields.csv',

    REQUIREMENT_FLAGS_TABLE_NAME: 'requirement_flags',
    JSON_DATA_TABLE_NAME: 'student_data',
    OSPS_USERS_TABLE: 'users',

    IHIGH_ELIGIBLE_COURSES_CSV_FILE: 'ihigh_eligible.csv',
    IHIGH_TABLE_NAME: 'ihigh',
    IHIGH_FIELDS_FILENAME: 'ihigh_fields.csv'
  },
  PS_FIELDS: {
    PS_CAHSEE: [
      'student_number',
      'math',
      'ela',
      'test_year'
    ],

    PS_COURSE_LIST: [
      'course_number',
      'course_name',
      'department',
      'credit_hours',
      'repeatable',
      'uc_category',
      'weighted'
    ],

    PS_FITNESSGRAM: [
      'student_number',
      'overall'
    ],

    PS_GPA: [
      'student_number',
      '9_12_total_wgpa',
      '10_12_total_wgpa',
      '10_12_wgpa_wo_pe_rotc'
    ],

    PS_GRADE: [
      'student_number',
      'school_name',
      'store_code',
      'course_code',
      'grade',
      'term_year',
      'credits_attempted',
      'credits_received',
      'department',
      'grade_level',
      'replaced_grade',
      'replaced_by_equivalent_course',
      'replaces_equivalent_course',
      'exclude_from_suppression',
      'sdusd',
      'weighted_grade_scale',
      't_course_name'
    ],

    PS_SCHEDULE: [
      'student_number',
      'schoolid',
      'teacher',
      'room',
      'team',
      'expression',
      'periods',
      'cycle_days',
      'course_code',
      'course_name',
      'course_department',
      'term_name',
      'year_number',
      'current_term',
      'section_number',
      'maxenrollment',
      'teacher_number'
    ],

    PS_SCHOOL: [
      'name',
      'abbreviation',
      'schoolid'
    ],

    PS_STUDENT: [
      'student_number',
      'state_student_number',
      'schoolid',
      'last_name',
      'first_name',
      'middle_name',
      'grade_level',
      'gender',
      'class_of',
      'dob',
      'ca_counselor',
      'fed_ethnicity',
      'el_proflevel',
      'ethnicity_list',
      'guardian_language',
      'guardian_email',
      'street',
      'city',
      'state',
      'zip',
      'transcript_notes',
      'sped',
      'non_diploma',
      'foster_living_situation',
      'homeless_living_situation',
      'unaccompanied_youth',
      'runaway_youth',
      'other_living_situation'
    ],

    PS_USER: [
      'teacher_number',
      'last_name',
      'first_name',
      'email',
      'role',
      'schoolid'
    ],

    PS_ONLINE_COURSE_REQUESTS: [
      'student_number',
      'term_name',
      'year_number',
      'schoolid',
      'course_number',
      'priority',
      'whocreated',
      'whencreated',
      'whomodified',
      'whenmodified'
    ]
  },
  UPDATE: {
    ELA: {
      GRAD: 0x400,       // Graduation requirements
      EN1: 0x1,   // 9th grade English semester 1
      EN2: 0x2,   // 9th grade English semester 2
      EN3: 0x4,   // 10th grade English semester 1
      EN4: 0x8,   // 10th grade English semester 2
      AL1: 0x10,    // American Lit semester 1
      AL2: 0x20,    // American Lit semester 2
      AC1: 0x40,  // Other English semester 1
      AC2: 0x80,  // Other English semester 2
      AL_OR_AC1: 0x100,  // Have credit for at least 1 AmLit1 OR Other1
      AL_OR_AC2: 0x200   // Have credit for at least 2 AmLit1 OR Other2
    },
    ELE: {
      GRAD: 0x1,
      SEM1: 0x2,
      SEM2: 0x4,
    },
    HIS: {
      GRAD: 0x1,      // Graduation requirements
      WH1: 0x2,       // World History 1
      WH2: 0x4,       // World History 2
      US1: 0x8,       // US History 1
      US2: 0x10,      // US History 2
      GOV: 0x20,      // Governmant
      ECON: 0x40,     // Economics
      GOV_ECON: 0x80  // One of Gov / Econ
    },
    LOE: {
      GRAD: 0x1,
      LEVEL4: 0x2,
      LEVEL2: 0x4,
      LOTE: 0x8
    },
    MTH: {
      GRAD: 0x1,
      IM1A: 0x2,
      IM1B: 0x4,
      IM2A: 0x8,
      IM2B: 0x10,
      IM3A: 0x20,
      IM3B: 0x40,
      COLLEGE: 0x80,
      _4CREDITS: 0x100,
      _6CREDITS: 0x200
    },
    NCR: {
      GRAD: 0x1
    },
    OTH: {
      GRAD: 0x1
    },
    PED: {
      GRAD: 0x1,
      SEM1: 0x2,
      SEM2: 0x4,
      SEM3: 0x8,
      SEM4: 0x10,
      SCHEDULED: 0x20,
      FITNESSGRAM: 0x40
    },
    SCI: {
      GRAD: 0x1,
      BIO: 0x2,
      CHE: 0x4,
      PHY: 0x8,
      LIFE: 0x10,
      PHYSICAL: 0x20,
      OTHER: 0x40,
      _1REQMT: 0x80,
      _2REQMT: 0x100,
      _3REQMT: 0x200
    },
    VPA: {
      GRAD: 0x1,
      SEM1: 0x2,
      SEM2: 0x4,
    }
  }
}

CONSTANTS.UPDATE_LIST_FOR_SUMMARY = {
  ELA: {
    GRAD: CONSTANTS.UPDATE.ELA.GRAD,
    EN1: CONSTANTS.UPDATE.ELA.EN1,
    EN2: CONSTANTS.UPDATE.ELA.EN2,
    EN3: CONSTANTS.UPDATE.ELA.EN3,
    EN4: CONSTANTS.UPDATE.ELA.EN4,
    AL1: CONSTANTS.UPDATE.ELA.AL1,
    AL2: CONSTANTS.UPDATE.ELA.AL2,
    AC1: CONSTANTS.UPDATE.ELA.AC1,
    AC2: CONSTANTS.UPDATE.ELA.AC2
  },
  ELE: {
    GRAD: CONSTANTS.UPDATE.ELE.GRAD,
    SEM1: CONSTANTS.UPDATE.ELE.SEM1,
    SEM2: CONSTANTS.UPDATE.ELE.SEM2
  },
  HIS: {
    GRAD: CONSTANTS.UPDATE.HIS.GRAD,
    WH1: CONSTANTS.UPDATE.HIS.WH1,
    WH2: CONSTANTS.UPDATE.HIS.WH2,
    US1: CONSTANTS.UPDATE.HIS.US1,
    US2: CONSTANTS.UPDATE.HIS.US2,
    GOV: CONSTANTS.UPDATE.HIS.GOV,
    ECON: CONSTANTS.UPDATE.HIS.ECON
  },
  LOE: {
    GRAD: CONSTANTS.UPDATE.LOE.GRAD,
    LEVEL2: CONSTANTS.UPDATE.LOE.LEVEL2,
    LEVEL4: CONSTANTS.UPDATE.LOE.LEVEL4,
    LOTE: CONSTANTS.UPDATE.LOE.LOTE
  },
  MTH: {
    GRAD: CONSTANTS.UPDATE.MTH.GRAD,
    IM1A: CONSTANTS.UPDATE.MTH.IM1A,
    IM1B: CONSTANTS.UPDATE.MTH.IM1B,
    IM2A: CONSTANTS.UPDATE.MTH.IM2A,
    IM2B: CONSTANTS.UPDATE.MTH.IM2B,
    IM3A: CONSTANTS.UPDATE.MTH.IM3A,
    IM3B: CONSTANTS.UPDATE.MTH.IM3B,
    _4CREDITS: CONSTANTS.UPDATE.MTH._4CREDITS,
    _6CREDITS: CONSTANTS.UPDATE.MTH._6CREDITS
  },
  PED: {
    GRAD: CONSTANTS.UPDATE.PED.GRAD,
    SEM1: CONSTANTS.UPDATE.PED.SEM1,
    SEM2: CONSTANTS.UPDATE.PED.SEM2,
    SEM3: CONSTANTS.UPDATE.PED.SEM3,
    SEM4: CONSTANTS.UPDATE.PED.SEM4,
    SCHEDULED: CONSTANTS.UPDATE.PED.SCHEDULED,
    FITNESSGRAM: CONSTANTS.UPDATE.PED.FITNESSGRAM
  },
  SCI: {
    GRAD: CONSTANTS.UPDATE.SCI.GRAD,
    BIO: CONSTANTS.UPDATE.SCI.BIO,
    CHE: CONSTANTS.UPDATE.SCI.CHE,
    PHY: CONSTANTS.UPDATE.SCI.PHY,
    LIFE: CONSTANTS.UPDATE.SCI.LIFE,
    PHYSICAL: CONSTANTS.UPDATE.SCI.PHYSICAL,
    OTHER: CONSTANTS.UPDATE.SCI.OTHER
  },
  VPA: {
    GRAD: CONSTANTS.UPDATE.VPA.GRAD,
    SEM1: CONSTANTS.UPDATE.VPA.SEM1,
    SEM2: CONSTANTS.UPDATE.VPA.SEM2
  }
}

CONSTANTS.UPDATE_TEXT = {
  ELA: {
    GRAD: 'Graduation reqmts',
    EN1: 'English 1',
    EN2: 'English 2',
    EN3: 'English 3',
    EN4: 'English 4',
    AL1: 'American Lit 1',
    AL2: 'American Lit 2',
    AC1: 'Additional Eng 1',
    AC2: 'Additional Eng 2',
    AL_OR_AC1: 'Am Lit 1 OR Addl Eng 1',
    AL_OR_AC2: 'Am Lit 2 OR Addl Eng 2'
  },
  ELE: {
    GRAD: 'Graduation reqmts',
    SEM1: 'Semester 1',
    SEM2: 'Semester 2'
  },
  HIS: {
    GRAD: 'Graduation reqmts',
    WH1: 'World History 1',
    WH2: 'World History 2',
    US1: 'US History 1',
    US2: 'US History 2',
    GOV: 'Government',
    ECON: 'Economics',
    GOV_ECON: 'Gov OR Econ'
  },
  LOE: {
    GRAD: 'Graduation reqmts',
    LEVEL4: 'World Lang Level 4',
    LEVEL2: 'World Lang Level 2',
    LOTE: 'LOTE test'
  },
  MTH: {
    GRAD: 'Graduation reqmts',
    IM1A: 'Integrated Math 1A',
    IM1B: 'Integrated Math 1B',
    IM2A: 'Integrated Math 2A',
    IM2B: 'Integrated Math 2B',
    IM3A: 'Integrated Math 3A',
    IM3B: 'Integrated Math 3B',
    COLLEGE: 'College Math',
    _4CREDITS: '4 credits in HS',
    _6CREDITS: '6 credits total'
  },
  NCR: {
    GRAD: 'Graduation reqmts'
  },
  OTH: {
    GRAD: 'Graduation reqmts'
  },
  PED: {
    GRAD: 'Graduation reqmts',
    SEM1: 'Semester 1',
    SEM2: 'Semester 2',
    SEM3: 'Semester 3',
    SEM4: 'Semester 4',
    SCHEDULED: 'PE scheduled',
    FITNESSGRAM: 'Fitnessgram'
  },
  SCI: {
    GRAD: 'Graduation reqmts',
    BIO: 'Biology',
    CHE: 'Chemistry',
    PHY: 'Physics',
    LIFE: 'Life science',
    PHYSICAL: 'Physical science',
    OTHER: 'Other science',
    _1REQMT: '1 requirement',
    _2REQMT: '2 requirements',
    _3REQMT: '3 requirements'
  },
  VPA: {
    GRAD: 'Graduation reqmts',
    SEM1: 'Semester 1',
    SEM2: 'Semester 2'
  }
}

CONSTANTS.PERMISSIONS = {
  INDIVIDUAL: {
    PROFILE: 0x1,
    FILTER: 0x2,
    AT_RISK: 0x4,
    SEARCH: 0x8,
    COURSES: 0x10,
    SETTINGS: 0x20,
    DEF_LETTER_NOTES: 0x40,
    CONFIDENTIAL_NOTES: 0x80,
    USERS: 0x100,
    SPOOF: 0x200,
    SCHOOL_INFO: 0x400,
    SYSTEM_SETTINGS: 0x800,
    LOG: 0x1000,
    IHIGH: 0x2000,
    IHIGH_CONFIG: 0x4000,
    ANY: 0xFFFFF
  }
}

CONSTANTS.PERMISSIONS_SETS = {
  OSPS_READ: CONSTANTS.PERMISSIONS.INDIVIDUAL.PROFILE |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.FILTER |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.AT_RISK |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SETTINGS,
  OSPS_WRITE: CONSTANTS.PERMISSIONS.INDIVIDUAL.PROFILE |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.FILTER |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.AT_RISK |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SETTINGS |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES,
  OSPS_ALTERNATIVE: CONSTANTS.PERMISSIONS.INDIVIDUAL.PROFILE |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.FILTER |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.AT_RISK |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SETTINGS |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SEARCH |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES,
  OSPS_DISTRICT: CONSTANTS.PERMISSIONS.INDIVIDUAL.PROFILE |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.FILTER |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.AT_RISK |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SETTINGS |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SEARCH |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.COURSES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SCHOOL_INFO |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.LOG,
  OSPS_SUPERUSER: CONSTANTS.PERMISSIONS.INDIVIDUAL.ANY
}

CONSTANTS.PS_DATA = [
  {
    filename: 'CAHSEE.csv',
    tablename: 'cahsees',
    fields: CONSTANTS.PS_FIELDS.PS_CAHSEE
  },
  {
    filename: 'CourseList.csv',
    tablename: 'course_lists',
    fields: CONSTANTS.PS_FIELDS.PS_COURSE_LIST
  },
  {
    filename: 'FitnessGram.csv',
    tablename: 'fitnessgrams',
    fields: CONSTANTS.PS_FIELDS.PS_FITNESSGRAM
  },
  {
    filename: 'GPA.csv',
    tablename: 'gpas',
    fields: CONSTANTS.PS_FIELDS.PS_GPA
  },
  {
    filename: 'Grades.csv',
    tablename: 'grades',
    fields: CONSTANTS.PS_FIELDS.PS_GRADE
  },
  {
    filename: 'OnlineCourseRequests.csv',
    tablename: 'online_course_requests',
    fields: CONSTANTS.PS_FIELDS.PS_ONLINE_COURSE_REQUESTS
  },
  {
    filename: 'Schedules.csv',
    tablename: 'schedules',
    fields: CONSTANTS.PS_FIELDS.PS_SCHEDULE
  },
  {
    filename: 'Schools.csv',
    tablename: 'schools',
    fields: CONSTANTS.PS_FIELDS.PS_SCHOOL
  },
  {
    filename: 'Students.csv',
    tablename: 'students',
    fields: CONSTANTS.PS_FIELDS.PS_STUDENT
  },
  {
    filename: 'Users.csv',
    tablename: 'users',
    fields: CONSTANTS.PS_FIELDS.PS_USER
  }
]

CONSTANTS.GUARDIAN_LANGUAGES = {
  '00': 'en',
  '01': 'es',
  '05': 'tl',
  '11': 'ar',
  '60': 'so'
}

CONSTANTS.SDUSD_AT_RISK = [
  {
    id: -1,
    email: '',
    teacher_number: '',
    list_name: 'SDUSD default 1',
    user_name: 'SDUSD',
    config: {
      ELA: [
        {
          criteria: 'EN1',
          title: 'English 1',
          help: 'Student has taken or is taking (and presumed to pass) English 1',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'EN2',
          title: 'English 2',
          help: 'Student has taken or is taking (and presumed to pass) English 2',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'EN3',
          title: 'English 3',
          help: 'Student has taken or is taking (and presumed to pass) English 3',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'EN4',
          title: 'English 4',
          help: 'Student has taken or is taking (and presumed to pass) English 4',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'AL_OR_AC1',
          title: 'Am Lit 1 or Addl Eng 1',
          help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit OR an additional English course',
          grades: {9: false, 10: false, 11: true, 12: false}
        },
        {
          criteria: 'AL_OR_AC2',
          title: 'Am Lit 2 or Addl Eng 2',
          help: 'Student has taken or is taking (and presumed to pass) second semester of a course that offers American Literature credit OR an additional English course',
          grades: {9: false, 10: false, 11: true, 12: false}
        },
        {
          criteria: 'AL1',
          title: 'Am Lit 1',
          help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'AL2',
          title: 'Am Lit 2',
          help: 'Student has taken or is taking (and presumed to pass) second semester of a course that offers American Literature credit',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'AC1',
          title: 'Addl Eng 1',
          help: 'Student has taken or is taking (and presumed to pass) first semester of an additional English course',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'AC2',
          title: 'Addl Eng 2',
          help: 'Student has taken or is taking (and presumed to pass) second semester of an additional English course',
          grades: {9: false, 10: false, 11: false, 12: true}
        }
      ],
      ELE: [
        {
          criteria: 'ELE1',
          title: 'Elective 1',
          help: 'Student has taken or is taking (and presumed to pass) a first semester elective course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: 'ELE2',
          title: 'Elective 2',
          help: 'Student has taken or is taking (and presumed to pass) the second semester elective course that is a companion to one of the first semester courses',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      HIS: [
        {
          criteria: 'WH1',
          title: 'World History 1',
          help: 'Student has taken or is taking (and presumed to pass) a first semester World History course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'WH2',
          title: 'World History 2',
          help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'US1',
          title: 'US History 1',
          help: 'Student has taken or is taking (and presumed to pass) a first semester US History course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: 'US2',
          title: 'US History 2',
          help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: 'GOV',
          title: 'Government',
          help: 'Student has taken or is taking (and presumed to pass) a one semester American Government course',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'ECON',
          title: 'Economics',
          help: 'Student has taken or is taking (and presumed to pass) a one semester Economics course',
          grades: {9: false, 10: false, 11: false, 12: true}
        }
      ],
      LOE: [
        {
          criteria: 'YR1',
          title: '1st year or LOTE exam',
          help: 'Student has taken or is taking (and presumed to pass) the first year of any language other than English OR student has passed the LOTE exam',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'YR2',
          title: '2nd year or LOTE exam',
          help: 'Student has taken or is taking (and presumed to pass) the second year of any language other than English OR student has passed the LOTE exam.  This requirement satisfies the Language Other Than English graduation requirement',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      MTH: [
        {
          criteria: 'IM1A',
          // title: 'Integ Math 1A or higher',
          // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1A or equivalent course or a higher level math course',
          title: 'Integ Math 1A',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1A or equivalent course',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'IM1B',
          // title: 'Integ Math 1B or higher',
          // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1B or equivalent course or a higher level math course',
          title: 'Integ Math 1B',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1B or equivalent course',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'IM2A',
          // title: 'Integ Math 2A or higher',
          // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2A or equivalent course or a higher level math course',
          title: 'Integ Math 2A',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2A or equivalent course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'IM2B',
          // title: 'Integ Math 2B or higher',
          // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2B or equivalent course or a higher level math course',
          title: 'Integ Math 2B',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2B or equivalent course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'IM3A',
          // title: 'Integ Math 3A or higher',
          // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3A or equivalent course or a higher level math course',
          title: 'Integ Math 3A',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3A or equivalent course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          // criteria: 'IM3B',
          // title: 'Integ Math 3B or higher',
          criteria: 'IM3B',
          title: 'Integ Math 3B',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3B or equivalent course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: '_4CREDITS',
          title: 'At least 4 HS credits',
          help: 'Student must receive at least 4 credits of mathematics credits in grades 9-12',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: '_6CREDITS',
          title: '6 total credits',
          help: 'Student must receive at least 6 credits of mathematics',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      PED: [
        {
          criteria: 'SCHED',
          title: 'PE scheduled',
          help: 'Student has taken or is taking (and presumed to pass) PE courses',
          grades: {9: true, 10: false, 11: false, 12: false}
        },
        {
          criteria: '2_AND_FITNESSGRAM_OR_SCHEDULED',
          title: '2 credits and Fitnessgram has been passed OR PE class is scheduled',
          help: 'Student has taken or is taking (and presumed to pass) two credits of PE courses AND has passed the Fitnessgram ... OR ... student has taken and/or is scheduled for 4 PE credits. This option is useful for students in special programs like Engineering where as long as the Fitnessgram was passed in 9th grade the student can defer the other 2 semesters to 11th grade. This option insures that the student is not labeled deficient in PE',
          grades: {9: false, 10: true, 11: false, 12: false}
        },
        {
          criteria: '4_AND_FITNESSGRAM_OR_SCHEDULED',
          title: '4 credits passed and/or scheduled',
          help: 'Student has either passed or is scheduled for (and presumed to pass) at least four credits AND passed the Fitnessgram',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      SCI: [
        {
          criteria: '2_CREDITS',
          title: '2 credits of any type',
          help: 'Student has either passed or is scheduled for (and presumed to pass) two credits of the same science course',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: '4_CREDITS',
          title: '4 credits in two areas',
          help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semsters of science courses in two different areas (Life, Physical, one other from Life, Physical, or Other)',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'GRAD',
          title: "Sci reqmt's satisfied",
          help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semsters of science courses in three areas (Life, Physical, one other from Life, Physical, or Other)',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      VPA: [
        {
          criteria: 'SEM1',
          title: 'Semester 1',
          help: 'Student has either passed or is scheduled for (and presumed to pass) the first semester of a VAPA course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'SEM2',
          title: 'Semester 2',
          help: 'Student has either passed or is scheduled for (and presumed to pass) the second semester of a VAPA course whose first semester companion has already been passed, or is scheduled',
          grades: {9: false, 10: true, 11: true, 12: true}
        }
      ]
    }
  },
  {
    id: -2,
    email: '',
    teacher_number: '',
    list_name: 'SDUSD default 2',
    user_name: 'SDUSD',
    config: {
      ELA: [
        {
          criteria: 'EN1',
          title: 'English 1',
          help: 'Student has taken or is taking (and presumed to pass) English 1',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'EN2',
          title: 'English 2',
          help: 'Student has taken or is taking (and presumed to pass) English 2',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'EN3',
          title: 'English 3',
          help: 'Student has taken or is taking (and presumed to pass) English 3',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'EN4',
          title: 'English 4',
          help: 'Student has taken or is taking (and presumed to pass) English 4',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'AL_OR_AC1',
          title: 'Am Lit 1 or Addl Eng 1',
          help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit OR an additional English course',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'AL_OR_AC2',
          title: 'Am Lit 2 or Addl Eng 2',
          help: 'Student has taken or is taking (and presumed to pass) second semester of a course that offers American Literature credit OR an additional English course',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'AL1',
          title: 'Am Lit 1',
          help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'AL2',
          title: 'Am Lit 2',
          help: 'Student has taken or is taking (and presumed to pass) second semester of a course that offers American Literature credit',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'AC1',
          title: 'Addl Eng 1',
          help: 'Student has taken or is taking (and presumed to pass) first semester of an additional English course',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'AC2',
          title: 'Addl Eng 2',
          help: 'Student has taken or is taking (and presumed to pass) second semester of an additional English course',
          grades: {9: false, 10: false, 11: false, 12: true}
        }
      ],
      ELE: [
        {
          criteria: 'ELE1',
          title: 'Elective 1',
          help: 'Student has taken or is taking (and presumed to pass) a first semester elective course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: 'ELE2',
          title: 'Elective 2',
          help: 'Student has taken or is taking (and presumed to pass) the second semester elective course that is a companion to one of the first semester courses',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      HIS: [
        {
          criteria: 'WH1',
          title: 'World History 1',
          help: 'Student has taken or is taking (and presumed to pass) a first semester World History course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'WH2',
          title: 'World History 2',
          help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'US1',
          title: 'US History 1',
          help: 'Student has taken or is taking (and presumed to pass) a first semester US History course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: 'US2',
          title: 'US History 2',
          help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: 'GOV',
          title: 'Government',
          help: 'Student has taken or is taking (and presumed to pass) a one semester American Government course',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'ECON',
          title: 'Economics',
          help: 'Student has taken or is taking (and presumed to pass) a one semester Economics course',
          grades: {9: false, 10: false, 11: false, 12: true}
        }
      ],
      LOE: [
        {
          criteria: 'YR1',
          title: '1st year or LOTE exam',
          help: 'Student has taken or is taking (and presumed to pass) the first year of any language other than English OR student has passed the LOTE exam',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'YR2',
          title: '2nd year or LOTE exam',
          help: 'Student has taken or is taking (and presumed to pass) the second year of any language other than English OR student has passed the LOTE exam.  This requirement satisfies the Language Other Than English graduation requirement',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      MTH: [
        {
          criteria: 'IM1A',
          title: 'Integ Math 1A or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1A or equivalent course or a higher level math course',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'IM1B',
          title: 'Integ Math 1B or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1B or equivalent course or a higher level math course',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'IM2A',
          title: 'Integ Math 2A or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2A or equivalent course or a higher level math course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'IM2B',
          title: 'Integ Math 2B or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2B or equivalent course or a higher level math course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'IM3A',
          title: 'Integ Math 3A or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3A or equivalent course or a higher level math course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: 'IM3B',
          title: 'Integ Math 3B or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3B or equivalent course or a higher level math course',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: '_4CREDITS',
          title: 'At least 4 HS credits',
          help: 'Student must receive at least 4 credits of mathematics credits in grades 9-12',
          grades: {9: false, 10: false, 11: true, 12: true}
        },
        {
          criteria: '_6CREDITS',
          title: 'At least 6 total credits',
          help: 'Student must receive at least 6 credits of mathematics',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      PED: [
        {
          criteria: 'SCHED',
          title: 'PE scheduled',
          help: 'Student has taken or is taking (and presumed to pass) PE courses',
          grades: {9: true, 10: false, 11: false, 12: false}
        },
        {
          criteria: '2_AND_FITNESSGRAM_OR_SCHEDULED',
          title: '2 credits and Fitnessgram has been passed OR PE class is scheduled',
          help: 'Student has taken or is taking (and presumed to pass) two credits of PE courses AND has passed the Fitnessgram ... OR ... student has taken and/or is scheduled for 4 PE credits. This option is useful for students in special programs like Engineering where as long as the Fitnessgram was passed in 9th grade the student can defer the other 2 semesters to 11th grade. This option insures that the student is not labeled deficient in PE',
          grades: {9: false, 10: true, 11: false, 12: false}
        },
        {
          criteria: '4_AND_FITNESSGRAM_OR_SCHEDULED',
          title: '4 credits and Fitnessgram passed OR PE class is scheduled',
          help: 'Student has either passed or is scheduled for (and presumed to pass) at least four credits AND passed the Fitnessgram',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      SCI: [
        {
          criteria: '2_CREDITS',
          title: '2 credits of any type',
          help: 'Student has either passed or is scheduled for (and presumed to pass) two credits of the same science course',
          grades: {9: true, 10: true, 11: true, 12: true}
        },
        {
          criteria: '4_CREDITS',
          title: '4 credits in two areas',
          help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semsters of science courses in two different areas (Life, Physical, one other from Life, Physical, or Other)',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'GRAD',
          title: "Sci reqmt's satisfied",
          help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semsters of science courses in three areas (Life, Physical, one other from Life, Physical, or Other)',
          grades: {9: false, 10: false, 11: true, 12: true}
        }
      ],
      VPA: [
        {
          criteria: 'SEM1',
          title: 'Semester 1',
          help: 'Student has either passed or is scheduled for (and presumed to pass) the first semester of a VAPA course',
          grades: {9: false, 10: true, 11: true, 12: true}
        },
        {
          criteria: 'SEM2',
          title: 'Semester 2',
          help: 'Student has either passed or is scheduled for (and presumed to pass) the second semester of a VAPA course whose first semester companion has already been passed, or is scheduled',
          grades: {9: false, 10: true, 11: true, 12: true}
        }
      ]
    }
  }
]

CONSTANTS.ETHNICITIES = {
  0: 'Not stated',
  100: 'American Indian',
  201: 'Chinese',
  202: 'Japanese',
  203: 'Korean',
  204: 'Vietnamese',
  205: 'Asian Indian',
  206: 'Laotian',
  207: 'Cambodian',
  208: 'Hmong',
  299: 'Other Asian',
  301: 'Native Hawaiian',
  302: 'Guamanian',
  303: 'Samoan',
  304: 'Tahitian',
  399: 'Other Pac Islander',
  400: 'Filipino',
  500: 'Hispanic',
  600: 'African American',
  700: 'White',
}

CONSTANTS.LIVING_SITUATION_CODES = {
  foster: {
    21: 'Group home (FGH) (FFA)',
    22: 'Family Home (FFH)',
    50: 'Formal Kinship Care (including NREFM)'
  },
  homeless: {
    40: 'Unsheltered',
    41: 'Sheltered',
    42: 'Hotel/Motel',
    43: 'Living with someone / Doubling up'
  },
  other: {
    10: 'International exchange',
    23: 'Hospital (not state hospital)',
    24: 'Residential facility',
    28: 'Other'
  }
}

CONSTANTS.CCTE.PATHWAYS = [
  {
    sector: "Arts, Media, and Entertainment",
    name: "Design, Visual, and Media Arts",
    levels: {
      introductory: [
        ['3639', '3640'], // Computer Animation
        ['3645', '3646'], // Found in Visual Art & Design
        ['3765', '3766'], // Intro to Music Production Tech
        ['3691', '3692'], // Photography 1,2
        ['3693', '3694'], // Photography 3,4
        ['8373', '8374'], // Video Production 1,2 (also 8385 VP 1-2)
        // ['8385', '8385'], // Video Production 1-2
      ],
      intermediate: [
        ['8511', '8512'], // CGD 1,2 (also 8633 CGD 1-2)
        ['8091', '8092'], // Dig Art Mixed Media 3,4
        ['8839', '8840'], // Mult Med Prod 1,2 (see 8572 MMP 1-2)
        // ['8572', '8572'], // Mult Med Prod 1-2
        ['8105', '8106'], // Phot Imaging 1,2
      ],
      capstone: [
        ['8513', '8514'], // CGD 3,4 (also 8634 CGD 3-4)
        ['8093', '8094'], // Dig Art Mixed Media 3,4
        ['8841', '8842'], // Mult Med Prod 3,4 (see 8573 MMP 3-4)
        // ['8573', '8573'], // Mult Med Prod 3-4
        ['8107', '8108'], // Phot Imaging 3,4
      ],
    }
  },
  {
    sector: "Arts, Media, and Entertainment",
    name: "Production and Managerial Arts",
    levels: {
      introductory: [
        ['8373', '8374'], // Video Production 1,2
        ['3639', '3640'], // Computer Animation
        ['1413', '1414'], // Tech Theater 1,2
        ['0683', '0684'], // Artist in Residence 1,2
      ],
      intermediate: [
        ['8432', '8433'], // Broadcast Journalism 1,2
        ['8375', '8376'], // Video Production 3,4
        ['1462', '1463'], // Technical Theater 3,4
        ['8691', '8692'], // Arts Mgmt 1,2
      ],
      capstone: [
        ['8434', '8435'], // Broadcast Journalism 3,4
        ['8239', '8240'], // Cinematic Arts 1,2
        ['0685', '0686'], // Theatrical Management & Design 1,2
        ['8693', '8694'], // Arts Mgmt 3,4
      ],
    }
  },
  {
    sector: "Arts, Media, and Entertainment",
    name: "Performing Arts",
    levels: {
      introductory: [
        ['4871', '4872'], // UCCI Language Takes Stage 1,2
      ],
      intermediate: [
        ['4875', '4876'], // UCCI Literature Arts Civic Action 1,2
      ],
      capstone: [
        ['4877', '4878'], // UCCI Social Action Theater 1,2
      ],
    }
  },
  {
    sector: "Building and Construction Trades",
    name: "Residential and Commercial Construction",
    levels: {
      introductory: [
        ['3763', '3764'], // Intro to Green Tech 1,2
        ['3651', '3652'], // Construction Tech 1,2
      ],
      intermediate: [
        ['8827', '8828'], // Fine Woodworking 1,2 (also 8568 FW 1-2)
        // ['8568', '8568'], // Fine Woodworking 1-2
        ['3653', '3654'], // Construction Tech 3,4
      ],
      capstone: [
        ['3588', '3589'], // UCCI Multicraft Core Curr Building Scaled Structures 1,2
        ['8884', '8885'], // Construction, General 1,2 (also 8823 C,G 1-2)
        // ['8823', '8823'], // Construction, General 1-2
        ['8886', '8887'], // Construction, General 3,4
      ],
    }
  },
  {
    sector: "Business and Finance",
    name: "Business Management",
    levels: {
      introductory: [
        ['0514', '0515'], // Business 100 1,2
        ['0731', '0732'], // Accounting 1,2
        ['0723', '0724'], // Comp App in Business 1,2
      ],
      intermediate: [
        ['8663', '8664'], // Bus Mgmt Own 1,2 (also 8650 BMO1-2)
        // ['8650', '8650'], // Bus Mgmt Own 1-2
        ['0561', '0562'], // Bus Law 1,2
        ['0591', '0592'], // Bus Bus Mgmt HL1 IB 1,2
      ],
      capstone: [
        ['8666', '8667'], // Bus Mgmt Own 3,4
        ['0589', '0590'], // Bus Mgmt SL1 1,2
        ['0594', '0595'], // Bus Bus Mgmt HL1 IB 3,4
      ],
    }
  },
  {
    sector: "Business and Finance",
    name: "Financial Services",
    levels: {
      introductory: [
        ['0514', '0515'], // Business 100 1,2
        ['0731', '0732'], // Accounting 1,2
        ['0723', '0724'], // Comp App in Business 1,2
      ],
      intermediate: [
        ['8603', '8604'], // Adv Acctg 1,2
        ['0733', '0734'], // Acctg 3,4
        ['0569', '0570'], // Econ and Finance 1,2
      ],
      capstone: [
        ['8609', '8610'], // Bus and Financial Mkts 1,2
        ['8611', '8612'], // Bus and Financial Mkts 3,4
        ['8605', '8606'], // Adv Acctg 3,4
      ],
    }
  },
  {
    sector: "Education, Child Development and Family Services",
    name: "Child Development",
    levels: {
      introductory: [
        ['1171', '1172'], // Inf Todd Dev 1,2
        ['1154', '1155'], // Hum Psych and Fam Soc 1,2
      ],
      intermediate: [
        ['1175', '1176'], // Inf Todd Dev Lab 1,2
        ['8796', '8797'], // Dev Psych of Children 1,2
        // ['8720', '8720'], // Dev Psych of Children 1-2
      ],
      capstone: [
        ['8798', '8799'], // Dev Psy Child 3,4
        // ['8721', '8721'], // Dev Psy Child 3-4
        ['1177', '1178'], // Inf Todd Dev Lab 3,4
        ['1179', '1179'], // Inf Todd Dev Lab 5,6
        ['1181', '1180'], // Inf Todd Dev Lab 7,8
      ],
    }
  },
  {
    sector: "Education, Child Development and Family Services",
    name: "Education",
    levels: {
      introductory: [
        ['1171', '1172'], // Inf Todd Dev 1,2
        ['1154', '1155'], // Hum Psych and Fam Soc 1,2
      ],
      intermediate: [
        ['8784', '8785'], // Int Tch Learning 1,2
      ],
      capstone: [
        ['8786', '8787'], // Int Tch Learning 3,4
      ],
    }
  },
  {
    sector: "Education, Child Development and Family Services",
    name: "Family and Human Services",
    levels: {
      introductory: [
        ['1154', '1155'], // Hum Psych and Fam Soc 1,2
      ],
      intermediate: [
        ['8181', '8182'], // Adv Fam Soc 1,2
      ],
      capstone: [
        ['8183', '8183'], // Adv Fam Soc 3,4
      ],
    }
  },
  {
    sector: "Engineering and Architecture",
    name: "Architectural Design",
    levels: {
      introductory: [
        ['3657', '3658'], // ID
        ['6240', '6241'] // Green up and Go
      ],
      intermediate: [
        ['8171', '8172'] // CEA12
      ],
      capstone: [
        ['8173', '8174'], // CEA34
      ],
    }
  },
  {
    sector: "Engineering and Architecture",
    name: "Engineering Design",
    levels: {
      introductory: [
        ['3657', '3658'], // ID
        ['6240', '6241']  // Green up and Go
      ],
      intermediate: [
        ['8847', '8848'], // POE
        ['3661', '3662']  // Design Tech SL IB 12
      ],
      capstone: [
        ['3586', '3587'], // CIM
        ['8957', '8958'], // DE
        ['8406', '8407'], // EDD34
        ['8404', '8405']  // EDD12
      ],
    }
  },
  {
    sector: "Health Science and Medical Technology",
    name: "Biotechnology",
    levels: {
      introductory: [
        ['3005', '3006'], // Anat Phys for Health Careers 1,2
      ],
      intermediate: [
        ['8704', '8705'], // Biotechnology 1,2
        ['6458', '6459'], // Biotechnology 1,2
        // ['xxxx', 'xxxx'], // Pr of Biomedical Sci 1,2
      ],
      capstone: [
        ['8730', '8731'], // Biotechnology 3,4
        ['8265', '8266'], // Medical Interventions 1,2
        ['8267', '8268'], // Medical Interventions 3,4
      ],
    }
  },
  {
    sector: "Health Science and Medical Technology",
    name: "Patient Care",
    levels: {
      introductory: [
        ['3005', '3006'], // Anat Phys for Health Careers 1,2
      ],
      intermediate: [
        ['3313', '3314'], // Human Body Systems 1,2
        ['6486', '6487'], // Human Body Systems 1,2
        ['3007', '3008'], // Anat Phys for Health Careers 3,4
      ],
      capstone: [
        ['8335', '8336'], // Biomedical Innovations 1,2
        ['8337', '8338'], // Biomedical Innovations 3,4
        ['8271', '8272'], // Sports Med 1,2
        ['8273', '8274'], // Sports Med 3,4
        ['8424', '8425'], // Healthcare Essentials 1,2
        ['8426', '8427'], // Healthcare Essentials 3,4
      ],
    }
  },
  {
    sector: "Hospitality, Tourism, and Recreating",
    name: "Food Service and Hospitality",
    levels: {
      introductory: [
        ['1165', '1166'], // Food prep and nutrition 1,2
        ['1169', '1169'], // Career and Life Management 1
        ['1163', '1163'], // Career and Life Management 2
        ['1198', '1199'], // Intro to Hospitality
      ],
      intermediate: [
        ['8760', '8761'], // Cul Arts and Mgmt 1,2
        ['1167', '1168'], // Nutrition 1,2
      ],
      capstone: [
        ['8762', '8763'], // Cul Arts and Mgmt 3,4
        ['8764', '8765'], // Cul Arts and Mgmt 5,6
      ],
    }
  },
  {
    sector: "Hospitality, Tourism, and Recreating",
    name: "Hospitality Tourism and Recreation",
    levels: {
      introductory: [
        ['1198', '1199'], // Intro to Hospitality
        ['1165', '1166'], // Food prep and nutrition 1,2
        ['1169', '1169'], // Career and Life Management 1
        ['1163', '1163'], // Career and Life Management 2
      ],
      intermediate: [
        ['8481', '8482'], // Concepts in Hosp and Tourism 1,2
      ],
      capstone: [
        ['8483', '8484'], // Concepts in Hosp and Tourism 3,4
      ],
    }
  },
  {
    sector: "Information and Communication Technologies",
    name: "Networking",
    levels: {
      introductory: [
        ['3705', '3706'] // FoundIT
      ],
      intermediate: [
        ['4465', '4466'] // IT Essentials
      ],
      capstone: [
        ['4475', '4476'], // Internet Engineering
      ],
    }
  },
  {
    sector: "Information and Communication Technologies",
    name: "Software and Systems Development",
    levels: {
      introductory: [
        ['3705', '3706'] // FoundIT
      ],
      intermediate: [
        ['4463', '4464'], // CSP
      ],
      capstone: [
        ['4411', '4412'], // CS12
        ['4413', '4414'], // CS34
        ['4461', '4462'], // APCSA
        ['8931', '8932'], // Website Design 12
        ['8933', '8934'], // Website Design 34
        ['4473', '4474'], // Game Design 12
        ['4477', '4478'], // Game Design 34
        ['8291', '8292'], // GIS Glob Tech 12
        ['8293', '8294'], // GIS Glob Tech 34
        ['4493', '4494'], // InfTechGlobSoc SL 12
        ['4495', '4496'], // InfTechGlobSoc HL12
      ],
    }
  },
  {
    sector: "Manufacturing and Product Development",
    name: "Graphic Production Technologies",
    levels: {
      introductory: [
        ['3691', '3692'], // Photography 1,2
        ['3621', '3622'], // Graphic Comm Tech 1,2
      ],
      intermediate: [
        ['8882', '8883'], // Screen Printing 1,2
        ['3623', '3624'], // Graphic Comm Tech 3,4
      ],
      capstone: [
        ['8851', '8852'], // Screen Printing 3,4
      ],
    }
  },
  {
    sector: "Manufacturing and Product Development",
    name: "Machining and Forming Technologies",
    levels: {
      introductory: [
        ['3681', '3682'], // Manufacturing Technology 1,2
      ],
      intermediate: [
        ['3683', '3684'], // Manufacturing Technology 3,4
      ],
      capstone: [
        ['8812', '8813'], // Machine Tool Technology 1,2
        ['8814', '8815'], // Machine Tool Technology 3,4
      ],
    }
  },
  {
    sector: "Manufacturing and Product Development",
    name: "Product Innovation and Design",
    levels: {
      introductory: [
        ['3591', '3592'], // Intro to Fabrication Des 1,2
      ],
      intermediate: [
        ['8311', '8312'], // Fabrication and Des 1,2
      ],
      capstone: [
        ['8313', '8314'], // Fabrication and Des 3,4
      ],
    }
  },
  {
    sector: "Marketing, Sales, and Service",
    name: "Marketing",
    levels: {
      introductory: [
        ['0801', '0802'], // Marketing 1,2
      ],
      intermediate: [
        ['0803', '0804'], // Marketing 3,4
        ['8277', '8278'], // Modern Media Markets 1,2
        ['8490', '8491'], // Event Marketing 1,2
      ],
      capstone: [
        ['8279', '8280'], // Modern Media Markets 3,4
        ['8492', '8493'], // Event Marketing 3,4
      ],
    }
  },
  {
    sector: "Public Services",
    name: "Emergency Response",
    levels: {
      introductory: [
        ['0671', '0672'], // Fire Prot Tech 1,2
      ],
      intermediate: [
        ['8253', '8254'], // Fire Prot Tech 3,4
      ],
      capstone: [
        ['8255', '8256'], // Fire Prot Tech 5,6
        ['8259', '8280'], // Fire Prot Tech Comm Class 7,8
      ],
    }
  },
  {
    sector: "Public Services",
    name: "Legal Practices",
    levels: {
      introductory: [
        ['0503', '0504'], // Intro to Criminal Justice Careers 1,2
        ['3767', '3768'], // Intro to to law 1,2
      ],
      intermediate: [
        ['6694', '6695'], // CPA Criminal justice 1,2
        ['8393', '8394'], // Foundations of Legal Practice 1,2
      ],
      capstone: [
        ['8395', '8396'], // Foundations of Legal Practice 3,4
        ['8397', '8398'], // Foundations of Legal Practice Comm Class 5,6
      ],
    }
  },
  {
    sector: "Public Services",
    name: "Public Safety",
    levels: {
      introductory: [
        ['0503', '0504'], // Intro to Criminal Justice Careers 1,2
      ],
      intermediate: [
        ['8342', '8343'], // Criminal Justice Careers 1,2
      ],
      capstone: [
        ['8344', '8345'], // Criminal Justice Careers 3,4
      ],
    }
  },
  {
    sector: "Transportation",
    name: "Structural Repair and Refinishing",
    levels: {
      introductory: [
        ['3578', '3579'], // Intro to Auto Body 1,2
      ],
      intermediate: [
        ['8540', '8541'], // Auto Body Repair Ref 1,2
        // ['8808', '8808'], // Auto Body Repair Ref 1-2
      ],
      capstone: [
        ['8542', '8543'], // Auto Body Repair Ref 3,4
      ],
    }
  },
  {
    sector: "Transportation",
    name: "Systems Diagnostics, Service, and Repair",
    levels: {
      introductory: [
        ['3708', '3710'], // Foundations of Transportation 1,2
      ],
      intermediate: [
        ['8304', '8305'], // Auto Tech 1,2
      ],
      capstone: [
        ['8306', '8307'], // Auto Tech 3,4
        ['8308', '8309'], // Auto Tech Comm Class 5,6
      ],
    }
  },
]

module.exports = CONSTANTS