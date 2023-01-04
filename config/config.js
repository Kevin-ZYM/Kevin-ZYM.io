var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "段梦遥",
    sex: "女",
    age: "28",
    phone: "15084931094",
    email: "happysnaker@foxmail.com",
    address: "现居北京市房山区",
    email: "duanmengyao0715@163.com",
    log: "明兮一曲何兮",
    research: "心血管疾病中医诊断现代化研究(深度学习)",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "你好，我是段梦遥，北京中医药大学在读博士生<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫段梦遥，性别女，北京中医药大学在读博士生。我现阶段研究方向为心血管疾病中医诊断现代化研究（深度学习）。</p>" +
        "<p>自我介绍</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Java", 80, "red"],
        ["GoLang", 77, "blue"],
        ["SQL", 75, "#1abc9c"],
        ["HTML5", 67, "rgba(0,0,0)"],
        ["CSS3", 60, "yellow"],
        ["JavaScript", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握Java基础。</li>" +
        "     <li>熟悉JavaIO、多线程、集合等基础框架。</li>" +
        "     <li>了解JVM原理。</li>" +
        "     <li>熟悉Go语言开发基本知识。</li>" +
        "     <li>熟悉SQL语句编写以及调优。</li>" +
        "     <li>熟悉基本Linux命令操作。</li>" +
        "     <li>熟悉Spring、ibatis、struts等框架的使用，了解其原理与机制。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +
        "     <li>了解分布式系统的设计与应用。</li>" +
        "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    // 个人风采
    portfolio: [
        ["./images/experience_1.jpg", "", "个人风采", "个人风采"],
        ["./images/experience_2.jpg", "", "个人风采", "个人风采"],
        ["./images/experience_3.jpg", "", "个人风采", "个人风采"],
        ["./images/experience_4.png", "", "个人风采", "个人风采"],
        ["./images/experience_5.jpg", "", "个人风采", "个人风采"],
        ["./images/experience_6.png", "", "个人风采", "个人风采"],
        ["./images/experience_7.png", "", "个人风采", "个人风采"],
        ["./images/experience_8.png", "", "个人风采", "个人风采"],
    ],

    // 已录用文章
    accept_article: [
        ["《不同中医体质类型的舌象特征定量分析》（待刊）", "中华中医药杂志", "北大核心", "一作", "2023"],
        ["《高血压病中医证素分布规律及证候特征研究》", "辽宁中医杂志", "中文核心", "一作", "2022"],
        ["《高血压病舌象客观化特征与阴虚证的相关性研究》", "现代中医临床", "中文核心", "一作", "2021"],
        ["《高血压病舌象客观化特征与痰证的相关性研究》", "湖南中医药大学学报", "中文核心", "一作", "2021"],
        ["《何泽云治疗不寐验案一则》", "湖南中医杂志", "普刊", "一作", "2020"],
        ["《A novel method to determine the cause of left internal mammary artery instant non-patency based on transit time flow measurement》", "Frontiers in physiology", "SCI IF=4.755 二区", "三作", "2022"],
        ["《Is there a relationship between psoriasis and hepatitis C? A meta-analysis and bioinformatics investigation》", "Virology Journal", "SCI IF=5.913 三区", "三作", "2021"],
        ["《The hemodynamic mechanism of FFR-guided coronary artery bypass grafting》", "Frontiers in physiology", "SCI IF=4.755 二区", "六作", "2021"],
        ["《Effectiveness and safety of moxibustion for vascular dementia: A systematic review and meta-analysis》", "Medicine", "SCI IF=1.818 四区", "五作", "2022"],
        ["《原发性高血压阴虚阳亢证舌象客观化研究》", "中华中医药杂志", "CSCD", "五作", "2022"],
        ["《慢性心力衰竭不同病理因素中西医结合诊断量表研制》", "湖南中医药大学学报", "中文核心", "三作", "2021"],
    ],

    // 投稿中文章
    submission_article: [
        ["《Machine learning aided non-invasive diagnosis of coronary heart disease based on tongue features fusion》", "Frontiers in Cardiovascular Medicine", "SCI IF=5.861 二区", "一作", "2022"],
        ["《The association with Acne Vulgaris Presentation, Severity and Risk Factors in China: A Cross-Sectional Study》", "Indian Journal of Dermatology", "SCI IF=1.757 四区", "一作", "2022"],
        ["《A New Method for Identification of Traditional Chinese Medicine Constitutions Based on image of Tongue with Machine Learning》", "Frontiers in Public Health", "SCI IF=6.461 三区", "共同一作", "2022"],
        ["《Coronary artery bypass grafting planning based on hemodynamic simulation》", "The International Journal of Cardiovascular Imaging", "SCI IF=2.316 三区", "共同一作", "2022"],
        ["《在校大学生中医体质分布及兼夹规律研究》", "北京中医药大学学报", "北大核心", "一作", "2022"],
        ["《A new method for non-invasive diagnosis of coronary heart disease assisted by deep learning based on tongue images Study》（收尾中，11 月份投出）", "《Computers in biology and medicine》", "SCI IF=6.698 二区", "一作", "2022"],
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    project: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["国家重点研发计划", "",
            "<p><strong>2017FYC1703300-中医智能舌诊系统研发2017FYC1703300-中医智能舌诊系统研发</strong></p>" +
            "<p>子课题二 学生主要参与人，带领学生团队采集数据 1800 例，共计舌面图像 3600 张</p>"
        ],

        ["国家重点研发计划", "",
        "<p><strong>2019YFC1710100-基于中医体质学和主被动相结合的健康状态干预及管理技术研究</strong></p>" + 
        "<p>子课题五 学生负责人，设计、搭建、维护了医生端、患者端双端口的慢病管理平台。</p>"
        ],

        ["国家重点研发计划", "",
        "<p><strong>2019YFC1710100-基于中医体质学和主被动相结合的健康状态干预及管理技术研究</strong></p>" + 
        "<p>子课题一 标书撰写主笔人，已中标（2022 年）。</p>"
        ],

        ["", "",
        "<p>参加申报并中标湖南省级研究生创新课题 2 项，大学生创新课题 1 项，北中医专创融合项目 1 项。</p>"
        ],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2021-04-28", "第十二届蓝桥杯大学生A组省三等奖", "大一下学期，我参与第十二届蓝桥杯大学生A组，然比赛一改以往暴力题，半数以上DP，仅取得省级三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛个人国家三等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，在个人赛中获得全国三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛团体国家二等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，跟随团队取得团体国家二等奖的成绩。"],
        ["2020-11-14", "2020级南昌大学程序设计正式赛三等奖", "大一上学期，我参与校举办的面向全校程序设计大赛并获得三等奖，"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/happysnaker", "我的GitHub主页"],
        ["./svg/博客.svg", "http://1.15.234.109:8000", "我的个人博客"],
        ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/person.png",
        "./images/experiment_1.jpg",
        "./images/experiment_2.jpg",
        "./images/experiment_3.jpg",
        "./images/experiment_4.png",
        "./images/experiment_5.jpg",
        "./images/experiment_6.png",
        "./images/experiment_7.png",
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/3.jpg",
        "./images/work-bk.png",
        "./images/4.jpg",
        "./images/background_1.png",
    ]

}