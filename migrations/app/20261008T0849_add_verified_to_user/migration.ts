#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/03463ea57a9813fb8776a50a68cab7e6935e36ffe235271b91b62e53d34ea168/contract';
import endContract from '../../snapshots/03463ea57a9813fb8776a50a68cab7e6935e36ffe235271b91b62e53d34ea168/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/d0a516932f2b826e385c7332fc979d1b16be5cdea9aa4fb9c7b559f10d6552a2/contract';
import startContract from '../../snapshots/d0a516932f2b826e385c7332fc979d1b16be5cdea9aa4fb9c7b559f10d6552a2/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('verified', 'timestamptz', {
          codecRef: { codecId: 'pg/timestamptz-temporal@1' },
        }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
