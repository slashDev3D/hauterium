const body = document.body
const s5pop = document.getElementById("s5pop")
const s5popSubmit = document.getElementById("s5popSubmit")
const s5popDetail = document.getElementById("s5popDetail")
const s5popDetailText = document.getElementById("s5popDetailText")
const s5popClose = document.getElementById("s5popClose")
const s5popBg = document.getElementById("s5popBg")
const s5popDone = document.getElementById("s5popDone")
const s5popCopyThis = document.getElementById("s5popCopyThis")
const s5popCopyText = document.getElementById("s5popCopyText")
const s5popCheck = document.getElementById("s5popCheck")

const s5popInputRowInput = document.querySelectorAll(".s5pop--form-row-input")
const s5openPopupBtn = document.querySelectorAll(".s5openPopupBtn")
const s5popBefore = document.querySelectorAll(".s5pop--body-before")
const s5popAfter = document.querySelectorAll(".s5pop--body-after")

const s5popOpenFn = () => {//팝업오픈 펑션
    s5pop.classList.add("show")
    body.classList.add("hidden")
}
const s5popCloseFn = () => {//팝업닫기 펑션
    s5pop.classList.remove("show")
    body.classList.remove("hidden")
}
const s5popSubmitFn = () => {//팬미팅 신청하기 버튼 펑션
    var s5popSubmitFnSwitch = false;
    var s5popSubmitFnSwitch2 = false;
    s5popInputRowInput.forEach( el => {
        s5popSubmitFnSwitch = el.value == '' ? false : true;
    })
    var s5popCheckVal = s5popCheck.checked;
    s5popSubmitFnSwitch2 = s5popCheckVal == true ? true : false;
    if(s5popSubmitFnSwitch && s5popSubmitFnSwitch2){
        s5popBefore.forEach( el => {
            el.classList.add("hide")
        })
        s5popAfter.forEach( el => {
            el.classList.add("show")
        })
    } else {
        if(s5popSubmitFnSwitch2 == false){
            alert("약관에 동의해주세요.")
        } else if (s5popSubmitFnSwitch == false){
            alert("이름과 연락처를 입력해주세요.")
        }
    }
}
s5openPopupBtn.forEach( el => {//STAND BY 버튼들에 펑션오픈 달기
    el.addEventListener("click", e => {
        s5popOpenFn()
    })
})
s5pop.addEventListener("click", e => {//인풋 활성화될 경우 placeholder 숨기기
    s5popInputRowInput.forEach( el => {
        el.classList.remove("focusing")
    })
    if(thisTarget.classList.contains("s5pop--form-row-input")){
        console.log("hi")
        thisTarget.classList.add("focusing")
    }
})
s5popClose.addEventListener("click", e => {//팝업닫기 버튼에 닫기이벤트 달기
    s5popCloseFn()
})
s5popBg.addEventListener("click", e => {//팝업 배경(검정필터)에 닫기이벤트 달기
    s5popCloseFn()
})
s5popSubmit.addEventListener("click", e => {//submit버튼에 펑션 연결
    //s5popSubmitFn()
})
s5popDone.addEventListener("click", e => {//신청완료 버튼에 닫기이벤트 달기
    s5popCloseFn()
})
s5popDetail.addEventListener("click", e => {//자세히 보기 버튼에 약관오픈 달기
    s5popDetailText.classList.add("show")
})
s5popCopyThis.addEventListener('click', e => {//코드 복사 기능 추가하기
    let text = s5popCopyText.innerHTML
    navigator.clipboard.writeText(text)
    alert("코드가 복사되었습니다. " + text)  
})
