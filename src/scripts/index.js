(function() {
  const GALLERY_ITEMS = [{
      url: 'http://healthygen.org/wp-content/uploads/2018/02/paul-300px.jpg',
      title: 'Paul Getzel',
      subtitle: 'Executive Director',
      text: 'Paul is the executive director of Healthy Gen. He holds a degree in psychology from Willamette University. Prior to joining the team, Paul served as deputy executive director at Lifelong and also worked as the department director at their Chicken Soup Brigade, a program aimed at improving the nutritional health of individuals living with chronic conditions and hunger.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/julie-300px.jpg',
      title: 'Julie Peterson',
      subtitle: 'Senior Director of Policy',
      text: 'Julie\'s public policy advocacy and legislative work is recognized by Philanthropy Northwest, Washington State Department of Social and Health Services Division of Alcohol and Substance Abuse, Community Anti-Drug Coalitions of America (CADCA) and the National Network for Safe and Drug-Free Schools and Communities. Currently, Julie serves as the past president of the Washington Association for Substance Abuse and Violence Prevention. Prior to her arrival at Foundation for Healthy Generations, she was the deputy director of the Washington State Traffic Safety Commission. She served as the agency\'s legislative liaison and a member of the interagency work group on drugs.'
    }, {
      url: 'https://healthygen.org/wp-content/uploads/2018/12/rosa-peralta-landin-300px.jpg',
      title: 'ROSA PERALTA LANDIN',
      subtitle: 'Senior Director of Community Based Health',
      text: 'Rosa brings more than 15 years experience building community partnerships, developing programs, and advocating for equity and justice – most recently as executive director of the Latino Center for Health. As the Foundation’s senior director of community based health, Rosa looks forward to building authentic community engagement, influencing statewide health policy, and actively advocating for communities often not included in health policy and systems design. She holds sociology degrees from Whitman College (BA) and the University of Michigan (MS). As one of 10 children from a family of immigrant farmworkers, Rosa is delighted to be in the position to support a cause that is dear to her heart: the development of a well trained, paid community health worker workforce.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/kim-300px.jpg',
      title: 'KIMBERLY LATHAM',
      subtitle: 'Program Coordinator',
      text: 'Kimberly serves as program coordinator where she focuses on creating information channels to bridge knowledge across teams and strengthen collaboration with partners and community members. She brings experience in supporting the strategic alignment and growth of local and national initiatives through contract management, data analysis, and project coordination.  Prior to joining Foundation for Healthy Generations, she provided support for an executive office at a large operating foundation.'
    }, {
      url: 'http://healthygen.org/wp-content/uploads/2018/03/edgar-lopez-baez-300px.jpg',
      title: 'Edgar Lopez-Baez',
      subtitle: 'CHW Specialist',
      text: 'Edgar supports the development of the Pathways Community Care Coordination model and other opportunities for community health workers. Prior to Healthy Gen, Edgar served as a health educator and he designed a traumatic brain injury and stroke manual for Seattle Children’s Hospital. He also led train-the-trainer workshops around diabetes at Fred Hutchinson Cancer and Research Center.'
    }, {
      url: 'http://healthygen.org/wp-content/uploads/2018/06/jessica_martinez_300px.jpg',
      title: 'Jessica Martinez',
      subtitle: 'CHW Coordinator - Pierce Co.',
      text: 'Jessica coordinates Healthy Gen\'s neighborhood based community health advocates and community health workers throughout Pierce County. She works to develop natural helpers into community leaders and advocates, on the pathway to gainful employment. She also serves as the grants evaluator for the Salishan Advocates Program. She credits her own experience as an immigrant, unfamiliar with the culture and language of her new home, with her passion for equity and working with and for communities that may be disconnected by language or life circumstances. Jessica holds bachelors and masters degrees in health science and public health from her native Puerto Rico, and has worked as a K-12 health and science teacher, a health educator in Tacoma and a community resource navigator in King County.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/sarah-300px.jpg',
      title: 'SARAH SALOMON',
      subtitle: 'Assistant Director of Applied Research',
      text: 'Sarah leads Learning Collaboratives to support agencies working collaboratively to implement new programs. She routinely facilitates program and quality improvement through data-driven discussions with diverse staff and stakeholders, and has developed tools and toolkits to support capacity building and sustainability.'
    }, {
      url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/10/brice-300px.jpg',
      title: 'Brice Reinhardt',
      subtitle: 'Human Resources and Executive Support',
      text: 'Brice manages human resources and provides project management support to the executive team at Health Gen.  Her superpowers include sorting out complex systems and tasks while maintaining and building strong relationship with internal and external stakeholders.'
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
