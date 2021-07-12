<template>
    <div class="modal-mask">
        <div class="modal-wrapper" @click.self="$emit('close')">
            <div class="modal-container">

                <div class="modal-header">
                    <button class="modal-default-button" @click="$emit('close')">
                        X
                    </button>
                </div>

                <div class="modal-body">
                    <iframe width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/KvUgaHTNit4"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                    >
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
}

.modal-header{
  display: flex;
  justify-content: flex-end;
  border: 0;
  padding: 0;
}

.modal-container {
  max-width: 660px;
  margin: 0px auto;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: opacity 0.3s ease;
}

.modal-body {
  margin: 10px 0;
  padding: 0;
}

.modal-default-button {
  float: right;
  background: unset;
  border: 0;
  font-size: 20px;
  transition: $transition;

  &:hover {
    transform: rotateX(-180deg) rotateY(-180deg);
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (min-width: 960px) {
  .modal-container {
    padding: 20px 30px;
  }
  .modal-body {
    margin: 20px 0;
  }
}
</style>
