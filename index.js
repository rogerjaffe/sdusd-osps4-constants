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
    COURSE_UNDER_REVIEW_CONTACT: 'Jason Maher at jmaher@sandi.net'
  },
  CREDIT_CHECK: {
    CREDIT_THRESHOLDS: {
      '9': 10,
      '10': 21,
      '11': 32,
      '12': 44
    }
  },
  OSPS_DATA: {
    OSPS_TABLE_LIST: ['osps_course_lists','osps_users_config'],
    CSV_REQUIREMENT_FLAGS_FILENAME: 'csv_student_data.csv',
    CSV_REQUIREMENT_FLAGS_FIELDS_FILENAME: 'csv_student_data_fields.csv',
    CSV_JSON_FILENAME: 'csv_json.csv',
    CSV_JSON_FIELDS_FILENAME: 'csv_json_fields.csv',

    REQUIREMENT_FLAGS_TABLE_NAME: 'requirement_flags',
    JSON_DATA_TABLE_NAME: 'student_data',
    OSPS_USERS_TABLE: 'users'
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
      'weighted_grade_scale'
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
      'current_term'
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
      'non_diploma'
    ],

    PS_USER: [
      'teacher_number',
      'last_name',
      'first_name',
      'email',
      'role',
      'schoolid'
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
      _4CREDITS: 0x100
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
    _4CREDITS: CONSTANTS.UPDATE.MTH._4CREDITS
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
    _4CREDITS: '4 credits in HS'
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
    ANY: 0x4FF
  }
}

CONSTANTS.PERMISSIONS_SETS = {
  OSPS_READ: CONSTANTS.PERMISSIONS.INDIVIDUAL.PROFILE |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.FILTER |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.AT_RISK |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SETTINGS |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SCHOOL_INFO,
  OSPS_WRITE: CONSTANTS.PERMISSIONS.INDIVIDUAL.PROFILE |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.FILTER |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.AT_RISK |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SETTINGS |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SCHOOL_INFO,
  OSPS_ALTERNATIVE: CONSTANTS.PERMISSIONS.INDIVIDUAL.PROFILE |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.FILTER |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.AT_RISK |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SETTINGS |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SCHOOL_INFO,
  OSPS_DISTRICT: CONSTANTS.PERMISSIONS.INDIVIDUAL.PROFILE |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.FILTER |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.AT_RISK |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SETTINGS |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SCHOOL_INFO,
  OSPS_SUPERUSER: CONSTANTS.PERMISSIONS.INDIVIDUAL.PROFILE |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.FILTER |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.AT_RISK |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SETTINGS |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES |
  CONSTANTS.PERMISSIONS.INDIVIDUAL.SCHOOL_INFO,
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
          criteria: 'ALAC1',
          title: 'Am Lit 1 or Addl Eng 1',
          help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit OR an additional English course',
          grades: {9: false, 10: false, 11: false, 12: true}
        },
        {
          criteria: 'ALAC2',
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

module.exports = CONSTANTS