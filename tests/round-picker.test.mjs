import assert from "node:assert/strict";
import test from "node:test";

import { pickUniqueItems } from "../src/round-picker.mjs";

test("deelt over meerdere rondes geen kaart dubbel uit", () => {
  const items = Array.from({ length: 20 }, (_, index) => ({ id: `kaart-${index}` }));
  const players = ["Glenn", "Annemiek"];
  const usedIds = new Set();

  for (let round = 0; round < 10; round += 1) {
    const pickedItems = pickUniqueItems({
      players,
      getPoolForPlayer: () => items,
      usedIds,
      random: () => 0.42
    });

    assert.ok(pickedItems);
    assert.equal(new Set(pickedItems.map((item) => item.id)).size, players.length);
    pickedItems.forEach((item) => {
      assert.equal(usedIds.has(item.id), false);
      usedIds.add(item.id);
    });
  }

  assert.equal(usedIds.size, items.length);
});

test("geeft spelers met een kleine moeilijkheidspool eerst een passende kaart", () => {
  const easyItem = { id: "makkelijk" };
  const normalItem = { id: "normaal" };
  const pools = {
    breed: [easyItem, normalItem],
    smal: [easyItem]
  };

  const pickedItems = pickUniqueItems({
    players: ["breed", "smal"],
    getPoolForPlayer: (player) => pools[player],
    usedIds: new Set(),
    random: () => 0
  });

  assert.deepEqual(pickedItems.map((item) => item.id), ["normaal", "makkelijk"]);
});

test("geeft null terug als er niet genoeg ongebruikte kaarten over zijn", () => {
  const items = [{ id: "al-gebruikt" }, { id: "nog-vrij" }];
  const usedIds = new Set(["al-gebruikt"]);

  const pickedItems = pickUniqueItems({
    players: ["Glenn", "Annemiek"],
    getPoolForPlayer: () => items,
    usedIds
  });

  assert.equal(pickedItems, null);
  assert.deepEqual([...usedIds], ["al-gebruikt"]);
});
