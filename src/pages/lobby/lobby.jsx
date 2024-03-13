import './lobby.css'
// import '../../bootstrap.bundle.min.js'

export const Lobby = () => {
  return (
    <div>
      <div
        className="modal-lobby modal fade"
        id="lobbyModalCreate"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="d-flex justify-content-between align-items-center">
              <div className=""></div>
              <h1 className="my-modal-title title-white" id="exampleModalLabel">
                {' '}
                Выбор комнаты{' '}
              </h1>
              <button
                type="button"
                className="my-btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              >
                <i className="fa-solid fa-xmark" style={{ color: '#fff' }}></i>
              </button>
            </div>
            <hr className="hr-line" size="5" />
            <div className="mb-3">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="inputNameRoom"
                    className="form-label text-color-blue"
                  >
                    {' '}
                    Название комнаты:{' '}
                  </label>
                  <input
                    type="text"
                    className="form-control input-name-room"
                    id="inputNameRoom"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="inputNickname"
                    className="form-label text-color-blue"
                  >
                    {' '}
                    Никнейм:{' '}
                  </label>
                  <input
                    type="text"
                    maxLength="15"
                    className="form-control input-nickname"
                    id="inputNickname"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="">
                {' '}
                Подтвердить{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="wrapper">
          {/* <!-- Рисунки драконов по бокам --> */}
          <div className="dragon-left"></div>
          <div className="dragon-right"></div>
          {/* <!-- тест jquery --> */}
          {/* <!-- <button id="btnHide" type="button" value="Hide Column 2"> Скрыть 2 столбец</button>
            <button id="btnShow" type="button" value="Hide Column 2"> Показать 2 столбец</button> -->
            <!-- Основной контент --> */}
          <div className="container container_lobby container_lines">
            {/* <!-- Полосы по бокам контейнера --> */}
            <img
              src="./img/border-decor.svg"
              className="border-decor border-decor_left"
              alt="BorderDecor"
            />
            <img
              src="./img/border-decor.svg"
              className="border-decor border-decor_right"
              alt="BorderDecor"
            />
            <h3 className="title-blue"> Выбор комнаты </h3>
            <div className="row g-3 mb-3 justify-content-between ">
              <div className="col-auto">
                <button
                  className="btn-lobby"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#lobbyModalCreate"
                >
                  Создать лобби
                </button>
              </div>
              <div className="col-auto">
                <button className="btn-ashy me-2" type="button">
                  Все
                </button>
                <button className="btn-ashy" type="button">
                  500 злобных карт
                </button>
              </div>
            </div>
            <table className="table table-lobby">
              <thead className="">
                <tr>
                  <th scope="col" className="mobile-none">
                    Комната
                  </th>
                  <th scope="col" className="mobile-none">
                    Название
                  </th>
                  <th scope="col">Создатель</th>
                  <th scope="col" className="mobile-none">
                    Игроки
                  </th>
                  <th scope="col">Игра</th>
                  <th scope="col">Зайти</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="mobile-none">
                    {' '}
                    1
                  </th>
                  <td className="table-lobby__name mobile-none">
                    Эта комната с очень длинным названием{' '}
                  </td>
                  <td>Wendia</td>
                  <td className="mobile-none">1/7</td>
                  <td> Идет выбор... </td>
                  <td>
                    <button
                      className="py-1 px-4 lh-sm"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#lobbyModalCreate"
                    >
                      Играть
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="mobile-none">
                    {' '}
                    2
                  </th>
                  <td className="table-lobby__name mobile-none">
                    {' '}
                    Зеленые человечки{' '}
                  </td>
                  <td>Three Dog Night</td>
                  <td className="mobile-none">4/12</td>
                  <td>500 злобных карт</td>
                  <td>
                    <button
                      className="py-1 px-4 lh-sm"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#lobbyModalCreate"
                    >
                      Играть
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="mobile-none">
                    {' '}
                    3
                  </th>
                  <td className="table-lobby__name mobile-none">
                    {' '}
                    Кровожадные единороги{' '}
                  </td>
                  <td>Злобный_Моддер</td>
                  <td className="mobile-none">2/4</td>
                  <td>Алиас</td>
                  <td>
                    <button
                      className="py-1 px-4 lh-sm"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#lobbyModalCreate"
                    >
                      Играть
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
