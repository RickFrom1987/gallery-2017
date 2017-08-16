class Modal {
  constructor(id, data) {
    this.data = data
    const modal = document.createElement('div')
    modal.id = 'gallery-modal'
    modal.style.display = 'none'
    document.body.appendChild(modal)
    modal.innerHTML = `
      ${this.renderCloseButton()}
      <div id="gallery-modal-content">
      </div>
    `
    this.modal = modal
    this.attachListeners()
  }

  attachListeners() {
    const close = document.getElementById('gallery-modal-close')
    close.onclick = () => {
      this.hide()
    }
  }

  renderCloseButton() {
    return `
      <div id="gallery-modal-close">x</div>
    `
  }

  renderImage(src) {
    return `
      <img src="${src}"/>
    `
  }

  renderTitle(title){
    return title
  }

  renderText(text){
    return text
  }

  show(html) {
    this.modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
  }

  hide() {
    this.modal.style.display = 'none'
    document.body.style.overflow = 'auto'
  }

  // main render loop
  render(data) {
    if (!data || !data.url) {
      throw new Error('No Modal Data')
    }
    const modalContent = document.getElementById('gallery-modal-content')
    modalContent.innerHTML = `
      ${this.renderImage(data.url)}
      <div id="gallery-modal-body">
        <h2>${this.renderTitle(data.title)}</h2>
        <p>${this.renderText(data.text)}</p>
      </div>
    `
    this.show()
  }
}
class Gallery {
  constructor(id, options) {
    this.container = (document.getElementById(id)) ? document.getElementById(id) : null
    this.items = options.items
    this.onClickFn = options.onClickFn
    this.ITEMS_PER_ROW = 4
    // Divides items into rows
    const rows = this.items.map((item, index) => {
      return index % this.ITEMS_PER_ROW === 0 ? this.items.slice(index, index + this.ITEMS_PER_ROW) : null
    }).filter((item) => { return item })

    const rowsHtml = this.renderRows(rows)
    this.container.innerHTML = `
      <div class="gallery-container">
        ${rowsHtml}
      </div>
    `
    this.attachHandlers()
  }

  attachHandlers() {
    Array.from(document.getElementsByClassName('gallery-item')).forEach((element) => {
      element.onclick = (e) => {
        const currTarget = e.currentTarget
        return this.onClickFn({
          url: currTarget.getAttribute('data-url'),
          text: currTarget.getAttribute('data-text'),
          title: currTarget.getAttribute('data-title')
        })
      }
    });
  }

  // render an individual item
  renderItem(item) {
    // 12 width grid system
    const num = Math.ceil(12 / this.ITEMS_PER_ROW)

    let text = (item.text) ? item.text : ''
    let title = (item.title) ? item.title : ''
    let subtitle = (item.subtitle) ? item.subtitle : ''
    return `
      <div
        class="col-${num} gallery-item"
        data-url="${item.url}"
        data-title="${title}"
        data-subtitle="${subtitle}"
        data-text="${text}">
        <img class="img" src="${item.url}"/>
        <div class="overlay">
          <div class="overlay-text">
            <h2>${title}</h2>
            <p>${subtitle}</p>
          </div>
        </div>
      </div>
    `
  }

  // render all rows
  renderRows(rows) {
    return rows.map((r) => {
      return this.renderRow(r)
    }).join('')
  }

