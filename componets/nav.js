function nav() {
  return `<nav class="navbar navbar-expand-lg navbar-light" id='black'>
    <div class="container-fluid">
    
      <a  class="navbar-brand" href="#" id='white'><i class="bi bi-list fs-2" id='icon' ></i></a>
      <button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
           <img class='ytlogo' src="https://fdn.gsmarena.com/imgroot/news/21/02/youtube-announces-planned-updates/-1220x526/gsmarena_000.jpg" />
          </li>
        </ul>
        <div class="d-flex">
          <input id='svalue' class="form-control " type="search" placeholder="Search" aria-label="Search">
          <button class="btn   ytsearch" type="submit" id="search_btn" ><i class="bi bi-search"></i></button>
          <i class="bi bi-mic-fill fs-5 ms-3 mt-1" id='mic'></i>
        </div>
        <div class="icons">
        <i class="bi bi-camera-reels camara fs-4" ></i>
        <i class="bi bi-grid-3x3-gap camara fs-4"></i>
        <i class="bi bi-bell camara fs-4"></i>
        <img class="profile camara mb-2"  src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" />
        </div>
        </div>
    </div>
  </nav>
  `;
}



export default nav;
