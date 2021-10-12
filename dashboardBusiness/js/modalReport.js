let modalReport = ''

modalReport += `
<div class="modal fade close_modal" id="modalReport" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modalDialog">
        <div class="modal-content modalContent">
            <div class="modal-header">
                <div class="flexHeadModal">
                    <h2 class="fontSubHead textWhite lineH">ร้องเรียน</h2>
                </div>
                <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
                </button>
            </div>

            <div class="modal-body">
                <h2 class="fontSubHead textRed mb-3">หัวข้อร้องเรียน</h2>
                <div class="list">
                    <label><input name="name" value="ประกันภัย" type="radio"/> ประกันภัย</label>
                    <label><input name="name" value="เข้าข่ายหลอกลวง" type="radio"/> เข้าข่ายหลอกลวง</label>
                    <label><input name="name" value="อื่นๆ" type="radio"/> อื่นๆ</label>
                </div>

                <div class="lineDash"></div>

                <div class="detail">
                    <section>
                        <h6>ชื่อ :</h6>
                        <p>Chatthong Hongwisuthikul</p>
                    </section>

                    <section>
                        <h6>รายละเอียด :</h6>
                        <textarea type="text" rows="6" placeholder="รายละเอียด" class="form-control borderRadiusStyle"></textarea>
                    </section>
                </div>
            </div>

            <div class="modal-footer modalFooter flexFooter">
                <button class="btn_red successReport" type="button">ส่ง</button>
                <button class="btn_white" type="button" data-dismiss="modal">ยกเลิก</button>
            </div>
        </div>
    </div>
</div>`

document.querySelector('.modalReport').innerHTML = modalReport