  // render a single row
  renderRow(row) {
    const rowHtml = row.map((item) => {
      return this.renderItem(item)
    }).join('')

    return `
      <div class="row">
        ${rowHtml}
      </div>
    `
  }
}
(function() {
  const GALLERY_ITEMS = [{
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/kathy-300px.jpg',
    title: 'KATHY BURGOYNE, PHD',
    subtitle: 'Senior Director of Applied Research',
    text: 'Kathy has worked in the prevention field for over 30 years as both a practitioner and researcher. At the center of her career has been an abiding commitment to vulnerable children, youth, and their families. Having worked in multiple systems including education, juvenile corrections, mental health, housing, and health promotion, she understands that each system has a necessary but not sufficient part in addressing the problems vulnerable people face. As a result, she focuses on establishing and maintaining strategic partnerships with schools, housing, social services, parents, philanthropists, government, and researchers to promote the health, education, and self-sufficiency of families living in very low-income, multi-ethnic communities.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/julie-300px.jpg',
    title: 'Julie Peterson',
    subtitle: 'Senior Director of Policy',
    text: 'Julie’s public policy advocacy and legislative work is recognized by Philanthropy Northwest, Washington State Department of Social and Health Services’ Division of Alcohol and Substance Abuse, Community Anti-Drug Coalitions of America (CADCA) and the National Network for Safe and Drug-Free Schools and Communities. Currently, Julie serves as the past president of the Washington Association for Substance Abuse and Violence Prevention. Prior to her arrival at Foundation for Healthy Generations, she was the deputy director of the Washington State Traffic Safety Commission. She served as the agencys legislative liaison and a member of the interagency work group on drugs.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/bennie-300px.jpg',
    title: 'Bennie Soto',
    subtitle: 'Managing Director of Healthy Gen Media',
    text: 'Bennie is orchestrating the launch and establishment of Healthy Gen Media, a division of the foundation focused on content which informs, educates, inspires and unites people to take effective actions toward health equity. His background in both big brand and start-up product marketing has included more than 120 product launches leading and executing go-to-market strategy to deployment. The majority of Bennie’s projects over the last 10 years have been associated with content development, adult learning, and customer/constituent acquisition & engagement for such brands as Apple, Best Buy, Bose, Microsoft, Premera, Target, Welltok, and several smaller organizations.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/andrea-300px.jpg',
    title: 'Andrea Lopez-Diaz',
    subtitle: 'Community Connector',
    text: 'Andrea is the Community Connector at Healthy Gen and is active in mobilizing communities to create grassroots based operating systems with the goal of improved local health. Her focus is on creating cross sector alliances that support the development and implementation of programs for Community Health Workers and Peer Support.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/dustyn-300px.jpg',
    title: 'DUSTYN ADDINGTON',
    subtitle: 'Knowledge & Learning Specialist',
    text: 'Dustyn Addington is the Knowledge & Learning Specialist at Healthy Gen, and works to develop and support internal systems and processes that enable cross-programmatic learning, reflection & strategy development across Healthy Gen, as well as inform the product development of Healthy Gen Media.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/gretchen-300px.jpg',
    title: 'GRETCHEN HANSEN',
    subtitle: 'Health Advocate Coordinator',
    text: 'Gretchen has lived in Pierce County for over 20 years. Her passion is working with rich, diverse cultures and learning from each of them how to create more effective projects and community groups. She has experience in homelessness, domestic violence, student and employment services. Her focus has been on how to provide appropriate services to people facing extraordinary barriers including refugees, immigrants, chronically homeless and those in-out of incarceration. She uses this experience as a foundation for her work with neighborhood based community health workers. After working in non-profits for 18 years, she has a wide range of skills that include grant writing, contract management, project development, staff development and work with community coalitions. She is a graduate of University of Washington Tacoma.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/kim-300px.jpg',
    title: 'KIMBERLY LATHAM',
    subtitle: 'Community Based Health',
    text: 'Kimberly serves as Project Associate where she focuses on creating information channels to bridge knowledge across teams and strengthen collaboration with partners and community members. She brings experience in supporting the strategic alignment and growth of local and national initiatives through contract management, data analysis, and project coordination.  Prior to joining Foundation for Healthy Generations, she provided support for an Executive office at a large operating foundation.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/norma-300px.jpg',
    title: 'NORMA JEAN STRAW',
    subtitle: 'Communications Specialist',
    text: 'Norma enjoys the challenges of leading and co-creating large scale, complex projects that marry storytelling, learning and social innovation. Prior to joining Helthy Gen,  she held key roles in public relations, community engagement, communications strategy, program innovation, and as a producer, writer and director for television, film and digital productions.  She has produced over 100 episodes of educational television, receiving two Emmy nominations for Outstanding Childrens’ TV Series for Hip Hop Harry (Discovery Kids) and BizKids (PBS) and is an active voting member of the National Academy of Television Arts and Sciences and a trustee of Washington Film Works.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/sarah-300px.jpg',
    title: 'SARAH SALOMON',
    subtitle: 'Assistant Director of Applied Research',
    text: 'Sarah leads Learning Collaboratives to support agencies working collaboratively to implement new programs. She routinely facilitates program and quality improvement through data-driven discussions with diverse staff and stakeholders, and has developed tools and toolkits to support capacity building and sustainability.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/suzanne-300px.jpg',
    title: 'SUZANNE EICHENLAUB',
    subtitle: 'Senior Research and Development Data Analyst',
    text: 'Suzanne is the Senior Research and Development Data Analyst at the Adverse Childhood Experiences (ACEs) Learning Institute.  Suzanne has more than ten years of experience working on and managing research projects that examine the causes and consequences of economic, social and health inequalities in the United States.  She completed her Ph.D. at the University of Washington in 2015.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/sarah-300px.jpg',
    title: 'TANIA HEWETT',
    subtitle: 'Assistant Director of Operations',
    text: 'Tania splits her time among different roles at Foundation for Healthy Generations. She is responsible for grant and contract management, provides support to the Finance/Administration team, and works with the ED to support human resource systems for the agency. Prior to joining the Foundation for Healthy Generations, she worked with international exchange programs and cross-cultural learning in both the non-profit and private sectors.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/whitney-300px.jpg',
    title: 'WHITNEY JOHNSON',
    subtitle: 'Assistant Director of Operations',
    text: 'Tania splits her time among different roles at Foundation for Healthy Generations. She is responsible for grant and contract management, provides support to the Finance/Administration team, and works with the ED to support human resource systems for the agency. Prior to joining the Foundation for Healthy Generations, she worked with international exchange programs and cross-cultural learning in both the non-profit and private sectors.'
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/dom-300px.jpg',
    title: 'Dom',
    subtitle: 'Assistant Director of Operations',
    text: ''
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/libby-300px.jpg',
    title: 'Libby',
    subtitle: 'Assistant Director of Operations',
    text: ''
  }, {
    url: 'http://healthygen.wpengine.com/wp-content/uploads/2017/06/ryan-300px.jpg',
    title: 'Ryan',
    subtitle: 'Assistant Director of Operations',
    text: ''
  }]
  const modal = new Modal()
  const gallery = new Gallery('gallery-2017', {
    items: GALLERY_ITEMS,
    onClickFn: (item) => {
      modal.render(item)
    }
  })
})()