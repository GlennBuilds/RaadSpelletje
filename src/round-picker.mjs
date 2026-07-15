const shuffled = (items, random) => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
};

export const pickUniqueItems = ({ players, getPoolForPlayer, usedIds, random = Math.random }) => {
  const slots = players
    .map((player, playerIndex) => ({
      playerIndex,
      candidates: shuffled(
        getPoolForPlayer(player).filter((item) => !usedIds.has(item.id)),
        random
      )
    }))
    .sort((left, right) => left.candidates.length - right.candidates.length);

  const pickedItems = Array(players.length);
  const pickedIds = new Set();

  const fillSlot = (slotIndex) => {
    if (slotIndex === slots.length) return true;

    const slot = slots[slotIndex];
    for (const item of slot.candidates) {
      if (pickedIds.has(item.id)) continue;
      pickedIds.add(item.id);
      pickedItems[slot.playerIndex] = item;
      if (fillSlot(slotIndex + 1)) return true;
      pickedIds.delete(item.id);
      pickedItems[slot.playerIndex] = undefined;
    }
    return false;
  };

  return fillSlot(0) ? pickedItems : null;
};
