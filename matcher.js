
const RECIPES = [{"slug": "kimchi-fried-rice", "title": "김치볶음밥", "category": "밥", "time": 15, "difficulty": "쉬움", "core": ["김치", "밥", "대파", "계란", "식용유"], "optional": ["스팸", "참치캔", "치즈"]}, {"slug": "tofu-kimchi-jjigae", "title": "두부 김치찌개", "category": "국찌개", "time": 20, "difficulty": "쉬움", "core": ["김치", "두부", "대파", "고추장"], "optional": ["스팸", "돼지고기", "청양고추", "양파"]}, {"slug": "spam-mayo-rice", "title": "스팸마요덮밥", "category": "밥", "time": 10, "difficulty": "매우 쉬움", "core": ["스팸", "밥", "마요네즈", "간장"], "optional": ["계란", "대파", "김"]}, {"slug": "egg-ramen", "title": "계란 라면", "category": "면", "time": 10, "difficulty": "매우 쉬움", "core": ["라면", "계란", "대파"], "optional": ["김치", "치즈", "만두"]}, {"slug": "cheese-ramen", "title": "치즈라면", "category": "면", "time": 10, "difficulty": "매우 쉬움", "core": ["라면", "치즈"], "optional": ["계란", "대파", "스팸"]}, {"slug": "tuna-mayo-rice", "title": "참치마요덮밥", "category": "밥", "time": 10, "difficulty": "매우 쉬움", "core": ["참치캔", "밥", "마요네즈", "간장"], "optional": ["양파", "김", "대파"]}, {"slug": "egg-tofu-jorim", "title": "계란두부조림", "category": "반찬", "time": 15, "difficulty": "쉬움", "core": ["두부", "계란", "간장", "대파"], "optional": ["마늘", "청양고추"]}, {"slug": "sausage-vegetable-stir-fry", "title": "소시지 야채볶음", "category": "반찬", "time": 15, "difficulty": "쉬움", "core": ["소시지", "양파", "당근", "식용유"], "optional": ["피망", "케찹", "대파"]}, {"slug": "eomuk-guk", "title": "어묵국", "category": "국찌개", "time": 15, "difficulty": "매우 쉬움", "core": ["어묵", "대파", "간장"], "optional": ["무", "청양고추", "다시마"]}, {"slug": "kimchi-mandu-soup", "title": "김치만두국", "category": "국찌개", "time": 15, "difficulty": "쉬움", "core": ["만두", "김치", "대파", "간장"], "optional": ["계란", "두부"]}, {"slug": "potato-curry", "title": "감자카레", "category": "밥", "time": 30, "difficulty": "보통", "core": ["감자", "양파", "당근", "카레가루", "밥"], "optional": ["소시지", "돼지고기", "우유"]}, {"slug": "bean-sprout-namul", "title": "콩나물무침", "category": "반찬", "time": 10, "difficulty": "매우 쉬움", "core": ["콩나물", "대파", "간장"], "optional": ["마늘", "참기름", "청양고추"]}, {"slug": "cheese-egg-toast", "title": "치즈계란토스트", "category": "간식", "time": 10, "difficulty": "매우 쉬움", "core": ["식빵", "계란", "치즈"], "optional": ["햄", "케찹", "설탕"]}, {"slug": "kimchi-cheese-toast", "title": "김치치즈토스트", "category": "간식", "time": 10, "difficulty": "쉬움", "core": ["식빵", "김치", "치즈"], "optional": ["계란", "설탕"]}, {"slug": "gochujang-pork-bulgogi", "title": "고추장제육볶음", "category": "반찬", "time": 20, "difficulty": "보통", "core": ["돼지고기", "고추장", "양파", "대파"], "optional": ["마늘", "청양고추", "당근"]}, {"slug": "soybean-paste-stew", "title": "된장찌개", "category": "국찌개", "time": 20, "difficulty": "쉬움", "core": ["된장", "두부", "애호박", "대파"], "optional": ["감자", "양파", "청양고추"]}, {"slug": "spam-kimchi-bokkeum", "title": "스팸김치볶음", "category": "반찬", "time": 15, "difficulty": "쉬움", "core": ["스팸", "김치", "대파"], "optional": ["설탕", "참기름", "청양고추"]}, {"slug": "carrot-egg-fried-rice", "title": "당근계란볶음밥", "category": "밥", "time": 10, "difficulty": "쉬움", "core": ["당근", "계란", "밥", "간장"], "optional": ["대파", "식용유"]}, {"slug": "mushroom-butter-rice", "title": "버섯버터라이스", "category": "밥", "time": 15, "difficulty": "쉬움", "core": ["버섯", "밥", "간장"], "optional": ["대파", "치즈", "계란"]}, {"slug": "soy-sauce-egg-rice", "title": "간장계란밥", "category": "밥", "time": 5, "difficulty": "매우 쉬움", "core": ["계란", "밥", "간장"], "optional": ["참기름", "김", "대파"]}, {"slug": "canned-tuna-kimchi-jjigae", "title": "참치김치찌개", "category": "국찌개", "time": 20, "difficulty": "쉬움", "core": ["참치캔", "김치", "대파", "고추장"], "optional": ["두부", "청양고추", "양파"]}, {"slug": "onion-egg-soup", "title": "양파계란국", "category": "국찌개", "time": 10, "difficulty": "매우 쉬움", "core": ["양파", "계란", "간장"], "optional": ["대파", "참기름"]}, {"slug": "zucchini-egg-stir-fry", "title": "애호박계란볶음", "category": "반찬", "time": 10, "difficulty": "쉬움", "core": ["애호박", "계란", "식용유"], "optional": ["대파", "당근", "새우젓"]}, {"slug": "potato-jorim", "title": "감자조림", "category": "반찬", "time": 20, "difficulty": "쉬움", "core": ["감자", "간장", "대파"], "optional": ["당근", "청양고추", "식용유"]}, {"slug": "bacon-mushroom-pasta", "title": "베이컨버섯파스타", "category": "면", "time": 20, "difficulty": "보통", "core": ["베이컨", "버섯", "우유", "간장"], "optional": ["치즈", "마늘", "대파"]}, {"slug": "gyeranjjim", "title": "계란찜", "category": "반찬", "time": 15, "difficulty": "쉬움", "core": ["계란", "대파"], "optional": ["새우젓", "당근", "치즈"]}, {"slug": "sausage-fried-rice", "title": "소시지볶음밥", "category": "밥", "time": 15, "difficulty": "쉬움", "core": ["소시지", "밥", "양파", "간장"], "optional": ["계란", "케찹", "대파"]}, {"slug": "kimchi-tofu-bokkeum", "title": "두부김치", "category": "안주", "time": 15, "difficulty": "쉬움", "core": ["두부", "김치", "대파"], "optional": ["돼지고기", "참기름", "청양고추"]}, {"slug": "corn-cheese", "title": "콘치즈", "category": "안주", "time": 15, "difficulty": "매우 쉬움", "core": ["옥수수캔", "치즈", "마요네즈"], "optional": ["설탕", "대파", "버터"]}, {"slug": "milk-toast", "title": "우유식빵토스트", "category": "간식", "time": 5, "difficulty": "매우 쉬움", "core": ["식빵", "우유", "설탕"], "optional": ["계란", "버터"]}, {"slug": "kimchi-udon", "title": "김치우동", "category": "면", "time": 15, "difficulty": "쉬움", "core": ["우동면", "김치", "간장", "대파"], "optional": ["계란", "어묵", "참기름"]}, {"slug": "spam-bokkeumbap-doshirak", "title": "스팸야채볶음밥", "category": "밥", "time": 15, "difficulty": "쉬움", "core": ["스팸", "밥", "당근", "양파"], "optional": ["계란", "대파", "간장"]}, {"slug": "garlic-butter-mushroom", "title": "버섯마늘볶음", "category": "반찬", "time": 10, "difficulty": "매우 쉬움", "core": ["버섯", "마늘", "간장"], "optional": ["대파", "식용유", "청양고추"]}, {"slug": "cabbage-egg-rice", "title": "양배추계란덮밥", "category": "밥", "time": 15, "difficulty": "쉬움", "core": ["양배추", "계란", "밥", "간장"], "optional": ["대파", "마요네즈", "돈까스소스"]}, {"slug": "kimchi-bacon-fried-rice", "title": "베이컨김치볶음밥", "category": "밥", "time": 15, "difficulty": "쉬움", "core": ["베이컨", "김치", "밥"], "optional": ["계란", "치즈", "대파"]}, {"slug": "onion-tuna-jeon", "title": "참치양파전", "category": "반찬", "time": 15, "difficulty": "쉬움", "core": ["참치캔", "양파", "계란"], "optional": ["부침가루", "대파", "당근"]}, {"slug": "spicy-eomuk-bokkeum", "title": "매콤어묵볶음", "category": "반찬", "time": 15, "difficulty": "쉬움", "core": ["어묵", "고추장", "대파"], "optional": ["양파", "당근", "청양고추"]}, {"slug": "milk-curry-udon", "title": "우유카레우동", "category": "면", "time": 20, "difficulty": "보통", "core": ["우동면", "카레가루", "우유"], "optional": ["양파", "소시지", "치즈"]}, {"slug": "potato-egg-salad", "title": "감자계란샐러드", "category": "반찬", "time": 20, "difficulty": "쉬움", "core": ["감자", "계란", "마요네즈"], "optional": ["당근", "오이", "설탕"]}, {"slug": "kimchi-bibim-guksu", "title": "김치비빔국수", "category": "면", "time": 15, "difficulty": "쉬움", "core": ["소면", "김치", "고추장", "설탕"], "optional": ["참기름", "계란", "오이"]}];
const selected = new Set();
let activeCat = 'all';

