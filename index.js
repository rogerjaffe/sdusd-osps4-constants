const CONSTANTS = {
  SYSTEM: {
    DB_PREFIX_PS: 'ps_',
    DB_PREFIX_OSPS: 'osps_',
    DB_NAME: 'osps4',
    EMAIL_LOG_TO: 'rjaffe@sandi.net',
    EMAIL_HOST: 'mail.sandi.net',
    LAST_UPDATE_FILE: 'lastUpdate.txt'
  },
  OSPS_DATA: {
    OSPS_TABLE_LIST: ['osps_course_lists'],
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
      LOTE: 0x4
    },
    MTH: {
      GRAD: 0x1,
      IM1A: 0x2,
      IM1B: 0x4,
      IM2A: 0x8,
      IM2B: 0x10,
      IM3A: 0x20,
      IM3B: 0x40,
      COLLEGE: 0x80
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
          grades: {9: true, 10: true, 11: true}
        },
        {
          criteria: 'EN2',
          title: 'English 2',
          help: 'Student has taken or is taking (and presumed to pass) English 2',
          grades: {9: true, 10: true, 11: true}
        },
        {
          criteria: 'EN3',
          title: 'English 3',
          help: 'Student has taken or is taking (and presumed to pass) English 3',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: 'EN4',
          title: 'English 4',
          help: 'Student has taken or is taking (and presumed to pass) English 4',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: 'ALAC1',
          title: 'Am Lit 1 or Addl Eng 1',
          help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit OR an additional English course',
          grades: {9: false, 10: false, 11: true}
        },
        {
          criteria: 'ALAC2',
          title: 'Am Lit 2 or Addl Eng 2',
          help: 'Student has taken or is taking (and presumed to pass) second semester of a course that offers American Literature credit OR an additional English course',
          grades: {9: false, 10: false, 11: true}
        }
      ],
      ELE: [
        {
          criteria: 'ELE1',
          title: 'Elective 1',
          help: 'Student has taken or is taking (and presumed to pass) a first semester elective course',
          grades: {9: false, 10: false, 11: true}
        },
        {
          criteria: 'ELE2',
          title: 'Elective 2',
          help: 'Student has taken or is taking (and presumed to pass) the second semester elective course that is a companion to one of the first semester courses',
          grades: {9: false, 10: false, 11: true}
        }
      ],
      HIS: [
        {
          criteria: 'WH1',
          title: 'World History 1',
          help: 'Student has taken or is taking (and presumed to pass) a first semester World History course',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: 'WH2',
          title: 'World History 2',
          help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: 'US1',
          title: 'US History 1',
          help: 'Student has taken or is taking (and presumed to pass) a first semester US History course',
          grades: {9: false, 10: false, 11: true}
        },
        {
          criteria: 'US2',
          title: 'US History 2',
          help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
          grades: {9: false, 10: false, 11: true}
        }
      ],
      LOE: [
        {
          criteria: 'YR1',
          title: '1st year or LOTE exam',
          help: 'Student has taken or is taking (and presumed to pass) the first year of any language other than English OR student has passed the LOTE exam',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: 'YR2',
          title: '2nd year or LOTE exam',
          help: 'Student has taken or is taking (and presumed to pass) the second year of any language other than English OR student has passed the LOTE exam.  This requirement satisfies the Language Other Than English graduation requirement',
          grades: {9: false, 10: false, 11: true}
        }
      ],
      MTH: [
        {
          criteria: 'IM1A',
          title: 'Integ Math 1A or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1A or equivalent course or a higher level math course',
          grades: {9: true, 10: true, 11: true}
        },
        {
          criteria: 'IM1B',
          title: 'Integ Math 1B or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1B or equivalent course or a higher level math course',
          grades: {9: true, 10: true, 11: true}
        },
        {
          criteria: 'IM2A',
          title: 'Integ Math 2A or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2A or equivalent course or a higher level math course',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: 'IM2B',
          title: 'Integ Math 2B or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2B or equivalent course or a higher level math course',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: 'IM3A',
          title: 'Integ Math 3A or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3A or equivalent course or a higher level math course',
          grades: {9: false, 10: false, 11: true}
        },
        {
          criteria: 'IM3B',
          title: 'Integ Math 3B or higher',
          help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3B or equivalent course or a higher level math course',
          grades: {9: false, 10: false, 11: true}
        }
      ],
      PED: [
        {
          criteria: 'SCHED',
          title: 'PE scheduled',
          help: 'Student has taken or is taking (and presumed to pass) PE courses',
          grades: {9: true, 10: true, 11: true}
        },
        {
          criteria: '2_AND_FITNESSGRAM',
          title: '2 credits and Fitnessgram',
          help: 'Student has taken or is taking (and presumed to pass) two credits of PE courses AND has passed the Fitnessgram',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: '2_AND_SCHED',
          title: '2 credits and scheduled',
          help: 'Student has either passed or is scheduled for (and presumed to pass) at least four PE courses',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: '4_AND_FITNESSGRAM',
          title: '4 credits and Fitnessgram OR scheduled',
          help: 'Student has either passed or is scheduled for (and presumed to pass) at least four credits AND passed the Fitnessgram',
          grades: {9: false, 10: false, 11: true}
        },
        {
          criteria: '4_AND_SCHED_NO_FITNESSGRAM',
          title: '4 credits, no Fitnessgram, PE scheduled',
          help: 'Student has either passed or is scheduled for (and presumed to pass) at least four credits, AND has NOT passed the Fitnessgram AND is scheduled for PE classes',
          grades: {9: false, 10: false, 11: false}
        }
      ],
      SCI: [
        {
          criteria: '2_CREDITS',
          title: '2 credits of any type',
          help: 'Student has either passed or is scheduled for (and presumed to pass) two credits of the same science course',
          grades: {9: true, 10: true, 11: true}
        },
        {
          criteria: '4_CREDITS',
          title: '4 credits in two areas',
          help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semsters of science courses in two different areas (Life, Physical, one other from Life, Physical, or Other)',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: 'GRAD',
          title: "Sci reqmt's satisfied",
          help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semsters of science courses in three areas (Life, Physical, one other from Life, Physical, or Other)',
          grades: {9: false, 10: false, 11: true}
        }
      ],
      VPA: [
        {
          criteria: 'SEM1',
          title: 'Semester 1',
          help: 'Student has either passed or is scheduled for (and presumed to pass) the first semester of a VAPA course',
          grades: {9: false, 10: true, 11: true}
        },
        {
          criteria: 'SEM2',
          title: 'Semester 2',
          help: 'Student has either passed or is scheduled for (and presumed to pass) the second semester of a VAPA course whose first semester companion has already been passed, or is scheduled',
          grades: {9: false, 10: true, 11: true}
        }
      ]
    }
  }
]

module.exports = CONSTANTS