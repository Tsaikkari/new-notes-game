<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" role="navigation">
    <h2>NOTES GAME</h2>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link level" id="level1" href="#notes-route">Level 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link test" id="test1" href="#notes-route">Test 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link level" id="level2" href="#notes-route">Level 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link test" id="test2" href="#notes-route">Test 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link level" id="level3" href="#notes-route">Level 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link test" id="test3" href="#notes-route">Test 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link level" id="level4" href="#notes-route">Level 4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link test" id="test4" href="#notes-route">Test 4</a>
        </li>
        <li class="nav-item level">
          <a class="nav-link" id="menu" href="#intro">MENU</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .navbar-light .navbar-nav .nav-link {
  color: #d8412f;
  text-transform: uppercase;
  padding-right: 43px;
}
</style>