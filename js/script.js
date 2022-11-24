const quizData = [
    {
        question: "Phó Thủ tướng Trần Hữu Dực sinh ngày, tháng, năm nào? Ở đâu?",
        a: "Sinh ngày 15/10/1910 tại làng Dương Lệ Đông",
        b: "Sinh ngày 15/01/1910 tại làng Dương Lệ Văn",
        c: "Sinh ngày 15/10/1910 tại làng Dương Lệ Văn",
        d: "Sinh ngày 15/01/1910 tại làng Dương Lệ Đông",
        correct: "d",
    },
    {
        question: "Quê quán của đồng chí Trần Hữu Dực?",
        a: "Xã Triệu Đại, huyện Triệu Phong, tỉnh Quảng Trị",
        b: "Xã Triệu Long, huyện Triệu Phong, tỉnh Quảng Trị",
        c: "Xã Triệu Thuận, huyện Triệu Phong, tỉnh Quảng Trị",
        d: "Xã Triệu Độ, huyện Triệu Phong, tỉnh Quảng Trị",
        correct: "c",
    },
    {
        question: "Phu nhân của đồng chí Trần Hữu Dực là?",
        a: "Nguyễn Thị Quy",
        b: "Đoàn Thị Điệp",
        c: "Hoàng Thị Ái",
        d: "Nguyễn Thị Lan",
        correct: "a",
    },
    {
        question: "Đồng chí Trần Hữu Dực tham gia cách mạng năm bao nhiêu tuổi?",
        a: "14 tuổi",
        b: "15 tuổi",
        c: "17 tuổii",
        d: "18 tuổi",
        correct: "b",
    },
    {
        question: "Đồng chí Trần Hữu Dực trở thành Bí thư Tỉnh ủy đầu tiên của Quảng Trị năm?",
        a: "Năm 1920",
        b: "Năm 1929",
        c: "Năm 1925",
        d: "Năm 1930",
        correct: "d",
    },
    {
        question: "'Của cải như không khí. Cảnh vật như thần tiên. Con người như thánh hiền. Mới xây dựng được lý tưởng cộng sản' được đồng chí Trần Hữu Dực viết trong hồi kí có tên là gì? ",
        a: "Đạp lên đầu thù.",
        b: "Vượt qua đầu thù",
        c: "Những năm tuổi trẻ.",
        d: "Bước qua đầu thù.",
        correct: "d",
    },
    {
        question: "Đồng chí Trần Hữu Dực mất vào thời gian  nào, hưởng thọ bao nhiêu tuổi?",
        a: "21/8/1993 thọ 73 tuổi",
        b: "21/8/1993 thọ 74 tuổi",
        c: "21/8/1994 thọ 73 tuổi",
        d: "21/8/1993 thọ 83 tuổi.",
        correct: "d",
    },
    {
        question: "Với những công lao và đóng góp to lớn, đồng chí được Đảng và Nhà nước truy tặng:",
        a: "Huân chương Chiến công, Huân chương Hồ Chí Minh.",
        b: "Huân chương Sao vàng, Huân chương Hồ Chí Minh.",
        c: "Huân chương Sao vàng, Huân chương kháng chiến.",
        d: "Huy chương Sao vàng, Huân chương Chiến công.",
        correct: "b",
    },
    {
        question: "Nhà lưu niệm Phó Thủ Tướng Trần Hữu Dực được khánh thành năm nào?",
        a: "Năm 2000",
        b: "Năm 2010",
        c: "Năm 2011",
        d: "Năm 2015",
        correct: "b",
    },
    {
        question: "Trong cuộc đời hoạt động cách mạng đồng chí Trần Hữu Dực  không  bị giam giữ tại nhà lao nào?",
        a: "Nhà lao Quảng Trị.",
        b: "Nhà lao Lao Bảo.",
        c: "Nhà lao Hỏa Lò.",
        d: "Nhà lao Buôn Mê Thuột.",
        correct: "c",
    },
    {
        question: "Là một trong những chiến sỹ cách mạng tiền bối, năm 1925, khi mới bước sang tuổi 16, đồng chí Trần Hữu Dực đã sáng lập ra một tổ chức yêu nước mang tên ",
        a: "Đông Dương Cộng sản Liên đoàn.",
        b: "Đông Dương Cộng sản Liên đoàn",
        c: "Ái hữu dân đoàn.",
        d: "Ái hữu Liên đoàn.",
        correct: "c",
    },
    {
        question: "Đồng chí Trần Hữu Dực đã được cử làm Bí thư Tỉnh ủy đầu tiên của tỉnh Quảng Trị khi vừa tròn:",
        a: "19 tuổi",
        b: "20 tuổi",
        c: "21 tuổi",
        d: "22 tuổi",
        correct: "b",
    },
    {
        question: "Đồng chí Trần Hữu Dực là ủy viên ban chấp hành Trung ương Đảng cộng sản Việt Nam",
        a: "Từ khóa I đến khóa IV.",
        b: "Từ khóa II đến khóa V.",
        c: "Từ khóa I đến khóa V.",
        d: "Từ khóa II đến khóa VI.",
        correct: "a",
    },
    {
        question: "Trong sự nghiệp cách mạng từ năm 1976-1981 đồng chí đã giữ chức vụ",
        a: "Bộ trưởng phủ Thủ tướng.",
        b: "Tổng Bí Thư.",
        c: "Viện trưởng Viện kiểm sát nhân dân tối cao.",
        d: "Phó Thủ tướng chính phủ.",
        correct: "c",
    },
    {
        question: "Đồng chí Trần Hữu Dực được phân công làm Trưởng Ban Công tác nông thôn của Trung ương Đảng, kiêm chức Trưởng Ban liên lạc nông dân toàn quốc và sau đó được giao nhiệm vụ là Giám đốc Học viện Nông Lâm (nay là Học viện Nông nghiệp Việt Nam) từ năm",
        a: "Năm 1959 đến 1961",
        b: "Năm 1957 đến 1963",
        c: "Năm 1960 đến 1962 ",
        d: "Năm 1950 đến 1960",
        correct: "a",
    },
    {
        question: "Cố Đại tướng Võ Nguyên Giáp từng viết về Phó thủ tướng Trần Hữu Dực",
        a: "“Kiên cường, bất khuất, cần kiệm liêm chính”",
        b: "“Kiên cường, bất khuất, chí công vô tư”.",
        c: "“Cần kiệm liêm chính, chí công vô tư”.",
        d: "“Cần kiệm liêm chính”",
        correct: "a",
    },
    {
        question: "Trong thời gian hoạt động cách mạng 1926-1945 đồng chí bị bắt mấy lần, bị chính quyền Nam triều kết án mấy năm tù giam, mấy năm quản thúc?",
        a: "Pháp bắt 3 lần, bị chính quyền Nam triều kết án 29 năm tù giam, 22 năm quản thúc.",
        b: "Pháp bắt 4 lần, bị chính quyền Nam triều kết án 30 năm tù giam, 22 năm quản thúc.",
        c: "Pháp bắt 5 lần, bị chính quyền Nam triều kết án 29 năm tù giam, 20 năm quản thúc.",
        d: "Pháp bắt 5 lần, bị chính quyền Nam triều kết án 28 năm tù giam, 22 năm quản thúc ",
        correct: "a",
    },
    {
        question: "Trong cuộc đời hoạt động cách mạng đồng chí Trần Hữu Dực  bị địch bắt ",
        a: "3 lần vào năm 1925; 1931; 1945.",
        b: "3 lần vào năm 1929; 1930; 1940.",
        c: "3 lần vào năm 1929; 1931; 1941.",
        d: "3 lần vào năm 1929; 1931; 1938.",
        correct: "c",
    },
    {
        question: "Từ ngày 28/3/1974 đến 2/7/1976 đồng chí Trần Hữu Dực giữ chức vụ",
        a: "Bộ trưởng Bộ Nông trường.",
        b: "Bộ trưởng Phủ thủ tướng.",
        c: "Phó Thủ tướng Việt Nam.",
        d: "Viện trưởng Viện Kiểm sát Nhân dân Tối cao",
        correct: "c",
    },
    {
        question: "Câu đối của Giáo sư Vũ Khiêu đề tặng Phó Thủ Tướng Trần Hữu Dực đặt tại nhà lưu niệm là?",
        a: "Kiên cường bất khuất trăm vòng lữa thép vững tâm can.",
        b: "Cần kiệm thanh liêm một tấm lòng son soi nhiệt nguyệt.",
        c: "Cần kiệm liêm chính một tấm lòng son soi nhiệt nguyệt.",
        d: "A và B",
        correct: "d",
    },
    {
        question: "Câu đối của Giáo sư Vũ Khiêu đề tặng Phó Thủ Tướng Trần Hữu Dực đặt tại nhà lưu niệm là?",
        a: "Mười lăm tuổi ra đi, sức trẻ tài cao, vào tử ra sinh cùng tổ quốc.",
        b: "Tám ba năm nhìn lại gan vàng da sắt đồng cam cộng khổ với nhân dân.",
        c: "Một trăm năm nhìn lại gan vàng da sắt đồng cam cộng khổ với nhân dân.",
        d: "A và C",
        correct: "d",
    },
    {
        question: "Tổ chức yêu nước mang tên “Ái hữu dân đoàn” do đồng chí Trần Hữu Dực sáng lập ra đời ở đâu? Năm nào?",
        a: "Tháng 11/ 1926, tại làng Dương Lệ Đông, xã Triệu Thuận, huyện Triệu Phong, tỉnh Quảng Trị.",
        b: "Tháng 11/ 1926, tại làng Dương Lệ Văn, xã Triệu Thuận, huyện Triệu Phong, tỉnh Quảng Trị.",
        c: "Tháng 11/ 1926, tại làng Đại Hào, xã Triệu Đại, huyện Triệu Phong, tỉnh Quảng Trị.",
        d: "Tháng 11/ 1926, tại làng Đại Hòa, xã Triệu Đại, huyện Triệu Phong, tỉnh Quảng Trị.",
        correct: "a",
    },
    {
        question: "Đồng chí Trần Hữu Dực là người có số năm làm đại biểu Quốc hội liên tục là",
        a: "30 năm",
        b: "35 năm",
        c: "37 năm",
        d: "25 năm",
        correct: "b",
    },
    {
        question: "Đồng chí Trần Hữu Dực giữ chức vụ Bộ trưởng phủ Thủ tướng từ",
        a: "năm 1976 - 1981",
        b: "năm 1965 - 1970",
        c: "năm 1965 - 1976.",
        d: "năm 1960 - 1965",
        correct: "c",
    },
    {
        question: "Đồng chí Trần Hữu Dực đã giữ chức vụ trong Đảng và Nhà nước cao nhất",
        a: "Bí thư tỉnh ủy Quảng Trị, Phó thủ tướng Chính phủ",
        b: "Ủy viên Ban chấp hành Trung ương Đảng, Viện trưởng Viện kiểm sát tối cao",
        c: "Viện trưởng Viện kiểm sát tối cao, Phó thủ tướng Chính phủ",
        d: "Ủy viên Ban chấp hành Trung ương Đảng, Phó thủ tướng Chính phủ",
        correct: "d",
    },
    {
        question: "Bài học lớn, được đồng chí Trần Hữu Dực rút ra trong quá trình  hoạt động là lòng kiên trì, rèn luyện nhận thức lý luận. Đồng chí cho rằng",
        a: "phẩm chất cao đẹp phải đi đôi với kiến thức rộng, bởi thiếu nó thì hoạt động vô nghĩa, không có phương hướng.",
        b: "phẩm chất cao đẹp phải đi đôi với tấm lòng trong sáng, bởi thiếu nó thì hoạt động vô nghĩa, không có phương hướng.",
        c: "phẩm chất cao đẹp phải đi đôi với kiến thức rộng, bởi thiếu nó thì hoạt động vô nghĩa.",
        d: "làm người cán bộ phải có tấm lòng trong sáng, bởi thiếu nó thì hoạt động  không có phương hướng.",
        correct: "a",
    },
    {
        question: "Trong tu dưỡng, rèn luyện bản thân, đồng chí Trần Hữu Dực lấy câu nói nổi tiếng của danh nhân Trần Quốc Tuấn để làm phương châm sống là:",
        a: "Tự tri giả anh. Tự hành giả hùng",
        b: "Tự ti giả anh. Tự thắng giả hùng",
        c: "Tự tri giả anh. Tự thắng giả hùng",
        d: "Tự ti giả anh. Tự hùng giả thắng",
        correct: "c",
    },
    {
        question: "Suốt cuộc đời hoạt cách mạng khi nào đồng chí cũng tự răn mình:",
        a: "“Phải sống sao cho xứng đáng là người cộng sản. Từ hai chữ cộng sản, đến Đảng Cộng sản, đảng viên Đảng Cộng sản, giai cấp vô sản, Chủ nghĩa Mác-Lê nin, chế độ xã hội chủ nnghĩa và rất nhiều vấn đề khác của Cách mạng, tất cả đều quy vào con người cộng sản”",
        b: "“Phải sống sao cho xứng đáng làm người. Từ hai chữ vô sản, đến Đảng Cộng sản, đảng viên Đảng Cộng sản, giai cấp vô sản, Chủ nghĩa Mác-Lê nin, chế độ xã hội chủ nnghĩa và rất nhiều vấn đề khác của Cách mạng, tất cả đều quy vào con người vô sản”",
        c: "Cả A và B đều đúng",
        d: "Cả A và B đều sai",
        correct: "a",
    },
    {
        question: "Từ năm 1977 đến đầu năm 1982, đồng chí Trần Hữu Dực được Đảng, Nhà nước cử giữ chức vụ Viện trưởng Viện kiểm sát nhân dân tối cao. Trong lãnh đạo, chỉ đạo công tác của ngành Kiểm  sát, đồng chí Trần Hữu Dực luôn cho rằng làm công tác kiểm sát không chỉ là làm tốt nghiệp vụ kiểm sát điều tra, kiểm sát xét xử, kiểm sát giam giữ và kiểm sát thi hành án mà",
        a: "cần phải chú ý làm tốt công tác phòng ngừa tội phạm.",
        b: "cần phải quét sạch tội phạm.",
        c: "cần phải chú ý làm tốt công tác giam giữ tội phạm.",
        d: "cần phải phòng chống tội phạm.",
        correct: "a",
    },
    {
        question: "Là người đứng đầu ngành kiểm sát đồng chí Trần Hữu Dực cho rằng phải bằng mọi cách nhanh chóng nâng cao được kiến thức, phẩm chất, năng lực của cán bộ lên kịp với yêu cầu của tình hình và nhiệm vụ cách mạng trong giai đoạn mới.",
        a: "Người cán bộ Kiểm sát phải là con người tự bảo vệ được mình, tự mình hiểu được việc mình làm.",
        b: "Người cán bộ Kiểm sát phải là con người làm được theo quy định của pháp luật.",
        c: "Người cán bộ Kiểm sát phải là con người tự quản được mình, tự mình hiểu được, làm được và làm cho mọi người khác hiểu được, làm được theo quy định của pháp luật.",
        d: "Người cán bộ Kiểm sát phải là con người tự bảo vệ được mình, tự mình hiểu được việc mình không làm.",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0


loadQuiz()


function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d


}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <div class = bleu>
            <h2 class = "title bleble"> Bạn làm đúng ${score}/${quizData.length} câu hỏi <\h2>
            <button class = "button2" onclick = "location.reload()">Làm lại</button>

            <\div>
            `
        }
    }
})



