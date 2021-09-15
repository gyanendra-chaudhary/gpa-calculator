<tr>
            <td>English</td>
            <td>4 Hr</td>
            <td>A</td>
            <td>
              <input type="number" min={0} max={4} />
            </td>
          </tr>
          <tr>
            <td>Nepali</td>
            <td>4 Hr</td>
            <td>A</td>
            <td>
              <input type="number" min={0} max={0} />
            </td>
          </tr>
          <tr>
            <td>Mathematics</td>
            <td>4 Hr</td>
            <td>A</td>
            <td>
              <input type="number" min={0} max={0} />
            </td>
          </tr>




// jldkjgdlskjdkjfkdsf,sf
for (let i = 0; i < fGrade.length; i++) {
  if (fGrade[i].key === key) {
    fGrade[i].value = value;
  } else {
    obj.key = key;
    obj.value = value;
    fGrade.push(obj);
  }
}