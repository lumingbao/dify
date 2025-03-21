const translation = {
  api: {
    success: 'ความสําเร็จ',
    actionSuccess: 'การดําเนินการสําเร็จ',
    saved: 'บันทึก',
    create: 'สร้าง',
    remove: 'ถูก เอา ออก',
  },
  operation: {
    create: 'สร้าง',
    confirm: 'ยืนยัน',
    cancel: 'ยกเลิก',
    clear: 'ใส',
    save: 'ประหยัด',
    saveAndEnable: 'บันทึกและเปิดใช้งาน',
    edit: 'แก้ไข',
    add: 'เพิ่ม',
    added: 'เพิ่ม',
    refresh: 'เริ่มใหม่',
    reset: 'รี เซ็ต',
    search: 'ค้น',
    change: 'เปลี่ยน',
    remove: 'ถอด',
    send: 'ส่ง',
    copy: 'ลอก',
    lineBreak: 'ตัวแบ่งบรรทัด',
    sure: 'ฉันแน่ใจ',
    download: 'ดาวน์โหลด',
    delete: 'ลบ',
    settings: 'การตั้งค่า',
    setup: 'ตั้ง ค่า',
    getForFree: 'รับฟรี',
    reload: 'โหลด',
    ok: 'ตกลง, ได้',
    log: 'ซุง',
    learnMore: 'ศึกษาเพิ่มเติม',
    params: 'พารามิเตอร์',
    duplicate: 'สำเนา',
    rename: 'ตั้งชื่อใหม่',
    audioSourceUnavailable: 'AudioSource ไม่พร้อมใช้งาน',
    copyImage: 'คัดลอกรูปภาพ',
    zoomOut: 'ซูมออก',
    zoomIn: 'ซูมเข้า',
    openInNewTab: 'เปิดในแท็บใหม่',
    view: 'ทิวทัศน์',
    regenerate: 'สร้างใหม่',
    viewMore: 'ดูเพิ่มเติม',
    saveAndRegenerate: 'บันทึกและสร้างก้อนย่อยใหม่',
    close: 'ปิด',
    skip: 'เรือ',
    submit: 'ส่ง',
    imageCopied: 'ภาพที่คัดลอก',
    deleteApp: 'ลบแอพ',
    copied: 'คัด ลอก',
    viewDetails: 'ดูรายละเอียด',
    in: 'ใน',
  },
  errorMsg: {
    fieldRequired: '{{field}} เป็นสิ่งจําเป็น',
    urlError: 'url ควรขึ้นต้นด้วย http:// หรือ https://',
  },
  placeholder: {
    input: 'กรุณากรอก',
    select: 'กรุณาเลือก',
  },
  voice: {
    language: {
      zhHans: 'จีน',
      zhHant: 'ภาษาจีนตัวเต็ม',
      enUS: 'อังกฤษ',
      deDE: 'เยอรมัน',
      frFR: 'ฝรั่งเศส',
      esES: 'สเปน',
      itIT: 'อิตาลี',
      thTH: 'ไทย',
      idID: 'อินโดนีเซีย',
      jaJP: 'ญี่ปุ่น',
      koKR: 'เกาหลี',
      ptBR: 'โปรตุเกส',
      ruRU: 'รัสเซีย',
      ukUA: 'ยูเครน',
      viVN: 'เวียดนาม',
      plPL: 'โปแลนด์',
      roRO: 'โรมาเนีย',
      hiIN: 'ฮินดี',
      trTR: 'ตุรกี',
      faIR: 'ภาษาเปอร์เซีย',
    },
  },
  unit: {
    char: 'รถ ถัง',
  },
  actionMsg: {
    noModification: 'ไม่มีการดัดแปลงในขณะนี้',
    modifiedSuccessfully: 'แก้ไขสําเร็จแล้ว',
    modifiedUnsuccessfully: 'แก้ไขไม่สําเร็จ',
    copySuccessfully: 'คัดลอกสําเร็จแล้ว',
    paySucceeded: 'การชําระเงินสําเร็จ',
    payCancelled: 'ยกเลิกการชําระเงิน',
    generatedSuccessfully: 'สร้างสําเร็จ',
    generatedUnsuccessfully: 'สร้างไม่สําเร็จ',
  },
  model: {
    params: {
      temperature: 'อุณหภูมิ',
      temperatureTip: 'ควบคุมการสุ่ม: การลดระดับส่งผลให้การสุ่มเสร็จน้อยลง เมื่ออุณหภูมิเข้าใกล้ศูนย์แบบจําลองจะกลายเป็นการกําหนดและซ้ําซาก',
      top_p: 'ท็อป P',
      top_pTip: 'ควบคุมความหลากหลายผ่านการสุ่มตัวอย่างนิวเคลียส: 0.5 หมายถึงครึ่งหนึ่งของตัวเลือกที่ถ่วงน้ําหนักความน่าจะเป็นทั้งหมดได้รับการพิจารณา',
      presence_penalty: 'บทลงโทษการแสดงตน',
      presence_penaltyTip: 'จะลงโทษโทเค็นใหม่เท่าใดโดยพิจารณาจากว่าโทเค็นเหล่านั้นปรากฏในข้อความหรือไม่\nเพิ่มโอกาสของโมเดลในการพูดคุยเกี่ยวกับหัวข้อใหม่',
      frequency_penalty: 'บทลงโทษความถี่',
      frequency_penaltyTip: 'จะลงโทษโทเค็นใหม่เท่าใดตามความถี่ที่มีอยู่ในข้อความจนถึงตอนนี้\nลดโอกาสของโมเดลที่จะทําซ้ําบรรทัดเดิมแบบคําต่อคํา',
      max_tokens: 'โทเค็นสูงสุด',
      max_tokensTip: 'ใช้เพื่อจํากัดความยาวสูงสุดของการตอบกลับเป็นโทเค็น \nค่าที่ใหญ่ขึ้นอาจจํากัดพื้นที่ที่เหลือสําหรับคําพร้อมท์ บันทึกการแชท และความรู้ \nขอแนะนําให้ตั้งค่าต่ํากว่าสองในสาม\nGPT-4-1106-preview, GPT-4-Vision-Preview โทเค็นสูงสุด (อินพุต 128K เอาต์พุต 4K)',
      maxTokenSettingTip: 'การตั้งค่าโทเค็นสูงสุดของคุณสูง ซึ่งอาจจํากัดพื้นที่สําหรับข้อความแจ้ง แบบสอบถาม และข้อมูล พิจารณาตั้งค่าให้ต่ํากว่า 2/3',
      setToCurrentModelMaxTokenTip: 'โทเค็นสูงสุดได้รับการอัปเดตเป็นโทเค็นสูงสุด 80% ของรุ่นปัจจุบัน {{maxToken}}',
      stop_sequences: 'หยุดลําดับ',
      stop_sequencesTip: 'สูงสุดสี่ลําดับที่ API จะหยุดสร้างโทเค็นเพิ่มเติม ข้อความที่ส่งคืนจะไม่มีลําดับการหยุด',
      stop_sequencesPlaceholder: 'ป้อนลําดับแล้วกด Tab',
    },
    tone: {
      Creative: 'สร้างสรรค์',
      Balanced: 'สมดุล',
      Precise: 'ถูกต้อง',
      Custom: 'ธรรมเนียม',
    },
    addMoreModel: 'ไปที่การตั้งค่าเพื่อเพิ่มรุ่นเพิ่มเติม',
    settingsLink: 'การตั้งค่าผู้ให้บริการโมเดล',
    capabilities: 'ความสามารถหลายรูปแบบ',
  },
  menus: {
    status: 'Beta',
    explore: 'สํารวจ',
    apps: 'เรียน',
    plugins: 'ปลั๊กอิน',
    pluginsTips: 'รวมปลั๊กอินของบุคคลที่สามหรือสร้างปลั๊กอิน AI ที่เข้ากันได้กับ ChatGPT',
    datasets: 'ความรู้',
    datasetsTips: 'เร็ว ๆ นี้: นําเข้าข้อมูลข้อความของคุณเองหรือเขียนข้อมูลแบบเรียลไทม์ผ่าน Webhook เพื่อปรับปรุงบริบท LLM',
    newApp: 'แอพใหม่',
    newDataset: 'สร้างความรู้',
    tools: 'เครื่อง มือ',
    exploreMarketplace: 'สํารวจ Marketplace',
  },
  userProfile: {
    settings: 'การตั้งค่า',
    emailSupport: 'การสนับสนุนทางอีเมล',
    workspace: 'พื้นที่',
    createWorkspace: 'สร้างพื้นที่ทํางาน',
    helpCenter: 'วิธีใช้',
    communityFeedback: 'การตอบสนอง',
    roadmap: 'แผนงาน',
    community: 'ชุมชน',
    about: 'ประมาณ',
    logout: 'ออกจากระบบ',
    manage: 'การจัดการ',
  },
  settings: {
    accountGroup: 'ทั่วไป',
    workplaceGroup: 'พื้นที่',
    account: 'บัญชีของฉัน',
    members: 'สมาชิก',
    billing: 'เรียก เก็บ เงิน',
    integrations: 'บูรณาการ',
    language: 'ภาษา',
    provider: 'ผู้ให้บริการโมเดล',
    dataSource: 'แหล่งข้อมูล',
    plugin: 'ปลั๊กอิน',
    apiBasedExtension: 'ส่วนขยาย API',
    generalGroup: 'ทั่วไป',
  },
  account: {
    account: 'บัญชี',
    myAccount: 'บัญชีของฉัน',
    studio: 'Dify สตูดิโอ',
    avatar: 'อวตาร',
    name: 'ชื่อ',
    email: 'อีเมล',
    password: 'รหัสผ่าน',
    passwordTip: 'คุณสามารถตั้งรหัสผ่านถาวรได้หากคุณไม่ต้องการใช้รหัสเข้าสู่ระบบชั่วคราว',
    setPassword: 'ตั้งรหัสผ่าน',
    resetPassword: 'รีเซ็ตรหัสผ่าน',
    currentPassword: 'รหัสผ่านปัจจุบัน',
    newPassword: 'รหัสผ่านใหม่',
    confirmPassword: 'ยืนยันรหัสผ่าน',
    notEqual: 'รหัสผ่านสองรหัสผ่านแตกต่างกัน',
    langGeniusAccount: 'บัญชี Dify',
    langGeniusAccountTip: 'บัญชี Dify และข้อมูลผู้ใช้ที่เกี่ยวข้อง',
    editName: 'แก้ไขชื่อ',
    showAppLength: 'แสดง {{length}} แอป',
    delete: 'ลบบัญชี',
    deleteTip: 'การลบบัญชีของคุณจะเป็นการลบข้อมูลทั้งหมดของคุณอย่างถาวรและไม่สามารถกู้คืนได้',
    deleteConfirmTip: 'เพื่อยืนยัน โปรดส่งข้อมูลต่อไปนี้จากอีเมลที่ลงทะเบียนไว้ที่',
    deletePrivacyLinkTip: 'สําหรับข้อมูลเพิ่มเติมเกี่ยวกับวิธีที่เราจัดการกับข้อมูลของคุณ โปรดดูที่',
    deletePrivacyLink: 'นโยบายความเป็นส่วนตัว',
    deleteLabel: 'เพื่อยืนยัน โปรดพิมพ์อีเมลของคุณด้านล่าง',
    deletePlaceholder: 'กรุณากรอกอีเมลของคุณ',
    sendVerificationButton: 'ส่งรหัสยืนยัน',
    verificationLabel: 'รหัสยืนยัน',
    verificationPlaceholder: 'วางรหัส 6 หลัก',
    permanentlyDeleteButton: 'ลบบัญชีอย่างถาวร',
    feedbackTitle: 'การตอบสนอง',
    feedbackLabel: 'บอกเราว่าทําไมคุณถึงลบบัญชีของคุณ',
    feedbackPlaceholder: 'เสริม',
    deleteSuccessTip: 'บัญชีของคุณต้องใช้เวลาในการลบให้เสร็จสิ้น เราจะส่งอีเมลถึงคุณเมื่อทุกอย่างเสร็จสิ้น',
  },
  members: {
    team: 'ทีม',
    invite: 'เพิ่ม',
    name: 'ชื่อ',
    lastActive: 'ใช้งานล่าสุด',
    role: 'บทบาท',
    pending: 'รอ   ',
    owner: 'เจ้าของ',
    admin: 'ผู้ดูแลระบบ',
    adminTip: 'สามารถสร้างแอพและจัดการการตั้งค่าทีมได้',
    normal: 'ปกติ',
    normalTip: 'ใช้ได้เฉพาะแอพ สร้างแอพไม่ได้',
    builder: 'ผู้สร้าง',
    builderTip: 'สามารถสร้างและแก้ไขแอปของตัวเองได้',
    editor: 'บรรณาธิการ',
    editorTip: 'สามารถสร้างและแก้ไขแอปได้',
    datasetOperator: 'ผู้ดูแลระบบความรู้',
    datasetOperatorTip: 'สามารถจัดการฐานความรู้ได้เท่านั้น',
    inviteTeamMember: 'เพิ่มสมาชิกในทีม',
    inviteTeamMemberTip: 'พวกเขาสามารถเข้าถึงข้อมูลทีมของคุณได้โดยตรงหลังจากลงชื่อเข้าใช้',
    emailNotSetup: 'เซิร์ฟเวอร์อีเมลไม่ได้ตั้งค่าไว้ จึงไม่สามารถส่งอีเมลเชิญได้ กรุณาแจ้งผู้ใช้เกี่ยวกับลิงก์เชิญที่จะออกหลังจากการเชิญแทน',
    email: 'อีเมล',
    emailInvalid: 'รูปแบบอีเมลไม่ถูกต้อง',
    emailPlaceholder: 'กรุณากรอกอีเมล',
    sendInvite: 'ส่งคําเชิญ',
    invitedAsRole: 'ได้รับเชิญให้เป็นผู้ใช้ {{role}}',
    invitationSent: 'ส่งคําเชิญแล้ว',
    invitationSentTip: 'ส่งคําเชิญแล้ว และพวกเขาสามารถลงชื่อเข้าใช้ Dify เพื่อเข้าถึงข้อมูลทีมของคุณได้',
    invitationLink: 'ลิงค์คําเชิญ',
    failedInvitationEmails: 'ผู้ใช้ด้านล่างไม่ได้รับเชิญสําเร็จ',
    ok: 'ตกลง, ได้',
    removeFromTeam: 'ลบออกจากทีม',
    removeFromTeamTip: 'จะลบการเข้าถึงของทีม',
    setAdmin: 'ตั้งเป็นผู้ดูแลระบบ',
    setMember: 'ตั้งเป็นสมาชิกสามัญ',
    setBuilder: 'ตั้งเป็นผู้สร้าง',
    setEditor: 'ตั้งค่าเป็นตัวแก้ไข',
    disInvite: 'ยกเลิกคําเชิญ',
    deleteMember: 'ลบสมาชิก',
    you: '(คุณ)',
  },
  integrations: {
    connected: 'เชื่อม ต่อ',
    google: 'กูเกิล',
    googleAccount: 'เข้าสู่ระบบด้วยบัญชี Google',
    github: 'เกวบ',
    githubAccount: 'เข้าสู่ระบบด้วยบัญชี GitHub',
    connect: 'ติด',
  },
  language: {
    displayLanguage: 'ภาษาที่แสดง',
    timezone: 'เขตเวลา',
  },
  provider: {
    apiKey: 'คีย์ API',
    enterYourKey: 'ป้อนคีย์ API ของคุณที่นี่',
    invalidKey: 'คีย์ OpenAI API ไม่ถูกต้อง',
    validatedError: 'การตรวจสอบล้มเหลว:',
    validating: 'กําลังตรวจสอบความถูกต้องของคีย์...',
    saveFailed: 'บันทึกคีย์ API ล้มเหลว',
    apiKeyExceedBill: 'คีย์ API นี้ไม่มีโควต้า โปรดอ่าน',
    addKey: 'เพิ่มคีย์',
    comingSoon: 'เร็ว ๆ นี้',
    editKey: 'แก้ไข',
    invalidApiKey: 'คีย์ API ไม่ถูกต้อง',
    azure: {
      apiBase: 'ฐาน API',
      apiBasePlaceholder: 'URL ฐาน API ของปลายทาง Azure OpenAI ของคุณ',
      apiKey: 'คีย์ API',
      apiKeyPlaceholder: 'ป้อนคีย์ API ของคุณที่นี่',
      helpTip: 'เรียนรู้บริการ Azure OpenAI',
    },
    openaiHosted: {
      openaiHosted: 'โฮสต์ OpenAI',
      onTrial: 'ทดลองใช้',
      exhausted: 'โควต้าหมด',
      desc: 'บริการโฮสติ้ง OpenAI ที่ให้บริการโดย Dify ช่วยให้คุณใช้โมเดลต่างๆ เช่น GPT-3.5 ก่อนที่โควต้าการทดลองใช้ของคุณจะหมด คุณจําเป็นต้องตั้งค่าผู้ให้บริการรุ่นอื่นๆ',
      callTimes: 'เวลาโทร',
      usedUp: 'โควต้าทดลองใช้หมด เพิ่มผู้ให้บริการโมเดลของตัวเอง',
      useYourModel: 'ปัจจุบันใช้ผู้ให้บริการโมเดลของตัวเอง',
      close: 'ปิด',
    },
    anthropicHosted: {
      anthropicHosted: 'Claude มานุษยวิทยา',
      onTrial: 'ทดลองใช้',
      exhausted: 'โควต้าหมด',
      desc: 'โมเดลที่ทรงพลังซึ่งเก่งในงานที่หลากหลายตั้งแต่บทสนทนาที่ซับซ้อนและการสร้างเนื้อหาที่สร้างสรรค์ไปจนถึงคําแนะนําโดยละเอียด',
      callTimes: 'เวลาโทร',
      usedUp: 'โควต้าทดลองใช้หมด เพิ่มผู้ให้บริการโมเดลของตัวเอง',
      useYourModel: 'ปัจจุบันใช้ผู้ให้บริการโมเดลของตัวเอง',
      close: 'ปิด',
      trialQuotaTip: 'โควต้าการทดลองใช้ Anthropic ของคุณจะหมดอายุในวันที่ 2025/03/11 และจะไม่สามารถใช้งานได้อีกต่อไปหลังจากนั้นโปรดใช้มันให้ทันเวลา',
    },
    anthropic: {
      using: 'ความสามารถในการฝังกําลังใช้',
      enableTip: 'ในการเปิดใช้งานโมเดล Anthropic คุณต้องผูกกับ OpenAI หรือ Azure OpenAI Service ก่อน',
      notEnabled: 'ไม่ได้เปิดใช้งาน',
      keyFrom: 'รับคีย์ API ของคุณจาก Anthropic',
    },
    encrypted: {
      front: 'คีย์ API ของคุณจะถูกเข้ารหัสและจัดเก็บโดยใช้',
      back: 'เทคโนโลยี ',
    },
  },
  modelProvider: {
    notConfigured: 'โมเดลระบบยังไม่ได้รับการกําหนดค่าอย่างสมบูรณ์ และฟังก์ชันบางอย่างอาจไม่พร้อมใช้งาน',
    systemModelSettings: 'การตั้งค่ารุ่นระบบ',
    systemModelSettingsLink: 'เหตุใดจึงจําเป็นต้องตั้งค่าโมเดลระบบ',
    selectModel: 'เลือกรุ่นของคุณ',
    setupModelFirst: 'โปรดตั้งค่าโมเดลของคุณก่อน',
    systemReasoningModel: {
      key: 'แบบจําลองการให้เหตุผลของระบบ',
      tip: 'ตั้งค่าโมเดลการอนุมานเริ่มต้นที่จะใช้สําหรับการสร้างแอปพลิเคชัน ตลอดจนคุณลักษณะต่างๆ เช่น การสร้างชื่อบทสนทนาและคําแนะนําคําถามถัดไปจะใช้โมเดลการอนุมานเริ่มต้นด้วย',
    },
    embeddingModel: {
      key: 'โมเดลการฝัง',
      tip: 'ตั้งค่าโมเดลเริ่มต้นสําหรับการประมวลผลการฝังเอกสารของความรู้ ทั้งการดึงข้อมูลและการนําเข้าความรู้ใช้โมเดลการฝังนี้สําหรับการประมวลผลแบบเวกเตอร์ การสลับจะทําให้มิติเวกเตอร์ระหว่างความรู้ที่นําเข้าและคําถามไม่สอดคล้องกัน เพื่อหลีกเลี่ยงความล้มเหลวในการดึงข้อมูล โปรดอย่าเปลี่ยนรุ่นนี้ตามต้องการ',
      required: 'จําเป็นต้องมีแบบจําลองการฝัง',
    },
    speechToTextModel: {
      key: 'โมเดลคําพูดเป็นข้อความ',
      tip: 'ตั้งค่าโมเดลเริ่มต้นสําหรับการป้อนข้อมูลคําพูดเป็นข้อความในการสนทนา',
    },
    ttsModel: {
      key: 'โมเดลการแปลงข้อความเป็นคําพูด',
      tip: 'ตั้งค่าโมเดลเริ่มต้นสําหรับการป้อนข้อมูลเป็นข้อความเป็นคําพูดในการสนทนา',
    },
    rerankModel: {
      key: 'จัดอันดับโมเดลใหม่',
      tip: 'โมเดล Rerank จะจัดลําดับรายการเอกสารผู้สมัครใหม่ตามการจับคู่ความหมายกับการสืบค้นของผู้ใช้ ซึ่งช่วยปรับปรุงผลลัพธ์ของการจัดอันดับความหมาย',
    },
    apiKey: 'คีย์ API',
    quota: 'โควตา',
    searchModel: 'ค้นหารุ่น',
    noModelFound: 'ไม่พบแบบจําลองสําหรับ {{model}}',
    models: 'รุ่น',
    showMoreModelProvider: 'แสดงผู้ให้บริการรุ่นเพิ่มเติม',
    selector: {
      tip: 'รุ่นนี้ถูกลบออกแล้ว โปรดเพิ่มรุ่นหรือเลือกรุ่นอื่น',
      emptyTip: 'ไม่มีรุ่นที่พร้อมใช้งาน',
      emptySetting: 'โปรดไปที่การตั้งค่าเพื่อกําหนดค่า',
      rerankTip: 'โปรดตั้งค่าโมเดล Rerank',
    },
    card: {
      quota: 'โควตา',
      onTrial: 'ทดลองใช้',
      paid: 'จ่าย',
      quotaExhausted: 'โควต้าหมด',
      callTimes: 'เวลาโทร',
      tokens: 'โท เค็น',
      buyQuota: 'ซื้อโควต้า',
      priorityUse: 'ลําดับความสําคัญในการใช้งาน',
      removeKey: 'ลบคีย์ API',
      tip: 'ลําดับความสําคัญจะได้รับจากโควต้าที่จ่าย โควต้าทดลองใช้จะถูกใช้หลังจากโควต้าที่จ่ายหมด',
    },
    item: {
      deleteDesc: '{{modelName}} ถูกใช้เป็นแบบจําลองการให้เหตุผลของระบบ ฟังก์ชันบางอย่างจะไม่สามารถใช้งานได้หลังจากการลบออก กรุณายืนยัน',
      freeQuota: 'โควต้าฟรี',
    },
    addApiKey: 'เพิ่มคีย์ API ของคุณ',
    invalidApiKey: 'คีย์ API ไม่ถูกต้อง',
    encrypted: {
      front: 'คีย์ API ของคุณจะถูกเข้ารหัสและจัดเก็บโดยใช้',
      back: 'เทคโนโลยี ',
    },
    freeQuota: {
      howToEarn: 'วิธีรับ',
    },
    addMoreModelProvider: 'เพิ่มผู้ให้บริการโมเดลเพิ่มเติม',
    addModel: 'เพิ่มรุ่น',
    modelsNum: '{{num}} รุ่น',
    showModels: 'แสดงโมเดล',
    showModelsNum: 'แสดง {{num}} โมเดล',
    collapse: 'ทรุด',
    config: 'กําหนดค่า',
    modelAndParameters: 'รุ่นและพารามิเตอร์',
    model: 'แบบ',
    featureSupported: 'รองรับ {{feature}}',
    callTimes: 'เวลาโทร',
    credits: 'เครดิตข้อความ',
    buyQuota: 'ซื้อโควต้า',
    getFreeTokens: 'รับโทเค็นฟรี',
    priorityUsing: 'จัดลําดับความสําคัญของการใช้',
    deprecated: 'เลิกใช้งานแล้ว',
    confirmDelete: 'ยืนยันการลบ?',
    quotaTip: 'โทเค็นฟรีที่เหลืออยู่',
    loadPresets: 'โหลดค่าที่ตั้งไว้ล่วงหน้า',
    parameters: 'พารามิเตอร์',
    loadBalancing: 'โหลดบาลานซ์',
    loadBalancingDescription: 'ลดแรงกดดันด้วยข้อมูลประจําตัวหลายชุด',
    loadBalancingHeadline: 'โหลดบาลานซ์',
    configLoadBalancing: 'กําหนดค่าโหลดบาลานซ์',
    modelHasBeenDeprecated: 'โมเดลนี้เลิกใช้แล้ว',
    providerManaged: 'จัดการผู้ให้บริการ',
    providerManagedDescription: 'ใช้ข้อมูลประจําตัวชุดเดียวที่ผู้ให้บริการโมเดลให้มา',
    defaultConfig: 'การกําหนดค่าเริ่มต้น',
    apiKeyStatusNormal: 'สถานะ APIKey เป็นปกติ',
    apiKeyRateLimit: 'ถึงขีดจํากัดอัตราแล้ว พร้อมใช้งานหลังจาก {{seconds}}s',
    addConfig: 'เพิ่มการกําหนดค่า',
    editConfig: 'แก้ไขการกําหนดค่า',
    loadBalancingLeastKeyWarning: 'หากต้องการเปิดใช้งานการปรับสมดุลโหลด ต้องเปิดใช้งานคีย์อย่างน้อย 2 ปุ่ม',
    loadBalancingInfo: 'ตามค่าเริ่มต้น การปรับสมดุลภาระงานจะใช้กลยุทธ์แบบ Round-robin หากเปิดใช้งานการจํากัดอัตรา จะมีการใช้ระยะเวลาคูลดาวน์ 1 นาที',
    upgradeForLoadBalancing: 'อัปเกรดแผนของคุณเพื่อเปิดใช้งานการปรับสมดุลโหลด',
    emptyProviderTip: 'โปรดติดตั้งผู้ให้บริการโมเดลก่อน',
    discoverMore: 'ดูเพิ่มเติมใน',
    emptyProviderTitle: 'ไม่ได้ตั้งค่าผู้ให้บริการโมเดล',
    toBeConfigured: 'ต้องกําหนดค่า',
    installProvider: 'ติดตั้งผู้ให้บริการโมเดล',
    configureTip: 'ตั้งค่า api-key หรือเพิ่มโมเดลเพื่อใช้',
  },
  dataSource: {
    add: 'เพิ่มแหล่งข้อมูล',
    connect: 'ติด',
    configure: 'กําหนดค่า',
    notion: {
      title: 'แนวคิด',
      description: 'การใช้ Notion เป็นแหล่งข้อมูลสําหรับความรู้',
      connectedWorkspace: 'พื้นที่ทํางานที่เชื่อมต่อ',
      addWorkspace: 'เพิ่มพื้นที่ทํางาน',
      connected: 'เชื่อม ต่อ',
      disconnected: 'เชื่อม ต่อ',
      changeAuthorizedPages: 'เปลี่ยนหน้าที่ได้รับอนุญาต',
      pagesAuthorized: 'เพจที่ได้รับอนุญาต',
      sync: 'ซิงค์',
      remove: 'ถอด',
      selector: {
        pageSelected: 'หน้าที่เลือก',
        searchPages: 'หน้าค้นหา...',
        noSearchResult: 'ไม่มีผลการค้นหา',
        addPages: 'เพิ่มหน้า',
        preview: 'ดูตัวอย่าง',
      },
    },
    website: {
      title: 'เว็บไซต์',
      description: 'นําเข้าเนื้อหาจากเว็บไซต์โดยใช้โปรแกรมรวบรวมข้อมูลเว็บ',
      with: 'กับ',
      configuredCrawlers: 'โปรแกรมรวบรวมข้อมูลที่กําหนดค่าไว้',
      active: 'กระปรี้กระเปร่า',
      inactive: 'เกียจคร้าน',
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'คีย์ API',
      apiKeyPlaceholder: 'ป้อนคีย์ API ของคุณ',
      keyFrom: 'รับคีย์ SerpAPI ของคุณจากหน้าบัญชี SerpAPI',
    },
  },
  apiBasedExtension: {
    title: 'ส่วนขยาย API ให้การจัดการ API แบบรวมศูนย์ ทําให้การกําหนดค่าง่ายขึ้นเพื่อให้ใช้งานได้ง่ายในแอปพลิเคชันของ Dify',
    link: 'เรียนรู้วิธีพัฒนาส่วนขยาย API ของคุณเอง',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'เพิ่มส่วนขยาย API',
    selector: {
      title: 'ส่วนขยาย API',
      placeholder: 'โปรดเลือกส่วนขยาย API',
      manage: 'จัดการส่วนขยาย API',
    },
    modal: {
      title: 'เพิ่มส่วนขยาย API',
      editTitle: 'แก้ไขส่วนขยาย API',
      name: {
        title: 'ชื่อ',
        placeholder: 'กรุณากรอกชื่อ',
      },
      apiEndpoint: {
        title: 'ปลายทาง API',
        placeholder: 'โปรดป้อนปลายทาง API',
      },
      apiKey: {
        title: 'คีย์ API',
        placeholder: 'กรุณาป้อนคีย์ API',
        lengthError: 'ความยาวคีย์ API ต้องไม่น้อยกว่า 5 อักขระ',
      },
    },
    type: 'ประเภท',
  },
  about: {
    changeLog: 'บันทึกการเปลี่ยนแปลง',
    updateNow: 'อัพเดตเดี๋ยวนี้',
    nowAvailable: 'Dify {{version}} พร้อมใช้งานแล้ว',
    latestAvailable: 'Dify {{version}} เป็นเวอร์ชันล่าสุดที่มี',
  },
  appMenus: {
    overview: 'ตรวจ สอบ',
    promptEng: 'ออเคสตร้า',
    apiAccess: 'การเข้าถึง API',
    logAndAnn: 'ล็อก & แอน.',
    logs: 'บันทึก',
  },
  environment: {
    testing: 'การทดสอบ',
    development: 'พัฒนาการ',
  },
  appModes: {
    completionApp: 'เครื่องกําเนิดข้อความ',
    chatApp: 'แอพแชท',
  },
  datasetMenus: {
    documents: 'เอกสาร',
    hitTesting: 'การทดสอบการดึงข้อมูล',
    settings: 'การตั้งค่า',
    emptyTip: 'ความรู้ยังไม่ได้เชื่อมโยง โปรดไปที่แอปพลิเคชันหรือปลั๊กอินเพื่อเชื่อมโยงให้เสร็จสมบูรณ์',
    viewDoc: 'ดูเอกสารประกอบ',
    relatedApp: 'แอปที่เชื่อมโยง',
    noRelatedApp: 'ไม่มีแอปที่เชื่อมโยง',
  },
  voiceInput: {
    speaking: 'พูดเดี๋ยวนี้...',
    converting: 'กําลังแปลงเป็นข้อความ...',
    notAllow: 'ไม่ได้รับอนุญาตไมโครโฟน',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-เทอร์โบ',
    'gpt-3.5-turbo-16k': 'GPT-3.5-เทอร์โบ-16K',
    'gpt-4': 'จีพีที-4',
    'gpt-4-32k': 'จีทีพี-4-32 เค',
    'text-davinci-003': 'ข้อความ-Davinci-003',
    'text-embedding-ada-002': 'การฝังข้อความ-ADA-002',
    'whisper-1': 'กระซิบ-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2 (โคลด-2)',
  },
  chat: {
    renameConversation: 'เปลี่ยนชื่อการสนทนา',
    conversationName: 'ชื่อการสนทนา',
    conversationNamePlaceholder: 'กรุณากรอกชื่อการสนทนา',
    conversationNameCanNotEmpty: 'ต้องมีชื่อการสนทนา',
    citation: {
      title: 'อ้าง อิง',
      linkToDataset: 'ลิงค์สู่ความรู้',
      characters: 'อักขระ:',
      hitCount: 'จํานวนการดึงข้อมูล:',
      vectorHash: 'แฮชเวกเตอร์:',
      hitScore: 'คะแนนการดึงข้อมูล:',
    },
    inputPlaceholder: 'พูดคุยกับบอท',
    thought: 'ความคิด',
    thinking: 'ความคิด   ',
  },
  promptEditor: {
    placeholder: 'เขียนคําพร้อมท์ของคุณที่นี่ ป้อน \'{\' เพื่อแทรกตัวแปร ป้อน \'/\' เพื่อแทรกบล็อกเนื้อหาพร้อมท์',
    context: {
      item: {
        title: 'บริบท',
        desc: 'แทรกเทมเพลตบริบท',
      },
      modal: {
        title: '{{num}} ความรู้ในบริบท',
        add: 'เพิ่มบริบท',
        footer: 'คุณสามารถจัดการบริบทได้ในส่วนบริบทด้านล่าง',
      },
    },
    history: {
      item: {
        title: 'ประวัติการสนทนา',
        desc: 'แทรกเทมเพลตข้อความในอดีต',
      },
      modal: {
        title: 'ตัวอย่าง',
        user: 'สวัสดี',
        assistant: 'สวัสดี! ฉันจะช่วยคุณได้อย่างไรในวันนี้?',
        edit: 'แก้ไขชื่อบทบาทการสนทนา',
      },
    },
    variable: {
      item: {
        title: 'ตัวแปรและเครื่องมือภายนอก',
        desc: 'แทรกตัวแปรและเครื่องมือภายนอก',
      },
      outputToolDisabledItem: {
        title: 'ตัว แปร',
        desc: 'แทรกตัวแปร',
      },
      modal: {
        add: 'ตัวแปรใหม่',
        addTool: 'เครื่องมือใหม่',
      },
    },
    query: {
      item: {
        title: 'สอบถาม',
        desc: 'แทรกเทมเพลตแบบสอบถามของผู้ใช้',
      },
    },
    existed: 'มีอยู่แล้วในพรอมต์',
  },
  imageUploader: {
    uploadFromComputer: 'อัปโหลดจากคอมพิวเตอร์',
    uploadFromComputerReadError: 'การอ่านภาพล้มเหลว โปรดลองอีกครั้ง',
    uploadFromComputerUploadError: 'อัปโหลดรูปภาพล้มเหลว โปรดอัปโหลดอีกครั้ง',
    uploadFromComputerLimit: 'อัปโหลดรูปภาพต้องไม่เกิน {{size}} MB',
    pasteImageLink: 'วางลิงก์รูปภาพ',
    pasteImageLinkInputPlaceholder: 'วางลิงค์รูปภาพที่นี่',
    pasteImageLinkInvalid: 'ลิงก์รูปภาพไม่ถูกต้อง',
    imageUpload: 'อัปโหลดรูปภาพ',
  },
  fileUploader: {
    uploadFromComputer: 'อัปโหลดในเครื่อง',
    pasteFileLink: 'วางลิงค์ไฟล์',
    pasteFileLinkInputPlaceholder: 'ป้อน URL...',
    uploadFromComputerReadError: 'การอ่านไฟล์ล้มเหลว โปรดลองอีกครั้ง',
    uploadFromComputerUploadError: 'อัปโหลดไฟล์ล้มเหลว โปรดอัปโหลดอีกครั้ง',
    uploadFromComputerLimit: 'อัปโหลด {{type}} ต้องไม่เกิน {{size}}',
    pasteFileLinkInvalid: 'ลิงก์ไฟล์ไม่ถูกต้อง',
    fileExtensionNotSupport: 'ไม่รองรับนามสกุลไฟล์',
  },
  tag: {
    placeholder: 'แท็กทั้งหมด',
    addNew: 'เพิ่มแท็กใหม่',
    noTag: 'ไม่มีแท็ก',
    noTagYet: 'ยังไม่มีแท็ก',
    addTag: 'เพิ่มแท็ก',
    editTag: 'แก้ไขแท็ก',
    manageTags: 'จัดการแท็ก',
    selectorPlaceholder: 'พิมพ์เพื่อค้นหาหรือสร้าง',
    create: 'สร้าง',
    delete: 'ลบแท็ก',
    deleteTip: 'แท็กกําลังถูกใช้ลบออก?',
    created: 'สร้างแท็กสําเร็จ',
    failed: 'การสร้างแท็กล้มเหลว',
  },
  license: {
    expiring: 'หมดอายุในหนึ่งวัน',
    expiring_plural: 'หมดอายุใน {{count}} วัน',
  },
  pagination: {
    perPage: 'รายการต่อหน้า',
  },
}

export default translation
