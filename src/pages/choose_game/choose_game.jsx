

export const ChooseGame =() => {
    return <div>
      
      
        {/* <div className="modal-game-help modal fade" id="modalGameHelp" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="d-flex justify-content-between align-items-center">
                <div className=""></div>
                <h1 className="my-modal-title title-white" id="exampleModalLabel"> Правила игры: <span className="text-color-blue">
                    500 злобных карт </span> </h1>
                <button type="button" className="my-btn-close" data-bs-dismiss="modal" aria-label="Закрыть">
                  <i className="fa-solid fa-xmark" style="color: #ffffff;"></i>
                </button>
              </div>
              <hr className="hr-line" size="5">
              <div className="modal-game-help__text mb-3">
                <p>За основу игры взяты Шляпа и Alias. Можно играть парами, можно командами. Объясняющий меняется каждый ход,
                  за минуту необходимо объяснить как можно больше слов, каждое отгаданное слово даёт одно очко команде. В
                  конце каждого раунда игроки вручную выставляют очки по каждому слову, так что правила засчитывания слов
                  могут быть произвольными.</p>
                <p className="fw-bold">Правила для загадывающего</p>
                <p>За основу игры взяты Шляпа и Alias. Можно играть парами, можно командами. Объясняющий меняется каждый ход,
                  за минуту необходимо объяснить </p>
                <p>Как можно больше слов, каждое отгаданное слово даёт одно очко команде. В конце каждого раунда игроки
                  вручную выставляют очки по каждому слову, так что правила зачитывания слов могут быть произвольными.</p>
                <p>За основу игры взяты Шляпа и Alias. Можно играть парами, можно командами. Объясняющий меняется каждый ход,
                  за минуту необходимо объяснить </p>
                <p>За основу игры взяты Шляпа и Alias. Можно играть парами, можно командами. Объясняющий меняется каждый ход,
                  за минуту необходимо объяснить </p>
                <p className="fw-bold">Правила для загадывающего</p>
                <p>За основу игры взяты Шляпа и Alias. Можно играть парами, можно командами. Объясняющий меняется каждый ход,
                  за минуту необходимо объяснить как можно больше слов, каждое отгаданное слово даёт одно очко команде. В
                  конце каждого раунда игроки вручную выставляют очки по каждому слову, так что правила засчитывания слов
                  могут быть произвольными.</p>
                <p className="fw-bold">Правила для загадывающего</p>
                <p>За основу игры взяты Шляпа и Alias. Можно играть парами, можно командами. Объясняющий меняется каждый ход,
                  за минуту необходимо объяснить как можно больше слов, каждое отгаданное слово даёт одно очко команде. В
                  конце каждого раунда игроки вручную выставляют очки по каждому слову, так что правила засчитывания слов
                  могут быть произвольными.</p>
              </div>
            </div>
          </div>
        </div> */}
      
        <main>
          <div className="wrapper">
          {/* //   <!-- Рисунки драконов по бокам --> */}
            <div className="dragon-left"></div>
            <div className="dragon-right"></div>
      
          {/* //   <!-- Основной контент --> */}
            <div className="container">
              <div className="row mb-3">
                <button className="btn-outline btn-back" type="button">
                  <i className="fa-solid fa-angle-left"></i>
                  <p className="d-inline"> Назад </p>
                </button>
                <h3 className="title-blue mb-3"> Выбор игры </h3>
                <h4 className="room-name"> Комната 3: <span className="text-color-blue"> Зеленые единоржки </span> </h4>
              </div>
      
              <div className="row g-3 justify-content-between">
      
              {/* //   <!-- Блок игроков --> */}
                <div className="col-xxl-auto col-sm-12 players">
                  <div className="d-flex flex-column align-items-center">
                    <p className="title-white">Игроки: <span> 1/12 </span> </p>
      
                  {/* //   <!-- Выбор максимума игроков --> */}
                    <select className="form-select" aria-label="Default select example">
                      <option value="1" selected> Максимум игроков: 1 </option>
                      <option value="2"> Максимум игроков: 2 </option>
                      <option value="3"> Максимум игроков: 3 </option>
                      <option value="4"> Максимум игроков: 4 </option>
                      <option value="5"> Максимум игроков: 5 </option>
                      <option value="6"> Максимум игроков: 6 </option>
                      <option value="7"> Максимум игроков: 7 </option>
                      <option value="8"> Максимум игроков: 8 </option>
                      <option value="9"> Максимум игроков: 9 </option>
                      <option value="10"> Максимум игроков: 10 </option>
                      <option value="11"> Максимум игроков: 11 </option>
                      <option value="12"> Максимум игроков: 12 </option>
                    </select>
      
                    <hr className="hr-line" size="5"/>
      
                  {/* //   <!-- Список игроков --> */}
                    <div className="d-flex flex-column players__list">
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> T </div>
                          <p className="card-player__nick"> Three Dog Night </p>
                        </div>
      
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 15 13">
                          <path fill="#FFF171"
                            d="m1.679 11.082 9.236-.004c.73.018 1.774-.11 2.442.105.42.136.484.408.675.776-.099.46-.15.594-.457.948-.75.133-1.588.066-2.35.07l-4.195.01H3.38c-.662 0-1.405.075-2.039-.131-.3-.398-.35-.52-.412-1.017.248-.426.32-.526.75-.758ZM15 3.006v1.622c-.31.425-.405 1.119-.526 1.626-.346 1.457-.511 3.039-1.26 4.349-.723-.009-1.422-.165-2.143-.184l-6.262-.008c-1.014-.006-2.088.236-3.084.113-.525-.555-.542-1.129-.693-1.851C.752 7.33.614 5.693 0 4.48V2.979c1.06.403 2.025.848 3.003 1.43.334.862.453 1.4 1.318 1.82.491-.062 1.011-.21 1.33-.627.096-.126.162-.28.21-.43-.187-.79-.523-1.331-.85-2.055C5.753 2.077 6.586.891 7.496 0c.69.821 2.133 2.188 2.39 3.202-.254 1.109-.962 1.314-.496 2.576.36.348.704.405 1.184.479.533-.162.839-.435 1.103-.934.672-1.27 1.428-1.75 2.783-2.178l.539-.14Z" />
                        </svg>
      
                      {/* //   <!-- Если "корона" будет передана, то свойство  d-none пропадет, а у верхней svg d-none должно появиться--> */}
                        <div className="card-player__btns d-none">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> W </div>
                          <p className="card-player__nick"> Wendia </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                      <div className="card-player mb-0 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="card-player__avatar"> M </div>
                          <p className="card-player__nick"> Maryin </p>
                        </div>
                        <div className="card-player__btns">
                          <button className="card-player__btn-crown"> <img src="./img/crown.svg" alt="give-rights"/> </button>
                          <button className="card-player__btn-close"> <img src="./img/close.svg" alt="kick-player"/> </button>
                        </div>
                      </div>
      
                    </div>
      
                  </div>
                </div>
      
              {/* //   <!-- Блок с играми --> */}
                <div className="col-xxl-5 col-sm-12 block-game d-flex flex-column justify-content-between ">
                  {/* // <!-- Список с карточками игр --> */}
                  <div className="games d-flex flex-column r">
      
                    <p className="title-white games__title mb-3"> Игры </p>
      
                  {/* //   <!-- Карточка игры --> */}
                    <label>
                      <input type="radio" name="game" value="evil-cards" className="game__input d-none" />
                      <div className="game d-flex justify-content-between">
      
                      {/* //   <!-- Контент карточки игры --> */}
                        <div className="game__card align-items-center">
                          <img className="me-3" src="./img/evil-card-photo.png" alt=""/>
                          <div className="">
                            <h6 className="subtitle mb-1">500 злобных карт</h6>
                            <p>Смешная карточная игра</p>
                          </div>
                        </div>
      
                      {/* //   <!-- Настройки игры --> */}
                        <div className="settings">
      
                          <p className="settings__title"> Настройки </p>
      
                          <hr className="hr-line mx-0 mt-2 w-100" size="4"/>
      
                          <div className="form-switch">
                            <label htmlFor="flexSwitchCheckDefault">Комната публичная: </label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          </div>
      
                          <div className="form-switch">
                            <label htmlFor="flexSwitchCheckDefault">Twitch версия: </label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          </div>
      
                          <div className="d-flex">
                            <label className="" htmlFor="round-time"> Время раунда: </label>
                            <input type="number" id="round-time" name="round-time" min="15" max="60" value="15" />
                          </div>
      
                          <div className="d-flex ">
                            <label className="" htmlFor="points-win"> Баллы для победы: </label>
                            <input type="number" id="points-win" name="points-win" min="3" max="99" value="3" />
                          </div>
      
                          <button className="btn-outline"> Сохранить </button>
                        </div>
      
                        <div className="game__btns">
                          <button className="btn-svg me-3 game__btn-back" id="btnSettingsBack"> <img
                              src="./img/angle-left-solid.svg" width="20" alt="settings"/> </button>
                          <button className="btn-svg me-3 game__btn-settings" id="btnSettings"> <img src="./img/settings.svg"
                              alt="settings"/> </button>
                          <button className="btn-svg" type="button" data-bs-toggle="modal" data-bs-target="#modalGameHelp">
                            <img src="./img/question.svg" alt="help"/>
                          </button>
                        </div>
                      </div>
                    </label>
      
                    {/* <!-- Карточка игры --> */}
                    <label>
                      <input type="radio" name="game" value="evil-cards" className="game__input d-none" />
                      <div className="game d-flex justify-content-between">
      {/*
                        <!-- Контент карточки игры --> */}
                        <div className="game__card align-items-center">
                          <img className="me-3" src="./img/evil-card-photo.png" alt=""/>
                          <div className="">
                            <h6 className="subtitle mb-1">500 злобных карт</h6>
                            <p>Смешная карточная игра</p>
                          </div>
                        </div>
      
                        {/* <!-- Настройки игры --> */}
                        <div className="settings">
      
                          <p className="settings__title"> Настройки </p>
      
                          <hr className="hr-line mx-0 mt-2 w-100" size="4"/>
      
                          <div className="form-switch">
                            <label htmlFor="flexSwitchCheckDefault">Комната публичная: </label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          </div>
      
                          <div className="form-switch">
                            <label htmlFor="flexSwitchCheckDefault">Twitch версия: </label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          </div>
      
                          <div className="d-flex">
                            <label className="" htmlFor="round-time"> Время раунда: </label>
                            <input type="number" id="round-time" name="round-time" min="15" max="60" value="15" />
                          </div>
      
                          <div className="d-flex ">
                            <label className="" htmlFor="points-win"> Баллы для победы: </label>
                            <input type="number" id="points-win" name="points-win" min="3" max="99" value="3" />
                          </div>
      
                          <button className="btn-outline"> Сохранить </button>
                        </div>
      
                        <div className="game__btns">
                          <button className="btn-svg me-3 game__btn-back" id="btnSettingsBack"> <img
                              src="./img/angle-left-solid.svg" width="20" alt="settings"/> </button>
                          <button className="btn-svg me-3 game__btn-settings" id="btnSettings"> <img src="./img/settings.svg"
                              alt="settings"/> </button>
      
                          <button className="btn-svg" type="button" data-bs-toggle="modal" data-bs-target="#modalGameHelp">
                            <img src="./img/question.svg" alt="help"/>
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
      
                  <div className="block-game__btns-manage d-flex px-5">
                    <button className="btn-outline w-100 me-4" type="button"> Пригласить </button>
                    <button className="w-100"> Играть </button>
                  </div>
      
                </div>
      {/*
                <!-- Блок с чатом --> */}
                <div className="col-xxl-4 col-sm-12">
                  <div className="chat">
                    <div className="">
                      <p className="title-white"> Чат </p>
                      <hr className="hr-line mb-1" size="5"/>
                    </div>
      
                    <div className="chat__content">
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                      <p className="mb-2"><span className="text-color-blue">Wendia:</span> Как меня достала версткааа! Убейте меня пожалуйста....</p>
                    </div>
      
                    <div className="chat__input">
                      <img src="./img/angle-left-solid.svg" alt=""/>
                      <input type="text" maxLength="15" className="form-control" id="inputNickname"
                        aria-describedby="emailHelp" placeholder="Напиши что-нибудь..."/>
                    </div>
      
                  </div>
                </div>
      
              </div>
      
            </div>
          </div>
        </main>
    </div>
    
}