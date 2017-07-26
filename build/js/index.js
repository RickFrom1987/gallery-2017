(function() {
  console.log("index.js")
  const ITEMS_PER_ROW = 4
  const GALLERY_ITEM = {
    url: 'http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }
  const GALLERY_DATA = Array(10).fill(GALLERY_ITEM)
  class Gallery {
    constructor(id, data) {
      this.container = (document.getElementById(id)) ? document.getElementById(id) : null
      this.data = data
    }

    // render an individual item
    renderItem(item) {
      // 12 width grid system
      const num = 12 / ITEMS_PER_ROW
      return `
        <div class="col-${num}">
          ${item.text}
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

    // main render loop
    render() {
      const items = this.data

      // Divides items into rows
      const rows = items.map((item, index) => {
        return index % ITEMS_PER_ROW === 0 ? items.slice(index, index + ITEMS_PER_ROW) : null
      }).filter((item) => { return item })

      const rowsHtml = this.renderRows(rows)
      this.container.innerHTML = `
        <div class="gallery-container">
          ${rowsHtml}
        </div>
      `
    }
  }
  const gallery = new Gallery('gallery-2017', GALLERY_DATA)
  gallery.render()
})()