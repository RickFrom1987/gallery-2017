(function() {
  const GALLERY_ITEMS = [{
      url: 'http://healthygen.org/wp-content/uploads/2018/02/paul-300px.jpg',
      title: 'Paul Getzel',
      subtitle: 'Executive Director',
      text: 'Paul is the executive director of Healthy Gen. He holds a degree in psychology from Willamette University. Prior to joining the team, Paul served as deputy executive director at Lifelong and also worked as the department director at their Chicken Soup Brigade, a program aimed at improving the nutritional health of individuals living with chronic conditions and hunger.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/ben-300px.jpg',
      title: 'Ben Robinson',
      subtitle: 'Director of Finance',
      text: 'Ben is the point person on all financial and administrative matters. He holds an MBA from Ross School of Business, University of Michigan. His prior positions include CFO at the University of Washington\'s School of Public Health and Finance Director of Fred Hutchinson Cancer Research Center.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/kathy-300px.jpg',
      title: 'KATHY BURGOYNE, PHD',
      subtitle: 'Senior Program Advisor',
      text: 'Kathy has worked in the prevention field for over 30 years as both a practitioner and researcher. At the center of her career has been an abiding commitment to vulnerable children, youth, and their families. Having worked in multiple systems including education, juvenile corrections, mental health, housing, and health promotion, she understands that each system has a necessary but not sufficient part in addressing the problems vulnerable people face. As a result, she focuses on establishing and maintaining strategic partnerships with schools, housing, social services, parents, philanthropists, government, and researchers to promote the health, education, and self-sufficiency of families living in very low-income, multi-ethnic communities.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/julie-300px.jpg',
      title: 'Julie Peterson',
      subtitle: 'Senior Director of Policy',
      text: 'Julie\'s public policy advocacy and legislative work is recognized by Philanthropy Northwest, Washington State Department of Social and Health Services Division of Alcohol and Substance Abuse, Community Anti-Drug Coalitions of America (CADCA) and the National Network for Safe and Drug-Free Schools and Communities. Currently, Julie serves as the past president of the Washington Association for Substance Abuse and Violence Prevention. Prior to her arrival at Foundation for Healthy Generations, she was the deputy director of the Washington State Traffic Safety Commission. She served as the agency\'s legislative liaison and a member of the interagency work group on drugs.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/10/brice-300px.jpg',
      title: 'Brice Reinhardt',
      subtitle: 'Human Resources and Executive Support',
      text: 'Brice manages human resources and provides project management support to the executive team at Health Gen.  Her superpowers include sorting out complex systems and tasks while maintaining and building strong relationship with internal and external stakeholders.'
    }, {
      url: 'http://healthygen.org/wp-content/uploads/2018/04/phoebe-olivera-300px.jpg',
      title: 'Phoebe M. Olivera, MA',
      subtitle: 'Director, Practice Transformation',
      text: 'Phoebe\’s superpowers include group facilitation, problem solving and organizational system design. She holds a master\'s degree in organizational psychology from Antioch University Seattle and graduate certificates in whole systems design and change management.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/gretchen-300px.jpg',
      title: 'GRETCHEN HANSEN',
      subtitle: 'Community Involvement Specialist',
      text: 'Gretchen helps communities develop support for people facing extraordinary barriers including refugees, immigrants, chronically homeless and those in and out of incarceration. She works directly with neighborhood based community health workers in the Salishan neighborhood and around Pierce County. Her skills include grant writing, contract management, project development, staff development and work with community coalitions. She is a graduate of University of Washington Tacoma.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/kim-300px.jpg',
      title: 'KIMBERLY LATHAM',
      subtitle: 'Program Coordinator',
      text: 'Kimberly serves as program coordinator where she focuses on creating information channels to bridge knowledge across teams and strengthen collaboration with partners and community members. She brings experience in supporting the strategic alignment and growth of local and national initiatives through contract management, data analysis, and project coordination.  Prior to joining Foundation for Healthy Generations, she provided support for an executive office at a large operating foundation.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/sarah-300px.jpg',
      title: 'SARAH SALOMON',
      subtitle: 'Assistant Director of Applied Research',
      text: 'Sarah leads Learning Collaboratives to support agencies working collaboratively to implement new programs. She routinely facilitates program and quality improvement through data-driven discussions with diverse staff and stakeholders, and has developed tools and toolkits to support capacity building and sustainability.'
    }, {
      url: 'http://healthygen.org/wp-content/uploads/2018/02/jun-300px.jpg',
      title: 'Jun Chung',
      subtitle: 'Staff Accountant',
      text: 'Jun joins Health Gen from Pacific Financial Group in Bellevue where he served as an operations analyst. He is a certified public accountant with seven years experience in Washington and California. He is also the father of two children.'
    }, {
      url: 'http://healthygen.org/wp-content/uploads/2018/03/edgar-lopez-baez-300px.jpg',
      title: 'Edgar Lopez-Baez',
      subtitle: 'CHW Specialist',
      text: 'Edgar supports the development of the Pathways Community Care Coordination model and other opportunities for community health workers. Prior to Healthy Gen, Edgar served as a health educator and he designed a traumatic brain injury and stroke manual for Seattle Children’s Hospital. He also led train-the-trainer workshops around diabetes at Fred Hutchinson Cancer and Research Center.'
    }, {
      url: 'http://healthygen.org/wp-content/uploads/2018/06/jessica_martinez_300px.jpg',
      title: 'Jessica Martinez',
      subtitle: 'CHW Coordinator - Pierce Co.',
      text: ''
    }
  ]
  const modal = new Modal()
  const gallery = new Gallery('gallery-2017', {
    items: GALLERY_ITEMS,
    onClickFn: (item) => {
      modal.render(item)
    }
  })
})()