const chipGrid = document.getElementById('chip-grid');
const matchCountEl = document.getElementById('match-count-num');
const resultsEl = document.getElementById('results');
const tabsEl = document.getElementById('tabs');

function score(recipe){
  const coreHit = recipe.core.filter(i => selected.has(i)).length;
  const optHit = recipe.optional.filter(i => selected.has(i)).length;
  const coreTotal = recipe.core.length;
  const missing = coreTotal - coreHit;
  return {coreHit, coreTotal, optHit, missing, ratio: coreTotal ? coreHit / coreTotal : 0};
}

function render(){
  matchCountEl.textContent = selected.size;

  let list = RECIPES.slice();
  if(activeCat !== 'all') list = list.filter(r => r.category === activeCat);

  list = list.map(r => ({...r, s: score(r)}));

  if(selected.size === 0){
    list.sort((a,b) => a.core.length - b.core.length);
  } else {
    list.sort((a,b) => (b.s.ratio - a.s.ratio) || (a.s.missing - b.s.missing) || (b.s.optHit - a.s.optHit));
    list = list.filter(r => r.s.coreHit > 0 || r.s.optHit > 0);
  }

  if(list.length === 0){
    resultsEl.innerHTML = '<div class="result-empty">일치하는 레시피가 없어요. 재료를 몇 개 더 선택해보세요.</div>';
    return;
  }

  resultsEl.innerHTML = '<div class="card-grid">' + list.slice(0, 24).map(r => {
    let badge = '';
    if(selected.size === 0){
      badge = '';
    } else if(r.s.missing === 0){
      badge = '<span class="badge full">지금 바로 완성 가능</span>';
    } else if(r.s.missing <= 2){
      badge = `<span class="badge near">재료 ${r.s.missing}개만 더 있으면 OK</span>`;
    } else {
      badge = '<span class="badge low">일부 재료 보유</span>';
    }
    const ingPreview = r.core.map(i => selected.has(i) ? `<b>${i}</b>` : i).join(', ');
    return `<a class="rcard" href="recipe/${r.slug}.html">
      <div class="top-row"><span class="cat">${r.category}</span></div>
      <h3>${r.title}</h3>
      <div class="meta"><span>${r.time}분</span><span>·</span><span>${r.difficulty}</span></div>
      ${badge}
      <div class="ing-preview">${ingPreview}</div>
      <span class="go">레시피 보기 →</span>
    </a>`;
  }).join('') + '</div>';
}

chipGrid.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if(!chip) return;
  const ing = chip.dataset.ing;
  if(selected.has(ing)){ selected.delete(ing); chip.classList.remove('active'); }
  else { selected.add(ing); chip.classList.add('active'); }
  render();
});

tabsEl.addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if(!tab) return;
  tabsEl.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  activeCat = tab.dataset.cat;
  render();
});

document.getElementById('clear-btn').addEventListener('click', () => {
  selected.clear();
  chipGrid.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  render();
});

render();
